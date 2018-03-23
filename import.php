<?php
class Import
{

	private $file;
	private $data = array();

	public function __construct($file = '')
	{
		$this->file = $file;
	}

	public function import()
	{
		if(!file_exists($this->file)) {
			return [
				'error'		=>	'File not exists!'
			];
		}

		try {
			include_once "../../inc/config1.php";
			require('../import_upload/PHPExcel/Classes/PHPExcel/IOFactory.php');

			$fileType = PHPExcel_IOFactory::identify($this->file);
			$fileReader = PHPExcel_IOFactory::createReader($fileType);
			$objPHPExcel = $fileReader->load($this->file);

			$sheet = $objPHPExcel->getSheet(0);
			$highestRow = $sheet->getHighestRow();
			$highestColumn = $sheet->getHighestColumn();

			$invalidEmails = array();
			$duplicateFoundEmails = array();
			$insertRows = array();
			$emails = array();
			$data = array();

			for($row = 1; $row <= $highestRow; $row++) {
				$name = $sheet->getCell('A'.$row)->getFormattedValue();
				$email = $sheet->getCell('B'.$row)->getFormattedValue();

				if($name && $email) {
					if(!filter_var($email, FILTER_VALIDATE_EMAIL)) {
						$invalidEmails[] = $email;
					} else {
						$emails[] = $email;
						$data[strtolower($email)] = $name;
					}
				}
			}

			if($emails) {
				$sql = "SELECT `email` FROM `tbl_newsletter_subscription` WHERE `email` IN ('" . implode("', '", $emails) . "')";
				$results = mysql_query($sql) or die("Error: " . mysql_error());
				if(mysql_num_rows($results) > 0) {
				    while($row = mysql_fetch_assoc($results)) {
				        $duplicateFoundEmails[] = $row['email'];
				        unset($data[strtolower($row['email'])]);
				    }
				}
			}

			if($data) {
				foreach($data as $email_id => $name) {
					$insertRows[] = "('" . mysql_real_escape_string($name) . "', '" . mysql_real_escape_string($email_id) . "', '1', '" . REALTIME . "')";
				}
				$sql = "INSERT INTO `tbl_newsletter_subscription` (`name`, `email`, `status`, `date_added`) VALUES ";
				$sql .= implode(", ", $insertRows);

				mysql_query($sql) or die("Error: " . mysql_error());
			}

			return array(
				'success'	=>	'Data uploaded successfully!',
				'invalid'	=>	$invalidEmails,
				'duplicate'	=>	$duplicateFoundEmails
			);

		} catch(Exception $e) {
			return [
				'error'		=>	$e->getMessage()
			];
		}
	}

}

if(isset($_POST['bulk_upload'])) {
	include "../../inc/config1.php";
	session_start();

	$allowedExts = array("xls", "xlsx");
	$temp = explode(".", $_FILES["file"]["name"]);
	$extension = end($temp);
	if(in_array($extension, $allowedExts)) {

		if ($_FILES["file"]["error"] > 0) {

			$response = array(
				'error'		=>	'Error: ' . $_FILES["file"]["error"]
			);

		} else {

			$temp = explode(".", $_FILES["file"]["name"]);
			$newfilename = round(microtime(true)) . '.' . end($temp);

			move_uploaded_file($_FILES["file"]["tmp_name"], "upload/" . $newfilename);

			include('import_emails.php');

			$import = new Import("upload/" . $newfilename);
			$response = $import->import();

			unlink("upload/" . $newfilename);
		}

	} else {

		$response = array(
			'error'		=>	'Invalid File!'
		);

	}

	if(isset($_SESSION['bulk_email_import'])) {
		unset($_SESSION['bulk_email_import']);
	}

	if($response) {
		$_SESSION['bulk_email_import'] = $response;
	}

	include "../../inc/desconfig.php";
	header('Location: index.php');
	die;
}

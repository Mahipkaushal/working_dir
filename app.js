!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof exports?module.exports=e(require("jquery")):e(jQuery)}(function(e){var n=/\+/g;function o(e){return r.raw?e:encodeURIComponent(e)}function i(o,i){var t=r.raw?o:function(e){0===e.indexOf('"')&&(e=e.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{return e=decodeURIComponent(e.replace(n," ")),r.json?JSON.parse(e):e}catch(e){}}(o);return e.isFunction(i)?i(t):t}var r=e.cookie=function(n,t,c){if(arguments.length>1&&!e.isFunction(t)){if("number"==typeof(c=e.extend({},r.defaults,c)).expires){var u=c.expires,s=c.expires=new Date;s.setMilliseconds(s.getMilliseconds()+864e5*u)}return document.cookie=[o(n),"=",(a=t,o(r.json?JSON.stringify(a):String(a))),c.expires?"; expires="+c.expires.toUTCString():"",c.path?"; path="+c.path:"",c.domain?"; domain="+c.domain:"",c.secure?"; secure":""].join("")}for(var a,d,p=n?void 0:{},f=document.cookie?document.cookie.split("; "):[],l=0,m=f.length;l<m;l++){var x=f[l].split("="),g=(d=x.shift(),r.raw?d:decodeURIComponent(d)),v=x.join("=");if(n===g){p=i(v,t);break}n||void 0===(v=i(v))||(p[g]=v)}return p};r.defaults={},e.removeCookie=function(n,o){return e.cookie(n,"",e.extend({},o,{expires:-1})),!e.cookie(n)}});
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.moment=t()}(this,function(){"use strict";var e,i;function c(){return e.apply(null,arguments)}function o(e){return e instanceof Array||"[object Array]"===Object.prototype.toString.call(e)}function u(e){return null!=e&&"[object Object]"===Object.prototype.toString.call(e)}function l(e){return void 0===e}function d(e){return"number"==typeof e||"[object Number]"===Object.prototype.toString.call(e)}function h(e){return e instanceof Date||"[object Date]"===Object.prototype.toString.call(e)}function f(e,t){var n,s=[];for(n=0;n<e.length;++n)s.push(t(e[n],n));return s}function m(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function _(e,t){for(var n in t)m(t,n)&&(e[n]=t[n]);return m(t,"toString")&&(e.toString=t.toString),m(t,"valueOf")&&(e.valueOf=t.valueOf),e}function y(e,t,n,s){return Ot(e,t,n,s,!0).utc()}function g(e){return null==e._pf&&(e._pf={empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],meridiem:null,rfc2822:!1,weekdayMismatch:!1}),e._pf}function p(e){if(null==e._isValid){var t=g(e),n=i.call(t.parsedDateParts,function(e){return null!=e}),s=!isNaN(e._d.getTime())&&t.overflow<0&&!t.empty&&!t.invalidMonth&&!t.invalidWeekday&&!t.weekdayMismatch&&!t.nullInput&&!t.invalidFormat&&!t.userInvalidated&&(!t.meridiem||t.meridiem&&n);if(e._strict&&(s=s&&0===t.charsLeftOver&&0===t.unusedTokens.length&&void 0===t.bigHour),null!=Object.isFrozen&&Object.isFrozen(e))return s;e._isValid=s}return e._isValid}function v(e){var t=y(NaN);return null!=e?_(g(t),e):g(t).userInvalidated=!0,t}i=Array.prototype.some?Array.prototype.some:function(e){for(var t=Object(this),n=t.length>>>0,s=0;s<n;s++)if(s in t&&e.call(this,t[s],s,t))return!0;return!1};var r=c.momentProperties=[];function w(e,t){var n,s,i;if(l(t._isAMomentObject)||(e._isAMomentObject=t._isAMomentObject),l(t._i)||(e._i=t._i),l(t._f)||(e._f=t._f),l(t._l)||(e._l=t._l),l(t._strict)||(e._strict=t._strict),l(t._tzm)||(e._tzm=t._tzm),l(t._isUTC)||(e._isUTC=t._isUTC),l(t._offset)||(e._offset=t._offset),l(t._pf)||(e._pf=g(t)),l(t._locale)||(e._locale=t._locale),0<r.length)for(n=0;n<r.length;n++)l(i=t[s=r[n]])||(e[s]=i);return e}var t=!1;function M(e){w(this,e),this._d=new Date(null!=e._d?e._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),!1===t&&(t=!0,c.updateOffset(this),t=!1)}function S(e){return e instanceof M||null!=e&&null!=e._isAMomentObject}function D(e){return e<0?Math.ceil(e)||0:Math.floor(e)}function k(e){var t=+e,n=0;return 0!==t&&isFinite(t)&&(n=D(t)),n}function a(e,t,n){var s,i=Math.min(e.length,t.length),r=Math.abs(e.length-t.length),a=0;for(s=0;s<i;s++)(n&&e[s]!==t[s]||!n&&k(e[s])!==k(t[s]))&&a++;return a+r}function Y(e){!1===c.suppressDeprecationWarnings&&"undefined"!=typeof console&&console.warn&&console.warn("Deprecation warning: "+e)}function n(i,r){var a=!0;return _(function(){if(null!=c.deprecationHandler&&c.deprecationHandler(null,i),a){for(var e,t=[],n=0;n<arguments.length;n++){if(e="","object"==typeof arguments[n]){for(var s in e+="\n["+n+"] ",arguments[0])e+=s+": "+arguments[0][s]+", ";e=e.slice(0,-2)}else e=arguments[n];t.push(e)}Y(i+"\nArguments: "+Array.prototype.slice.call(t).join("")+"\n"+(new Error).stack),a=!1}return r.apply(this,arguments)},r)}var s,O={};function T(e,t){null!=c.deprecationHandler&&c.deprecationHandler(e,t),O[e]||(Y(t),O[e]=!0)}function x(e){return e instanceof Function||"[object Function]"===Object.prototype.toString.call(e)}function b(e,t){var n,s=_({},e);for(n in t)m(t,n)&&(u(e[n])&&u(t[n])?(s[n]={},_(s[n],e[n]),_(s[n],t[n])):null!=t[n]?s[n]=t[n]:delete s[n]);for(n in e)m(e,n)&&!m(t,n)&&u(e[n])&&(s[n]=_({},s[n]));return s}function P(e){null!=e&&this.set(e)}c.suppressDeprecationWarnings=!1,c.deprecationHandler=null,s=Object.keys?Object.keys:function(e){var t,n=[];for(t in e)m(e,t)&&n.push(t);return n};var W={};function H(e,t){var n=e.toLowerCase();W[n]=W[n+"s"]=W[t]=e}function R(e){return"string"==typeof e?W[e]||W[e.toLowerCase()]:void 0}function C(e){var t,n,s={};for(n in e)m(e,n)&&(t=R(n))&&(s[t]=e[n]);return s}var F={};function L(e,t){F[e]=t}function U(e,t,n){var s=""+Math.abs(e),i=t-s.length;return(0<=e?n?"+":"":"-")+Math.pow(10,Math.max(0,i)).toString().substr(1)+s}var N=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,G=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,V={},E={};function I(e,t,n,s){var i=s;"string"==typeof s&&(i=function(){return this[s]()}),e&&(E[e]=i),t&&(E[t[0]]=function(){return U(i.apply(this,arguments),t[1],t[2])}),n&&(E[n]=function(){return this.localeData().ordinal(i.apply(this,arguments),e)})}function A(e,t){return e.isValid()?(t=j(t,e.localeData()),V[t]=V[t]||function(s){var e,i,t,r=s.match(N);for(e=0,i=r.length;e<i;e++)E[r[e]]?r[e]=E[r[e]]:r[e]=(t=r[e]).match(/\[[\s\S]/)?t.replace(/^\[|\]$/g,""):t.replace(/\\/g,"");return function(e){var t,n="";for(t=0;t<i;t++)n+=x(r[t])?r[t].call(e,s):r[t];return n}}(t),V[t](e)):e.localeData().invalidDate()}function j(e,t){var n=5;function s(e){return t.longDateFormat(e)||e}for(G.lastIndex=0;0<=n&&G.test(e);)e=e.replace(G,s),G.lastIndex=0,n-=1;return e}var Z=/\d/,z=/\d\d/,$=/\d{3}/,q=/\d{4}/,J=/[+-]?\d{6}/,B=/\d\d?/,Q=/\d\d\d\d?/,X=/\d\d\d\d\d\d?/,K=/\d{1,3}/,ee=/\d{1,4}/,te=/[+-]?\d{1,6}/,ne=/\d+/,se=/[+-]?\d+/,ie=/Z|[+-]\d\d:?\d\d/gi,re=/Z|[+-]\d\d(?::?\d\d)?/gi,ae=/[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,oe={};function ue(e,n,s){oe[e]=x(n)?n:function(e,t){return e&&s?s:n}}function le(e,t){return m(oe,e)?oe[e](t._strict,t._locale):new RegExp(de(e.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(e,t,n,s,i){return t||n||s||i})))}function de(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var he={};function ce(e,n){var t,s=n;for("string"==typeof e&&(e=[e]),d(n)&&(s=function(e,t){t[n]=k(e)}),t=0;t<e.length;t++)he[e[t]]=s}function fe(e,i){ce(e,function(e,t,n,s){n._w=n._w||{},i(e,n._w,n,s)})}var me=0,_e=1,ye=2,ge=3,pe=4,ve=5,we=6,Me=7,Se=8;function De(e){return ke(e)?366:365}function ke(e){return e%4==0&&e%100!=0||e%400==0}I("Y",0,0,function(){var e=this.year();return e<=9999?""+e:"+"+e}),I(0,["YY",2],0,function(){return this.year()%100}),I(0,["YYYY",4],0,"year"),I(0,["YYYYY",5],0,"year"),I(0,["YYYYYY",6,!0],0,"year"),H("year","y"),L("year",1),ue("Y",se),ue("YY",B,z),ue("YYYY",ee,q),ue("YYYYY",te,J),ue("YYYYYY",te,J),ce(["YYYYY","YYYYYY"],me),ce("YYYY",function(e,t){t[me]=2===e.length?c.parseTwoDigitYear(e):k(e)}),ce("YY",function(e,t){t[me]=c.parseTwoDigitYear(e)}),ce("Y",function(e,t){t[me]=parseInt(e,10)}),c.parseTwoDigitYear=function(e){return k(e)+(68<k(e)?1900:2e3)};var Ye,Oe=Te("FullYear",!0);function Te(t,n){return function(e){return null!=e?(be(this,t,e),c.updateOffset(this,n),this):xe(this,t)}}function xe(e,t){return e.isValid()?e._d["get"+(e._isUTC?"UTC":"")+t]():NaN}function be(e,t,n){e.isValid()&&!isNaN(n)&&("FullYear"===t&&ke(e.year())&&1===e.month()&&29===e.date()?e._d["set"+(e._isUTC?"UTC":"")+t](n,e.month(),Pe(n,e.month())):e._d["set"+(e._isUTC?"UTC":"")+t](n))}function Pe(e,t){if(isNaN(e)||isNaN(t))return NaN;var n,s=(t%(n=12)+n)%n;return e+=(t-s)/12,1===s?ke(e)?29:28:31-s%7%2}Ye=Array.prototype.indexOf?Array.prototype.indexOf:function(e){var t;for(t=0;t<this.length;++t)if(this[t]===e)return t;return-1},I("M",["MM",2],"Mo",function(){return this.month()+1}),I("MMM",0,0,function(e){return this.localeData().monthsShort(this,e)}),I("MMMM",0,0,function(e){return this.localeData().months(this,e)}),H("month","M"),L("month",8),ue("M",B),ue("MM",B,z),ue("MMM",function(e,t){return t.monthsShortRegex(e)}),ue("MMMM",function(e,t){return t.monthsRegex(e)}),ce(["M","MM"],function(e,t){t[_e]=k(e)-1}),ce(["MMM","MMMM"],function(e,t,n,s){var i=n._locale.monthsParse(e,s,n._strict);null!=i?t[_e]=i:g(n).invalidMonth=e});var We=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,He="January_February_March_April_May_June_July_August_September_October_November_December".split("_");var Re="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_");function Ce(e,t){var n;if(!e.isValid())return e;if("string"==typeof t)if(/^\d+$/.test(t))t=k(t);else if(!d(t=e.localeData().monthsParse(t)))return e;return n=Math.min(e.date(),Pe(e.year(),t)),e._d["set"+(e._isUTC?"UTC":"")+"Month"](t,n),e}function Fe(e){return null!=e?(Ce(this,e),c.updateOffset(this,!0),this):xe(this,"Month")}var Le=ae;var Ue=ae;function Ne(){function e(e,t){return t.length-e.length}var t,n,s=[],i=[],r=[];for(t=0;t<12;t++)n=y([2e3,t]),s.push(this.monthsShort(n,"")),i.push(this.months(n,"")),r.push(this.months(n,"")),r.push(this.monthsShort(n,""));for(s.sort(e),i.sort(e),r.sort(e),t=0;t<12;t++)s[t]=de(s[t]),i[t]=de(i[t]);for(t=0;t<24;t++)r[t]=de(r[t]);this._monthsRegex=new RegExp("^("+r.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+i.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+s.join("|")+")","i")}function Ge(e){var t=new Date(Date.UTC.apply(null,arguments));return e<100&&0<=e&&isFinite(t.getUTCFullYear())&&t.setUTCFullYear(e),t}function Ve(e,t,n){var s=7+t-n;return-((7+Ge(e,0,s).getUTCDay()-t)%7)+s-1}function Ee(e,t,n,s,i){var r,a,o=1+7*(t-1)+(7+n-s)%7+Ve(e,s,i);return o<=0?a=De(r=e-1)+o:o>De(e)?(r=e+1,a=o-De(e)):(r=e,a=o),{year:r,dayOfYear:a}}function Ie(e,t,n){var s,i,r=Ve(e.year(),t,n),a=Math.floor((e.dayOfYear()-r-1)/7)+1;return a<1?s=a+Ae(i=e.year()-1,t,n):a>Ae(e.year(),t,n)?(s=a-Ae(e.year(),t,n),i=e.year()+1):(i=e.year(),s=a),{week:s,year:i}}function Ae(e,t,n){var s=Ve(e,t,n),i=Ve(e+1,t,n);return(De(e)-s+i)/7}I("w",["ww",2],"wo","week"),I("W",["WW",2],"Wo","isoWeek"),H("week","w"),H("isoWeek","W"),L("week",5),L("isoWeek",5),ue("w",B),ue("ww",B,z),ue("W",B),ue("WW",B,z),fe(["w","ww","W","WW"],function(e,t,n,s){t[s.substr(0,1)]=k(e)});I("d",0,"do","day"),I("dd",0,0,function(e){return this.localeData().weekdaysMin(this,e)}),I("ddd",0,0,function(e){return this.localeData().weekdaysShort(this,e)}),I("dddd",0,0,function(e){return this.localeData().weekdays(this,e)}),I("e",0,0,"weekday"),I("E",0,0,"isoWeekday"),H("day","d"),H("weekday","e"),H("isoWeekday","E"),L("day",11),L("weekday",11),L("isoWeekday",11),ue("d",B),ue("e",B),ue("E",B),ue("dd",function(e,t){return t.weekdaysMinRegex(e)}),ue("ddd",function(e,t){return t.weekdaysShortRegex(e)}),ue("dddd",function(e,t){return t.weekdaysRegex(e)}),fe(["dd","ddd","dddd"],function(e,t,n,s){var i=n._locale.weekdaysParse(e,s,n._strict);null!=i?t.d=i:g(n).invalidWeekday=e}),fe(["d","e","E"],function(e,t,n,s){t[s]=k(e)});var je="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_");var Ze="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_");var ze="Su_Mo_Tu_We_Th_Fr_Sa".split("_");var $e=ae;var qe=ae;var Je=ae;function Be(){function e(e,t){return t.length-e.length}var t,n,s,i,r,a=[],o=[],u=[],l=[];for(t=0;t<7;t++)n=y([2e3,1]).day(t),s=this.weekdaysMin(n,""),i=this.weekdaysShort(n,""),r=this.weekdays(n,""),a.push(s),o.push(i),u.push(r),l.push(s),l.push(i),l.push(r);for(a.sort(e),o.sort(e),u.sort(e),l.sort(e),t=0;t<7;t++)o[t]=de(o[t]),u[t]=de(u[t]),l[t]=de(l[t]);this._weekdaysRegex=new RegExp("^("+l.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+u.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+o.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+a.join("|")+")","i")}function Qe(){return this.hours()%12||12}function Xe(e,t){I(e,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),t)})}function Ke(e,t){return t._meridiemParse}I("H",["HH",2],0,"hour"),I("h",["hh",2],0,Qe),I("k",["kk",2],0,function(){return this.hours()||24}),I("hmm",0,0,function(){return""+Qe.apply(this)+U(this.minutes(),2)}),I("hmmss",0,0,function(){return""+Qe.apply(this)+U(this.minutes(),2)+U(this.seconds(),2)}),I("Hmm",0,0,function(){return""+this.hours()+U(this.minutes(),2)}),I("Hmmss",0,0,function(){return""+this.hours()+U(this.minutes(),2)+U(this.seconds(),2)}),Xe("a",!0),Xe("A",!1),H("hour","h"),L("hour",13),ue("a",Ke),ue("A",Ke),ue("H",B),ue("h",B),ue("k",B),ue("HH",B,z),ue("hh",B,z),ue("kk",B,z),ue("hmm",Q),ue("hmmss",X),ue("Hmm",Q),ue("Hmmss",X),ce(["H","HH"],ge),ce(["k","kk"],function(e,t,n){var s=k(e);t[ge]=24===s?0:s}),ce(["a","A"],function(e,t,n){n._isPm=n._locale.isPM(e),n._meridiem=e}),ce(["h","hh"],function(e,t,n){t[ge]=k(e),g(n).bigHour=!0}),ce("hmm",function(e,t,n){var s=e.length-2;t[ge]=k(e.substr(0,s)),t[pe]=k(e.substr(s)),g(n).bigHour=!0}),ce("hmmss",function(e,t,n){var s=e.length-4,i=e.length-2;t[ge]=k(e.substr(0,s)),t[pe]=k(e.substr(s,2)),t[ve]=k(e.substr(i)),g(n).bigHour=!0}),ce("Hmm",function(e,t,n){var s=e.length-2;t[ge]=k(e.substr(0,s)),t[pe]=k(e.substr(s))}),ce("Hmmss",function(e,t,n){var s=e.length-4,i=e.length-2;t[ge]=k(e.substr(0,s)),t[pe]=k(e.substr(s,2)),t[ve]=k(e.substr(i))});var et,tt=Te("Hours",!0),nt={calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},longDateFormat:{LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},invalidDate:"Invalid date",ordinal:"%d",dayOfMonthOrdinalParse:/\d{1,2}/,relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},months:He,monthsShort:Re,week:{dow:0,doy:6},weekdays:je,weekdaysMin:ze,weekdaysShort:Ze,meridiemParse:/[ap]\.?m?\.?/i},st={},it={};function rt(e){return e?e.toLowerCase().replace("_","-"):e}function at(e){var t=null;if(!st[e]&&"undefined"!=typeof module&&module&&module.exports)try{t=et._abbr,require("./locale/"+e),ot(t)}catch(e){}return st[e]}function ot(e,t){var n;return e&&((n=l(t)?lt(e):ut(e,t))?et=n:"undefined"!=typeof console&&console.warn&&console.warn("Locale "+e+" not found. Did you forget to load it?")),et._abbr}function ut(e,t){if(null!==t){var n,s=nt;if(t.abbr=e,null!=st[e])T("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),s=st[e]._config;else if(null!=t.parentLocale)if(null!=st[t.parentLocale])s=st[t.parentLocale]._config;else{if(null==(n=at(t.parentLocale)))return it[t.parentLocale]||(it[t.parentLocale]=[]),it[t.parentLocale].push({name:e,config:t}),null;s=n._config}return st[e]=new P(b(s,t)),it[e]&&it[e].forEach(function(e){ut(e.name,e.config)}),ot(e),st[e]}return delete st[e],null}function lt(e){var t;if(e&&e._locale&&e._locale._abbr&&(e=e._locale._abbr),!e)return et;if(!o(e)){if(t=at(e))return t;e=[e]}return function(e){for(var t,n,s,i,r=0;r<e.length;){for(t=(i=rt(e[r]).split("-")).length,n=(n=rt(e[r+1]))?n.split("-"):null;0<t;){if(s=at(i.slice(0,t).join("-")))return s;if(n&&n.length>=t&&a(i,n,!0)>=t-1)break;t--}r++}return et}(e)}function dt(e){var t,n=e._a;return n&&-2===g(e).overflow&&(t=n[_e]<0||11<n[_e]?_e:n[ye]<1||n[ye]>Pe(n[me],n[_e])?ye:n[ge]<0||24<n[ge]||24===n[ge]&&(0!==n[pe]||0!==n[ve]||0!==n[we])?ge:n[pe]<0||59<n[pe]?pe:n[ve]<0||59<n[ve]?ve:n[we]<0||999<n[we]?we:-1,g(e)._overflowDayOfYear&&(t<me||ye<t)&&(t=ye),g(e)._overflowWeeks&&-1===t&&(t=Me),g(e)._overflowWeekday&&-1===t&&(t=Se),g(e).overflow=t),e}function ht(e,t,n){return null!=e?e:null!=t?t:n}function ct(e){var t,n,s,i,r,a=[];if(!e._d){var o,u;for(o=e,u=new Date(c.now()),s=o._useUTC?[u.getUTCFullYear(),u.getUTCMonth(),u.getUTCDate()]:[u.getFullYear(),u.getMonth(),u.getDate()],e._w&&null==e._a[ye]&&null==e._a[_e]&&function(e){var t,n,s,i,r,a,o,u;if(null!=(t=e._w).GG||null!=t.W||null!=t.E)r=1,a=4,n=ht(t.GG,e._a[me],Ie(Tt(),1,4).year),s=ht(t.W,1),((i=ht(t.E,1))<1||7<i)&&(u=!0);else{r=e._locale._week.dow,a=e._locale._week.doy;var l=Ie(Tt(),r,a);n=ht(t.gg,e._a[me],l.year),s=ht(t.w,l.week),null!=t.d?((i=t.d)<0||6<i)&&(u=!0):null!=t.e?(i=t.e+r,(t.e<0||6<t.e)&&(u=!0)):i=r}s<1||s>Ae(n,r,a)?g(e)._overflowWeeks=!0:null!=u?g(e)._overflowWeekday=!0:(o=Ee(n,s,i,r,a),e._a[me]=o.year,e._dayOfYear=o.dayOfYear)}(e),null!=e._dayOfYear&&(r=ht(e._a[me],s[me]),(e._dayOfYear>De(r)||0===e._dayOfYear)&&(g(e)._overflowDayOfYear=!0),n=Ge(r,0,e._dayOfYear),e._a[_e]=n.getUTCMonth(),e._a[ye]=n.getUTCDate()),t=0;t<3&&null==e._a[t];++t)e._a[t]=a[t]=s[t];for(;t<7;t++)e._a[t]=a[t]=null==e._a[t]?2===t?1:0:e._a[t];24===e._a[ge]&&0===e._a[pe]&&0===e._a[ve]&&0===e._a[we]&&(e._nextDay=!0,e._a[ge]=0),e._d=(e._useUTC?Ge:function(e,t,n,s,i,r,a){var o=new Date(e,t,n,s,i,r,a);return e<100&&0<=e&&isFinite(o.getFullYear())&&o.setFullYear(e),o}).apply(null,a),i=e._useUTC?e._d.getUTCDay():e._d.getDay(),null!=e._tzm&&e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),e._nextDay&&(e._a[ge]=24),e._w&&void 0!==e._w.d&&e._w.d!==i&&(g(e).weekdayMismatch=!0)}}var ft=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,mt=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,_t=/Z|[+-]\d\d(?::?\d\d)?/,yt=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/]],gt=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],pt=/^\/?Date\((\-?\d+)/i;function vt(e){var t,n,s,i,r,a,o=e._i,u=ft.exec(o)||mt.exec(o);if(u){for(g(e).iso=!0,t=0,n=yt.length;t<n;t++)if(yt[t][1].exec(u[1])){i=yt[t][0],s=!1!==yt[t][2];break}if(null==i)return void(e._isValid=!1);if(u[3]){for(t=0,n=gt.length;t<n;t++)if(gt[t][1].exec(u[3])){r=(u[2]||" ")+gt[t][0];break}if(null==r)return void(e._isValid=!1)}if(!s&&null!=r)return void(e._isValid=!1);if(u[4]){if(!_t.exec(u[4]))return void(e._isValid=!1);a="Z"}e._f=i+(r||"")+(a||""),kt(e)}else e._isValid=!1}var wt=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;function Mt(e,t,n,s,i,r){var a=[function(e){var t=parseInt(e,10);{if(t<=49)return 2e3+t;if(t<=999)return 1900+t}return t}(e),Re.indexOf(t),parseInt(n,10),parseInt(s,10),parseInt(i,10)];return r&&a.push(parseInt(r,10)),a}var St={UT:0,GMT:0,EDT:-240,EST:-300,CDT:-300,CST:-360,MDT:-360,MST:-420,PDT:-420,PST:-480};function Dt(e){var t,n,s,i=wt.exec(e._i.replace(/\([^)]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").replace(/^\s\s*/,"").replace(/\s\s*$/,""));if(i){var r=Mt(i[4],i[3],i[2],i[5],i[6],i[7]);if(t=i[1],n=r,s=e,t&&Ze.indexOf(t)!==new Date(n[0],n[1],n[2]).getDay()&&(g(s).weekdayMismatch=!0,!(s._isValid=!1)))return;e._a=r,e._tzm=function(e,t,n){if(e)return St[e];if(t)return 0;var s=parseInt(n,10),i=s%100;return(s-i)/100*60+i}(i[8],i[9],i[10]),e._d=Ge.apply(null,e._a),e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),g(e).rfc2822=!0}else e._isValid=!1}function kt(e){if(e._f!==c.ISO_8601)if(e._f!==c.RFC_2822){e._a=[],g(e).empty=!0;var t,n,s,i,r,a,o,u,l=""+e._i,d=l.length,h=0;for(s=j(e._f,e._locale).match(N)||[],t=0;t<s.length;t++)i=s[t],(n=(l.match(le(i,e))||[])[0])&&(0<(r=l.substr(0,l.indexOf(n))).length&&g(e).unusedInput.push(r),l=l.slice(l.indexOf(n)+n.length),h+=n.length),E[i]?(n?g(e).empty=!1:g(e).unusedTokens.push(i),a=i,u=e,null!=(o=n)&&m(he,a)&&he[a](o,u._a,u,a)):e._strict&&!n&&g(e).unusedTokens.push(i);g(e).charsLeftOver=d-h,0<l.length&&g(e).unusedInput.push(l),e._a[ge]<=12&&!0===g(e).bigHour&&0<e._a[ge]&&(g(e).bigHour=void 0),g(e).parsedDateParts=e._a.slice(0),g(e).meridiem=e._meridiem,e._a[ge]=function(e,t,n){var s;if(null==n)return t;return null!=e.meridiemHour?e.meridiemHour(t,n):(null!=e.isPM&&((s=e.isPM(n))&&t<12&&(t+=12),s||12!==t||(t=0)),t)}(e._locale,e._a[ge],e._meridiem),ct(e),dt(e)}else Dt(e);else vt(e)}function Yt(e){var t,n,s,i,r=e._i,a=e._f;return e._locale=e._locale||lt(e._l),null===r||void 0===a&&""===r?v({nullInput:!0}):("string"==typeof r&&(e._i=r=e._locale.preparse(r)),S(r)?new M(dt(r)):(h(r)?e._d=r:o(a)?function(e){var t,n,s,i,r;if(0===e._f.length)return g(e).invalidFormat=!0,e._d=new Date(NaN);for(i=0;i<e._f.length;i++)r=0,t=w({},e),null!=e._useUTC&&(t._useUTC=e._useUTC),t._f=e._f[i],kt(t),p(t)&&(r+=g(t).charsLeftOver,r+=10*g(t).unusedTokens.length,g(t).score=r,(null==s||r<s)&&(s=r,n=t));_(e,n||t)}(e):a?kt(e):l(n=(t=e)._i)?t._d=new Date(c.now()):h(n)?t._d=new Date(n.valueOf()):"string"==typeof n?(s=t,null===(i=pt.exec(s._i))?(vt(s),!1===s._isValid&&(delete s._isValid,Dt(s),!1===s._isValid&&(delete s._isValid,c.createFromInputFallback(s)))):s._d=new Date(+i[1])):o(n)?(t._a=f(n.slice(0),function(e){return parseInt(e,10)}),ct(t)):u(n)?function(e){if(!e._d){var t=C(e._i);e._a=f([t.year,t.month,t.day||t.date,t.hour,t.minute,t.second,t.millisecond],function(e){return e&&parseInt(e,10)}),ct(e)}}(t):d(n)?t._d=new Date(n):c.createFromInputFallback(t),p(e)||(e._d=null),e))}function Ot(e,t,n,s,i){var r,a={};return!0!==n&&!1!==n||(s=n,n=void 0),(u(e)&&function(e){if(Object.getOwnPropertyNames)return 0===Object.getOwnPropertyNames(e).length;var t;for(t in e)if(e.hasOwnProperty(t))return!1;return!0}(e)||o(e)&&0===e.length)&&(e=void 0),a._isAMomentObject=!0,a._useUTC=a._isUTC=i,a._l=n,a._i=e,a._f=t,a._strict=s,(r=new M(dt(Yt(a))))._nextDay&&(r.add(1,"d"),r._nextDay=void 0),r}function Tt(e,t,n,s){return Ot(e,t,n,s,!1)}c.createFromInputFallback=n("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(e){e._d=new Date(e._i+(e._useUTC?" UTC":""))}),c.ISO_8601=function(){},c.RFC_2822=function(){};var xt=n("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=Tt.apply(null,arguments);return this.isValid()&&e.isValid()?e<this?this:e:v()}),bt=n("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=Tt.apply(null,arguments);return this.isValid()&&e.isValid()?this<e?this:e:v()});function Pt(e,t){var n,s;if(1===t.length&&o(t[0])&&(t=t[0]),!t.length)return Tt();for(n=t[0],s=1;s<t.length;++s)t[s].isValid()&&!t[s][e](n)||(n=t[s]);return n}var Wt=["year","quarter","month","week","day","hour","minute","second","millisecond"];function Ht(e){var t=C(e),n=t.year||0,s=t.quarter||0,i=t.month||0,r=t.week||0,a=t.day||0,o=t.hour||0,u=t.minute||0,l=t.second||0,d=t.millisecond||0;this._isValid=function(e){for(var t in e)if(-1===Ye.call(Wt,t)||null!=e[t]&&isNaN(e[t]))return!1;for(var n=!1,s=0;s<Wt.length;++s)if(e[Wt[s]]){if(n)return!1;parseFloat(e[Wt[s]])!==k(e[Wt[s]])&&(n=!0)}return!0}(t),this._milliseconds=+d+1e3*l+6e4*u+1e3*o*60*60,this._days=+a+7*r,this._months=+i+3*s+12*n,this._data={},this._locale=lt(),this._bubble()}function Rt(e){return e instanceof Ht}function Ct(e){return e<0?-1*Math.round(-1*e):Math.round(e)}function Ft(e,n){I(e,0,0,function(){var e=this.utcOffset(),t="+";return e<0&&(e=-e,t="-"),t+U(~~(e/60),2)+n+U(~~e%60,2)})}Ft("Z",":"),Ft("ZZ",""),ue("Z",re),ue("ZZ",re),ce(["Z","ZZ"],function(e,t,n){n._useUTC=!0,n._tzm=Ut(re,e)});var Lt=/([\+\-]|\d\d)/gi;function Ut(e,t){var n=(t||"").match(e);if(null===n)return null;var s=((n[n.length-1]||[])+"").match(Lt)||["-",0,0],i=60*s[1]+k(s[2]);return 0===i?0:"+"===s[0]?i:-i}function Nt(e,t){var n,s;return t._isUTC?(n=t.clone(),s=(S(e)||h(e)?e.valueOf():Tt(e).valueOf())-n.valueOf(),n._d.setTime(n._d.valueOf()+s),c.updateOffset(n,!1),n):Tt(e).local()}function Gt(e){return 15*-Math.round(e._d.getTimezoneOffset()/15)}function Vt(){return!!this.isValid()&&(this._isUTC&&0===this._offset)}c.updateOffset=function(){};var Et=/^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,It=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;function At(e,t){var n,s,i,r=e,a=null;return Rt(e)?r={ms:e._milliseconds,d:e._days,M:e._months}:d(e)?(r={},t?r[t]=e:r.milliseconds=e):(a=Et.exec(e))?(n="-"===a[1]?-1:1,r={y:0,d:k(a[ye])*n,h:k(a[ge])*n,m:k(a[pe])*n,s:k(a[ve])*n,ms:k(Ct(1e3*a[we]))*n}):(a=It.exec(e))?(n="-"===a[1]?-1:(a[1],1),r={y:jt(a[2],n),M:jt(a[3],n),w:jt(a[4],n),d:jt(a[5],n),h:jt(a[6],n),m:jt(a[7],n),s:jt(a[8],n)}):null==r?r={}:"object"==typeof r&&("from"in r||"to"in r)&&(i=function(e,t){var n;if(!e.isValid()||!t.isValid())return{milliseconds:0,months:0};t=Nt(t,e),e.isBefore(t)?n=Zt(e,t):((n=Zt(t,e)).milliseconds=-n.milliseconds,n.months=-n.months);return n}(Tt(r.from),Tt(r.to)),(r={}).ms=i.milliseconds,r.M=i.months),s=new Ht(r),Rt(e)&&m(e,"_locale")&&(s._locale=e._locale),s}function jt(e,t){var n=e&&parseFloat(e.replace(",","."));return(isNaN(n)?0:n)*t}function Zt(e,t){var n={milliseconds:0,months:0};return n.months=t.month()-e.month()+12*(t.year()-e.year()),e.clone().add(n.months,"M").isAfter(t)&&--n.months,n.milliseconds=+t-+e.clone().add(n.months,"M"),n}function zt(s,i){return function(e,t){var n;return null===t||isNaN(+t)||(T(i,"moment()."+i+"(period, number) is deprecated. Please use moment()."+i+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),n=e,e=t,t=n),$t(this,At(e="string"==typeof e?+e:e,t),s),this}}function $t(e,t,n,s){var i=t._milliseconds,r=Ct(t._days),a=Ct(t._months);e.isValid()&&(s=null==s||s,a&&Ce(e,xe(e,"Month")+a*n),r&&be(e,"Date",xe(e,"Date")+r*n),i&&e._d.setTime(e._d.valueOf()+i*n),s&&c.updateOffset(e,r||a))}At.fn=Ht.prototype,At.invalid=function(){return At(NaN)};var qt=zt(1,"add"),Jt=zt(-1,"subtract");function Bt(e,t){var n=12*(t.year()-e.year())+(t.month()-e.month()),s=e.clone().add(n,"months");return-(n+(t-s<0?(t-s)/(s-e.clone().add(n-1,"months")):(t-s)/(e.clone().add(n+1,"months")-s)))||0}function Qt(e){var t;return void 0===e?this._locale._abbr:(null!=(t=lt(e))&&(this._locale=t),this)}c.defaultFormat="YYYY-MM-DDTHH:mm:ssZ",c.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";var Xt=n("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(e){return void 0===e?this.localeData():this.locale(e)});function Kt(){return this._locale}function en(e,t){I(0,[e,e.length],0,t)}function tn(e,t,n,s,i){var r;return null==e?Ie(this,s,i).year:((r=Ae(e,s,i))<t&&(t=r),function(e,t,n,s,i){var r=Ee(e,t,n,s,i),a=Ge(r.year,0,r.dayOfYear);return this.year(a.getUTCFullYear()),this.month(a.getUTCMonth()),this.date(a.getUTCDate()),this}.call(this,e,t,n,s,i))}I(0,["gg",2],0,function(){return this.weekYear()%100}),I(0,["GG",2],0,function(){return this.isoWeekYear()%100}),en("gggg","weekYear"),en("ggggg","weekYear"),en("GGGG","isoWeekYear"),en("GGGGG","isoWeekYear"),H("weekYear","gg"),H("isoWeekYear","GG"),L("weekYear",1),L("isoWeekYear",1),ue("G",se),ue("g",se),ue("GG",B,z),ue("gg",B,z),ue("GGGG",ee,q),ue("gggg",ee,q),ue("GGGGG",te,J),ue("ggggg",te,J),fe(["gggg","ggggg","GGGG","GGGGG"],function(e,t,n,s){t[s.substr(0,2)]=k(e)}),fe(["gg","GG"],function(e,t,n,s){t[s]=c.parseTwoDigitYear(e)}),I("Q",0,"Qo","quarter"),H("quarter","Q"),L("quarter",7),ue("Q",Z),ce("Q",function(e,t){t[_e]=3*(k(e)-1)}),I("D",["DD",2],"Do","date"),H("date","D"),L("date",9),ue("D",B),ue("DD",B,z),ue("Do",function(e,t){return e?t._dayOfMonthOrdinalParse||t._ordinalParse:t._dayOfMonthOrdinalParseLenient}),ce(["D","DD"],ye),ce("Do",function(e,t){t[ye]=k(e.match(B)[0])});var nn=Te("Date",!0);I("DDD",["DDDD",3],"DDDo","dayOfYear"),H("dayOfYear","DDD"),L("dayOfYear",4),ue("DDD",K),ue("DDDD",$),ce(["DDD","DDDD"],function(e,t,n){n._dayOfYear=k(e)}),I("m",["mm",2],0,"minute"),H("minute","m"),L("minute",14),ue("m",B),ue("mm",B,z),ce(["m","mm"],pe);var sn=Te("Minutes",!1);I("s",["ss",2],0,"second"),H("second","s"),L("second",15),ue("s",B),ue("ss",B,z),ce(["s","ss"],ve);var rn,an=Te("Seconds",!1);for(I("S",0,0,function(){return~~(this.millisecond()/100)}),I(0,["SS",2],0,function(){return~~(this.millisecond()/10)}),I(0,["SSS",3],0,"millisecond"),I(0,["SSSS",4],0,function(){return 10*this.millisecond()}),I(0,["SSSSS",5],0,function(){return 100*this.millisecond()}),I(0,["SSSSSS",6],0,function(){return 1e3*this.millisecond()}),I(0,["SSSSSSS",7],0,function(){return 1e4*this.millisecond()}),I(0,["SSSSSSSS",8],0,function(){return 1e5*this.millisecond()}),I(0,["SSSSSSSSS",9],0,function(){return 1e6*this.millisecond()}),H("millisecond","ms"),L("millisecond",16),ue("S",K,Z),ue("SS",K,z),ue("SSS",K,$),rn="SSSS";rn.length<=9;rn+="S")ue(rn,ne);function on(e,t){t[we]=k(1e3*("0."+e))}for(rn="S";rn.length<=9;rn+="S")ce(rn,on);var un=Te("Milliseconds",!1);I("z",0,0,"zoneAbbr"),I("zz",0,0,"zoneName");var ln=M.prototype;function dn(e){return e}ln.add=qt,ln.calendar=function(e,t){var n=e||Tt(),s=Nt(n,this).startOf("day"),i=c.calendarFormat(this,s)||"sameElse",r=t&&(x(t[i])?t[i].call(this,n):t[i]);return this.format(r||this.localeData().calendar(i,this,Tt(n)))},ln.clone=function(){return new M(this)},ln.diff=function(e,t,n){var s,i,r;if(!this.isValid())return NaN;if(!(s=Nt(e,this)).isValid())return NaN;switch(i=6e4*(s.utcOffset()-this.utcOffset()),t=R(t)){case"year":r=Bt(this,s)/12;break;case"month":r=Bt(this,s);break;case"quarter":r=Bt(this,s)/3;break;case"second":r=(this-s)/1e3;break;case"minute":r=(this-s)/6e4;break;case"hour":r=(this-s)/36e5;break;case"day":r=(this-s-i)/864e5;break;case"week":r=(this-s-i)/6048e5;break;default:r=this-s}return n?r:D(r)},ln.endOf=function(e){return void 0===(e=R(e))||"millisecond"===e?this:("date"===e&&(e="day"),this.startOf(e).add(1,"isoWeek"===e?"week":e).subtract(1,"ms"))},ln.format=function(e){e||(e=this.isUtc()?c.defaultFormatUtc:c.defaultFormat);var t=A(this,e);return this.localeData().postformat(t)},ln.from=function(e,t){return this.isValid()&&(S(e)&&e.isValid()||Tt(e).isValid())?At({to:this,from:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()},ln.fromNow=function(e){return this.from(Tt(),e)},ln.to=function(e,t){return this.isValid()&&(S(e)&&e.isValid()||Tt(e).isValid())?At({from:this,to:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()},ln.toNow=function(e){return this.to(Tt(),e)},ln.get=function(e){return x(this[e=R(e)])?this[e]():this},ln.invalidAt=function(){return g(this).overflow},ln.isAfter=function(e,t){var n=S(e)?e:Tt(e);return!(!this.isValid()||!n.isValid())&&("millisecond"===(t=R(l(t)?"millisecond":t))?this.valueOf()>n.valueOf():n.valueOf()<this.clone().startOf(t).valueOf())},ln.isBefore=function(e,t){var n=S(e)?e:Tt(e);return!(!this.isValid()||!n.isValid())&&("millisecond"===(t=R(l(t)?"millisecond":t))?this.valueOf()<n.valueOf():this.clone().endOf(t).valueOf()<n.valueOf())},ln.isBetween=function(e,t,n,s){return("("===(s=s||"()")[0]?this.isAfter(e,n):!this.isBefore(e,n))&&(")"===s[1]?this.isBefore(t,n):!this.isAfter(t,n))},ln.isSame=function(e,t){var n,s=S(e)?e:Tt(e);return!(!this.isValid()||!s.isValid())&&("millisecond"===(t=R(t||"millisecond"))?this.valueOf()===s.valueOf():(n=s.valueOf(),this.clone().startOf(t).valueOf()<=n&&n<=this.clone().endOf(t).valueOf()))},ln.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)},ln.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)},ln.isValid=function(){return p(this)},ln.lang=Xt,ln.locale=Qt,ln.localeData=Kt,ln.max=bt,ln.min=xt,ln.parsingFlags=function(){return _({},g(this))},ln.set=function(e,t){if("object"==typeof e)for(var n=function(e){var t=[];for(var n in e)t.push({unit:n,priority:F[n]});return t.sort(function(e,t){return e.priority-t.priority}),t}(e=C(e)),s=0;s<n.length;s++)this[n[s].unit](e[n[s].unit]);else if(x(this[e=R(e)]))return this[e](t);return this},ln.startOf=function(e){switch(e=R(e)){case"year":this.month(0);case"quarter":case"month":this.date(1);case"week":case"isoWeek":case"day":case"date":this.hours(0);case"hour":this.minutes(0);case"minute":this.seconds(0);case"second":this.milliseconds(0)}return"week"===e&&this.weekday(0),"isoWeek"===e&&this.isoWeekday(1),"quarter"===e&&this.month(3*Math.floor(this.month()/3)),this},ln.subtract=Jt,ln.toArray=function(){var e=this;return[e.year(),e.month(),e.date(),e.hour(),e.minute(),e.second(),e.millisecond()]},ln.toObject=function(){var e=this;return{years:e.year(),months:e.month(),date:e.date(),hours:e.hours(),minutes:e.minutes(),seconds:e.seconds(),milliseconds:e.milliseconds()}},ln.toDate=function(){return new Date(this.valueOf())},ln.toISOString=function(e){if(!this.isValid())return null;var t=!0!==e,n=t?this.clone().utc():this;return n.year()<0||9999<n.year()?A(n,t?"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"):x(Date.prototype.toISOString)?t?this.toDate().toISOString():new Date(this.valueOf()+60*this.utcOffset()*1e3).toISOString().replace("Z",A(n,"Z")):A(n,t?"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYY-MM-DD[T]HH:mm:ss.SSSZ")},ln.inspect=function(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";var e="moment",t="";this.isLocal()||(e=0===this.utcOffset()?"moment.utc":"moment.parseZone",t="Z");var n="["+e+'("]',s=0<=this.year()&&this.year()<=9999?"YYYY":"YYYYYY",i=t+'[")]';return this.format(n+s+"-MM-DD[T]HH:mm:ss.SSS"+i)},ln.toJSON=function(){return this.isValid()?this.toISOString():null},ln.toString=function(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")},ln.unix=function(){return Math.floor(this.valueOf()/1e3)},ln.valueOf=function(){return this._d.valueOf()-6e4*(this._offset||0)},ln.creationData=function(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}},ln.year=Oe,ln.isLeapYear=function(){return ke(this.year())},ln.weekYear=function(e){return tn.call(this,e,this.week(),this.weekday(),this.localeData()._week.dow,this.localeData()._week.doy)},ln.isoWeekYear=function(e){return tn.call(this,e,this.isoWeek(),this.isoWeekday(),1,4)},ln.quarter=ln.quarters=function(e){return null==e?Math.ceil((this.month()+1)/3):this.month(3*(e-1)+this.month()%3)},ln.month=Fe,ln.daysInMonth=function(){return Pe(this.year(),this.month())},ln.week=ln.weeks=function(e){var t=this.localeData().week(this);return null==e?t:this.add(7*(e-t),"d")},ln.isoWeek=ln.isoWeeks=function(e){var t=Ie(this,1,4).week;return null==e?t:this.add(7*(e-t),"d")},ln.weeksInYear=function(){var e=this.localeData()._week;return Ae(this.year(),e.dow,e.doy)},ln.isoWeeksInYear=function(){return Ae(this.year(),1,4)},ln.date=nn,ln.day=ln.days=function(e){if(!this.isValid())return null!=e?this:NaN;var t,n,s=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=e?(t=e,n=this.localeData(),e="string"!=typeof t?t:isNaN(t)?"number"==typeof(t=n.weekdaysParse(t))?t:null:parseInt(t,10),this.add(e-s,"d")):s},ln.weekday=function(e){if(!this.isValid())return null!=e?this:NaN;var t=(this.day()+7-this.localeData()._week.dow)%7;return null==e?t:this.add(e-t,"d")},ln.isoWeekday=function(e){if(!this.isValid())return null!=e?this:NaN;if(null!=e){var t=(n=e,s=this.localeData(),"string"==typeof n?s.weekdaysParse(n)%7||7:isNaN(n)?null:n);return this.day(this.day()%7?t:t-7)}return this.day()||7;var n,s},ln.dayOfYear=function(e){var t=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return null==e?t:this.add(e-t,"d")},ln.hour=ln.hours=tt,ln.minute=ln.minutes=sn,ln.second=ln.seconds=an,ln.millisecond=ln.milliseconds=un,ln.utcOffset=function(e,t,n){var s,i=this._offset||0;if(!this.isValid())return null!=e?this:NaN;if(null!=e){if("string"==typeof e){if(null===(e=Ut(re,e)))return this}else Math.abs(e)<16&&!n&&(e*=60);return!this._isUTC&&t&&(s=Gt(this)),this._offset=e,this._isUTC=!0,null!=s&&this.add(s,"m"),i!==e&&(!t||this._changeInProgress?$t(this,At(e-i,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,c.updateOffset(this,!0),this._changeInProgress=null)),this}return this._isUTC?i:Gt(this)},ln.utc=function(e){return this.utcOffset(0,e)},ln.local=function(e){return this._isUTC&&(this.utcOffset(0,e),this._isUTC=!1,e&&this.subtract(Gt(this),"m")),this},ln.parseZone=function(){if(null!=this._tzm)this.utcOffset(this._tzm,!1,!0);else if("string"==typeof this._i){var e=Ut(ie,this._i);null!=e?this.utcOffset(e):this.utcOffset(0,!0)}return this},ln.hasAlignedHourOffset=function(e){return!!this.isValid()&&(e=e?Tt(e).utcOffset():0,(this.utcOffset()-e)%60==0)},ln.isDST=function(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()},ln.isLocal=function(){return!!this.isValid()&&!this._isUTC},ln.isUtcOffset=function(){return!!this.isValid()&&this._isUTC},ln.isUtc=Vt,ln.isUTC=Vt,ln.zoneAbbr=function(){return this._isUTC?"UTC":""},ln.zoneName=function(){return this._isUTC?"Coordinated Universal Time":""},ln.dates=n("dates accessor is deprecated. Use date instead.",nn),ln.months=n("months accessor is deprecated. Use month instead",Fe),ln.years=n("years accessor is deprecated. Use year instead",Oe),ln.zone=n("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",function(e,t){return null!=e?("string"!=typeof e&&(e=-e),this.utcOffset(e,t),this):-this.utcOffset()}),ln.isDSTShifted=n("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",function(){if(!l(this._isDSTShifted))return this._isDSTShifted;var e={};if(w(e,this),(e=Yt(e))._a){var t=e._isUTC?y(e._a):Tt(e._a);this._isDSTShifted=this.isValid()&&0<a(e._a,t.toArray())}else this._isDSTShifted=!1;return this._isDSTShifted});var hn=P.prototype;function cn(e,t,n,s){var i=lt(),r=y().set(s,t);return i[n](r,e)}function fn(e,t,n){if(d(e)&&(t=e,e=void 0),e=e||"",null!=t)return cn(e,t,n,"month");var s,i=[];for(s=0;s<12;s++)i[s]=cn(e,s,n,"month");return i}function mn(e,t,n,s){"boolean"==typeof e?d(t)&&(n=t,t=void 0):(t=e,e=!1,d(n=t)&&(n=t,t=void 0)),t=t||"";var i,r=lt(),a=e?r._week.dow:0;if(null!=n)return cn(t,(n+a)%7,s,"day");var o=[];for(i=0;i<7;i++)o[i]=cn(t,(i+a)%7,s,"day");return o}hn.calendar=function(e,t,n){var s=this._calendar[e]||this._calendar.sameElse;return x(s)?s.call(t,n):s},hn.longDateFormat=function(e){var t=this._longDateFormat[e],n=this._longDateFormat[e.toUpperCase()];return t||!n?t:(this._longDateFormat[e]=n.replace(/MMMM|MM|DD|dddd/g,function(e){return e.slice(1)}),this._longDateFormat[e])},hn.invalidDate=function(){return this._invalidDate},hn.ordinal=function(e){return this._ordinal.replace("%d",e)},hn.preparse=dn,hn.postformat=dn,hn.relativeTime=function(e,t,n,s){var i=this._relativeTime[n];return x(i)?i(e,t,n,s):i.replace(/%d/i,e)},hn.pastFuture=function(e,t){var n=this._relativeTime[0<e?"future":"past"];return x(n)?n(t):n.replace(/%s/i,t)},hn.set=function(e){var t,n;for(n in e)x(t=e[n])?this[n]=t:this["_"+n]=t;this._config=e,this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{1,2}/.source)},hn.months=function(e,t){return e?o(this._months)?this._months[e.month()]:this._months[(this._months.isFormat||We).test(t)?"format":"standalone"][e.month()]:o(this._months)?this._months:this._months.standalone},hn.monthsShort=function(e,t){return e?o(this._monthsShort)?this._monthsShort[e.month()]:this._monthsShort[We.test(t)?"format":"standalone"][e.month()]:o(this._monthsShort)?this._monthsShort:this._monthsShort.standalone},hn.monthsParse=function(e,t,n){var s,i,r;if(this._monthsParseExact)return function(e,t,n){var s,i,r,a=e.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],s=0;s<12;++s)r=y([2e3,s]),this._shortMonthsParse[s]=this.monthsShort(r,"").toLocaleLowerCase(),this._longMonthsParse[s]=this.months(r,"").toLocaleLowerCase();return n?"MMM"===t?-1!==(i=Ye.call(this._shortMonthsParse,a))?i:null:-1!==(i=Ye.call(this._longMonthsParse,a))?i:null:"MMM"===t?-1!==(i=Ye.call(this._shortMonthsParse,a))?i:-1!==(i=Ye.call(this._longMonthsParse,a))?i:null:-1!==(i=Ye.call(this._longMonthsParse,a))?i:-1!==(i=Ye.call(this._shortMonthsParse,a))?i:null}.call(this,e,t,n);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),s=0;s<12;s++){if(i=y([2e3,s]),n&&!this._longMonthsParse[s]&&(this._longMonthsParse[s]=new RegExp("^"+this.months(i,"").replace(".","")+"$","i"),this._shortMonthsParse[s]=new RegExp("^"+this.monthsShort(i,"").replace(".","")+"$","i")),n||this._monthsParse[s]||(r="^"+this.months(i,"")+"|^"+this.monthsShort(i,""),this._monthsParse[s]=new RegExp(r.replace(".",""),"i")),n&&"MMMM"===t&&this._longMonthsParse[s].test(e))return s;if(n&&"MMM"===t&&this._shortMonthsParse[s].test(e))return s;if(!n&&this._monthsParse[s].test(e))return s}},hn.monthsRegex=function(e){return this._monthsParseExact?(m(this,"_monthsRegex")||Ne.call(this),e?this._monthsStrictRegex:this._monthsRegex):(m(this,"_monthsRegex")||(this._monthsRegex=Ue),this._monthsStrictRegex&&e?this._monthsStrictRegex:this._monthsRegex)},hn.monthsShortRegex=function(e){return this._monthsParseExact?(m(this,"_monthsRegex")||Ne.call(this),e?this._monthsShortStrictRegex:this._monthsShortRegex):(m(this,"_monthsShortRegex")||(this._monthsShortRegex=Le),this._monthsShortStrictRegex&&e?this._monthsShortStrictRegex:this._monthsShortRegex)},hn.week=function(e){return Ie(e,this._week.dow,this._week.doy).week},hn.firstDayOfYear=function(){return this._week.doy},hn.firstDayOfWeek=function(){return this._week.dow},hn.weekdays=function(e,t){return e?o(this._weekdays)?this._weekdays[e.day()]:this._weekdays[this._weekdays.isFormat.test(t)?"format":"standalone"][e.day()]:o(this._weekdays)?this._weekdays:this._weekdays.standalone},hn.weekdaysMin=function(e){return e?this._weekdaysMin[e.day()]:this._weekdaysMin},hn.weekdaysShort=function(e){return e?this._weekdaysShort[e.day()]:this._weekdaysShort},hn.weekdaysParse=function(e,t,n){var s,i,r;if(this._weekdaysParseExact)return function(e,t,n){var s,i,r,a=e.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],s=0;s<7;++s)r=y([2e3,1]).day(s),this._minWeekdaysParse[s]=this.weekdaysMin(r,"").toLocaleLowerCase(),this._shortWeekdaysParse[s]=this.weekdaysShort(r,"").toLocaleLowerCase(),this._weekdaysParse[s]=this.weekdays(r,"").toLocaleLowerCase();return n?"dddd"===t?-1!==(i=Ye.call(this._weekdaysParse,a))?i:null:"ddd"===t?-1!==(i=Ye.call(this._shortWeekdaysParse,a))?i:null:-1!==(i=Ye.call(this._minWeekdaysParse,a))?i:null:"dddd"===t?-1!==(i=Ye.call(this._weekdaysParse,a))?i:-1!==(i=Ye.call(this._shortWeekdaysParse,a))?i:-1!==(i=Ye.call(this._minWeekdaysParse,a))?i:null:"ddd"===t?-1!==(i=Ye.call(this._shortWeekdaysParse,a))?i:-1!==(i=Ye.call(this._weekdaysParse,a))?i:-1!==(i=Ye.call(this._minWeekdaysParse,a))?i:null:-1!==(i=Ye.call(this._minWeekdaysParse,a))?i:-1!==(i=Ye.call(this._weekdaysParse,a))?i:-1!==(i=Ye.call(this._shortWeekdaysParse,a))?i:null}.call(this,e,t,n);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),s=0;s<7;s++){if(i=y([2e3,1]).day(s),n&&!this._fullWeekdaysParse[s]&&(this._fullWeekdaysParse[s]=new RegExp("^"+this.weekdays(i,"").replace(".","\\.?")+"$","i"),this._shortWeekdaysParse[s]=new RegExp("^"+this.weekdaysShort(i,"").replace(".","\\.?")+"$","i"),this._minWeekdaysParse[s]=new RegExp("^"+this.weekdaysMin(i,"").replace(".","\\.?")+"$","i")),this._weekdaysParse[s]||(r="^"+this.weekdays(i,"")+"|^"+this.weekdaysShort(i,"")+"|^"+this.weekdaysMin(i,""),this._weekdaysParse[s]=new RegExp(r.replace(".",""),"i")),n&&"dddd"===t&&this._fullWeekdaysParse[s].test(e))return s;if(n&&"ddd"===t&&this._shortWeekdaysParse[s].test(e))return s;if(n&&"dd"===t&&this._minWeekdaysParse[s].test(e))return s;if(!n&&this._weekdaysParse[s].test(e))return s}},hn.weekdaysRegex=function(e){return this._weekdaysParseExact?(m(this,"_weekdaysRegex")||Be.call(this),e?this._weekdaysStrictRegex:this._weekdaysRegex):(m(this,"_weekdaysRegex")||(this._weekdaysRegex=$e),this._weekdaysStrictRegex&&e?this._weekdaysStrictRegex:this._weekdaysRegex)},hn.weekdaysShortRegex=function(e){return this._weekdaysParseExact?(m(this,"_weekdaysRegex")||Be.call(this),e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(m(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=qe),this._weekdaysShortStrictRegex&&e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)},hn.weekdaysMinRegex=function(e){return this._weekdaysParseExact?(m(this,"_weekdaysRegex")||Be.call(this),e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(m(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=Je),this._weekdaysMinStrictRegex&&e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)},hn.isPM=function(e){return"p"===(e+"").toLowerCase().charAt(0)},hn.meridiem=function(e,t,n){return 11<e?n?"pm":"PM":n?"am":"AM"},ot("en",{dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(e){var t=e%10;return e+(1===k(e%100/10)?"th":1===t?"st":2===t?"nd":3===t?"rd":"th")}}),c.lang=n("moment.lang is deprecated. Use moment.locale instead.",ot),c.langData=n("moment.langData is deprecated. Use moment.localeData instead.",lt);var _n=Math.abs;function yn(e,t,n,s){var i=At(t,n);return e._milliseconds+=s*i._milliseconds,e._days+=s*i._days,e._months+=s*i._months,e._bubble()}function gn(e){return e<0?Math.floor(e):Math.ceil(e)}function pn(e){return 4800*e/146097}function vn(e){return 146097*e/4800}function wn(e){return function(){return this.as(e)}}var Mn=wn("ms"),Sn=wn("s"),Dn=wn("m"),kn=wn("h"),Yn=wn("d"),On=wn("w"),Tn=wn("M"),xn=wn("y");function bn(e){return function(){return this.isValid()?this._data[e]:NaN}}var Pn=bn("milliseconds"),Wn=bn("seconds"),Hn=bn("minutes"),Rn=bn("hours"),Cn=bn("days"),Fn=bn("months"),Ln=bn("years");var Un=Math.round,Nn={ss:44,s:45,m:45,h:22,d:26,M:11};var Gn=Math.abs;function Vn(e){return(0<e)-(e<0)||+e}function En(){if(!this.isValid())return this.localeData().invalidDate();var e,t,n=Gn(this._milliseconds)/1e3,s=Gn(this._days),i=Gn(this._months);t=D((e=D(n/60))/60),n%=60,e%=60;var r=D(i/12),a=i%=12,o=s,u=t,l=e,d=n?n.toFixed(3).replace(/\.?0+$/,""):"",h=this.asSeconds();if(!h)return"P0D";var c=h<0?"-":"",f=Vn(this._months)!==Vn(h)?"-":"",m=Vn(this._days)!==Vn(h)?"-":"",_=Vn(this._milliseconds)!==Vn(h)?"-":"";return c+"P"+(r?f+r+"Y":"")+(a?f+a+"M":"")+(o?m+o+"D":"")+(u||l||d?"T":"")+(u?_+u+"H":"")+(l?_+l+"M":"")+(d?_+d+"S":"")}var In=Ht.prototype;return In.isValid=function(){return this._isValid},In.abs=function(){var e=this._data;return this._milliseconds=_n(this._milliseconds),this._days=_n(this._days),this._months=_n(this._months),e.milliseconds=_n(e.milliseconds),e.seconds=_n(e.seconds),e.minutes=_n(e.minutes),e.hours=_n(e.hours),e.months=_n(e.months),e.years=_n(e.years),this},In.add=function(e,t){return yn(this,e,t,1)},In.subtract=function(e,t){return yn(this,e,t,-1)},In.as=function(e){if(!this.isValid())return NaN;var t,n,s=this._milliseconds;if("month"===(e=R(e))||"year"===e)return t=this._days+s/864e5,n=this._months+pn(t),"month"===e?n:n/12;switch(t=this._days+Math.round(vn(this._months)),e){case"week":return t/7+s/6048e5;case"day":return t+s/864e5;case"hour":return 24*t+s/36e5;case"minute":return 1440*t+s/6e4;case"second":return 86400*t+s/1e3;case"millisecond":return Math.floor(864e5*t)+s;default:throw new Error("Unknown unit "+e)}},In.asMilliseconds=Mn,In.asSeconds=Sn,In.asMinutes=Dn,In.asHours=kn,In.asDays=Yn,In.asWeeks=On,In.asMonths=Tn,In.asYears=xn,In.valueOf=function(){return this.isValid()?this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*k(this._months/12):NaN},In._bubble=function(){var e,t,n,s,i,r=this._milliseconds,a=this._days,o=this._months,u=this._data;return 0<=r&&0<=a&&0<=o||r<=0&&a<=0&&o<=0||(r+=864e5*gn(vn(o)+a),o=a=0),u.milliseconds=r%1e3,e=D(r/1e3),u.seconds=e%60,t=D(e/60),u.minutes=t%60,n=D(t/60),u.hours=n%24,o+=i=D(pn(a+=D(n/24))),a-=gn(vn(i)),s=D(o/12),o%=12,u.days=a,u.months=o,u.years=s,this},In.clone=function(){return At(this)},In.get=function(e){return e=R(e),this.isValid()?this[e+"s"]():NaN},In.milliseconds=Pn,In.seconds=Wn,In.minutes=Hn,In.hours=Rn,In.days=Cn,In.weeks=function(){return D(this.days()/7)},In.months=Fn,In.years=Ln,In.humanize=function(e){if(!this.isValid())return this.localeData().invalidDate();var t,n,s,i,r,a,o,u,l,d,h,c=this.localeData(),f=(n=!e,s=c,i=At(t=this).abs(),r=Un(i.as("s")),a=Un(i.as("m")),o=Un(i.as("h")),u=Un(i.as("d")),l=Un(i.as("M")),d=Un(i.as("y")),(h=r<=Nn.ss&&["s",r]||r<Nn.s&&["ss",r]||a<=1&&["m"]||a<Nn.m&&["mm",a]||o<=1&&["h"]||o<Nn.h&&["hh",o]||u<=1&&["d"]||u<Nn.d&&["dd",u]||l<=1&&["M"]||l<Nn.M&&["MM",l]||d<=1&&["y"]||["yy",d])[2]=n,h[3]=0<+t,h[4]=s,function(e,t,n,s,i){return i.relativeTime(t||1,!!n,e,s)}.apply(null,h));return e&&(f=c.pastFuture(+this,f)),c.postformat(f)},In.toISOString=En,In.toString=En,In.toJSON=En,In.locale=Qt,In.localeData=Kt,In.toIsoString=n("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",En),In.lang=Xt,I("X",0,0,"unix"),I("x",0,0,"valueOf"),ue("x",se),ue("X",/[+-]?\d+(\.\d{1,3})?/),ce("X",function(e,t,n){n._d=new Date(1e3*parseFloat(e,10))}),ce("x",function(e,t,n){n._d=new Date(k(e))}),c.version="2.22.2",e=Tt,c.fn=ln,c.min=function(){return Pt("isBefore",[].slice.call(arguments,0))},c.max=function(){return Pt("isAfter",[].slice.call(arguments,0))},c.now=function(){return Date.now?Date.now():+new Date},c.utc=y,c.unix=function(e){return Tt(1e3*e)},c.months=function(e,t){return fn(e,t,"months")},c.isDate=h,c.locale=ot,c.invalid=v,c.duration=At,c.isMoment=S,c.weekdays=function(e,t,n){return mn(e,t,n,"weekdays")},c.parseZone=function(){return Tt.apply(null,arguments).parseZone()},c.localeData=lt,c.isDuration=Rt,c.monthsShort=function(e,t){return fn(e,t,"monthsShort")},c.weekdaysMin=function(e,t,n){return mn(e,t,n,"weekdaysMin")},c.defineLocale=ut,c.updateLocale=function(e,t){if(null!=t){var n,s,i=nt;null!=(s=at(e))&&(i=s._config),(n=new P(t=b(i,t))).parentLocale=st[e],st[e]=n,ot(e)}else null!=st[e]&&(null!=st[e].parentLocale?st[e]=st[e].parentLocale:null!=st[e]&&delete st[e]);return st[e]},c.locales=function(){return s(st)},c.weekdaysShort=function(e,t,n){return mn(e,t,n,"weekdaysShort")},c.normalizeUnits=R,c.relativeTimeRounding=function(e){return void 0===e?Un:"function"==typeof e&&(Un=e,!0)},c.relativeTimeThreshold=function(e,t){return void 0!==Nn[e]&&(void 0===t?Nn[e]:(Nn[e]=t,"s"===e&&(Nn.ss=t-1),!0))},c.calendarFormat=function(e,t){var n=e.diff(t,"days",!0);return n<-6?"sameElse":n<-1?"lastWeek":n<0?"lastDay":n<1?"sameDay":n<2?"nextDay":n<7?"nextWeek":"sameElse"},c.prototype=ln,c.HTML5_FMT={DATETIME_LOCAL:"YYYY-MM-DDTHH:mm",DATETIME_LOCAL_SECONDS:"YYYY-MM-DDTHH:mm:ss",DATETIME_LOCAL_MS:"YYYY-MM-DDTHH:mm:ss.SSS",DATE:"YYYY-MM-DD",TIME:"HH:mm",TIME_SECONDS:"HH:mm:ss",TIME_MS:"HH:mm:ss.SSS",WEEK:"YYYY-[W]WW",MONTH:"YYYY-MM"},c});
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports?require("jquery"):jQuery)}(function(a,b){function c(){return new Date(Date.UTC.apply(Date,arguments))}function d(){var a=new Date;return c(a.getFullYear(),a.getMonth(),a.getDate())}function e(a,b){return a.getUTCFullYear()===b.getUTCFullYear()&&a.getUTCMonth()===b.getUTCMonth()&&a.getUTCDate()===b.getUTCDate()}function f(c,d){return function(){return d!==b&&a.fn.datepicker.deprecated(d),this[c].apply(this,arguments)}}function g(a){return a&&!isNaN(a.getTime())}function h(b,c){function d(a,b){return b.toLowerCase()}var e,f=a(b).data(),g={},h=new RegExp("^"+c.toLowerCase()+"([A-Z])");c=new RegExp("^"+c.toLowerCase());for(var i in f)c.test(i)&&(e=i.replace(h,d),g[e]=f[i]);return g}function i(b){var c={};if(q[b]||(b=b.split("-")[0],q[b])){var d=q[b];return a.each(p,function(a,b){b in d&&(c[b]=d[b])}),c}}var j=function(){var b={get:function(a){return this.slice(a)[0]},contains:function(a){for(var b=a&&a.valueOf(),c=0,d=this.length;c<d;c++)if(0<=this[c].valueOf()-b&&this[c].valueOf()-b<864e5)return c;return-1},remove:function(a){this.splice(a,1)},replace:function(b){b&&(a.isArray(b)||(b=[b]),this.clear(),this.push.apply(this,b))},clear:function(){this.length=0},copy:function(){var a=new j;return a.replace(this),a}};return function(){var c=[];return c.push.apply(c,arguments),a.extend(c,b),c}}(),k=function(b,c){a.data(b,"datepicker",this),this._process_options(c),this.dates=new j,this.viewDate=this.o.defaultViewDate,this.focusDate=null,this.element=a(b),this.isInput=this.element.is("input"),this.inputField=this.isInput?this.element:this.element.find("input"),this.component=!!this.element.hasClass("date")&&this.element.find(".add-on, .input-group-addon, .btn"),this.component&&0===this.component.length&&(this.component=!1),this.isInline=!this.component&&this.element.is("div"),this.picker=a(r.template),this._check_template(this.o.templates.leftArrow)&&this.picker.find(".prev").html(this.o.templates.leftArrow),this._check_template(this.o.templates.rightArrow)&&this.picker.find(".next").html(this.o.templates.rightArrow),this._buildEvents(),this._attachEvents(),this.isInline?this.picker.addClass("datepicker-inline").appendTo(this.element):this.picker.addClass("datepicker-dropdown dropdown-menu"),this.o.rtl&&this.picker.addClass("datepicker-rtl"),this.o.calendarWeeks&&this.picker.find(".datepicker-days .datepicker-switch, thead .datepicker-title, tfoot .today, tfoot .clear").attr("colspan",function(a,b){return Number(b)+1}),this._process_options({startDate:this._o.startDate,endDate:this._o.endDate,daysOfWeekDisabled:this.o.daysOfWeekDisabled,daysOfWeekHighlighted:this.o.daysOfWeekHighlighted,datesDisabled:this.o.datesDisabled}),this._allow_update=!1,this.setViewMode(this.o.startView),this._allow_update=!0,this.fillDow(),this.fillMonths(),this.update(),this.isInline&&this.show()};k.prototype={constructor:k,_resolveViewName:function(b){return a.each(r.viewModes,function(c,d){if(b===c||a.inArray(b,d.names)!==-1)return b=c,!1}),b},_resolveDaysOfWeek:function(b){return a.isArray(b)||(b=b.split(/[,\s]*/)),a.map(b,Number)},_check_template:function(c){try{if(c===b||""===c)return!1;if((c.match(/[<>]/g)||[]).length<=0)return!0;var d=a(c);return d.length>0}catch(a){return!1}},_process_options:function(b){this._o=a.extend({},this._o,b);var e=this.o=a.extend({},this._o),f=e.language;q[f]||(f=f.split("-")[0],q[f]||(f=o.language)),e.language=f,e.startView=this._resolveViewName(e.startView),e.minViewMode=this._resolveViewName(e.minViewMode),e.maxViewMode=this._resolveViewName(e.maxViewMode),e.startView=Math.max(this.o.minViewMode,Math.min(this.o.maxViewMode,e.startView)),e.multidate!==!0&&(e.multidate=Number(e.multidate)||!1,e.multidate!==!1&&(e.multidate=Math.max(0,e.multidate))),e.multidateSeparator=String(e.multidateSeparator),e.weekStart%=7,e.weekEnd=(e.weekStart+6)%7;var g=r.parseFormat(e.format);e.startDate!==-(1/0)&&(e.startDate?e.startDate instanceof Date?e.startDate=this._local_to_utc(this._zero_time(e.startDate)):e.startDate=r.parseDate(e.startDate,g,e.language,e.assumeNearbyYear):e.startDate=-(1/0)),e.endDate!==1/0&&(e.endDate?e.endDate instanceof Date?e.endDate=this._local_to_utc(this._zero_time(e.endDate)):e.endDate=r.parseDate(e.endDate,g,e.language,e.assumeNearbyYear):e.endDate=1/0),e.daysOfWeekDisabled=this._resolveDaysOfWeek(e.daysOfWeekDisabled||[]),e.daysOfWeekHighlighted=this._resolveDaysOfWeek(e.daysOfWeekHighlighted||[]),e.datesDisabled=e.datesDisabled||[],a.isArray(e.datesDisabled)||(e.datesDisabled=e.datesDisabled.split(",")),e.datesDisabled=a.map(e.datesDisabled,function(a){return r.parseDate(a,g,e.language,e.assumeNearbyYear)});var h=String(e.orientation).toLowerCase().split(/\s+/g),i=e.orientation.toLowerCase();if(h=a.grep(h,function(a){return/^auto|left|right|top|bottom$/.test(a)}),e.orientation={x:"auto",y:"auto"},i&&"auto"!==i)if(1===h.length)switch(h[0]){case"top":case"bottom":e.orientation.y=h[0];break;case"left":case"right":e.orientation.x=h[0]}else i=a.grep(h,function(a){return/^left|right$/.test(a)}),e.orientation.x=i[0]||"auto",i=a.grep(h,function(a){return/^top|bottom$/.test(a)}),e.orientation.y=i[0]||"auto";else;if(e.defaultViewDate instanceof Date||"string"==typeof e.defaultViewDate)e.defaultViewDate=r.parseDate(e.defaultViewDate,g,e.language,e.assumeNearbyYear);else if(e.defaultViewDate){var j=e.defaultViewDate.year||(new Date).getFullYear(),k=e.defaultViewDate.month||0,l=e.defaultViewDate.day||1;e.defaultViewDate=c(j,k,l)}else e.defaultViewDate=d()},_events:[],_secondaryEvents:[],_applyEvents:function(a){for(var c,d,e,f=0;f<a.length;f++)c=a[f][0],2===a[f].length?(d=b,e=a[f][1]):3===a[f].length&&(d=a[f][1],e=a[f][2]),c.on(e,d)},_unapplyEvents:function(a){for(var c,d,e,f=0;f<a.length;f++)c=a[f][0],2===a[f].length?(e=b,d=a[f][1]):3===a[f].length&&(e=a[f][1],d=a[f][2]),c.off(d,e)},_buildEvents:function(){var b={keyup:a.proxy(function(b){a.inArray(b.keyCode,[27,37,39,38,40,32,13,9])===-1&&this.update()},this),keydown:a.proxy(this.keydown,this),paste:a.proxy(this.paste,this)};this.o.showOnFocus===!0&&(b.focus=a.proxy(this.show,this)),this.isInput?this._events=[[this.element,b]]:this.component&&this.inputField.length?this._events=[[this.inputField,b],[this.component,{click:a.proxy(this.show,this)}]]:this._events=[[this.element,{click:a.proxy(this.show,this),keydown:a.proxy(this.keydown,this)}]],this._events.push([this.element,"*",{blur:a.proxy(function(a){this._focused_from=a.target},this)}],[this.element,{blur:a.proxy(function(a){this._focused_from=a.target},this)}]),this.o.immediateUpdates&&this._events.push([this.element,{"changeYear changeMonth":a.proxy(function(a){this.update(a.date)},this)}]),this._secondaryEvents=[[this.picker,{click:a.proxy(this.click,this)}],[this.picker,".prev, .next",{click:a.proxy(this.navArrowsClick,this)}],[this.picker,".day:not(.disabled)",{click:a.proxy(this.dayCellClick,this)}],[a(window),{resize:a.proxy(this.place,this)}],[a(document),{"mousedown touchstart":a.proxy(function(a){this.element.is(a.target)||this.element.find(a.target).length||this.picker.is(a.target)||this.picker.find(a.target).length||this.isInline||this.hide()},this)}]]},_attachEvents:function(){this._detachEvents(),this._applyEvents(this._events)},_detachEvents:function(){this._unapplyEvents(this._events)},_attachSecondaryEvents:function(){this._detachSecondaryEvents(),this._applyEvents(this._secondaryEvents)},_detachSecondaryEvents:function(){this._unapplyEvents(this._secondaryEvents)},_trigger:function(b,c){var d=c||this.dates.get(-1),e=this._utc_to_local(d);this.element.trigger({type:b,date:e,viewMode:this.viewMode,dates:a.map(this.dates,this._utc_to_local),format:a.proxy(function(a,b){0===arguments.length?(a=this.dates.length-1,b=this.o.format):"string"==typeof a&&(b=a,a=this.dates.length-1),b=b||this.o.format;var c=this.dates.get(a);return r.formatDate(c,b,this.o.language)},this)})},show:function(){if(!(this.inputField.prop("disabled")||this.inputField.prop("readonly")&&this.o.enableOnReadonly===!1))return this.isInline||this.picker.appendTo(this.o.container),this.place(),this.picker.show(),this._attachSecondaryEvents(),this._trigger("show"),(window.navigator.msMaxTouchPoints||"ontouchstart"in document)&&this.o.disableTouchKeyboard&&a(this.element).blur(),this},hide:function(){return this.isInline||!this.picker.is(":visible")?this:(this.focusDate=null,this.picker.hide().detach(),this._detachSecondaryEvents(),this.setViewMode(this.o.startView),this.o.forceParse&&this.inputField.val()&&this.setValue(),this._trigger("hide"),this)},destroy:function(){return this.hide(),this._detachEvents(),this._detachSecondaryEvents(),this.picker.remove(),delete this.element.data().datepicker,this.isInput||delete this.element.data().date,this},paste:function(b){var c;if(b.originalEvent.clipboardData&&b.originalEvent.clipboardData.types&&a.inArray("text/plain",b.originalEvent.clipboardData.types)!==-1)c=b.originalEvent.clipboardData.getData("text/plain");else{if(!window.clipboardData)return;c=window.clipboardData.getData("Text")}this.setDate(c),this.update(),b.preventDefault()},_utc_to_local:function(a){if(!a)return a;var b=new Date(a.getTime()+6e4*a.getTimezoneOffset());return b.getTimezoneOffset()!==a.getTimezoneOffset()&&(b=new Date(a.getTime()+6e4*b.getTimezoneOffset())),b},_local_to_utc:function(a){return a&&new Date(a.getTime()-6e4*a.getTimezoneOffset())},_zero_time:function(a){return a&&new Date(a.getFullYear(),a.getMonth(),a.getDate())},_zero_utc_time:function(a){return a&&c(a.getUTCFullYear(),a.getUTCMonth(),a.getUTCDate())},getDates:function(){return a.map(this.dates,this._utc_to_local)},getUTCDates:function(){return a.map(this.dates,function(a){return new Date(a)})},getDate:function(){return this._utc_to_local(this.getUTCDate())},getUTCDate:function(){var a=this.dates.get(-1);return a!==b?new Date(a):null},clearDates:function(){this.inputField.val(""),this.update(),this._trigger("changeDate"),this.o.autoclose&&this.hide()},setDates:function(){var b=a.isArray(arguments[0])?arguments[0]:arguments;return this.update.apply(this,b),this._trigger("changeDate"),this.setValue(),this},setUTCDates:function(){var b=a.isArray(arguments[0])?arguments[0]:arguments;return this.setDates.apply(this,a.map(b,this._utc_to_local)),this},setDate:f("setDates"),setUTCDate:f("setUTCDates"),remove:f("destroy","Method `remove` is deprecated and will be removed in version 2.0. Use `destroy` instead"),setValue:function(){var a=this.getFormattedDate();return this.inputField.val(a),this},getFormattedDate:function(c){c===b&&(c=this.o.format);var d=this.o.language;return a.map(this.dates,function(a){return r.formatDate(a,c,d)}).join(this.o.multidateSeparator)},getStartDate:function(){return this.o.startDate},setStartDate:function(a){return this._process_options({startDate:a}),this.update(),this.updateNavArrows(),this},getEndDate:function(){return this.o.endDate},setEndDate:function(a){return this._process_options({endDate:a}),this.update(),this.updateNavArrows(),this},setDaysOfWeekDisabled:function(a){return this._process_options({daysOfWeekDisabled:a}),this.update(),this},setDaysOfWeekHighlighted:function(a){return this._process_options({daysOfWeekHighlighted:a}),this.update(),this},setDatesDisabled:function(a){return this._process_options({datesDisabled:a}),this.update(),this},place:function(){if(this.isInline)return this;var b=this.picker.outerWidth(),c=this.picker.outerHeight(),d=10,e=a(this.o.container),f=e.width(),g="body"===this.o.container?a(document).scrollTop():e.scrollTop(),h=e.offset(),i=[0];this.element.parents().each(function(){var b=a(this).css("z-index");"auto"!==b&&0!==Number(b)&&i.push(Number(b))});var j=Math.max.apply(Math,i)+this.o.zIndexOffset,k=this.component?this.component.parent().offset():this.element.offset(),l=this.component?this.component.outerHeight(!0):this.element.outerHeight(!1),m=this.component?this.component.outerWidth(!0):this.element.outerWidth(!1),n=k.left-h.left,o=k.top-h.top;"body"!==this.o.container&&(o+=g),this.picker.removeClass("datepicker-orient-top datepicker-orient-bottom datepicker-orient-right datepicker-orient-left"),"auto"!==this.o.orientation.x?(this.picker.addClass("datepicker-orient-"+this.o.orientation.x),"right"===this.o.orientation.x&&(n-=b-m)):k.left<0?(this.picker.addClass("datepicker-orient-left"),n-=k.left-d):n+b>f?(this.picker.addClass("datepicker-orient-right"),n+=m-b):this.o.rtl?this.picker.addClass("datepicker-orient-right"):this.picker.addClass("datepicker-orient-left");var p,q=this.o.orientation.y;if("auto"===q&&(p=-g+o-c,q=p<0?"bottom":"top"),this.picker.addClass("datepicker-orient-"+q),"top"===q?o-=c+parseInt(this.picker.css("padding-top")):o+=l,this.o.rtl){var r=f-(n+m);this.picker.css({top:o,right:r,zIndex:j})}else this.picker.css({top:o,left:n,zIndex:j});return this},_allow_update:!0,update:function(){if(!this._allow_update)return this;var b=this.dates.copy(),c=[],d=!1;return arguments.length?(a.each(arguments,a.proxy(function(a,b){b instanceof Date&&(b=this._local_to_utc(b)),c.push(b)},this)),d=!0):(c=this.isInput?this.element.val():this.element.data("date")||this.inputField.val(),c=c&&this.o.multidate?c.split(this.o.multidateSeparator):[c],delete this.element.data().date),c=a.map(c,a.proxy(function(a){return r.parseDate(a,this.o.format,this.o.language,this.o.assumeNearbyYear)},this)),c=a.grep(c,a.proxy(function(a){return!this.dateWithinRange(a)||!a},this),!0),this.dates.replace(c),this.o.updateViewDate&&(this.dates.length?this.viewDate=new Date(this.dates.get(-1)):this.viewDate<this.o.startDate?this.viewDate=new Date(this.o.startDate):this.viewDate>this.o.endDate?this.viewDate=new Date(this.o.endDate):this.viewDate=this.o.defaultViewDate),d?(this.setValue(),this.element.change()):this.dates.length&&String(b)!==String(this.dates)&&d&&(this._trigger("changeDate"),this.element.change()),!this.dates.length&&b.length&&(this._trigger("clearDate"),this.element.change()),this.fill(),this},fillDow:function(){if(this.o.showWeekDays){var b=this.o.weekStart,c="<tr>";for(this.o.calendarWeeks&&(c+='<th class="cw">&#160;</th>');b<this.o.weekStart+7;)c+='<th class="dow',a.inArray(b,this.o.daysOfWeekDisabled)!==-1&&(c+=" disabled"),c+='">'+q[this.o.language].daysMin[b++%7]+"</th>";c+="</tr>",this.picker.find(".datepicker-days thead").append(c)}},fillMonths:function(){for(var a,b=this._utc_to_local(this.viewDate),c="",d=0;d<12;d++)a=b&&b.getMonth()===d?" focused":"",c+='<span class="month'+a+'">'+q[this.o.language].monthsShort[d]+"</span>";this.picker.find(".datepicker-months td").html(c)},setRange:function(b){b&&b.length?this.range=a.map(b,function(a){return a.valueOf()}):delete this.range,this.fill()},getClassNames:function(b){var c=[],f=this.viewDate.getUTCFullYear(),g=this.viewDate.getUTCMonth(),h=d();return b.getUTCFullYear()<f||b.getUTCFullYear()===f&&b.getUTCMonth()<g?c.push("old"):(b.getUTCFullYear()>f||b.getUTCFullYear()===f&&b.getUTCMonth()>g)&&c.push("new"),this.focusDate&&b.valueOf()===this.focusDate.valueOf()&&c.push("focused"),this.o.todayHighlight&&e(b,h)&&c.push("today"),this.dates.contains(b)!==-1&&c.push("active"),this.dateWithinRange(b)||c.push("disabled"),this.dateIsDisabled(b)&&c.push("disabled","disabled-date"),a.inArray(b.getUTCDay(),this.o.daysOfWeekHighlighted)!==-1&&c.push("highlighted"),this.range&&(b>this.range[0]&&b<this.range[this.range.length-1]&&c.push("range"),a.inArray(b.valueOf(),this.range)!==-1&&c.push("selected"),b.valueOf()===this.range[0]&&c.push("range-start"),b.valueOf()===this.range[this.range.length-1]&&c.push("range-end")),c},_fill_yearsView:function(c,d,e,f,g,h,i){for(var j,k,l,m="",n=e/10,o=this.picker.find(c),p=Math.floor(f/e)*e,q=p+9*n,r=Math.floor(this.viewDate.getFullYear()/n)*n,s=a.map(this.dates,function(a){return Math.floor(a.getUTCFullYear()/n)*n}),t=p-n;t<=q+n;t+=n)j=[d],k=null,t===p-n?j.push("old"):t===q+n&&j.push("new"),a.inArray(t,s)!==-1&&j.push("active"),(t<g||t>h)&&j.push("disabled"),t===r&&j.push("focused"),i!==a.noop&&(l=i(new Date(t,0,1)),l===b?l={}:"boolean"==typeof l?l={enabled:l}:"string"==typeof l&&(l={classes:l}),l.enabled===!1&&j.push("disabled"),l.classes&&(j=j.concat(l.classes.split(/\s+/))),l.tooltip&&(k=l.tooltip)),m+='<span class="'+j.join(" ")+'"'+(k?' title="'+k+'"':"")+">"+t+"</span>";o.find(".datepicker-switch").text(p+"-"+q),o.find("td").html(m)},fill:function(){var d,e,f=new Date(this.viewDate),g=f.getUTCFullYear(),h=f.getUTCMonth(),i=this.o.startDate!==-(1/0)?this.o.startDate.getUTCFullYear():-(1/0),j=this.o.startDate!==-(1/0)?this.o.startDate.getUTCMonth():-(1/0),k=this.o.endDate!==1/0?this.o.endDate.getUTCFullYear():1/0,l=this.o.endDate!==1/0?this.o.endDate.getUTCMonth():1/0,m=q[this.o.language].today||q.en.today||"",n=q[this.o.language].clear||q.en.clear||"",o=q[this.o.language].titleFormat||q.en.titleFormat;if(!isNaN(g)&&!isNaN(h)){this.picker.find(".datepicker-days .datepicker-switch").text(r.formatDate(f,o,this.o.language)),this.picker.find("tfoot .today").text(m).css("display",this.o.todayBtn===!0||"linked"===this.o.todayBtn?"table-cell":"none"),this.picker.find("tfoot .clear").text(n).css("display",this.o.clearBtn===!0?"table-cell":"none"),this.picker.find("thead .datepicker-title").text(this.o.title).css("display","string"==typeof this.o.title&&""!==this.o.title?"table-cell":"none"),this.updateNavArrows(),this.fillMonths();var p=c(g,h,0),s=p.getUTCDate();p.setUTCDate(s-(p.getUTCDay()-this.o.weekStart+7)%7);var t=new Date(p);p.getUTCFullYear()<100&&t.setUTCFullYear(p.getUTCFullYear()),t.setUTCDate(t.getUTCDate()+42),t=t.valueOf();for(var u,v,w=[];p.valueOf()<t;){if(u=p.getUTCDay(),u===this.o.weekStart&&(w.push("<tr>"),this.o.calendarWeeks)){var x=new Date(+p+(this.o.weekStart-u-7)%7*864e5),y=new Date(Number(x)+(11-x.getUTCDay())%7*864e5),z=new Date(Number(z=c(y.getUTCFullYear(),0,1))+(11-z.getUTCDay())%7*864e5),A=(y-z)/864e5/7+1;w.push('<td class="cw">'+A+"</td>")}v=this.getClassNames(p),v.push("day");var B=p.getUTCDate();this.o.beforeShowDay!==a.noop&&(e=this.o.beforeShowDay(this._utc_to_local(p)),e===b?e={}:"boolean"==typeof e?e={enabled:e}:"string"==typeof e&&(e={classes:e}),e.enabled===!1&&v.push("disabled"),e.classes&&(v=v.concat(e.classes.split(/\s+/))),e.tooltip&&(d=e.tooltip),e.content&&(B=e.content)),v=a.isFunction(a.uniqueSort)?a.uniqueSort(v):a.unique(v),w.push('<td class="'+v.join(" ")+'"'+(d?' title="'+d+'"':"")+' data-date="'+p.getTime().toString()+'">'+B+"</td>"),d=null,u===this.o.weekEnd&&w.push("</tr>"),p.setUTCDate(p.getUTCDate()+1)}this.picker.find(".datepicker-days tbody").html(w.join(""));var C=q[this.o.language].monthsTitle||q.en.monthsTitle||"Months",D=this.picker.find(".datepicker-months").find(".datepicker-switch").text(this.o.maxViewMode<2?C:g).end().find("tbody span").removeClass("active");if(a.each(this.dates,function(a,b){b.getUTCFullYear()===g&&D.eq(b.getUTCMonth()).addClass("active")}),(g<i||g>k)&&D.addClass("disabled"),g===i&&D.slice(0,j).addClass("disabled"),g===k&&D.slice(l+1).addClass("disabled"),this.o.beforeShowMonth!==a.noop){var E=this;a.each(D,function(c,d){var e=new Date(g,c,1),f=E.o.beforeShowMonth(e);f===b?f={}:"boolean"==typeof f?f={enabled:f}:"string"==typeof f&&(f={classes:f}),f.enabled!==!1||a(d).hasClass("disabled")||a(d).addClass("disabled"),f.classes&&a(d).addClass(f.classes),f.tooltip&&a(d).prop("title",f.tooltip)})}this._fill_yearsView(".datepicker-years","year",10,g,i,k,this.o.beforeShowYear),this._fill_yearsView(".datepicker-decades","decade",100,g,i,k,this.o.beforeShowDecade),this._fill_yearsView(".datepicker-centuries","century",1e3,g,i,k,this.o.beforeShowCentury)}},updateNavArrows:function(){if(this._allow_update){var a,b,c=new Date(this.viewDate),d=c.getUTCFullYear(),e=c.getUTCMonth(),f=this.o.startDate!==-(1/0)?this.o.startDate.getUTCFullYear():-(1/0),g=this.o.startDate!==-(1/0)?this.o.startDate.getUTCMonth():-(1/0),h=this.o.endDate!==1/0?this.o.endDate.getUTCFullYear():1/0,i=this.o.endDate!==1/0?this.o.endDate.getUTCMonth():1/0,j=1;switch(this.viewMode){case 4:j*=10;case 3:j*=10;case 2:j*=10;case 1:a=Math.floor(d/j)*j<f,b=Math.floor(d/j)*j+j>h;break;case 0:a=d<=f&&e<g,b=d>=h&&e>i}this.picker.find(".prev").toggleClass("disabled",a),this.picker.find(".next").toggleClass("disabled",b)}},click:function(b){b.preventDefault(),b.stopPropagation();var e,f,g,h;e=a(b.target),e.hasClass("datepicker-switch")&&this.viewMode!==this.o.maxViewMode&&this.setViewMode(this.viewMode+1),e.hasClass("today")&&!e.hasClass("day")&&(this.setViewMode(0),this._setDate(d(),"linked"===this.o.todayBtn?null:"view")),e.hasClass("clear")&&this.clearDates(),e.hasClass("disabled")||(e.hasClass("month")||e.hasClass("year")||e.hasClass("decade")||e.hasClass("century"))&&(this.viewDate.setUTCDate(1),f=1,1===this.viewMode?(h=e.parent().find("span").index(e),g=this.viewDate.getUTCFullYear(),this.viewDate.setUTCMonth(h)):(h=0,g=Number(e.text()),this.viewDate.setUTCFullYear(g)),this._trigger(r.viewModes[this.viewMode-1].e,this.viewDate),this.viewMode===this.o.minViewMode?this._setDate(c(g,h,f)):(this.setViewMode(this.viewMode-1),this.fill())),this.picker.is(":visible")&&this._focused_from&&this._focused_from.focus(),delete this._focused_from},dayCellClick:function(b){var c=a(b.currentTarget),d=c.data("date"),e=new Date(d);this.o.updateViewDate&&(e.getUTCFullYear()!==this.viewDate.getUTCFullYear()&&this._trigger("changeYear",this.viewDate),e.getUTCMonth()!==this.viewDate.getUTCMonth()&&this._trigger("changeMonth",this.viewDate)),this._setDate(e)},navArrowsClick:function(b){var c=a(b.currentTarget),d=c.hasClass("prev")?-1:1;0!==this.viewMode&&(d*=12*r.viewModes[this.viewMode].navStep),this.viewDate=this.moveMonth(this.viewDate,d),this._trigger(r.viewModes[this.viewMode].e,this.viewDate),this.fill()},_toggle_multidate:function(a){var b=this.dates.contains(a);if(a||this.dates.clear(),b!==-1?(this.o.multidate===!0||this.o.multidate>1||this.o.toggleActive)&&this.dates.remove(b):this.o.multidate===!1?(this.dates.clear(),this.dates.push(a)):this.dates.push(a),"number"==typeof this.o.multidate)for(;this.dates.length>this.o.multidate;)this.dates.remove(0)},_setDate:function(a,b){b&&"date"!==b||this._toggle_multidate(a&&new Date(a)),(!b&&this.o.updateViewDate||"view"===b)&&(this.viewDate=a&&new Date(a)),this.fill(),this.setValue(),b&&"view"===b||this._trigger("changeDate"),this.inputField.trigger("change"),!this.o.autoclose||b&&"date"!==b||this.hide()},moveDay:function(a,b){var c=new Date(a);return c.setUTCDate(a.getUTCDate()+b),c},moveWeek:function(a,b){return this.moveDay(a,7*b)},moveMonth:function(a,b){if(!g(a))return this.o.defaultViewDate;if(!b)return a;var c,d,e=new Date(a.valueOf()),f=e.getUTCDate(),h=e.getUTCMonth(),i=Math.abs(b);if(b=b>0?1:-1,1===i)d=b===-1?function(){return e.getUTCMonth()===h}:function(){return e.getUTCMonth()!==c},c=h+b,e.setUTCMonth(c),c=(c+12)%12;else{for(var j=0;j<i;j++)e=this.moveMonth(e,b);c=e.getUTCMonth(),e.setUTCDate(f),d=function(){return c!==e.getUTCMonth()}}for(;d();)e.setUTCDate(--f),e.setUTCMonth(c);return e},moveYear:function(a,b){return this.moveMonth(a,12*b)},moveAvailableDate:function(a,b,c){do{if(a=this[c](a,b),!this.dateWithinRange(a))return!1;c="moveDay"}while(this.dateIsDisabled(a));return a},weekOfDateIsDisabled:function(b){return a.inArray(b.getUTCDay(),this.o.daysOfWeekDisabled)!==-1},dateIsDisabled:function(b){return this.weekOfDateIsDisabled(b)||a.grep(this.o.datesDisabled,function(a){return e(b,a)}).length>0},dateWithinRange:function(a){return a>=this.o.startDate&&a<=this.o.endDate},keydown:function(a){if(!this.picker.is(":visible"))return void(40!==a.keyCode&&27!==a.keyCode||(this.show(),a.stopPropagation()));var b,c,d=!1,e=this.focusDate||this.viewDate;switch(a.keyCode){case 27:this.focusDate?(this.focusDate=null,this.viewDate=this.dates.get(-1)||this.viewDate,this.fill()):this.hide(),a.preventDefault(),a.stopPropagation();break;case 37:case 38:case 39:case 40:if(!this.o.keyboardNavigation||7===this.o.daysOfWeekDisabled.length)break;b=37===a.keyCode||38===a.keyCode?-1:1,0===this.viewMode?a.ctrlKey?(c=this.moveAvailableDate(e,b,"moveYear"),c&&this._trigger("changeYear",this.viewDate)):a.shiftKey?(c=this.moveAvailableDate(e,b,"moveMonth"),c&&this._trigger("changeMonth",this.viewDate)):37===a.keyCode||39===a.keyCode?c=this.moveAvailableDate(e,b,"moveDay"):this.weekOfDateIsDisabled(e)||(c=this.moveAvailableDate(e,b,"moveWeek")):1===this.viewMode?(38!==a.keyCode&&40!==a.keyCode||(b*=4),c=this.moveAvailableDate(e,b,"moveMonth")):2===this.viewMode&&(38!==a.keyCode&&40!==a.keyCode||(b*=4),c=this.moveAvailableDate(e,b,"moveYear")),c&&(this.focusDate=this.viewDate=c,this.setValue(),this.fill(),a.preventDefault());break;case 13:if(!this.o.forceParse)break;e=this.focusDate||this.dates.get(-1)||this.viewDate,this.o.keyboardNavigation&&(this._toggle_multidate(e),d=!0),this.focusDate=null,this.viewDate=this.dates.get(-1)||this.viewDate,this.setValue(),this.fill(),this.picker.is(":visible")&&(a.preventDefault(),a.stopPropagation(),this.o.autoclose&&this.hide());break;case 9:this.focusDate=null,this.viewDate=this.dates.get(-1)||this.viewDate,this.fill(),this.hide()}d&&(this.dates.length?this._trigger("changeDate"):this._trigger("clearDate"),this.inputField.trigger("change"))},setViewMode:function(a){this.viewMode=a,this.picker.children("div").hide().filter(".datepicker-"+r.viewModes[this.viewMode].clsName).show(),this.updateNavArrows(),this._trigger("changeViewMode",new Date(this.viewDate))}};var l=function(b,c){a.data(b,"datepicker",this),this.element=a(b),this.inputs=a.map(c.inputs,function(a){return a.jquery?a[0]:a}),delete c.inputs,this.keepEmptyValues=c.keepEmptyValues,delete c.keepEmptyValues,n.call(a(this.inputs),c).on("changeDate",a.proxy(this.dateUpdated,this)),this.pickers=a.map(this.inputs,function(b){return a.data(b,"datepicker")}),this.updateDates()};l.prototype={updateDates:function(){this.dates=a.map(this.pickers,function(a){return a.getUTCDate()}),this.updateRanges()},updateRanges:function(){var b=a.map(this.dates,function(a){return a.valueOf()});a.each(this.pickers,function(a,c){c.setRange(b)})},clearDates:function(){a.each(this.pickers,function(a,b){b.clearDates()})},dateUpdated:function(c){if(!this.updating){this.updating=!0;var d=a.data(c.target,"datepicker");if(d!==b){var e=d.getUTCDate(),f=this.keepEmptyValues,g=a.inArray(c.target,this.inputs),h=g-1,i=g+1,j=this.inputs.length;if(g!==-1){if(a.each(this.pickers,function(a,b){b.getUTCDate()||b!==d&&f||b.setUTCDate(e)}),e<this.dates[h])for(;h>=0&&e<this.dates[h];)this.pickers[h--].setUTCDate(e);else if(e>this.dates[i])for(;i<j&&e>this.dates[i];)this.pickers[i++].setUTCDate(e);this.updateDates(),delete this.updating}}}},destroy:function(){a.map(this.pickers,function(a){a.destroy()}),a(this.inputs).off("changeDate",this.dateUpdated),delete this.element.data().datepicker},remove:f("destroy","Method `remove` is deprecated and will be removed in version 2.0. Use `destroy` instead")};var m=a.fn.datepicker,n=function(c){var d=Array.apply(null,arguments);d.shift();var e;if(this.each(function(){var b=a(this),f=b.data("datepicker"),g="object"==typeof c&&c;if(!f){var j=h(this,"date"),m=a.extend({},o,j,g),n=i(m.language),p=a.extend({},o,n,j,g);b.hasClass("input-daterange")||p.inputs?(a.extend(p,{inputs:p.inputs||b.find("input").toArray()}),f=new l(this,p)):f=new k(this,p),b.data("datepicker",f)}"string"==typeof c&&"function"==typeof f[c]&&(e=f[c].apply(f,d))}),e===b||e instanceof k||e instanceof l)return this;if(this.length>1)throw new Error("Using only allowed for the collection of a single element ("+c+" function)");return e};a.fn.datepicker=n;var o=a.fn.datepicker.defaults={assumeNearbyYear:!1,autoclose:!1,beforeShowDay:a.noop,beforeShowMonth:a.noop,beforeShowYear:a.noop,beforeShowDecade:a.noop,beforeShowCentury:a.noop,calendarWeeks:!1,clearBtn:!1,toggleActive:!1,daysOfWeekDisabled:[],daysOfWeekHighlighted:[],datesDisabled:[],endDate:1/0,forceParse:!0,format:"mm/dd/yyyy",keepEmptyValues:!1,keyboardNavigation:!0,language:"en",minViewMode:0,maxViewMode:4,multidate:!1,multidateSeparator:",",orientation:"auto",rtl:!1,startDate:-(1/0),startView:0,todayBtn:!1,todayHighlight:!1,updateViewDate:!0,weekStart:0,disableTouchKeyboard:!1,enableOnReadonly:!0,showOnFocus:!0,zIndexOffset:10,container:"body",immediateUpdates:!1,title:"",templates:{leftArrow:"&#x00AB;",rightArrow:"&#x00BB;"},showWeekDays:!0},p=a.fn.datepicker.locale_opts=["format","rtl","weekStart"];a.fn.datepicker.Constructor=k;var q=a.fn.datepicker.dates={en:{days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],daysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],daysMin:["Su","Mo","Tu","We","Th","Fr","Sa"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],monthsShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],today:"Today",clear:"Clear",titleFormat:"MM yyyy"}},r={viewModes:[{names:["days","month"],clsName:"days",e:"changeMonth"},{names:["months","year"],clsName:"months",e:"changeYear",navStep:1},{names:["years","decade"],clsName:"years",e:"changeDecade",navStep:10},{names:["decades","century"],clsName:"decades",e:"changeCentury",navStep:100},{names:["centuries","millennium"],clsName:"centuries",e:"changeMillennium",navStep:1e3}],validParts:/dd?|DD?|mm?|MM?|yy(?:yy)?/g,nonpunctuation:/[^ -\/:-@\u5e74\u6708\u65e5\[-`{-~\t\n\r]+/g,parseFormat:function(a){if("function"==typeof a.toValue&&"function"==typeof a.toDisplay)return a;var b=a.replace(this.validParts,"\0").split("\0"),c=a.match(this.validParts);if(!b||!b.length||!c||0===c.length)throw new Error("Invalid date format.");return{separators:b,parts:c}},parseDate:function(c,e,f,g){function h(a,b){return b===!0&&(b=10),a<100&&(a+=2e3,a>(new Date).getFullYear()+b&&(a-=100)),a}function i(){var a=this.slice(0,j[n].length),b=j[n].slice(0,a.length);return a.toLowerCase()===b.toLowerCase()}if(!c)return b;if(c instanceof Date)return c;if("string"==typeof e&&(e=r.parseFormat(e)),e.toValue)return e.toValue(c,e,f);var j,l,m,n,o,p={d:"moveDay",m:"moveMonth",w:"moveWeek",y:"moveYear"},s={yesterday:"-1d",today:"+0d",tomorrow:"+1d"};if(c in s&&(c=s[c]),/^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/i.test(c)){for(j=c.match(/([\-+]\d+)([dmwy])/gi),c=new Date,n=0;n<j.length;n++)l=j[n].match(/([\-+]\d+)([dmwy])/i),m=Number(l[1]),o=p[l[2].toLowerCase()],c=k.prototype[o](c,m);return k.prototype._zero_utc_time(c)}j=c&&c.match(this.nonpunctuation)||[];var t,u,v={},w=["yyyy","yy","M","MM","m","mm","d","dd"],x={yyyy:function(a,b){return a.setUTCFullYear(g?h(b,g):b)},m:function(a,b){if(isNaN(a))return a;for(b-=1;b<0;)b+=12;for(b%=12,a.setUTCMonth(b);a.getUTCMonth()!==b;)a.setUTCDate(a.getUTCDate()-1);return a},d:function(a,b){return a.setUTCDate(b)}};x.yy=x.yyyy,x.M=x.MM=x.mm=x.m,x.dd=x.d,c=d();var y=e.parts.slice();if(j.length!==y.length&&(y=a(y).filter(function(b,c){return a.inArray(c,w)!==-1}).toArray()),j.length===y.length){var z;for(n=0,z=y.length;n<z;n++){if(t=parseInt(j[n],10),l=y[n],isNaN(t))switch(l){case"MM":u=a(q[f].months).filter(i),t=a.inArray(u[0],q[f].months)+1;break;case"M":u=a(q[f].monthsShort).filter(i),t=a.inArray(u[0],q[f].monthsShort)+1}v[l]=t}var A,B;for(n=0;n<w.length;n++)B=w[n],B in v&&!isNaN(v[B])&&(A=new Date(c),x[B](A,v[B]),isNaN(A)||(c=A))}return c},formatDate:function(b,c,d){if(!b)return"";if("string"==typeof c&&(c=r.parseFormat(c)),c.toDisplay)return c.toDisplay(b,c,d);var e={d:b.getUTCDate(),D:q[d].daysShort[b.getUTCDay()],DD:q[d].days[b.getUTCDay()],m:b.getUTCMonth()+1,M:q[d].monthsShort[b.getUTCMonth()],MM:q[d].months[b.getUTCMonth()],yy:b.getUTCFullYear().toString().substring(2),yyyy:b.getUTCFullYear()};e.dd=(e.d<10?"0":"")+e.d,e.mm=(e.m<10?"0":"")+e.m,b=[];for(var f=a.extend([],c.separators),g=0,h=c.parts.length;g<=h;g++)f.length&&b.push(f.shift()),b.push(e[c.parts[g]]);return b.join("")},headTemplate:'<thead><tr><th colspan="7" class="datepicker-title"></th></tr><tr><th class="prev">'+o.templates.leftArrow+'</th><th colspan="5" class="datepicker-switch"></th><th class="next">'+o.templates.rightArrow+"</th></tr></thead>",
contTemplate:'<tbody><tr><td colspan="7"></td></tr></tbody>',footTemplate:'<tfoot><tr><th colspan="7" class="today"></th></tr><tr><th colspan="7" class="clear"></th></tr></tfoot>'};r.template='<div class="datepicker"><div class="datepicker-days"><table class="table-condensed">'+r.headTemplate+"<tbody></tbody>"+r.footTemplate+'</table></div><div class="datepicker-months"><table class="table-condensed">'+r.headTemplate+r.contTemplate+r.footTemplate+'</table></div><div class="datepicker-years"><table class="table-condensed">'+r.headTemplate+r.contTemplate+r.footTemplate+'</table></div><div class="datepicker-decades"><table class="table-condensed">'+r.headTemplate+r.contTemplate+r.footTemplate+'</table></div><div class="datepicker-centuries"><table class="table-condensed">'+r.headTemplate+r.contTemplate+r.footTemplate+"</table></div></div>",a.fn.datepicker.DPGlobal=r,a.fn.datepicker.noConflict=function(){return a.fn.datepicker=m,this},a.fn.datepicker.version="1.8.0",a.fn.datepicker.deprecated=function(a){var b=window.console;b&&b.warn&&b.warn("DEPRECATED: "+a)},a(document).on("focus.datepicker.data-api click.datepicker.data-api",'[data-provide="datepicker"]',function(b){var c=a(this);c.data("datepicker")||(b.preventDefault(),n.call(c,"show"))}),a(function(){n.call(a('[data-provide="datepicker-inline"]'))})});
var postLoginUrl = baseUrl + 'user/login';
var postLogoutUrl = baseUrl + 'user/logout';
var postAuththenticateUrl = baseUrl + 'user/validate';
var getReportUrl = baseUrl + 'report';
var getCollectionsUrl = baseUrl + 'posts';
var getCollectionsByFilterUrl = baseUrl + 'posts/filter';
var getCollectionUrl = baseUrl + 'post/';
var deleteCollectionUrl = baseUrl + 'post/';
var getAllCategoriesUrl = baseUrl + 'categories/all';
var getAllCategoriesUrl = baseUrl + 'categories/all';
var uploadCollectionDataUrl = baseUrl + 'post';
var uploadCollectionImageUrl = baseUrl + 'post/';
var uploadCollectionVideoUrl = baseUrl + 'post/';
var getRewardsUrl = baseUrl + 'rewards';
var getUsersUrl = baseUrl + 'users';
var getUserCollectionsUrl= baseUrl + 'user/';
var updatePostViewed = baseUrl + 'user/post/viewed';
var getUsersReportURL = baseUrl + 'reports/users';
var getImagesReportURL = baseUrl + 'reports/images';
var updateUserUrl = baseUrl + 'reports/user/';
var getImageStatsUrl = baseUrl + 'reports/stats/images';
var getImagesStatusUrl = baseUrl + 'reports/stats/images/status';
var getRewardStatsUrl = baseUrl + 'reports/stats/rewards';
var getLatestPostsUrl = baseUrl + 'reports/latest-posts';
var getRewardSettingsUrl = baseUrl + 'reports/settings/reward';

$.ajaxSetup({
    beforeSend: function (xhr) {
        xhr.setRequestHeader("Accept", "application/json");
        $user = $.cookie('authUser') ? JSON.parse($.cookie('authUser')) : null;
        if($user !== null) {
            xhr.setRequestHeader("X-Access-Token", $user.token);
        }
    }
});
var login_xhr = null;
var logout_xhr = null;
var authenticate_xhr = null;
var getUserReport_xhr = null;
var getCollections_xhr = null;
var getCollection_xhr = null;
var deleteCollection_xhr = null;
var searchCollections_xhr = null;
var getUserRewards_xhr = null;
var getUsers_xhr = null;
var getUserCollections_xhr = null;
var updateUserCollection_xhr = null;
var markCollectionViewed_xhr = null;
var getUserCollectionsByFilter_xhr = null;
var getUsersReport_xhr = null;
var getImagesReport_xhr = null;
var updateUser_xhr = null;
var getImageStats_xhr = null;
var getImagesStatus_xhr = null;
var getRewardStats_xhr = null;
var getRewardSettings_xhr = null;
function login($form) {
	if(login_xhr == null) {
		var data = {
			'username': $form.find('input[name="username"]').val(),
			'password': $form.find('input[name="password"]').val()
		}
		login_xhr = $.post({
			url: postLoginUrl,
			data: data,
			dataType: 'json'
		}).done(function(data) {
			$.cookie('authUser', JSON.stringify(data.user), { expires: 30, path: '/' });
			$.removeCookie('authenticate', { path: '/' });
			$authUser = data.user;
			$('#username').html('Hi, ' + $authUser.name + '!');
			toastr.success("Logged in successfully!");
			window.location.reload();
		}).fail(function(data) {
		 	if(data.status == 400 || data.status == 401) {
		 		toastr.error(data.responseJSON.error);
		 		$.removeCookie('authUser', { path: '/' });
		 	}
		}).always(function() {
			login_xhr = null
			$form.find('.loading-overlay').hide();
		});
	}
}
function logout() {
	if(logout_xhr == null) {
		logout_xhr = $.post({
			url: postLogoutUrl,
			dataType: 'json'
		}).always(function() {
			logout_xhr = null
			$.removeCookie('authUser', { path: '/' });
			$.removeCookie('authenticate', { path: '/' });
			window.location = '#auth-login';
		});
	}
}
function authenticate() {
	if(authenticate_xhr != null) {
		authenticate_xhr.abort();
		authenticate_xhr = null;
	}
	authenticate_xhr = $.get({
		url: postAuththenticateUrl,
		dataType: 'json'
	}).done(function(data) {
		$.cookie('authUser', JSON.stringify(data.user), { expires: 30, path: '/' });
		$authUser = data.user;
		$('#username').html('Hi, ' + $authUser.name + '!');
		getRequestedHash();
	}).fail(function(data) {
	 	if(data.status == 400 || data.status == 401) {
	 		toastr.warning("Token expired!");
	 		$.removeCookie('authUser', { path: '/' });
	 		$.removeCookie('authenticate', { path: '/' });
	 		window.location.reload();
	 	}
	}).always(function() {
		authenticate_xhr = null
		$(document).find('#validate-screen').remove();
	});
}
function getUserReport() {
	if(getUserReport_xhr == null) {
		$('#userHomePage').find('.navbar').append('<div class="loader-indeterminate position-absolute position-bottom-left"></div>');
		getUserReport_xhr = $.get({
			url: getReportUrl,
			dataType: 'json'
		}).done(function(data) {
			userHomeReport(data);
		}).fail(function(data) {
		 	if(data.status == 400 || data.status == 401) {
		 		toastr.warning("Token expired!");
		 		$.removeCookie('authUser', { path: '/' });
		 		$.removeCookie('authenticate', { path: '/' });
		 		window.location.reload();
		 	}
		}).always(function() {
			getUserReport_xhr = null
			$('#userHomePage').find('.loader-indeterminate').remove();
		});
	}
}
function getCollections($page) {
	if(getCollections_xhr == null) {
		$filterApplied = 0;
		if($page == 1) {
			$('#userCollectionsPage').find('#collections').html($collectionLoader);
		} else {
			$('#userCollectionsPage').find('#collections').append($collectionLoader);
		}
		getCollections_xhr = $.get({
			url: getCollectionsUrl + '?page=' + $page,
			dataType: 'json'
		}).done(function(data) {
			if($page == 1) {
				renderCollections(0, data);
			} else {
				renderCollections(1, data);
			}
		}).fail(function(data) {
		 	if(data.status == 400 || data.status == 401) {
		 		toastr.warning("Token expired!");
		 		$.removeCookie('authUser', { path: '/' });
		 		$.removeCookie('authenticate', { path: '/' });
		 		window.location.reload();
		 	}
		}).always(function() {
			getCollections_xhr = null
		});
	}
}
function getCollectionsByFilter($filters, $page) {
	if(getCollections_xhr == null) {
		$filterApplied = 1;
		if($page == 1) {
			$('#userCollectionsPage').find('#collections').html($collectionLoader);
		} else {
			$('#userCollectionsPage').find('#collections').append($collectionLoader);
		}
		getCollections_xhr = $.post({
			url: getCollectionsByFilterUrl + '?page=' + $page,
			dataType: 'json',
			data: $filters,
		}).done(function(data) {
			if($page == 1) {
				renderCollections(0, data);
			} else {
				renderCollections(1, data);
			}
		}).fail(function(data) {
		 	if(data.status == 400 || data.status == 401) {
		 		toastr.warning("Token expired!");
		 		$.removeCookie('authUser', { path: '/' });
		 		$.removeCookie('authenticate', { path: '/' });
		 		window.location.reload();
		 	}
		}).always(function() {
			getCollections_xhr = null
		});
	}
}
function searchCollections($q, $page) {
	if(searchCollections_xhr !== null) {
		searchCollections_xhr.abort();
		searchCollections_xhr = null;
	}
	$filterApplied = 2;
	if($page == 1) {
		$('#userCollectionsPage').find('#collections').html($collectionLoader);
	} else {
		$('#userCollectionsPage').find('#collections').append($collectionLoader);
	}
	searchCollections_xhr = $.get({
		url: getCollectionsUrl + '?q=' + $q + '&page=' + $page,
		dataType: 'json'
	}).done(function(data) {
		if($page == 1) {
			renderCollections(0, data);
		} else {
			renderCollections(1, data);
		}
	}).fail(function(data) {
	 	if(data.status == 400 || data.status == 401) {
	 		toastr.warning("Token expired!");
	 		$.removeCookie('authUser', { path: '/' });
	 		$.removeCookie('authenticate', { path: '/' });
	 		window.location.reload();
	 	}
	}).always(function() {
		searchCollections_xhr = null
	});
}
function getCollection($id) {
	$('#userCollectionPage').find('a.delete-collection-btn').remove();
	if(getCollection_xhr != null) {
		getCollection_xhr.abort();
		getCollection_xhr = null;
	}
	$('#userCollectionPage').find('#collection').html($collectionLoader);
	getCollection_xhr = $.get({
		url: getCollectionUrl + $id,
		dataType: 'json'
	}).done(function(data) {
		renderCollection(data);
	}).fail(function(data) {
	 	if(data.status == 400 || data.status == 401) {
	 		toastr.warning("Token expired!");
	 		$.removeCookie('authUser', { path: '/' });
	 		$.removeCookie('authenticate', { path: '/' });
	 		window.location.reload();
	 	}
	}).always(function() {
		getCollection_xhr = null
	});
}
function deleteCollection($id) {
	if(deleteCollection_xhr === null) {
		deleteCollection_xhr = $.ajax({
			url: deleteCollectionUrl + $id,
			dataType: 'json',
			type: 'delete'
		}).done(function(data) {
			$('#userCollectionPage').removeClass('active');
			setTimeout(function() {
				$('#collection-'+$id).slideUp('fast', function() {
					$(this).remove();
				});
			}, 300);
			toastr.success(data.success);
		}).fail(function(data) {
		 	if(data.status == 400 || data.status == 401) {
		 		toastr.warning("Token expired!");
		 		$.removeCookie('authUser', { path: '/' });
		 		$.removeCookie('authenticate', { path: '/' });
		 		window.location.reload();
		 	}
		}).always(function() {
			deleteCollection_xhr = null
		});
	}
}
function getAllCategories() {
	$.get({
		url: getAllCategoriesUrl,
		dataType: 'json'
	}).done(function(data) {
		$categories = data;
		getCollectionFilters();
	});
}
function uploadFormData($data) {
	$.post({
		url: uploadCollectionDataUrl,
		data: $data,
		dataType: 'json'
	}).fail(function(data) {
	 	if(data.status == 400 || data.status == 401) {
	 		toastr.warning("Token expired!");
	 		$.removeCookie('authUser', { path: '/' });
	 		$.removeCookie('authenticate', { path: '/' });
	 		window.location.reload();
	 	}
	}).done(function(data) {
		$id = data.id;
		setProgressBar();
		uploadFormImages(0, $id);
	});
}
function uploadFormImages($index, $id) {
	$imagesCount = $images.length - 1;
	if($images[$index].fileType == 'image') {
		var formData = new FormData();
        formData.append('image', $images[$index]);
		$.post({
			url: uploadCollectionImageUrl + $id + '/upload-image',
			data: formData,
			dataType: 'json',
			cache: false,
		    contentType: false,
		    processData: false,
		}).done(function(data) {
			setProgressBar();
			$index = $index + 1;
			if($index <= $imagesCount) {
				uploadFormImages($index, $id);
			} else {
				getLastUploadedCollection($id);
				toastr.success("Collection uploaded successfully!");
				setTimeout(function() {
					$('#uploading-overlay').hide();
					$('#createCollectionPage').removeClass('active');
				}, 200);
			}
		}).fail(function(data) {
		 	if(data.status == 400 || data.status == 401) {
		 		toastr.warning("Token expired!");
		 		$.removeCookie('authUser', { path: '/' });
		 		$.removeCookie('authenticate', { path: '/' });
		 		window.location.reload();
		 	}
		});
	} else if($images[$index].fileType == 'video') {
		var $video = [];
		$video.push($images[$index]);
		$.post({
			url: uploadCollectionVideoUrl + $id + '/upload-video',
			data: { videos: $video },
			dataType: 'json'
		}).done(function(data) {
			setProgressBar();
			$index = $index + 1;
			if($index <= $imagesCount) {
				uploadFormImages($index, $id);
			} else {
				getLastUploadedCollection($id);
				toastr.success("Collection uploaded successfully!");
				setTimeout(function() {
					$('#uploading-overlay').hide();
					$('#createCollectionPage').removeClass('active');
				}, 200);
			}
		}).fail(function(data) {
		 	if(data.status == 400 || data.status == 401) {
		 		toastr.warning("Token expired!");
		 		$.removeCookie('authUser', { path: '/' });
		 		$.removeCookie('authenticate', { path: '/' });
		 		window.location.reload();
		 	}
		});
	}
}
function getLastUploadedCollection($id) {
	$.get({
		url: getCollectionUrl + $id,
		dataType: 'json'
	}).done(function(data) {
		$tempData = [];
		$tempData.push(data);
		$data = {};
		$data.last_page = 1;
		$data.current_page = 1;
		$data.data = $tempData;
		renderCollections(2, $data);
	}).fail(function(data) {
	 	if(data.status == 400 || data.status == 401) {
	 		toastr.warning("Token expired!");
	 		$.removeCookie('authUser', { path: '/' });
	 		$.removeCookie('authenticate', { path: '/' });
	 		window.location.reload();
	 	}
	});
}
function getUserRewards() {
	if(getUserRewards_xhr == null) {
		$('#userRewardsPage').find('#rewards').html($collectionLoader);
		getUserRewards_xhr = $.get({
			url: getRewardsUrl,
			dataType: 'json'
		}).done(function(data) {
			renderUserRewards(data);
		}).fail(function(data) {
		 	if(data.status == 400 || data.status == 401) {
		 		toastr.warning("Token expired!");
		 		$.removeCookie('authUser', { path: '/' });
		 		$.removeCookie('authenticate', { path: '/' });
		 		window.location.reload();
		 	}
		}).always(function() {
			getUserRewards_xhr = null;
		});
	}
}
function getUsers($search) {
	if(getUsers_xhr !== null) {
		getUsers_xhr.abort();
		getUsers_xhr = null;
	}
	$('#adminHomePage').find('#usersList .user-list ul.users').html('<li><div class="m-5 collection-loading"><div class="signal position-relative" style="top: 0; left: 0; margin: 0 auto;"></div></div></li>');
	getUsers_xhr = $.get({
		url: getUsersUrl,
		dataType: 'json'
	}).done(function(data) {
		admin.setUsers(data);
		admin.renderUsers(data);
	}).fail(function(data) {
	 	if(data.status == 400 || data.status == 401) {
	 		toastr.warning("Token expired!");
	 		$.removeCookie('authUser', { path: '/' });
	 		$.removeCookie('authenticate', { path: '/' });
	 		window.location.reload();
	 	}
	}).always(function() {
		getUsers_xhr = null;
	});
}
function getUserCollections($user_id, $page, $searchTerm) {
	if(getUserCollections_xhr !== null) {
		getUserCollections_xhr.abort();
		getUserCollections_xhr = null;
	}
	$url = getUserCollectionsUrl + $user_id + '/posts?page=' + $page;
	if($searchTerm.replace(/\s/g, '').length > 0) {
		$url += '&q=' + $searchTerm;
		admin.setFilterType(1);
	} else {
		admin.setFilterType(0);
	}
	if($page > 1) {
		$('#userCollections .user-collections-list').append('<div class="m-5 collection-loading"><div class="signal position-relative" style="top: 0; left: 0; margin: 0 auto;"></div></div>');
	} else {
		$('#userCollections .user-collections-list').html('<div class="m-5 collection-loading"><div class="signal position-relative" style="top: 0; left: 0; margin: 0 auto;"></div></div>');
	}
	getUserCollections_xhr = $.get({
		url: $url,
		dataType: 'json'
	}).done(function(data) {
		admin.setCollections(data);
		admin.renderUserCollections(data);
	}).fail(function(data) {
	 	if(data.status == 400 || data.status == 401) {
	 		toastr.warning("Token expired!");
	 		$.removeCookie('authUser', { path: '/' });
	 		$.removeCookie('authenticate', { path: '/' });
	 		window.location.reload();
	 	}
	}).always(function() {
		getUserCollections_xhr = null;
	});
}
function getUserCollectionsByFilter($user_id, $page, $filters) {
	if(getUserCollectionsByFilter_xhr !== null) {
		getUserCollectionsByFilter_xhr.abort();
		getUserCollectionsByFilter_xhr = null;
	}
	$url = getUserCollectionsUrl + $user_id + '/posts/filters?page=' + $page;
	admin.setFilterType(2);
	
	if($page > 1) {
		$('#userCollections .user-collections-list').append('<div class="m-5 collection-loading"><div class="signal position-relative" style="top: 0; left: 0; margin: 0 auto;"></div></div>');
	} else {
		$('#userCollections .user-collections-list').html('<div class="m-5 collection-loading"><div class="signal position-relative" style="top: 0; left: 0; margin: 0 auto;"></div></div>');
	}
	getUserCollectionsByFilter_xhr = $.post({
		url: $url,
		data: $filters,
		dataType: 'json'
	}).done(function(data) {
		admin.setCollections(data);
		admin.renderUserCollections(data);
	}).fail(function(data) {
	 	if(data.status == 400 || data.status == 401) {
	 		toastr.warning("Token expired!");
	 		$.removeCookie('authUser', { path: '/' });
	 		$.removeCookie('authenticate', { path: '/' });
	 		window.location.reload();
	 	}
	}).always(function() {
		getUserCollectionsByFilter_xhr = null;
	});
}
function updateCollection(userId, postId, data) {
	if(updateUserCollection_xhr === null) {
		updateUserCollection_xhr = $.ajax({
			url: getUserCollectionsUrl + $userId + '/post/' + postId,
			data: data,
			dataType: 'json',
			type: 'put'
		}).done(function(data) {
			admin.updateSelectedCollection(data.post);
			if(data.status == true) {
				getUserById($userId)
				toastr.success("Collection updated successfully!");
			} else {
				toastr.warning("Unable to update collection, Please try again!");
			}
		}).fail(function(data) {
		 	if(data.status == 400 || data.status == 401) {
		 		toastr.warning("Token expired!");
		 		$.removeCookie('authUser', { path: '/' });
		 		$.removeCookie('authenticate', { path: '/' });
		 		window.location.reload();
		 	}
		}).always(function() {
			updateUserCollection_xhr = null
		});
	}
}
function markCollectionViewed($postId) {
	markCollectionViewed_xhr = $.ajax({
		url: updatePostViewed,
		data: { id: $postId },
		dataType: 'json',
		type: 'put'
	}).done(function(data) {
		if(data.status == true) {
			admin.updateCollectionViewed($postId);
		}
	}).fail(function(data) {
	 	if(data.status == 400 || data.status == 401) {
	 		toastr.warning("Token expired!");
	 		$.removeCookie('authUser', { path: '/' });
	 		$.removeCookie('authenticate', { path: '/' });
	 		window.location.reload();
	 	}
	}).always(function() {
		markCollectionViewed_xhr = null
	});
}
function getFilterCategories() {
	$.get({
		url: getAllCategoriesUrl,
		dataType: 'json'
	}).fail(function(data) {
	 	if(data.status == 400 || data.status == 401) {
	 		toastr.warning("Token expired!");
	 		$.removeCookie('authUser', { path: '/' });
	 		$.removeCookie('authenticate', { path: '/' });
	 		window.location.reload();
	 	}
	}).done(function(data) {
		admin.setCategories(data);
		admin.getCollectionFilters();
	});
}
function getUserById($userId) {
	$.get({
		url: getUsersUrl + '?user_id=' + $userId,
		dataType: 'json'
	}).fail(function(data) {
	 	if(data.status == 400 || data.status == 401) {
	 		toastr.warning("Token expired!");
	 		$.removeCookie('authUser', { path: '/' });
	 		$.removeCookie('authenticate', { path: '/' });
	 		window.location.reload();
	 	}
	}).done(function(data) {
		admin.updateUser(data[0]);
	});
}
function getUsersReport($page, $searchTerm) {
	$url = getUsersReportURL + '?page=' + $page;
	if($searchTerm.replace(/\s/g, '').length > 0) {
		$url += '&q=' + $searchTerm;
		reporting.setFilterType(1);
	} else {
		reporting.setFilterType(0);
	}
	$('#reportsUsersPage table tbody').html('<tr><td colspan="6"><div class="mt-3"><div class="signal position-relative" style="top: 0; left: 0; margin: 0 auto;"></div></div></td></tr>');
	$('#reportsUsersPage table tfoot').html('');
	if(getUsersReport_xhr !== null) {
		getUsersReport_xhr.abort();
		getUsersReport_xhr = null;
	}
	getUsersReport_xhr = $.get({
		url: $url,
		dataType: 'json'
	}).done(function(data) {
		reporting.renderUsers(data);
	}).fail(function(data) {
	 	if(data.status == 400 || data.status == 401) {
	 		toastr.warning("Token expired!");
	 		$.removeCookie('authUser', { path: '/' });
	 		$.removeCookie('authenticate', { path: '/' });
	 		window.location.reload();
	 	}
	}).always(function() {
		getUsersReport_xhr = null;
	});
}
function getUsersReportByFilters($page, $filters) {
	reporting.setFilterType(2);
	$url = getUsersReportURL + '/filters?page=' + $page;
	$('#reportsUsersPage table tbody').html('<tr><td colspan="6"><div class="mt-3"><div class="signal position-relative" style="top: 0; left: 0; margin: 0 auto;"></div></div></td></tr>');
	$('#reportsUsersPage table tfoot').html('');
	if(getUsersReport_xhr !== null) {
		getUsersReport_xhr.abort();
		getUsersReport_xhr = null;
	}
	getUsersReport_xhr = $.post({
		url: $url,
		data: $filters,
		dataType: 'json'
	}).done(function(data) {
		reporting.renderUsers(data);
	}).fail(function(data) {
	 	if(data.status == 400 || data.status == 401) {
	 		toastr.warning("Token expired!");
	 		$.removeCookie('authUser', { path: '/' });
	 		$.removeCookie('authenticate', { path: '/' });
	 		window.location.reload();
	 	}
	}).always(function() {
		getUsersReport_xhr = null;
	});
}
function getImagesReport($page, $searchTerm, $filters) {
	if($page == 1) {
		$('#reportsImagesPage #reportImages').html('<div class="mt-3 w-100 reports-image-loader"><div class="signal position-relative" style="top: 0; left: 0; margin: 0 auto;"></div></div>');
	} else {
		$('#reportsImagesPage #reportImages').append('<div class="mt-3 w-100 reports-image-loader"><div class="signal position-relative" style="top: 0; left: 0; margin: 0 auto;"></div></div>');
	}
	$url = getImagesReportURL + '?page=' + $page;
	if($searchTerm.replace(/\s/g, '').length > 0) {
		$url += '&q=' + $searchTerm;
		reporting.setImagesFilterType(1);
	} else if($.isEmptyObject($filters) == false) {
		reporting.setImagesFilterType(2);
	} else {
		reporting.setImagesFilterType(0);
	}
	if(getImagesReport_xhr !== null) {
		getImagesReport_xhr.abort();
		getImagesReport_xhr = null;
	}
	getImagesReport_xhr = $.get({
		url: $url,
		data: $filters,
		dataType: 'json'
	}).done(function(data) {
		reporting.renderImages(data);
	}).fail(function(data) {
	 	if(data.status == 400 || data.status == 401) {
	 		toastr.warning("Token expired!");
	 		$.removeCookie('authUser', { path: '/' });
	 		$.removeCookie('authenticate', { path: '/' });
	 		window.location.reload();
	 	}
	}).always(function() {
		getImagesReport_xhr = null;
	});
}
function getImagesFilterCategories() {
	$.get({
		url: getAllCategoriesUrl,
		dataType: 'json'
	}).done(function(data) {
		reporting.setCategories(data);
		reporting.getImageFilters();
	}).fail(function(data) {
	 	if(data.status == 400 || data.status == 401) {
	 		toastr.warning("Token expired!");
	 		$.removeCookie('authUser', { path: '/' });
	 		$.removeCookie('authenticate', { path: '/' });
	 		window.location.reload();
	 	}
	});
}
function updateUser() {
	$('#userSettingDialog').modal('hide');
	$userId = $('#userSettingDialog input[name="user_id"]').val();
	$('#reportsUsersPage').find('.navbar').append('<div class="loader-indeterminate position-absolute position-bottom-left"></div>');
	if($userId > 0) {
		if(updateUser_xhr == null) {
			$data = {
				role: $('#userSettingDialog select[name="role"]').val(),
				status: $('#userSettingDialog select[name="status"]').val()
			};

			updateUser_xhr = $.ajax({
				url: updateUserUrl + $userId,
				data: $data,
				dataType: 'json',
				type: 'put'
			}).done(function(data) {
				$data.user_id = $userId;
				$data.response = data;
				reporting.userUpdated($data);
			}).fail(function(data) {
			 	if(data.status == 400 || data.status == 401) {
			 		toastr.warning("Token expired!");
			 		$.removeCookie('authUser', { path: '/' });
			 		$.removeCookie('authenticate', { path: '/' });
			 		window.location.reload();
			 	}
			}).always(function() {
				updateUser_xhr = null
			});
		}
	}
}
function getImageStats($filters) {
	if(getImageStats_xhr !== null) {
		getImageStats_xhr.abort();
		getImageStats_xhr = null;
	}
	getImageStats_xhr = $.get({
		url: getImageStatsUrl,
		data: $filters,
		dataType: 'json'
	}).done(function(data) {
		reporting.renderImageStats(data);
	}).fail(function(data) {
	 	if(data.status == 400 || data.status == 401) {
	 		toastr.warning("Token expired!");
	 		$.removeCookie('authUser', { path: '/' });
	 		$.removeCookie('authenticate', { path: '/' });
	 		window.location.reload();
	 	}
	}).always(function() {
		getImageStats_xhr = null;
	});
}
function getImagesStatus($filters) {
	$('#reportsHomePage #reportStats .images-status .card-body #imagesStatusChart').html('<div><div class="signal position-relative" style="top: 0; left: 0; margin: 0 auto;"></div></div>');
	if(getImagesStatus_xhr !== null) {
		getImagesStatus_xhr.abort();
		getImagesStatus_xhr = null;
	}
	getImagesStatus_xhr = $.get({
		url: getImagesStatusUrl,
		data: $filters,
		dataType: 'json'
	}).done(function(data) {
		reporting.renderImagesStatus(data);
	}).fail(function(data) {
	 	if(data.status == 400 || data.status == 401) {
	 		toastr.warning("Token expired!");
	 		$.removeCookie('authUser', { path: '/' });
	 		$.removeCookie('authenticate', { path: '/' });
	 		window.location.reload();
	 	}
	}).always(function() {
		getImagesStatus_xhr = null;
	});
}
function getRewardStats($filters) {
	$('#reportsHomePage #reportStats .reward-stats .card-body .reward-stats-text').html('<div><div class="signal position-relative" style="top: 0; left: 0; margin: 0 auto;"></div></div>');
	if(getRewardStats_xhr !== null) {
		getRewardStats_xhr.abort();
		getRewardStats_xhr = null;
	}
	getRewardStats_xhr = $.get({
		url: getRewardStatsUrl,
		data: $filters,
		dataType: 'json'
	}).done(function(data) {
		reporting.renderRewardStats(data);
	}).fail(function(data) {
	 	if(data.status == 400 || data.status == 401) {
	 		toastr.warning("Token expired!");
	 		$.removeCookie('authUser', { path: '/' });
	 		$.removeCookie('authenticate', { path: '/' });
	 		window.location.reload();
	 	}
	}).always(function() {
		getRewardStats_xhr = null;
	});
}
function getTopApprovedImages() {
	if(getImagesReport_xhr !== null) {
		getImagesReport_xhr.abort();
		getImagesReport_xhr = null;
	}
	var $status = [];
	$status.push(1);
	var $type = [];
	$type.push('I');
	getImagesReport_xhr = $.get({
		url: getImagesReportURL,
		data: { status: $status, type: $type },
		dataType: 'json'
	}).done(function(data) {
		reporting.renderTopImages(data);
	}).fail(function(data) {
	 	if(data.status == 400 || data.status == 401) {
	 		toastr.warning("Token expired!");
	 		$.removeCookie('authUser', { path: '/' });
	 		$.removeCookie('authenticate', { path: '/' });
	 		window.location.reload();
	 	}
	}).always(function() {
		getImagesReport_xhr = null;
	});
}
function getTopUsers() {
	$url = getUsersReportURL + '?sort=total_images&order=DESC';
	if(getUsersReport_xhr !== null) {
		getUsersReport_xhr.abort();
		getUsersReport_xhr = null;
	}
	getUsersReport_xhr = $.get({
		url: $url,
		dataType: 'json'
	}).done(function(data) {
		reporting.renderTopUsers(data);
	}).fail(function(data) {
	 	if(data.status == 400 || data.status == 401) {
	 		toastr.warning("Token expired!");
	 		$.removeCookie('authUser', { path: '/' });
	 		$.removeCookie('authenticate', { path: '/' });
	 		window.location.reload();
	 	}
	}).always(function() {
		getUsersReport_xhr = null;
	});
}
function getRewardSettings() {
	$('#reportsSettingsPage').find('.navbar').append('<div class="loader-indeterminate position-absolute position-bottom-left"></div>');
	if(getRewardSettings_xhr !== null) {
		getRewardSettings_xhr.abort();
		getRewardSettings_xhr = null;
	}
	getRewardSettings_xhr = $.get({
		url: getRewardSettingsUrl,
		dataType: 'json'
	}).done(function(data) {
		reporting.renderRewardSettings(data);
	}).fail(function(data) {
	 	if(data.status == 400 || data.status == 401) {
	 		toastr.warning("Token expired!");
	 		$.removeCookie('authUser', { path: '/' });
	 		$.removeCookie('authenticate', { path: '/' });
	 		window.location.reload();
	 	}
	}).always(function() {
		getRewardSettings_xhr = null;
	});
}
function updateRewardSettings() {
	if(validateForm($('#reportsSettingsPage #rewardSetting'))) {
		$('#reportsSettingsPage').find('.navbar').append('<div class="loader-indeterminate position-absolute position-bottom-left"></div>');
		if(getRewardSettings_xhr == null) {
			getRewardSettings_xhr = $.ajax({
				url: getRewardSettingsUrl,
				dataType: 'json',
				data: $('#reportsSettingsPage #rewardSetting input[type="number"]'),
				type: 'put'
			}).done(function(data) {
				toastr.success(data.message);
			}).fail(function(data) {
			 	if(data.status == 400 || data.status == 401) {
			 		toastr.warning("Token expired!");
			 		$.removeCookie('authUser', { path: '/' });
			 		$.removeCookie('authenticate', { path: '/' });
			 		window.location.reload();
			 	}
			}).always(function() {
				getRewardSettings_xhr = null;
				$('#reportsSettingsPage').find('.loader-indeterminate').remove();
			});
		}
	}
}
var $url = window.location.href;
var $requestedHash = '';
var $authenticateScreen = '<div id="validate-screen"><div class="container h-100 d-flex flex-column align-items-center justify-content-center"><div class="mb-5 position-relative brand-logo"><img src="assets/images/logo-lg.png"><span>Fotomine</span></div><div><div class="signal position-relative mx-auto"></div></div></div></div>';
var templateLoader = function($template) {
    $container = $('#pages .body');
    $template = $template.replace('-', '/');
    $container.load('pages/'+$template+'.html', 
        function (responseText, textStatus, XMLHttpRequest) {
            if(XMLHttpRequest.status == 404) {
                $container.load('pages/not_found.html');
            }
        }
    );
}
var authMiddleWare = function($page) {
    $authUser = $.cookie('authUser') ? JSON.parse($.cookie('authUser')) : null;
    if($authUser === null) {
        window.location = "#auth-login";
    } else {
        if($page.length == 0) {
            $page = 'user-home';
        } else {
            $path = $page.split('-');
            if($path[0] !== undefined) {
                if($authUser.role == 1) {
                    if($path[0] == 'admin' || $path[0] == 'reports') {
                        $page = 'permission';
                    }
                } else if($authUser.role == 2) {
                    if($path[0] == 'reports') {
                        $page = 'permission';
                    }
                }
            }
        }
    }
    return $page;
}
var getRequestedHash = function() {
    if($authUser === null) {
        $requestedHash = "auth-login";
    } else if($.isEmptyObject($authUser) == false && window.location.hash == '#auth-login') {
        $requestedHash = 'user-home';
    } else {
        if(window.location.hash) {
            $requestedHash = window.location.hash.substring(1);
        } else {
            $requestedHash = 'user-home';
        }
        
        $requestedHash = authMiddleWare($requestedHash);
    }
    
    templateLoader($requestedHash);
}

$authUser = $.cookie('authUser') ? JSON.parse($.cookie('authUser')) : null;
$authenticate = $.cookie('authenticate');
if($authenticate == 1) {
    $('#app').append($authenticateScreen);
    authenticate();
} else {
    getRequestedHash();
}
$(document).on('click', 'a', function(e) {
    if(e.button == 0) {
        if(typeof $(this).attr('href') !== 'undefined') {
            $href = $(this).attr('href');
            $hash = $href.charAt(0);
            if($hash == '#') {
                closeMenu();
                $requestedHash = $href.substring(1);
                $requestedHash = authMiddleWare($requestedHash);
                templateLoader($requestedHash);
            }
        }
    }
});
var $header, $footer, $menu, $menuToggler;
var $categories = [];

toastr.options = {
  "closeButton": false,
  "debug": false,
  "newestOnTop": true,
  "progressBar": false,
  "positionClass": "toast-bottom-center",
  "preventDuplicates": false,
  "onclick": null,
  "showDuration": "300",
  "hideDuration": "1000",
  "timeOut": "5000",
  "extendedTimeOut": "1000",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut"
}

var componentLoader = function($target, $component) {
    $target.load('components/'+$component+'.html', function() {
        $menuToggler = $('button#menuToggler');
        if($authUser == null) {
            $menuToggler.hide();
        }
    });
}
var openMenu = function() {
    $menu = $('#menu');
    $menu.children('.menu-overlay').fadeIn('fast');
    setTimeout(function() {
        $menu.children('.menu').addClass('active');
    }, 100);
}
var closeMenu = function() {
    $menu = $('#menu');
    $menu.children('.menu').removeClass('active');
    setTimeout(function() {
        $menu.children('.menu-overlay').fadeOut('fast');
    }, 100);
}
var validateForm = function($form) {
    $errors = [];
    $form.find('.required').each(function() {
        $type = $(this).attr('data-field-type');
        $field = $(this).attr('data-field-name');
        $val = $(this).val();
        switch($type) {
            case 'select':
                if($val == '*' || $val == '') {
                    $errors.push('Select ' + $field);
                }
                break;
            case 'number':
                if(isNaN($val) || $val.replace(/\s/g, '').length <= 0) {
                    $errors.push('Enter valid ' + $field);
                }
                break;
            case 'text':
            case 'password':
                if($val.replace(/\s/g, '').length <= 0) {
                    $errors.push('Enter valid ' + $field);
                }
                break;
        }
    });

    if($errors.length > 0) {
        $error = ""
        $.each($errors, function($i,$val) {
            $error += $val + "<br/>"; 
        });

        toastr.error($error);
        return false;
    }
    return true;
}
function dateToRelativeTime($date) {
    return moment($date).fromNow();
}
function loadLightBox($images, $selectedImageIndex) {
    $('#lightBox').show();
    $('#lightBox .lightbox-loader').show();
    $('#lightBox .lightbox-container').html('');

    $.get({
        url: 'components/lightbox.html',
        dataType: 'html'
    }).done(function(template) {
        $('#lightBox .lightbox-loader').hide();
        var html = Mustache.to_html(template, { images: $images, index: $selectedImageIndex });
        $('#lightBox .lightbox-container').html(html);
    });
}
$(function() {
    function disableBack() { 
        window.history.forward()
    }
    window.onload = disableBack();
    window.onpageshow = function(evt) {
        if(evt.persisted) {
            disableBack();
        }
    }

    $header = $('#header');
    componentLoader($header, 'header');
    $footer = $('#footer');
    componentLoader($footer, 'footer');
});
$(document).on('click', 'a#loginBtn', function() {
    $form = $('#login');
    if(validateForm($form) == true) {
        $form.find('.loading-overlay').show();
        login($form);
    }
});
$(document).on('click', '.collapsible', function() {
    $(this).toggleClass('collapsed');
});
if($authUser !== null) {
    $.cookie('authenticate', 1, { expires: 30, path: '/' });
}
$(document).on('focus', 'input.datePicker', function() {
    $(this).datepicker({
        format: "yyyy-mm-dd",
        clearBtn: true
    });
});
var $collectionLoader = '<div class="col-12 mb-5 mt-2 collection-loading"><div class="signal position-relative" style="top: 0; left: 0; margin: 0 auto;"></div></div>';
var $collections = {};
var $filterApplied = 0;
var $images = [];
var $uploadStatus = 0;
var $uploadStatusDelta = 0;
function userHomeReport(data) {
    $total_images = data.total_images ? data.total_images : 0;
    $pending_images = data.images[0] ? data.images[0].total : 0;
    $approved_images = data.images[1] ? data.images[1].total : 0;
    $rejected_images = data.images[2] ? data.images[2].total : 0;
    $total_rewards = data.reward.total ? data.reward.total : 0;

    $('#app').find('#total-images').html($total_images);
    $('#app').find('#pending-images').html($pending_images);
    $('#app').find('#approved-images').html($approved_images);
    $('#app').find('#rejected-images').html($rejected_images);
    $('#app').find('#total-rewards').html($total_rewards);
}
function renderCollections(type, data) {
    if(data.data.length > 0) {
        $.each(data.data, function(index, collection) {
            data.data[index]['formated_created_at'] = dateToRelativeTime(collection.created_at);
        });
    }
    var $collectionsContainer = $('#collections');
    $.get({
        url: 'components/user/collections.html',
        dataType: 'html'
    }).done(function(template) {
        $('#userCollectionsPage').find('.collection-loading').remove();
        var html = Mustache.to_html(template, { collections: data});
        if(type == 1) {
            $collectionsContainer.append(html);
        } else if(type == 2) {
            $collectionsContainer.prepend(html);
        } else {
            $collectionsContainer.html(html);
        }
        if(data.last_page > data.current_page) {
            $collectionsContainer.append('<a class="btn btn-info btn-block m-3 load-more-btn" data-page="' + (data.current_page+1) + '">Load more</a>');
        }
    });
}
function renderCollection(data) {
    $images = [];
    $videos = [];
    $deleteAllowed = true;
    $dataImages = data.images;
    $.each($dataImages, function($index, $image) {
        $image.statusPending = 0;
        $image.statusApproved = 0;
        $image.statusRejected = 0;
        if($image.status == 0) {
            $image.statusPending = 1;
        } else if($image.status == 1) {
            $image.statusApproved = 1;
            $deleteAllowed = false
        } else if($image.status == 2) {
            $image.statusRejected = 1;
            $deleteAllowed = false
        }
        if($image.type == 'I' || $image.type == 'i') {
            $images.push($image);
        } else if($image.type == 'V' || $image.type == 'v') {
            $videos.push($image);
        }
    });
    data.images = $images;
    data.videos = $videos;
    data.created_at = moment(data.created_at).format('Do MMMM YYYY h:mm:ss a');
    var $collectionContainer = $('#collection');
    $.get({
        url: 'components/user/collection.html',
        dataType: 'html'
    }).done(function(template) {
        var html = Mustache.to_html(template, data);
        $collectionContainer.html(html);

        if($deleteAllowed == true) {
            $('#userCollectionPage').find('.navbar').append('<a class="delete-collection-btn text-danger" data-id="' + data.id + '"><i class="fas fa-trash"></i></a>');
        }

    });
}
function openCollectionFilter() {
    $('#collection-filters').addClass('active');
}
function closeCollectionFilter() {
    $('#collection-filters').removeClass('active');
}
function getCollectionFilters() {
    data = {};
    data.categories = $categories;
    var $filtersContainer = $('#collection-filters .collection-filters');
    $.get({
        url: 'components/user/collection_filters.html',
        dataType: 'html'
    }).done(function(template) {
        var html = Mustache.to_html(template, data);
        $filtersContainer.html(html);
    });
}
function fillSubCategories($selectedCategory) {
    $subCategories = '<option value="">None</option>';
    if($selectedCategory.length > 0) {
        $.each($categories, function(index, $category) {
            if($category.value == $selectedCategory) {
                $.each($category.sub_category, function(subindex, $subCategory) {
                    $subCategories += '<option value="' + $subCategory.value + '">' + $subCategory.text + '</option>';
                });

                $('select[name="sub_category"]').html($subCategories);
            }
        });
    } else {
        $('select[name="sub_category"]').html($subCategories);
    }
    
}
function applyFilter($page) {
    if($page == 1) {
        $('#userCollectionsPage').find('#collections').html('');
    }
    $filters = $('#collection-filters input[type="text"], #collection-filters input[type="checkbox"]:checked, #collection-filters input[type="radio"]:checked, #collection-filters select');
    getCollectionsByFilter($filters.serialize(), $page);
    closeCollectionFilter();
}
function openSearchBox() {
    $('#search-box').addClass('active');
    $('#search').focus();
}
function closeSearchBox() {
    $('#search').val('');
    $('#search-box').removeClass('active');
    if($filterApplied == 2) {
        getCollections(1);
    }
}
function search($page) {
    if($page == 1) {
        $('#userCollectionsPage').find('#collections').html('');
    }
    $q = $('input[name="q"]').val();
    searchCollections($q, $page);
}
function getCollectionForm() {
    data = {};
    data.categories = $categories;
    var $container = $('#newCollection');
    $.get({
        url: 'components/user/collection_form.html',
        dataType: 'html'
    }).done(function(template) {
        var html = Mustache.to_html(template, data);
        $container.html(html);
    });
}
function resetImageVideoForm() {
    $form = $('#imageVideoForm');
    $form.find('.multi-step-form').hide();
    $form.find('#collectionOptions').show();
    $form.find('#images').val('');
    $form.find('#videoUrls').html('');
    $form.find('#videoUrls').append('<div class="col-12 video-url"><div class="input-group mb-3"><div class="input-group-prepend"><span class="input-group-text"><i class="fas fa-video"></i></span></div><input type="text" class="form-control" placeholder="Youtube Video Url"><div class="input-group-append"><span class="input-group-text"><i class="fas fa-times"></i></span></div></div></div>');
}
function addVideoUrlInput() {
    $form = $('#imageVideoForm');
    $form.find('#videoUrls').append('<div class="col-12 video-url"><div class="input-group mb-3"><div class="input-group-prepend"><span class="input-group-text"><i class="fas fa-video"></i></span></div><input type="text" class="form-control" placeholder="Youtube Video Url"><div class="input-group-append"><span class="input-group-text"><i class="fas fa-times"></i></span></div></div></div>');
}
function captureImage() {
    $previewContainer = $('#newCollection .image-previews');
    $formImages = document.querySelector('#images').files;
    if($formImages.length > 0) {
        $.each($formImages, function($index, $formImage) {
            $formImage.fileType = 'image';
            $images.push($formImage);
            var reader = new FileReader();
            $(reader).on("load", function() {
                $preview = '<div class="col-4 preview position-relative text-center my-3">';
                    $preview += '<img class="imageThumb" src="' + this.result + '" />';
                    $preview += '<a class="text-danger position-absolute position-top-right">&times;</a>';
                $preview += '</div>';
                $previewContainer.append($preview);
            });
            reader.readAsDataURL($formImage);
        });
    }
    $('#imageVideoForm').modal('hide');
    resetImageVideoForm();
}
function captureVideo() {
    $previewContainer = $('#newCollection .image-previews');
    $('#videoUrls').find('.video-url').each(function() {
        $url = $(this).find('input').val();
        if($url.replace(/\s/g, '').length > 0) {
            $video = {};
            $video.fileType = 'video';
            $video.url = $url;
            $images.push($video);

            $preview = '<div class="col-4 preview position-relative text-center my-3">';
                $preview += '<img class="imageThumb" src="assets/images/video-placeholder.png" />';
                $preview += '<a class="text-danger position-absolute position-top-right">&times;</a>';
            $preview += '</div>';
            $previewContainer.append($preview);
        }
    });
    $('#imageVideoForm').modal('hide');
    resetImageVideoForm();
}
function uploadForm() {
    if(validateForm($('#newCollection'))) {
        if($images.length <= 0) {
            toastr.error("Select atleast 1 image/video!");
        } else {
            $('#uploading-overlay').show();

            $uploadStatusDelta = 0;
            $uploadStatus = 0;
            setProgressBar();
            $uploadStatusDelta = 100 / ($images.length + 1);

            $data = {};
            $data.title = $('#newCollection input[name="title"]').val();
            $data.description = $('#newCollection textarea[name="description"]').val();
            $data.keywords = $('#newCollection textarea[name="keywords"]').val();
            $data.category = $('#newCollection select[name="category"]').val();
            $data.sub_category = $('#newCollection select[name="sub_category"]').val();
            $data.priority = $('#newCollection input[name="priority"]').prop('checked') ? 1 : 0;

            uploadFormData($data);
        }
    }
}
function setProgressBar() {
    $uploadStatus += $uploadStatusDelta;
    $uploadStatus = Math.round($uploadStatus);
    $('#uploading-overlay').find('.progress-bar').html($uploadStatus + '%');
    $('#uploading-overlay').find('.progress-bar').css( {
        'width': $uploadStatus + '%'
    });
}
function renderUserRewards(data) {
    var $container = $('#rewards');
    $.get({
        url: 'components/user/rewards.html',
        dataType: 'html'
    }).done(function(template) {
        var html = Mustache.to_html(template, { rewards: data });
        $container.html(html);
    });
}
$(document).on('click', 'a.collection', function() {
    $id = $(this).attr('data-id');
    getCollection($id);
    $('#userCollectionPage').addClass('active');
});
$(document).on('click', 'a#closeCollectionPage', function() {
    $('#userCollectionPage').removeClass('active');
});
$(document).on('click', 'a.delete-collection-btn', function() {
    $id = $(this).attr('data-id');
    deleteCollection($id);
});
$(document).on('click', 'a.load-more-btn', function() {
    $page = $(this).attr('data-page');
    $(this).remove();
    if($filterApplied == 1) {
        applyFilter($page);
    } else if($filterApplied == 2) {
        search($page);
    } else {
        getCollections($page);
    }
});
$(document).on('keyup', 'input[name="q"]', function() {
    $val = $(this).val();
    console.log($val);
    if($val.replace(/\s/g, "").length > 0) {
        search(1);
    }
});
$(document).on('click', 'a#addNewCollection', function() {
    getCollectionForm();
    $('#createCollectionPage').addClass('active');
});
$(document).on('click', 'a#closeCreateCollectionPage', function() {
    $('#createCollectionPage').removeClass('active');
});
$(document).on('click', '#videoUrls .video-url .input-group-text', function() {
    $(this).closest('.video-url').remove();
});
$(document).on('click', '#newCollection .image-previews .preview a', function() {
    var $index = $(this).parent().index();
    $images.splice($index, 1);
    $(this).parent().remove();
});
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("Fuse",[],t):"object"==typeof exports?exports.Fuse=t():e.Fuse=t()}(this,function(){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r={};return t.m=e,t.c=r,t.i=function(e){return e},t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=8)}([function(e,t,r){"use strict";e.exports=function(e){return Array.isArray?Array.isArray(e):"[object Array]"===Object.prototype.toString.call(e)}},function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var o=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=r(5),a=r(7),s=r(4),c=function(){function e(t,r){var o=r.location,i=void 0===o?0:o,a=r.distance,c=void 0===a?100:a,h=r.threshold,l=void 0===h?.6:h,u=r.maxPatternLength,f=void 0===u?32:u,d=r.isCaseSensitive,v=void 0!==d&&d,p=r.tokenSeparator,g=void 0===p?/ +/g:p,y=r.findAllMatches,m=void 0!==y&&y,k=r.minMatchCharLength,x=void 0===k?1:k;n(this,e),this.options={location:i,distance:c,threshold:l,maxPatternLength:f,isCaseSensitive:v,tokenSeparator:g,findAllMatches:m,minMatchCharLength:x},this.pattern=this.options.isCaseSensitive?t:t.toLowerCase(),this.pattern.length<=f&&(this.patternAlphabet=s(this.pattern))}return o(e,[{key:"search",value:function(e){if(this.options.isCaseSensitive||(e=e.toLowerCase()),this.pattern===e)return{isMatch:!0,score:0,matchedIndices:[[0,e.length-1]]};var t=this.options,r=t.maxPatternLength,n=t.tokenSeparator;if(this.pattern.length>r)return i(e,this.pattern,n);var o=this.options,s=o.location,c=o.distance,h=o.threshold,l=o.findAllMatches,u=o.minMatchCharLength;return a(e,this.pattern,this.patternAlphabet,{location:s,distance:c,threshold:h,findAllMatches:l,minMatchCharLength:u})}}]),e}();e.exports=c},function(e,t,r){"use strict";var n=r(0),o=function e(t,r,o){if(r){var i=r.indexOf("."),a=r,s=null;-1!==i&&(a=r.slice(0,i),s=r.slice(i+1));var c=t[a];if(null!==c&&void 0!==c)if(s||"string"!=typeof c&&"number"!=typeof c)if(n(c))for(var h=0,l=c.length;h<l;h+=1)e(c[h],s,o);else s&&e(c,s,o);else o.push(c.toString())}else o.push(t);return o};e.exports=function(e,t){return o(e,t,[])}},function(e,t,r){"use strict";e.exports=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,r=[],n=-1,o=-1,i=0,a=e.length;i<a;i+=1){var s=e[i];s&&-1===n?n=i:s||-1===n||(o=i-1,o-n+1>=t&&r.push([n,o]),n=-1)}return e[i-1]&&i-n>=t&&r.push([n,i-1]),r}},function(e,t,r){"use strict";e.exports=function(e){for(var t={},r=e.length,n=0;n<r;n+=1)t[e.charAt(n)]=0;for(var o=0;o<r;o+=1)t[e.charAt(o)]|=1<<r-o-1;return t}},function(e,t,r){"use strict";e.exports=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:/ +/g,n=new RegExp(t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&").replace(r,"|")),o=e.match(n),i=!!o,a=[];if(i)for(var s=0,c=o.length;s<c;s+=1){var h=o[s];a.push([e.indexOf(h),h.length-1])}return{score:i?.5:1,isMatch:i,matchedIndices:a}}},function(e,t,r){"use strict";e.exports=function(e,t){var r=t.errors,n=void 0===r?0:r,o=t.currentLocation,i=void 0===o?0:o,a=t.expectedLocation,s=void 0===a?0:a,c=t.distance,h=void 0===c?100:c,l=n/e.length,u=Math.abs(s-i);return h?l+u/h:u?1:l}},function(e,t,r){"use strict";var n=r(6),o=r(3);e.exports=function(e,t,r,i){for(var a=i.location,s=void 0===a?0:a,c=i.distance,h=void 0===c?100:c,l=i.threshold,u=void 0===l?.6:l,f=i.findAllMatches,d=void 0!==f&&f,v=i.minMatchCharLength,p=void 0===v?1:v,g=s,y=e.length,m=u,k=e.indexOf(t,g),x=t.length,S=[],M=0;M<y;M+=1)S[M]=0;if(-1!==k){var b=n(t,{errors:0,currentLocation:k,expectedLocation:g,distance:h});if(m=Math.min(b,m),-1!==(k=e.lastIndexOf(t,g+x))){var _=n(t,{errors:0,currentLocation:k,expectedLocation:g,distance:h});m=Math.min(_,m)}}k=-1;for(var L=[],w=1,A=x+y,C=1<<x-1,I=0;I<x;I+=1){for(var O=0,F=A;O<F;){n(t,{errors:I,currentLocation:g+F,expectedLocation:g,distance:h})<=m?O=F:A=F,F=Math.floor((A-O)/2+O)}A=F;var P=Math.max(1,g-F+1),j=d?y:Math.min(g+F,y)+x,z=Array(j+2);z[j+1]=(1<<I)-1;for(var T=j;T>=P;T-=1){var E=T-1,K=r[e.charAt(E)];if(K&&(S[E]=1),z[T]=(z[T+1]<<1|1)&K,0!==I&&(z[T]|=(L[T+1]|L[T])<<1|1|L[T+1]),z[T]&C&&(w=n(t,{errors:I,currentLocation:E,expectedLocation:g,distance:h}))<=m){if(m=w,(k=E)<=g)break;P=Math.max(1,2*g-k)}}if(n(t,{errors:I+1,currentLocation:g,expectedLocation:g,distance:h})>m)break;L=z}return{isMatch:k>=0,score:0===w?.001:w,matchedIndices:o(S,p)}}},function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var o=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=r(1),a=r(2),s=r(0),c=function(){function e(t,r){var o=r.location,i=void 0===o?0:o,s=r.distance,c=void 0===s?100:s,h=r.threshold,l=void 0===h?.6:h,u=r.maxPatternLength,f=void 0===u?32:u,d=r.caseSensitive,v=void 0!==d&&d,p=r.tokenSeparator,g=void 0===p?/ +/g:p,y=r.findAllMatches,m=void 0!==y&&y,k=r.minMatchCharLength,x=void 0===k?1:k,S=r.id,M=void 0===S?null:S,b=r.keys,_=void 0===b?[]:b,L=r.shouldSort,w=void 0===L||L,A=r.getFn,C=void 0===A?a:A,I=r.sortFn,O=void 0===I?function(e,t){return e.score-t.score}:I,F=r.tokenize,P=void 0!==F&&F,j=r.matchAllTokens,z=void 0!==j&&j,T=r.includeMatches,E=void 0!==T&&T,K=r.includeScore,$=void 0!==K&&K,J=r.verbose,N=void 0!==J&&J;n(this,e),this.options={location:i,distance:c,threshold:l,maxPatternLength:f,isCaseSensitive:v,tokenSeparator:g,findAllMatches:m,minMatchCharLength:x,id:M,keys:_,includeMatches:E,includeScore:$,shouldSort:w,getFn:C,sortFn:O,verbose:N,tokenize:P,matchAllTokens:z},this.setCollection(t)}return o(e,[{key:"setCollection",value:function(e){return this.list=e,e}},{key:"search",value:function(e){this._log('---------\nSearch pattern: "'+e+'"');var t=this._prepareSearchers(e),r=t.tokenSearchers,n=t.fullSearcher,o=this._search(r,n),i=o.weights,a=o.results;return this._computeScore(i,a),this.options.shouldSort&&this._sort(a),this._format(a)}},{key:"_prepareSearchers",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=[];if(this.options.tokenize)for(var r=e.split(this.options.tokenSeparator),n=0,o=r.length;n<o;n+=1)t.push(new i(r[n],this.options));return{tokenSearchers:t,fullSearcher:new i(e,this.options)}}},{key:"_search",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments[1],r=this.list,n={},o=[];if("string"==typeof r[0]){for(var i=0,a=r.length;i<a;i+=1)this._analyze({key:"",value:r[i],record:i,index:i},{resultMap:n,results:o,tokenSearchers:e,fullSearcher:t});return{weights:null,results:o}}for(var s={},c=0,h=r.length;c<h;c+=1)for(var l=r[c],u=0,f=this.options.keys.length;u<f;u+=1){var d=this.options.keys[u];if("string"!=typeof d){if(s[d.name]={weight:1-d.weight||1},d.weight<=0||d.weight>1)throw new Error("Key weight has to be > 0 and <= 1");d=d.name}else s[d]={weight:1};this._analyze({key:d,value:this.options.getFn(l,d),record:l,index:c},{resultMap:n,results:o,tokenSearchers:e,fullSearcher:t})}return{weights:s,results:o}}},{key:"_analyze",value:function(e,t){var r=e.key,n=e.arrayIndex,o=void 0===n?-1:n,i=e.value,a=e.record,c=e.index,h=t.tokenSearchers,l=void 0===h?[]:h,u=t.fullSearcher,f=void 0===u?[]:u,d=t.resultMap,v=void 0===d?{}:d,p=t.results,g=void 0===p?[]:p;if(void 0!==i&&null!==i){var y=!1,m=-1,k=0;if("string"==typeof i){this._log("\nKey: "+(""===r?"-":r));var x=f.search(i);if(this._log('Full text: "'+i+'", score: '+x.score),this.options.tokenize){for(var S=i.split(this.options.tokenSeparator),M=[],b=0;b<l.length;b+=1){var _=l[b];this._log('\nPattern: "'+_.pattern+'"');for(var L=!1,w=0;w<S.length;w+=1){var A=S[w],C=_.search(A),I={};C.isMatch?(I[A]=C.score,y=!0,L=!0,M.push(C.score)):(I[A]=1,this.options.matchAllTokens||M.push(1)),this._log('Token: "'+A+'", score: '+I[A])}L&&(k+=1)}m=M[0];for(var O=M.length,F=1;F<O;F+=1)m+=M[F];m/=O,this._log("Token score average:",m)}var P=x.score;m>-1&&(P=(P+m)/2),this._log("Score average:",P);var j=!this.options.tokenize||!this.options.matchAllTokens||k>=l.length;if(this._log("\nCheck Matches: "+j),(y||x.isMatch)&&j){var z=v[c];z?z.output.push({key:r,arrayIndex:o,value:i,score:P,matchedIndices:x.matchedIndices}):(v[c]={item:a,output:[{key:r,arrayIndex:o,value:i,score:P,matchedIndices:x.matchedIndices}]},g.push(v[c]))}}else if(s(i))for(var T=0,E=i.length;T<E;T+=1)this._analyze({key:r,arrayIndex:T,value:i[T],record:a,index:c},{resultMap:v,results:g,tokenSearchers:l,fullSearcher:f})}}},{key:"_computeScore",value:function(e,t){this._log("\n\nComputing score:\n");for(var r=0,n=t.length;r<n;r+=1){for(var o=t[r].output,i=o.length,a=1,s=1,c=0;c<i;c+=1){var h=e?e[o[c].key].weight:1,l=1===h?o[c].score:o[c].score||.001,u=l*h;1!==h?s=Math.min(s,u):(o[c].nScore=u,a*=u)}t[r].score=1===s?a:s,this._log(t[r])}}},{key:"_sort",value:function(e){this._log("\n\nSorting...."),e.sort(this.options.sortFn)}},{key:"_format",value:function(e){var t=[];this.options.verbose&&this._log("\n\nOutput:\n\n",JSON.stringify(e));var r=[];this.options.includeMatches&&r.push(function(e,t){var r=e.output;t.matches=[];for(var n=0,o=r.length;n<o;n+=1){var i=r[n];if(0!==i.matchedIndices.length){var a={indices:i.matchedIndices,value:i.value};i.key&&(a.key=i.key),i.hasOwnProperty("arrayIndex")&&i.arrayIndex>-1&&(a.arrayIndex=i.arrayIndex),t.matches.push(a)}}}),this.options.includeScore&&r.push(function(e,t){t.score=e.score});for(var n=0,o=e.length;n<o;n+=1){var i=e[n];if(this.options.id&&(i.item=this.options.getFn(i.item,this.options.id)[0]),r.length){for(var a={item:i.item},s=0,c=r.length;s<c;s+=1)r[s](i,a);t.push(a)}else t.push(i.item)}return t}},{key:"_log",value:function(){if(this.options.verbose){var e;(e=console).log.apply(e,arguments)}}}]),e}();e.exports=c}])});
var admin = (function() {
    var $users = [];
    var $selectedUser = {};
    var $collections = [];
    var $seletedCollection = {};
    var $collectionLoader = '<div class="m-5 collection-loading"><div class="signal position-relative" style="top: 0; left: 0; margin: 0 auto;"></div></div>';
    var $searchOptions = {
        threshold: 0,
        location: 0,
        distance: 1,
        maxPatternLength: 32,
        minMatchCharLength: 1,
        keys: [
            "username",
        ]
    };
    var $filterType = 0;
    var $categories = {};
    function getUserCollectionsPage() {
        var $collectionsContainer = $('#userCollections');
        $collectionsContainer.html($collectionLoader);

        $.get({
            url: 'components/admin/collections_page.html',
            dataType: 'html'
        }).done(function(template) {
            var data = {};
            if($.isEmptyObject($selectedUser) == false) {
                data = { 
                    user: $selectedUser
                };
            }
            var html = Mustache.to_html(template, data);
            $collectionsContainer.html(html);
        });
    }

    function renderUsers(data) {
        pendingTotal = 0;
        priorityTotal = 0;
        $selectedUserId = 0;
        if($.isEmptyObject($selectedUser) == false) {
            $selectedUserId = $selectedUser.id;
        }
        $.each(data, function($index, $user) {
            if($selectedUserId == $user.id) {
                $user.selected = 'selected';
            } else {
                $user.selected = '';
            }
            pendingTotal += $user.pending_posts;
            if($user.priority) {
                priorityTotal += 1;
            }
        });
        $('#usersList #pendingTotal').html(pendingTotal);
        $('#usersList #priorityTotal').html(priorityTotal);
        var $container = $('#usersList .user-list ul.users');
        $container.html('<li>' + $collectionLoader + '</li>');

        $.get({
            url: 'components/admin/users.html',
            dataType: 'html'
        }).done(function(template) {
            var html = Mustache.to_html(template, { users: data });
            $container.html(html);
        });
    }

    function formatCollection(collection) {
        if(collection.images.length > 0) {
            $.each(collection.images, function(subIndex, image) {
                image.is_image = 0;
                image.is_video = 0;
                if(image.type == 'v' || image.type == 'V') {
                    image.placeholder = 'assets/images/video-placeholder.png';
                    image.is_video = 1;
                } else {
                    image.is_image = 1;
                }

                image.is_pending = 0;
                image.is_approved = 0;
                image.is_rejected = 0;
                if(image.status == 0) {
                    image.is_pending = 1;
                } else if(image.status == 1) {
                    image.is_approved = 1;
                } else if(image.status == 2) {
                    image.is_rejected = 1;
                }
            });
        }
        collection.is_pending = 0;
        collection.is_processed = 0;
        if(collection.is_new == 0) {
            if(collection.status == 1) {
                collection.is_processed = 1;
            } else {
                collection.is_pending = 1;
            }
        }
        collection.formated_created_at = dateToRelativeTime(collection.created_at);

        return collection;
    }

    function renderUserCollections(data) {
        if(data.data.length > 0) {
            $.each(data.data, function(index, collection) {
                collection = formatCollection(collection);
            });
        }
        var $container = $('#userCollections .user-collections-list');

        $.get({
            url: 'components/admin/collections.html',
            dataType: 'html'
        }).done(function(template) {
            $container.find('.collection-loading').remove();
            var html = Mustache.to_html(template, { collections: data.data });
            if(data.current_page > 1) {
                $container.append(html);
            } else {
                $container.html(html);
            }

            if(data.last_page > data.current_page) {
                $container.append('<a class="btn btn-info btn-block m-3 load-more-collections-btn" data-page="' + (data.current_page+1) + '">Load more</a>');
            }
        });
    }

    function setUsers(data) {
        $users = data;
    }

    function setCollections(data) {
        if(data.current_page > 1) {
            $collections = $collections.concat(data.data);
        } else {
            $collections = data.data;
        }
    }

    function getUserById($id) {
        $selectedUser = {};
        $.each($users, function($index, $user) {
            if($user.id == $id) {
                $selectedUser = $user;
                return true;
            }
        });

        return false;
    }

    function getCollectionById($id) {
        $seletedCollection = {};
        if($collections.length > 0) {
            $.each($collections, function(index, collection) {
                if(collection.id == $id) {
                    collection.formated_created_at = moment(collection.created_at).format('Do MMMM YYYY h:mm:ss a');
                    $selectedCollection = collection;
                    return true;                
                }
            });
        }

        return false;
    }

    function selectCollection($id) {
        var $container = $('#userCollections #userCollectionDetail .user-collection-details');
        $container.html('<div class="col-12"><div class="m-5 collection-loading"><div class="signal position-relative" style="top: 0; left: 0; margin: 0 auto;"></div></div></div>');
        $('#adminHomePage #userCollections #userCollectionDetail').addClass('show-details');

        getCollectionById($id);

        $.get({
            url: 'components/admin/collection.html',
            dataType: 'html'
        }).done(function(template) {
            var html = Mustache.to_html(template, { collection: $selectedCollection });
            $container.html(html);
            if($selectedCollection.is_new == 1) {
                markCollectionViewed($id);
            }
        });
    }

    function findAndReplaceCollectionById($id, $collection) {
        if($collections.length > 0) {
            $.each($collections, function(index, collection) {
                if(collection.id == $id) {
                    $collections[index] = $collection;
                }
            });
        }
    }

    function findAndReplaceCollectionFromDOM($id, $collection) {
        var $userCollectionsContainer = $('#userCollections .user-collections-list');

        $.get({
            url: 'components/admin/collections.html',
            dataType: 'html'
        }).done(function(template) {
            var html = Mustache.to_html(template, { collections: [ $collection ] });
            $userCollectionsContainer.find('#user-collection-'+$collection.id).replaceWith(html);
        });
    }

    function updateSelectedCollection($post) {
        var collection = formatCollection($post);
        findAndReplaceCollectionById(collection.id, collection);
        findAndReplaceCollectionFromDOM(collection.id, collection);

        $post.formated_created_at = moment(collection.created_at).format('Do MMMM YYYY h:mm:ss a');
        $selectedCollection = collection;

        var $userCollectionDetailContainer = $('#userCollections #userCollectionDetail .user-collection-details');
        $.get({
            url: 'components/admin/collection.html',
            dataType: 'html'
        }).done(function(template) {
            var html = Mustache.to_html(template, { collection: $selectedCollection });
            $userCollectionDetailContainer.html(html);
        });
        $('#userCollectionDetail').find('.loader-indeterminate').remove();
    }

    function updateCollectionImages(actionType) {
        $reasonText = '';
        if(actionType == 2) {
            $reasonText = $('#rejectConfirmationDialog').find('textarea[name="rejection_reason"]').val();
            if($reasonText.replace(/\s/g, '').length <= 0) {
                toastr.error("Please enter reason of rejection!");
                return false;
            }
        }
        $imageIds = [];
        $('#userCollectionDetail .user-collection-details .collection-images input[type="checkbox"]:checked').each(function() {
            $imageIds.push($(this).val());
        });
        if($imageIds.length <= 0) {
            toastr.error("Please select atleast one image/video!");
            return false;
        }

        $('#userCollectionDetail').find('.navbar').append('<div class="loader-indeterminate position-absolute position-bottom-left"></div>');

        $data = {};
        $data.status = actionType;
        $data.reason = $reasonText;
        $data.images = $imageIds;
        updateCollection($selectedUser.id, $selectedCollection.id, $data);

        $('#rejectConfirmationDialog').modal('hide');
        $('#approveConfirmationDialog').modal('hide');
        $('#rejectConfirmationDialog').find('textarea[name="rejection_reason"]').val('');
    }

    function updateCollectionViewed($id) {
        if($collections.length > 0) {
            $.each($collections, function(index, collection) {
                if(collection.id == $id) {
                    $collections[index].is_new = 0;
                    if($collections[index].status == 0) {
                        $collections[index].is_pending = 1;
                    } else {
                        $collections[index].is_processed = 1;
                    }
                    findAndReplaceCollectionFromDOM(collection.id, $collections[index]);
                }
            });
        }
    }

    function setFilterType(type) {
        $filterType = type;
    }

    function setCategories(data) {
        $categories = data;
    }

    function getCollectionFilters() {
        data = {};
        data.categories = $categories;
        data.user = $selectedUser;
        var $filtersContainer = $('#collection-filters .collection-filters');
        $.get({
            url: 'components/admin/collection_filters.html',
            dataType: 'html'
        }).done(function(template) {
            var html = Mustache.to_html(template, data);
            $filtersContainer.html(html);
        });
    }

    function applyFilter($page) {
        $filters = $('#collection-filters input[type="text"], #collection-filters input[type="checkbox"]:checked, #collection-filters input[type="radio"]:checked, #collection-filters select');
        getUserCollectionsByFilter($selectedUser.id, $page, $filters.serialize());
        $('#collection-filters').removeClass('active');
    }

    function fillSubCategories($selectedCategory) {
        $subCategories = '<option value="">None</option>';
        if($selectedCategory.length > 0) {
            $.each($categories, function(index, $category) {
                if($category.value == $selectedCategory) {
                    $.each($category.sub_category, function(subindex, $subCategory) {
                        $subCategories += '<option value="' + $subCategory.value + '">' + $subCategory.text + '</option>';
                    });

                    $('select[name="sub_category"]').html($subCategories);
                }
            });
        } else {
            $('select[name="sub_category"]').html($subCategories);
        }       
    }

    function updateUser($user) {
        pendingTotal = 0;
        priorityTotal = 0;

        $user.selected = '';
        if($.isEmptyObject($selectedUser) == false) {
            if($selectedUser.id == $user.id) {
                $user.selected = 'selected';
            }
        }
        $.each($users, function(index, user) {
            if(user.id == $user.id) {
                user = $user;
                $users[index] = $user;
            }
            pendingTotal += user.pending_posts;
            if(user.priority) {
                priorityTotal += 1;
            }
        });
        $('#usersList #pendingTotal').html(pendingTotal);
        $('#usersList #priorityTotal').html(priorityTotal);
        
        var $container = $('#usersList .user-list ul.users');

        $.get({
            url: 'components/admin/users.html',
            dataType: 'html'
        }).done(function(template) {
            var html = Mustache.to_html(template, { users: $user });
            $container.find('#user-'+$user.id).replaceWith(html);
        });
    }

    $(document).on('click', '#adminHomePage #usersList a.user', function() {
        if($(this).hasClass('selected') == false) {
            $('#adminHomePage #usersList a.user').removeClass('selected');
            $(this).addClass('selected');
            $userId = $(this).attr('data-user-id');
            getUserById($userId);
            getUserCollectionsPage();
        }
    });

    $(document).on('keyup', '#adminHomePage #usersList #searchUser', function() {
        $searchTerm = $(this).val();
        if($searchTerm.replace(/\s/g, '').length > 0) {
            var fuse = new Fuse($users, $searchOptions);
            var $userSearchResults = fuse.search($searchTerm);
            renderUsers($userSearchResults);
        } else {
            renderUsers($users);
        }
    });

    $(document).on('keyup', '#adminHomePage #userCollections #collectionSearchInput', function() {
        getUserCollections($selectedUser.id, 1, $(this).val());
    });

    $(document).on('click', 'a.load-more-collections-btn', function() {
        $page = $(this).attr('data-page');
        $(this).remove();
        if($filterType == 1) {
            getUserCollections($selectedUser.id, $page, $('#adminHomePage #userCollections #collectionSearchInput').val());
        } else if($filterType == 2) {
            applyFilter($page);
        } else {
            getUserCollections($selectedUser.id, $page, '');
        }
    });

    $(document).on('click', '#userCollectionDetail .collection-images .collection-image .card-img', function() {
        $imageId = $(this).attr('data-image-id');
        $images = [];
        $i = 0;
        $imageIndex = 0;
        if($selectedCollection.images.length > 0) {
            $.each($selectedCollection.images, function(index, image) {
                if(image.type == 'I' || image.type == 'i') {
                    $images.push({ src: image.path });
                }
                if(image.id == $imageId) {
                    $imageIndex = $i;
                }
                $i++;
            });
        }
        if($images.length > 0) {
            loadLightBox($images, $imageIndex);
        }
    });

    $(window).resize(function() {
        if($(this).width() <= 768) {
            $('#adminHomePage').addClass('mbl-view');
            $('#adminHomePage').removeClass('floating-menu');
        } else {
            $('#adminHomePage').removeClass('mbl-view');
            $('#adminHomePage').addClass('floating-menu');
        }
    });

    return {
        getUserCollectionsPage: getUserCollectionsPage,
        renderUsers: renderUsers,
        setUsers: setUsers,
        setCollections: setCollections,
        renderUserCollections: renderUserCollections,
        selectCollection: selectCollection,
        updateCollectionImages: updateCollectionImages,
        updateSelectedCollection: updateSelectedCollection,
        updateCollectionViewed: updateCollectionViewed,
        setFilterType: setFilterType,
        setCategories: setCategories,
        getCollectionFilters: getCollectionFilters,
        applyFilter: applyFilter,
        fillSubCategories: fillSubCategories,
        updateUser: updateUser
    }
})();
var reporting = (function() {
    var $filterType = 0;
    var $imagesFilterType = 0;
    var $categories = {};
    var $reportImages = [];
    var $reportUsers = [];

    function formatUsers($data) {
        $users = [];
        if($data.data.length > 0) {
            $.each($data.data, function(index, user) {
                if(!user.total_pending) {
                    user.total_pending = 0;
                }
                if(!user.total_approved) {
                    user.total_approved = 0;
                }
                if(!user.total_rejeted) {
                    user.total_rejeted = 0;
                }
                if(!user.total_rewards || user.total_rewards == null) {
                    user.total_rewards = 0.00;
                }
                user.total_images = parseInt(user.total_pending) + parseInt(user.total_approved) + parseInt(user.total_rejeted);
                if(user.role == 2) {
                    user.role_name = 'Admin';
                } else if(user.role == 3) {
                    user.role_name = 'Super Admin';
                } else {
                    user.role_name = 'User';
                }
                $users.push(user);
            });
        }

        return $users;
    }

    function renderUsers($data) {
        $users = formatUsers($data);
        $reportUsers = $users;

        var $container = $('#reportsUsersPage table');

        $.get({
            url: 'components/reports/users.html',
            dataType: 'html'
        }).done(function(template) {
            var html = Mustache.to_html(template, { users: $users });
            $container.children('tbody').html(html);
            $btns = '<tr><td class="text-right" colspan="6">';
            $btns += '<div class="d-flex align-items-center justify-content-start w-100">';
            $btns += '<span class="mr-auto text-muted">Showing page ' + $data.current_page + ' of ' + $data.last_page + '</span>';
            if($data.current_page > 1) {
                $btns += '<button class="btn btn-outline-info mr-3 pagination-btn" data-page="' + (parseInt($data.current_page) - 1) + '"><i class="fas fa-chevron-left"></i> Prev</button>';
            } else {
                $btns += '<button class="btn btn-outline-info mr-3 pagination-btn" disabled="disabled"><i class="fas fa-chevron-left"></i> Prev</button>';
            }

            if($data.last_page > $data.current_page) {
                $btns += '<button class="btn btn-outline-info pagination-btn" data-page="' + (parseInt($data.current_page) + 1) + '">Next <i class="fas fa-chevron-right"></i></button>';
            } else {
                $btns += '<button class="btn btn-outline-info pagination-btn" disabled="disabled">Next <i class="fas fa-chevron-right"></i></button>';
            }
            $btns += '</div></td></tr>';
            $container.children('tfoot').html($btns);
        });
    }

    function formatImages($data) {
        $images = [];
        $.each($data.data, function(index, image) {
            image.is_image = 0;
            image.is_video = 0;
            if(image.type == 'I' || image.type == 'i') {
                image.is_image = 1;
            } else {
                image.is_video = 1;
                image.placeholder = 'assets/images/video-placeholder.png';
            }
            image.is_pending = 0;
            image.is_approved = 0;
            image.is_rejected = 0;
            if(image.status == 0) {
                image.is_pending = 1;
            } else if(image.status == 1) {
                image.is_approved = 1;
            } else if(image.status == 2) {
                image.is_rejected = 1;
            }

            image.formated_created_at = moment(image.created_at).format('Do MMMM YYYY h:mm:ss a');
            image.formated_updated_at = moment(image.updated_at).format('Do MMMM YYYY h:mm:ss a');

            $images.push(image);
        });

        if($data.current_page == 1) {
            $reportImages = $images;
        } else {
            $reportImages = $reportImages.concat($images);
        }

        return $images;
    }

    function renderImages($data) {
        $images = formatImages($data);

        var $container = $('#reportsImagesPage #reportImages');

        $.get({
            url: 'components/reports/images.html',
            dataType: 'html'
        }).done(function(template) {
            var html = Mustache.to_html(template, { images: $images });
            $container.find('.reports-image-loader').remove();
            $container.append(html);

            if($data.last_page > $data.current_page) {
                $container.append('<a class="btn btn-info btn-block m-3 load-more-reports-images-btn" data-page="' + ($data.current_page+1) + '">Load more</a>');
            }
        });
    }

    function setFilterType($type) {
        $filterType = $type;
    }

    function setImagesFilterType($type) {
        $imagesFilterType = $type;
    }

    function getFilters() {
        var $filterContainer = $('#collection-filters .collection-filters');
        $.get({
            url: 'components/reports/user_filters.html',
            dataType: 'html'
        }).done(function(template) {
            var html = Mustache.to_html(template);
            $filterContainer.html(html);
        });
    }

    function applyFilters($page) {
        $filters = $('#collection-filters input[type="text"], #collection-filters input[type="checkbox"]:checked, #collection-filters input[type="radio"]:checked, #collection-filters select');
        getUsersReportByFilters($page, $filters);
        $('#collection-filters').removeClass('active');
    }

    function getImageFilters() {
        data = {};
        data.categories = $categories;
        var $filterContainer = $('#collection-filters .collection-filters');
        $.get({
            url: 'components/reports/image_filters.html',
            dataType: 'html'
        }).done(function(template) {
            var html = Mustache.to_html(template, data);
            $filterContainer.html(html);
        });
    }

    function setCategories(data) {
        $categories = data;
    }

    function fillSubCategories($selectedCategory) {
        $subCategories = '<option value="">None</option>';
        if($selectedCategory.length > 0) {
            $.each($categories, function(index, $category) {
                if($category.value == $selectedCategory) {
                    $.each($category.sub_category, function(subindex, $subCategory) {
                        $subCategories += '<option value="' + $subCategory.value + '">' + $subCategory.text + '</option>';
                    });

                    $('select[name="sub_category"]').html($subCategories);
                }
            });
        } else {
            $('select[name="sub_category"]').html($subCategories);
        }       
    }

    function applyImagesFilters($page) {
        $filters = $('#collection-filters input[type="text"], #collection-filters input[type="checkbox"]:checked, #collection-filters input[type="radio"]:checked, #collection-filters select');
        getImagesReport($page, '', $filters);
        $('#collection-filters').removeClass('active');
    }

    function findUserById($id) {
        if($reportUsers.length > 0) {
            for(var i = 0; i < $reportUsers.length; i++) {
                if($reportUsers[i]['user_id'] == $id) {
                    return $reportUsers[i];
                }
            }
        }

        return false;
    }

    function findImageById($id) {
        if($reportImages.length > 0) {
            for(var i = 0; i < $reportImages.length; i++) {
                if($reportImages[i]['id'] == $id) {
                    return $reportImages[i];
                }
            }
        }

        return false;
    }

    function showImageDetails($id) {
        $image = findImageById($id);
        if($image !== false) {
            $container = $('#imageStatusReportDialog .modal-body');
            if($image.status == 1) {
                $container.html('<table class="table"><tr><th>Approved By:</th><td>' + $image.updated_by_username + '</td></tr><tr><th>Date/Time:</th><td>' + $image.formated_updated_at + '</td></tr></table>');
            } else if($image.status == 2) {
                $container.html('<table class="table"><tr><th>Rejected By:</th><td>' + $image.updated_by_username + '</td></tr><tr><th>Reason:</th><td>' + $image.rejection_reason + '</td></tr><tr><th>Date/Time:</th><td>' + $image.formated_updated_at + '</td></tr></table>');
            }
            $('#imageStatusReportDialog').modal('show');
        }
    }

    function enlargeImage(src) {
        $lightboxImages = [];
        var $image = {};
        $image.src = src;
        $lightboxImages.push($image);

        loadLightBox($lightboxImages, 0);
    }

    function userUpdated(data) {
        if($reportUsers.length > 0) {
            for(var i = 0; i < $reportUsers.length; i++) {
                if($reportUsers[i]['user_id'] == data.user_id) {
                    $reportUsers[i]['role'] = data.role;
                    $reportUsers[i]['status'] = data.status;
                    break;
                }
            }
        }

        $userContainer = $('#reportsUsersPage').find('tr.report-user-'+data.user_id);
        $userContainer.find('span.username i').remove();
        if(data.status == 0) {
            $userContainer.find('span.username').append('<i class="fas fa-exclamation-circle text-warning ml-2" title="Inactive User"></i>');
        } else if(data.status == 1) {
            $userContainer.find('span.username').append('<i class="fas fa-check-circle text-success ml-2" title="Active User"></i>');
        }
        if(data.role == 1) {
            $userContainer.find('span.role_name small').html('User');
        } else if(data.role == 2) {
            $userContainer.find('span.role_name small').html('Admin');
        } else if(data.role == 3) {
            $userContainer.find('span.role_name small').html('Super Admin');
        }
        $('#reportsUsersPage .navbar').find('.loader-indeterminate').remove();
        toastr.success(data.response.message);
    }

    function renderImageStats(data) {
        var $totalImages = 0;
        var $graphData = [];
        for(var i = 0; i < data.length; i++) {
            $totalImages += data[i]['value'];
            var $graphPoint = [];
            $graphPoint.push(moment(data[i]['date']).format('Do MMMM YYYY'));
            $graphPoint.push(data[i]['value']);
            $graphData.push($graphPoint);
        }
        $html = '<div>';
        $html += '<div class="text-center">';
        $html += '<span class="display-4">' + $totalImages + '</span>';
        $html += '</div>';
        if(data.length == 1) {
            $html += '<div class="text-center">';
            $html += '<span><small>' + moment(data[0]['date']).format('Do MMMM YYYY') + '</small></span>';
            $html += '</div>';
        } else if(data.length > 1) {
            $html += '<div class="text-center">';
            $html += '<span><small>From ' + moment(data[0]['date']).format('Do MMMM YYYY') + ' to ' + moment(data[data.length - 1]['date']).format('Do MMMM YYYY') + '</small></span>';
            $html += '</div>';
        }
        $html += '</div>';

        $('#reportsHomePage #reportStats .images-stats .card-body').html($html);

        Highcharts.chart('imageStatsChart', {
            chart: {
                zoomType: 'x',
                backgroundColor:'rgba(255, 255, 255, 0.0)'
            },
            credits: {                                                                                                                                               
                enabled: false                                                                                                                                         
            },
            exporting: {                                                                                                                                             
                enabled: false                                                                                                                                         
            },
            title: false,
            xAxis: {
                title: null,
                min:0,
                tickWidth: 0,
                lineWidth: 0,
                crosshair: false,
                gridLineWidth:0,
                labels: {
                    enabled:false
                }
            },
            yAxis: {
                title: null,
                min:0,
                tickWidth: 0,
                lineWidth: 0,
                crosshair: false,
                gridLineWidth:0,
                labels: {
                    enabled: false
                },
            },
            legend: {
                enabled: false
            },
            plotOptions: {
                area: {
                    fillColor: {
                        linearGradient: {
                            x1: 0,
                            y1: 0,
                            x2: 0,
                            y2: 1
                        },
                        stops: [
                        [0, Highcharts.getOptions().colors[0]],
                        [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                        ]
                    },
                    marker: {
                        radius: 2
                    },
                    lineWidth: 1,
                    states: {
                        hover: {
                            lineWidth: 1
                        }
                    },
                    threshold: null
                }
            },

            series: [{
                type: 'area',
                name: "Images uploaded",
                data: $graphData
            }]
        });
    }

    function renderImagesStatus(data) {
        $total = 0;
        $.each(data, function(index, image) {
            $total += image.y;
        });
        if($total > 0) {
            Highcharts.chart('imagesStatusChart', {
                chart: {
                    plotBackgroundColor: null,
                    plotBorderWidth: null,
                    plotShadow: false,
                    type: 'pie',
                    backgroundColor:'rgba(255, 255, 255, 0.0)'
                },
                title: null,
                credits: {                                                                                                                                               
                    enabled: false                                                                                                                                         
                },
                exporting: {                                                                                                                                             
                    enabled: false                                                                                                                                         
                },
                tooltip: {
                    pointFormat: '{series.name}: <b>{point.y:.1f}</b>'
                },
                plotOptions: {
                    pie: {
                        allowPointSelect: true,
                        cursor: 'pointer',
                        dataLabels: {
                            enabled: false
                        },
                        showInLegend: false,
                        borderWidth: 0,
                        shadow: true
                    }
                },
                series: [{
                    name: 'Images',
                    colorByPoint: true,
                    data: data
                }]
            });
        } else {
            $('#reportsHomePage #reportStats .images-status .card-body #imagesStatusChart').html('<div class="alert alert-info text-center m-0" role="alert">No images uploaded on selected date!</div>');
        }
    }

    function renderRewardStats(data) {
        $html = '<div id="totalMembersRewarded" class="text-center w-100 display-4"><span>' + data.total_members + '</span></div><div class="dropdown-divider w-100"></div><div id="totalAmountRewarded" class="text-center w-100 display-4">₹ <span>' + data.total_rewards + '</span></div><div id="rewardsStatsTimeline" class="text-center w-100"><span><small>From ' + moment(data.date.from).format('Do MMMM YYYY') + ' to ' + moment(data.date.to).format('Do MMMM YYYY') + '</small></span></div>';
        $('#reportsHomePage #reportStats .reward-stats .card-body .reward-stats-text').html($html);
    }

    function renderTopImages($data) {
        $images = formatImages($data);
        var $container = $('#reportsHomePage #latestApprovedImages');

        $.get({
            url: 'components/reports/images.html',
            dataType: 'html'
        }).done(function(template) {
            var html = Mustache.to_html(template, { images: $images });
            $container.html(html);
        });
    }

    function renderTopUsers($data) {
        $users = formatUsers($data);

        var $container = $('#reportsHomePage #topUsers table');

        $.get({
            url: 'components/reports/users.html',
            dataType: 'html'
        }).done(function(template) {
            var html = Mustache.to_html(template, { users: $users });
            $container.children('tbody').html(html);
        });
    }

    function renderRewardSettings(data) {
        $('#reportsSettingsPage #rewardSetting input[name="reward_amount"]').val(data);
        $('#reportsSettingsPage').find('.loader-indeterminate').remove();
    }

    $(document).on('click', '#reportsUsersPage table tfoot button.pagination-btn', function() {
        $page = $(this).attr('data-page');
        if($page != undefined) {
            if($filterType == 1) {
                getUsersReport($page, $('input#searchUserReport').val());
            } else if($filterType == 2) {
                applyFilters($page);
            } else {
                getUsersReport($page, '');
            }
        }
    });

    $(document).on('keyup', 'input#searchUserReport', function(e) {
        $val = $(this).val();
        getUsersReport(1, $val);
    });

    $(document).on('click', '#reportsImagesPage a.load-more-reports-images-btn', function() {
        $page = $(this).attr('data-page');
        $(this).remove();
        if($page != undefined) {
            if($imagesFilterType == 1) {
                getImagesReport($page, $('input#searchImageReport').val(), {});
            } else if($imagesFilterType == 2) {
                applyImagesFilters($page);
            } else {
                getImagesReport($page, '', {});
            }
        }
    });

    $(document).on('keyup', 'input#searchImageReport', function(e) {
        $val = $(this).val();
        getImagesReport(1, $val);
    });

    $(document).on('click', '#reportsUsersPage table tbody tr a.report-user', function() {
        $userId = $(this).attr('data-user-id');
        $user = findUserById($userId);
        if($user !== false) {
            $roles = [
            {
                value: 1,
                text: 'User',
                selected: $user.role == 1 ? 'selected' : ''
            },
            {
                value: 2,
                text: 'Admin',
                selected: $user.role == 2 ? 'selected' : ''
            },
            {
                value: 3,
                text: 'Super Admin',
                selected: $user.role == 3 ? 'selected' : ''
            }
            ];

            $status = [
            {
                value: 1,
                text: 'Active',
                selected: $user.status == 1 ? 'selected' : ''
            },
            {
                value: 0,
                text: 'Disabled',
                selected: $user.status == 0 ? 'selected' : ''
            }
            ];

            data = {};
            data.user = $user;
            data.roles = $roles;
            data.status = $status;

            $container = $('#userSettingDialog .modal-body');
            $container.html('');
            $.get({
                url: 'components/reports/user_setting.html',
                dataType: 'html'
            }).done(function(template) {
                var html = Mustache.to_html(template, data);
                $container.html(html);
            });

            $('#userSettingDialog').modal('show');
        }
    });

    $(document).on('click', 'a.filter-image-stats', function() {
        $('#reportStats .card.images-stats').removeClass('active');
        $('#reportsHomePage #reportStats .images-stats .card-body').html('<div class="m-5"><div class="signal position-relative" style="top: 0; left: 0; margin: 0 auto;"></div></div>');
        $('#reportsHomePage #reportStats .images-stats #imageStatsChart').html('');
        $filters = $('#reportsHomePage #reportStats .images-stats .filters input');
        getImageStats($filters);
    });

    $(document).on('click', 'a.filter-image-status', function() {
        $('#reportStats .card.images-status').removeClass('active');
        $filters = $('#reportsHomePage #reportStats .images-status .filters input');
        $date = $('#reportsHomePage #reportStats .images-status .filters input[name="date"]').val();
        if($date.length > 0) {
            $date = moment($date).format('Do MMMM YYYY');
        } else {
            $date = 'Today';
        }
        $('#reportStats .card.images-status').find('h6.images-status-date').html($date);

        getImagesStatus($filters);
    });

    $(document).on('click', 'a.filter-reward-stats', function() {
        $('#reportStats .card.reward-stats').removeClass('active');
        $filters = $('#reportsHomePage #reportStats .reward-stats .filters input');

        getRewardStats($filters);
    });

    return {
        renderUsers: renderUsers,
        setFilterType: setFilterType,
        getFilters: getFilters,
        applyFilters: applyFilters,
        renderImages: renderImages,
        setImagesFilterType: setImagesFilterType,
        getImageFilters: getImageFilters,
        setCategories: setCategories,
        fillSubCategories: fillSubCategories,
        applyImagesFilters: applyImagesFilters,
        showImageDetails: showImageDetails,
        enlargeImage: enlargeImage,
        userUpdated: userUpdated,
        renderImageStats: renderImageStats,
        renderImagesStatus: renderImagesStatus,
        renderRewardStats: renderRewardStats,
        renderTopImages: renderTopImages,
        renderTopUsers: renderTopUsers,
        renderRewardSettings: renderRewardSettings
    }
})();
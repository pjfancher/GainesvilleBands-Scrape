var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

(function(){
var g=true,l=null,m=false,n=(new Date).getTime();document.URL.indexOf("?google_debug")>0||document.URL.indexOf("&google_debug")>0;function o(a,b){var c=parseFloat(a);return isNaN(c)||c>1||c<0?b:c}function p(a,b){var c=/^([\w-]+\.)+[\w-]{2,}(\:[0-9]+)?$/;return c.test(a)?a:b};var aa="pagead2.googlesyndication.com",ba="googleads.g.doubleclick.net",ca="pubads.g.doubleclick.net",da="partner.googleadservices.com",q=p("pagead2.googlesyndication.com",aa),ea=p("googleads.g.doubleclick.net",ba),fa=p("pagead2.googlesyndication.com",aa);p("pubads.g.doubleclick.net",ca);var ga=p("partner.googleadservices.com",da);var ha={google_ad_channel:"channel",google_ad_host:"host",google_ad_host_channel:"h_ch",google_ad_host_tier_id:"ht_id",google_ad_region:"region",google_ad_section:"region",google_ad_type:"ad_type",google_adtest:"adtest",google_allow_expandable_ads:"ea",google_alternate_ad_url:"alternate_ad_url",google_alternate_color:"alt_color",google_bid:"bid",google_city:"gcs",google_color_bg:"color_bg",google_color_border:"color_border",google_color_line:"color_line",google_color_link:"color_link",google_color_text:"color_text",
google_color_url:"color_url",google_contents:"contents",google_country:"gl",google_cust_age:"cust_age",google_cust_ch:"cust_ch",google_cust_gender:"cust_gender",google_cust_id:"cust_id",google_cust_interests:"cust_interests",google_cust_job:"cust_job",google_cust_l:"cust_l",google_cust_lh:"cust_lh",google_cust_u_url:"cust_u_url",google_disable_video_autoplay:"disable_video_autoplay",google_ed:"ed",google_encoding:"oe",google_feedback:"feedback_link",google_flash_version:"flash",google_font_face:"f",
google_gl:"gl",google_hints:"hints",google_kw:"kw",google_kw_type:"kw_type",google_language:"hl",google_page_url:"url",google_referrer_url:"ref",google_region:"gr",google_reuse_colors:"reuse_colors",google_safe:"adsafe",google_tag_info:"gut",google_targeting:"targeting",google_ui_features:"ui",google_ui_version:"uiv",google_video_doc_id:"video_doc_id",google_video_product_type:"video_product_type"},ia={google_ad_format:"format",google_ad_output:"output",google_ad_callback:"callback",google_ad_height:"h",
google_ad_override:"google_ad_override",google_ad_slot:"slotname",google_ad_width:"w",google_analytics_uacct:"ga_wpids",google_correlator:"correlator",google_cpa_choice:"cpa_choice",google_ctr_threshold:"ctr_t",google_image_size:"image_size",google_last_modified_time:"lmt",google_max_num_ads:"num_ads",google_max_radlink_len:"max_radlink_len",google_num_radlinks:"num_radlinks",google_num_radlinks_per_unit:"num_radlinks_per_unit",google_only_ads_with_video:"only_ads_with_video",google_page_location:"loc",
google_rl_dest_url:"rl_dest_url",google_rl_filtering:"rl_filtering",google_rl_mode:"rl_mode",google_rt:"rt",google_skip:"skip"},ja={google_only_pyv_ads:"pyv"};function ka(a){return ha[a]||ia[a]||ja[a]||l};function la(a){return typeof encodeURIComponent=="function"?encodeURIComponent(a):escape(a)}function ma(a,b,c){var d=document.createElement("script");d.type="text/javascript";if(b)d.onload=b;if(c)d.id=c;d.src=a;var e=document.getElementsByTagName("head")[0];if(!e)return m;window.setTimeout(function(){e.appendChild(d)},0);return g}function r(){this.b=this.n();this.g=m;if(!this.b)this.g=this.h()}r.prototype.e="__gads=";r.prototype.c="GoogleAdServingTest=";r.prototype.l=function(){return this.b};
r.prototype.setCookieInfo=function(a){this.a=a._cookies_[0];if(this.a!=l){this.b=this.a._value_;this.o()}};r.prototype.j=function(a){var b=(new Date).valueOf(),c=new Date;c.setTime(b+a);return c};var na="http://"+ga+"/gampad/cookie.js?callback=_GA_googleCookieHelper.setCookieInfo";r.prototype.i=function(a){if(!(this.b||!this.g)){var b="script",c=document.domain,d=na+"&client="+la(a)+"&domain="+la(c);document.write("<"+b+' src="'+d+'"></'+b+">")}};
r.prototype.h=function(){document.cookie=this.c+"Good";var a=this.f(this.c),b=a=="Good";if(b){var c=this.j(-1);document.cookie=this.c+"; expires="+c.toGMTString()}return b};r.prototype.n=function(){var a=this.f(this.e);return a};r.prototype.f=function(a){var b=document.cookie,c=b.indexOf(a),d="";if(c!=-1){var e=c+a.length,f=b.indexOf(";",e);if(f==-1)f=b.length;d=b.substring(e,f)}return d};
r.prototype.o=function(){if(!(this.a==l))if(this.b){var a=new Date;a.setTime(1000*this.a._expires_);var b=this.a._domain_,c=this.e+this.b+"; expires="+a.toGMTString()+"; path="+this.a._path_+"; domain=."+b;document.cookie=c}};function oa(a){if(a in pa)return pa[a];return pa[a]=navigator.userAgent.toLowerCase().indexOf(a)!=-1}var pa={};
function qa(){if(navigator.plugins&&navigator.mimeTypes.length){var a=navigator.plugins["Shockwave Flash"];if(a&&a.description)return a.description.replace(/([a-zA-Z]|\s)+/,"").replace(/(\s)+r/,".")}else if(navigator.userAgent&&navigator.userAgent.indexOf("Windows CE")>=0){for(var b=3,c=1;c;)try{c=new ActiveXObject("ShockwaveFlash.ShockwaveFlash."+(b+1));b++}catch(d){c=l}return b.toString()}else if(oa("msie")&&!window.opera){c=l;try{c=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7")}catch(e){b=
0;try{c=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");b=6;c.AllowScriptAccess="always"}catch(f){if(b==6)return b.toString()}try{c=new ActiveXObject("ShockwaveFlash.ShockwaveFlash")}catch(j){}}if(c){b=c.GetVariable("$version").split(" ")[1];return b.replace(/,/g,".")}}return"0"}function ua(a){var b=a.google_ad_format;if(b)return b.indexOf("_0ads")>0;return a.google_ad_output!="html"&&a.google_num_radlinks>0}function v(a){return!!a&&a.indexOf("_sdo")!=-1};function va(a,b){try{return a.top.document.URL==b.URL}catch(c){}return m}function wa(a,b,c,d){var e=c||a.google_ad_width,f=d||a.google_ad_height;if(va(a,b))return m;var j=b.documentElement;if(e&&f){var k=1,i=1;if(a.innerHeight){k=a.innerWidth;i=a.innerHeight}else if(j&&j.clientHeight){k=j.clientWidth;i=j.clientHeight}else if(b.body){k=b.body.clientWidth;i=b.body.clientHeight}if(i>2*f||k>2*e)return m}return g}function xa(a,b){for(var c in b)a["google_"+c]=b[c]}
function ya(a,b){if(!b)return a.URL;return a.referrer}function za(a,b){if(!b&&a.google_referrer_url==l)return"0";else if(b&&a.google_referrer_url==l)return"1";else if(!b&&a.google_referrer_url!=l)return"2";else if(b&&a.google_referrer_url!=l)return"3";return"4"}function Aa(a,b,c,d){a.page_url=ya(c,d);a.page_location=l}function Ba(a,b,c,d){a.page_url=b.google_page_url;a.page_location=ya(c,d)||"EMPTY"}
function Ca(a,b){var c={},d=wa(a,b,a.google_ad_width,a.google_ad_height);c.iframing=za(a,d);a.google_page_url?Ba(c,a,b,d):Aa(c,a,b,d);c.last_modified_time=b.URL==c.page_url?Date.parse(b.lastModified)/1000:l;c.referrer_url=d?a.google_referrer_url:a.google_page_url&&a.google_referrer_url?a.google_referrer_url:b.referrer;return c}function Da(a){var b={},c=a.URL.substring(a.URL.lastIndexOf("http"));b.iframing=l;b.page_url=c;b.page_location=a.URL;b.last_modified_time=l;b.referrer_url=c;return b}
function Ea(a,b){var c=Fa(a,b);xa(a,c)}function Fa(a,b){var c;return c=a.google_page_url==l&&Ga[b.domain]?Da(b):Ca(a,b)}var Ga={};Ga["ad.yieldmanager.com"]=g;var w=this,y=function(a){var b=typeof a;if(b=="object")if(a){if(a instanceof Array||!(a instanceof Object)&&Object.prototype.toString.call(a)=="[object Array]"||typeof a.length=="number"&&typeof a.splice!="undefined"&&typeof a.propertyIsEnumerable!="undefined"&&!a.propertyIsEnumerable("splice"))return"array";if(!(a instanceof Object)&&(Object.prototype.toString.call(a)=="[object Function]"||typeof a.call!="undefined"&&typeof a.propertyIsEnumerable!="undefined"&&!a.propertyIsEnumerable("call")))return"function"}else return"null";
else if(b=="function"&&typeof a.call=="undefined")return"object";return b},Ha=function(a){var b=y(a);return b=="array"||b=="object"&&typeof a.length=="number"},A=function(a){return typeof a=="string"},Ia=function(a){var b=y(a);return b=="object"||b=="array"||b=="function"};Math.floor(Math.random()*2147483648).toString(36);var Ja=function(a){var b=y(a);if(b=="object"||b=="array"){if(a.clone)return a.clone.call(a);var c=b=="array"?[]:{};for(var d in a)c[d]=Ja(a[d]);return c}return a},Ka=Date.now||function(){return(new Date).getTime()};var La=function(a,b,c){if(a.forEach)a.forEach(b,c);else if(Array.forEach)Array.forEach(a,b,c);else for(var d=a.length,e=A(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Ma=function(a){if(y(a)=="array")return a.concat();else{for(var b=[],c=0,d=a.length;c<d;c++)b[c]=a[c];return b}};var B=function(a,b){this.x=a!==undefined?a:0;this.y=b!==undefined?b:0};B.prototype.clone=function(){return new B(this.x,this.y)};B.prototype.toString=function(){return"("+this.x+", "+this.y+")"};var C=function(a,b){this.width=a;this.height=b};C.prototype.clone=function(){return new C(this.width,this.height)};C.prototype.toString=function(){return"("+this.width+" x "+this.height+")"};C.prototype.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};C.prototype.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
C.prototype.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};C.prototype.scale=function(a){this.width*=a;this.height*=a;return this};var Na=function(a,b,c){for(var d in a)b.call(c,a[d],d,a)};var Oa=function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")},Ua=function(a,b){if(b)return a.replace(Pa,"&amp;").replace(Qa,"&lt;").replace(Ra,"&gt;").replace(Sa,"&quot;");else{if(!Ta.test(a))return a;if(a.indexOf("&")!=-1)a=a.replace(Pa,"&amp;");if(a.indexOf("<")!=-1)a=a.replace(Qa,"&lt;");if(a.indexOf(">")!=-1)a=a.replace(Ra,"&gt;");if(a.indexOf('"')!=-1)a=a.replace(Sa,"&quot;");return a}},Pa=/&/g,Qa=/</g,Ra=/>/g,Sa=/\"/g,Ta=/[&<>\"]/,Va=function(a,b){for(var c=b.length,d=0;d<c;d++){var e=c==
1?b:b.charAt(d);if(a.charAt(0)==e&&a.charAt(a.length-1)==e)return a.substring(1,a.length-1)}return a},D=function(a,b){return a.indexOf(b)!=-1},Xa=function(a,b){for(var c=0,d=Oa(String(a)).split("."),e=Oa(String(b)).split("."),f=Math.max(d.length,e.length),j=0;c==0&&j<f;j++){var k=d[j]||"",i=e[j]||"",h=new RegExp("(\\d*)(\\D*)","g"),z=new RegExp("(\\d*)(\\D*)","g");do{var t=h.exec(k)||["","",""],u=z.exec(i)||["","",""];if(t[0].length==0&&u[0].length==0)break;var s=t[1].length==0?0:parseInt(t[1],10),
I=u[1].length==0?0:parseInt(u[1],10);c=Wa(s,I)||Wa(t[2].length==0,u[2].length==0)||Wa(t[2],u[2])}while(c==0)}return c},Wa=function(a,b){if(a<b)return-1;else if(a>b)return 1;return 0};Ka();var E,Ya,F,Za,$a,ab,bb,cb,db,eb,gb=function(){return w.navigator?w.navigator.userAgent:l},G=function(){return w.navigator},kb=function(){ab=$a=Za=F=Ya=E=m;var a;if(a=gb()){var b=G();E=a.indexOf("Opera")==0;Ya=!E&&a.indexOf("MSIE")!=-1;Za=(F=!E&&a.indexOf("WebKit")!=-1)&&a.indexOf("Mobile")!=-1;ab=($a=!E&&!F&&b.product=="Gecko")&&b.vendor=="Camino"}};kb();
var H=E,J=Ya,K=$a,L=F,lb=Za,mb=function(){var a=G();return a&&a.platform||""},nb=mb(),ob=function(){bb=D(nb,"Mac");cb=D(nb,"Win");db=D(nb,"Linux");eb=!!G()&&D(G().appVersion||"","X11")};ob();
var pb=bb,qb=cb,rb=db,sb=function(){var a="",b;if(H&&w.opera){var c=w.opera.version;a=typeof c=="function"?c():c}else{if(K)b=/rv\:([^\);]+)(\)|;)/;else if(J)b=/MSIE\s+([^\);]+)(\)|;)/;else if(L)b=/WebKit\/(\S+)/;if(b){var d=b.exec(gb());a=d?d[1]:""}}return a},tb=sb(),ub={},M=function(a){return ub[a]||(ub[a]=Xa(tb,a)>=0)};var N;var vb=function(a){return A(a)?document.getElementById(a):a},wb=vb,yb=function(a,b){Na(b,function(c,d){if(d=="style")a.style.cssText=c;else if(d=="class")a.className=c;else if(d=="for")a.htmlFor=c;else if(d in xb)a.setAttribute(xb[d],c);else a[d]=c})},xb={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",rowspan:"rowSpan",valign:"vAlign",height:"height",width:"width",usemap:"useMap",frameborder:"frameBorder",type:"type"},zb=function(a){var b=a.document;if(L&&!M("500")&&!lb){if(typeof a.innerHeight==
"undefined")a=window;var c=a.innerHeight,d=a.document.documentElement.scrollHeight;if(a==a.top)if(d<c)c-=15;return new C(a.innerWidth,c)}var e=b.compatMode=="CSS1Compat"&&(!H||H&&M("9.50"))?b.documentElement:b.body;return new C(e.clientWidth,e.clientHeight)},Ab=function(a){var b=!L&&a.compatMode=="CSS1Compat"?a.documentElement:a.body;return new B(b.scrollLeft,b.scrollTop)},Cb=function(){return Bb(document,arguments)},Bb=function(a,b){var c=b[0],d=b[1];if(J&&d&&(d.name||d.type)){var e=["<",c];d.name&&
e.push(' name="',Ua(d.name),'"');if(d.type){e.push(' type="',Ua(d.type),'"');d=Ja(d);delete d.type}e.push(">");c=e.join("")}var f=a.createElement(c);if(d)if(A(d))f.className=d;else yb(f,d);if(b.length>2){function j(h){if(h)f.appendChild(A(h)?a.createTextNode(h):h)}for(var k=2;k<b.length;k++){var i=b[k];Ha(i)&&!(Ia(i)&&i.nodeType>0)?La(Db(i)?Ma(i):i,j):j(i)}}return f},Eb=function(a,b){a.appendChild(b)},Fb=function(a){return a&&a.parentNode?a.parentNode.removeChild(a):l},Gb=function(a,b){var c=b.parentNode;
c&&c.replaceChild(a,b)},Hb=L&&Xa(tb,"521")<=0,Ib=function(a,b){if(typeof a.contains!="undefined"&&!Hb&&b.nodeType==1)return a==b||a.contains(b);if(typeof a.compareDocumentPosition!="undefined")return a==b||Boolean(a.compareDocumentPosition(b)&16);for(;b&&a!=b;)b=b.parentNode;return b==a},O=function(a){return a.nodeType==9?a:a.ownerDocument||a.document},Db=function(a){if(a&&typeof a.length=="number")if(Ia(a))return typeof a.item=="function"||typeof a.item=="string";else if(y(a)=="function")return typeof a.item==
"function";return m},P=function(a){this.d=a||w.document||document};P.prototype.createElement=function(a){return this.d.createElement(a)};P.prototype.createTextNode=function(a){return this.d.createTextNode(a)};P.prototype.m=function(){return this.d.compatMode=="CSS1Compat"};P.prototype.k=function(){return Ab(this.d)};P.prototype.appendChild=Eb;P.prototype.removeNode=Fb;P.prototype.replaceNode=Gb;P.prototype.contains=Ib;var Jb,Kb,Lb,Mb,Nb,Ob,Pb=function(){Ob=Nb=Mb=Lb=Kb=Jb=m;var a=gb();if(a)if(a.indexOf("Firefox")!=-1)Jb=g;else if(a.indexOf("Camino")!=-1)Kb=g;else if(a.indexOf("iPhone")!=-1||a.indexOf("iPod")!=-1)Lb=g;else if(a.indexOf("Android")!=-1)Mb=g;else if(a.indexOf("Chrome")!=-1)Nb=g;else if(a.indexOf("Safari")!=-1)Ob=g};Pb();var Qb=function(a,b){var c=O(a);if(c.defaultView&&c.defaultView.getComputedStyle){var d=c.defaultView.getComputedStyle(a,"");if(d)return d[b]}return l},Q=function(a,b){return Qb(a,b)||(a.currentStyle?a.currentStyle[b]:l)||a.style[b]},Rb=function(a){var b;b=a?a.nodeType==9?a:O(a):document;if(J&&!(b?new P(O(b)):N||(N=new P)).m())return b.body;return b.documentElement},Sb=function(a){var b=a.getBoundingClientRect();if(J){var c=a.ownerDocument;b.left-=c.documentElement.clientLeft+c.body.clientLeft;b.top-=
c.documentElement.clientTop+c.body.clientTop}return b},Tb=function(a){if(J)return a.offsetParent;for(var b=O(a),c=Q(a,"position"),d=c=="fixed"||c=="absolute",e=a.parentNode;e&&e!=b;e=e.parentNode){c=Q(e,"position");d=d&&c=="static"&&e!=b.documentElement&&e!=b.body;if(!d&&(e.scrollWidth>e.clientWidth||e.scrollHeight>e.clientHeight||c=="fixed"||c=="absolute"))return e}return l},Ub=function(a){var b,c=O(a),d=Q(a,"position"),e=K&&c.getBoxObjectFor&&!a.getBoundingClientRect&&d=="absolute"&&(b=c.getBoxObjectFor(a))&&
(b.screenX<0||b.screenY<0),f=new B(0,0),j=Rb(c);if(a==j)return f;if(a.getBoundingClientRect){b=Sb(a);var k=(c?new P(O(c)):N||(N=new P)).k();f.x=b.left+k.x;f.y=b.top+k.y}else if(c.getBoxObjectFor&&!e){b=c.getBoxObjectFor(a);var i=c.getBoxObjectFor(j);f.x=b.screenX-i.screenX;f.y=b.screenY-i.screenY}else{var h=a;do{f.x+=h.offsetLeft;f.y+=h.offsetTop;if(h!=a){f.x+=h.clientLeft||0;f.y+=h.clientTop||0}if(L&&Q(h,"position")=="fixed"){f.x+=c.body.scrollLeft;f.y+=c.body.scrollTop;break}h=h.offsetParent}while(h&&
h!=a);if(H||L&&d=="absolute")f.y-=c.body.offsetTop;for(h=a;(h=Tb(h))&&h!=c.body;){f.x-=h.scrollLeft;if(!H||h.tagName!="TR")f.y-=h.scrollTop}}return f};K&&M("1.9");
var Vb=function(a,b,c,d){if(/^\d+px?$/.test(b))return parseInt(b,10);else{var e=a.style[c],f=a.runtimeStyle[c];a.runtimeStyle[c]=a.currentStyle[c];a.style[c]=b;var j=a.style[d];a.style[c]=e;a.runtimeStyle[c]=f;return j}},Wb=function(a){var b=O(a),c="";if(b.createTextRange){var d=b.body.createTextRange();d.moveToElementText(a);c=d.queryCommandValue("FontName")}if(!c){c=Q(a,"fontFamily");if(H&&rb)c=c.replace(/ \[[^\]]*\]/,"")}var e=c.split(",");if(e.length>1)c=e[0];return Va(c,"\"'")},Xb=function(a){var b=
a.match(/[^\d]+$/);return b&&b[0]||l},Yb={cm:1,"in":1,mm:1,pc:1,pt:1},Zb={em:1,ex:1},$b=function(a){var b=Q(a,"fontSize"),c=Xb(b);if(b&&"px"==c)return parseInt(b,10);if(J)if(c in Yb)return Vb(a,b,"left","pixelLeft");else if(a.parentNode&&a.parentNode.nodeType==1&&c in Zb){var d=a.parentNode,e=Q(d,"fontSize");return Vb(d,b==e?"1em":b,"left","pixelLeft")}var f=Cb("span",{style:"visibility:hidden;position:absolute;line-height:0;padding:0;margin:0;border:0;height:1em;"});Eb(a,f);b=f.offsetHeight;Fb(f);
return b};var R=document,S=navigator,T=window;
function ac(){var a=R.cookie,b=Math.round((new Date).getTime()/1000),c=T.google_analytics_domain_name,d=typeof c=="undefined"?bc("auto"):bc(c),e=a.indexOf("__utma="+d+".")>-1,f=a.indexOf("__utmb="+d)>-1,j=a.indexOf("__utmc="+d)>-1,k,i={},h=!!T&&!!T.gaGlobal;if(e){k=a.split("__utma="+d+".")[1].split(";")[0].split(".");i.sid=f&&j?k[3]+"":h&&T.gaGlobal.sid?T.gaGlobal.sid:b+"";i.vid=k[0]+"."+k[1];i.from_cookie=g}else{i.sid=h&&T.gaGlobal.sid?T.gaGlobal.sid:b+"";i.vid=h&&T.gaGlobal.vid?T.gaGlobal.vid:(Math.round(Math.random()*
2147483647)^cc()&2147483647)+"."+b;i.from_cookie=m}i.dh=d;i.hid=h&&T.gaGlobal.hid?T.gaGlobal.hid:Math.round(Math.random()*2147483647);return T.gaGlobal=i}
function cc(){var a=R.cookie?R.cookie:"",b=T.history.length,c,d,e=[S.appName,S.version,S.language?S.language:S.browserLanguage,S.platform,S.userAgent,S.javaEnabled()?1:0].join("");if(T.screen)e+=T.screen.width+"x"+T.screen.height+T.screen.colorDepth;else if(T.java){d=java.awt.Toolkit.getDefaultToolkit().getScreenSize();e+=d.screen.width+"x"+d.screen.height}e+=a;e+=R.referrer?R.referrer:"";for(c=e.length;b>0;)e+=b--^c++;return dc(e)}
function dc(a){var b=1,c=0,d,e;if(!(a==undefined||a=="")){b=0;for(d=a.length-1;d>=0;d--){e=a.charCodeAt(d);b=(b<<6&268435455)+e+(e<<14);c=b&266338304;b=c!=0?b^c>>21:b}}return b}function bc(a){if(!a||a==""||a=="none")return 1;if("auto"==a){a=R.domain;if("www."==a.substring(0,4))a=a.substring(4,a.length)}return dc(a.toLowerCase())};var U="";function ec(a){if(a){if(U!="")U+=",";U+=a}}function fc(a){if(a&&a instanceof Array)for(var b=0;b<a.length;b++)a[b]&&typeof a[b]=="string"&&ec(a[b])}var gc=m;
function hc(a,b){var c="script";(gc=ic(a,b))||(a.google_allow_expandable_ads=m);var d=!jc();gc&&d&&b.write("<"+c+' src="http://'+q+'/pagead/expansion_embed.js"></'+c+">");var e=kc(a,b,o("1",0.01)),f=d||e;f&&oa("msie")&&!window.opera?b.write("<"+c+' src="http://'+q+'/pagead/render_ads.js"></'+c+">"):b.write("<"+c+">window.google_render_ad();</"+c+">")}function V(a){return a!=l?'"'+a+'"':'""'}function W(a,b){if(a&&b)window.google_ad_url+="&"+a+"="+b}
function X(a){var b=window,c=ka(a),d=b[a];W(c,d)}function Y(a,b){b!=l&&W(a,la(b))}function Z(a){var b=window,c=ka(a),d=b[a];Y(c,d)}function $(a,b){var c=window,d=ka(a),e=c[a];if(d&&e&&typeof e=="object")e=e[b%e.length];W(d,e)}
function lc(a){var b=a.screen,c=navigator.javaEnabled(),d=-(new Date).getTimezoneOffset();if(b){W("u_h",b.height);W("u_w",b.width);W("u_ah",b.availHeight);W("u_aw",b.availWidth);W("u_cd",b.colorDepth)}W("u_tz",d);W("u_his",history.length);W("u_java",c);navigator.plugins&&W("u_nplug",navigator.plugins.length);navigator.mimeTypes&&W("u_nmime",navigator.mimeTypes.length)}
function mc(a){if(a.google_enable_first_party_cookie){if(a._GA_googleCookieHelper==l)a._GA_googleCookieHelper=new r;if(!a._google_cookie_fetched){a._google_cookie_fetched=g;a._GA_googleCookieHelper.i(nc(a.google_ad_client))}}}function nc(a){if(a){a=a.toLowerCase();if(a.substring(0,3)!="ca-")a="ca-"+a}return a}function oc(a){if(a){a=a.toLowerCase();if(a.substring(0,9)!="dist-aff-")a="dist-aff-"+a}return a}function pc(a){var b="google_unique_id";if(a[b])++a[b];else a[b]=1;return a[b]}
function qc(){var a=J&&M("6")&&!M("8"),b=K&&M("1.8.1"),c=L&&M("525");if(qb&&(a||b||c))return g;else if(pb&&(c||b))return g;else if(rb&&b)return g;return m}function jc(){return(typeof ExpandableAdSlotFactory=="function"||typeof ExpandableAdSlotFactory=="object")&&typeof ExpandableAdSlotFactory.createIframe=="function"}
function ic(a,b){if(a.google_allow_expandable_ads===m||!b.body||a.google_ad_output!="html"||wa(a,b)||ua(a)||v(a.google_ad_format)||isNaN(a.google_ad_height)||isNaN(a.google_ad_width)||!qc())return m;return g}
function rc(){var a=Math.random(),b=o("0.04",0);if(a<b)return"68120011";var c=2*b;if(a<c)return"68120021";c+=b;if(a<c)return"68120031";c+=b;if(a<c)return"68120041";if((window.google_unique_id||0)==0&&window.google_ad_output=="html"&&document.body&&typeof document.body.getBoundingClientRect=="function"){var d=o("0.01",0);c+=d;if(a<c)return"36812001";c+=d;if(a<c)return"36812002"}return""}
function sc(a,b,c,d){var e=pc(a);c=c.substring(0,1992);c=c.replace(/%\w?$/,"");var f="script";if((a.google_ad_output=="js"||a.google_ad_output=="json_html")&&(a.google_ad_request_done||a.google_radlink_request_done))b.write("<"+f+' language="JavaScript1.1" src='+V(tc(c))+"></"+f+">");else if(a.google_ad_output=="html")if(gc&&jc()){var j=a.google_container_id||d||l;a["google_expandable_ad_slot"+e]=ExpandableAdSlotFactory.createIframe("google_ads_frame"+e,tc(c),a.google_ad_width,a.google_ad_height,
j)}else{var k='<iframe name="google_ads_frame" width='+V(a.google_ad_width)+" height="+V(a.google_ad_height)+" frameborder="+V(a.google_ad_frameborder)+" src="+V(tc(c))+' marginwidth="0" marginheight="0" vspace="0" hspace="0" allowtransparency="true" scrolling="no"></iframe>';a.google_container_id?uc(a.google_container_id,b,k):b.write(k)}else a.google_ad_output=="textlink"&&b.write("<"+f+' language="JavaScript1.1" src='+V(tc(c))+"></"+f+">")}
function vc(a,b,c){if(!a)return m;if(!b)return g;return c}function wc(a){for(var b in ha)a[b]=l;for(b in ia)b=="google_correlator"||(a[b]=l);for(b in ja)a[b]=l;a.google_allow_expandable_ads=l;a.google_container_id=l;a.google_tag_info=l;a.google_eids=l}
function xc(a,b){var c=l,d=window,e=document,f=n,j=d.google_ad_format,k=yc(d),i;if(d.google_cpa_choice!=c){d.google_ad_url=k+"/cpa/ads?";i=escape(nc(d.google_ad_client));d.google_ad_region="_google_cpa_region_";X("google_cpa_choice");if(typeof e.characterSet!="undefined")Y("oe",e.characterSet);else typeof e.charset!="undefined"&&Y("oe",e.charset)}else if(v(j)){d.google_ad_url=k+"/pagead/sdo?";i=escape(oc(d.google_ad_client))}else{d.google_ad_url=k+"/pagead/ads?";i=escape(nc(d.google_ad_client))}d.google_ad_url+=
"client="+i;X("google_ad_host");X("google_ad_host_tier_id");var h=d.google_num_slots_by_client,z=d.google_num_slots_by_channel,t=d.google_prev_ad_formats_by_region,u=d.google_prev_ad_slotnames_by_region;if(d.google_ad_region==c&&d.google_ad_section!=c)d.google_ad_region=d.google_ad_section;var s=d.google_ad_region==c?"":d.google_ad_region;if(v(j)){d.google_num_sdo_slots=d.google_num_sdo_slots?d.google_num_sdo_slots+1:1;if(d.google_num_sdo_slots>4)return m}else if(ua(d)){d.google_num_0ad_slots=d.google_num_0ad_slots?
d.google_num_0ad_slots+1:1;if(d.google_num_0ad_slots>3)return m}else if(d.google_cpa_choice==c){d.google_num_ad_slots=d.google_num_ad_slots?d.google_num_ad_slots+1:1;if(d.google_num_slots_to_rotate){t[s]=c;u[s]=c;if(d.google_num_slot_to_show==c)d.google_num_slot_to_show=f%d.google_num_slots_to_rotate+1;if(d.google_num_slot_to_show!=d.google_num_ad_slots)return m}else if(d.google_num_ad_slots>6&&s=="")return m}W("dt",n);X("google_language");d.google_country?X("google_country"):X("google_gl");X("google_region");
Z("google_city");Z("google_hints");X("google_safe");X("google_encoding");X("google_last_modified_time");Z("google_alternate_ad_url");X("google_alternate_color");X("google_skip");X("google_targeting");var I=d.google_ad_client;if(h[I])h[I]+=1;else{h[I]=1;h.length+=1}if(t[s])if(!v(j)){Y("prev_fmts",t[s].toLowerCase());h.length>1&&W("slot",h[I])}u[s]&&Y("prev_slotnames",u[s].toLowerCase());if(vc(j,d.google_ad_slot,d.google_override_format)){Y("format",j.toLowerCase());v(j)||(t[s]=t[s]?t[s]+","+j:j)}else if(d.google_ad_slot)u[s]=
u[s]?u[s]+","+d.google_ad_slot:d.google_ad_slot;X("google_max_num_ads");W("output",d.google_ad_output);X("google_adtest");X("google_ad_callback");X("google_ad_slot");Z("google_correlator");d.google_new_domain_checked==1&&d.google_new_domain_enabled==0&&W("dblk",1);if(d.google_ad_channel){Z("google_ad_channel");for(var fb="",hb=d.google_ad_channel.split(zc),ra=0;ra<hb.length;ra++){var sa=hb[ra];if(z[sa])fb+=sa+"+";else z[sa]=1}Y("pv_ch",fb)}if(d.google_ad_host_channel){Z("google_ad_host_channel");
var Gc=Ac(d.google_ad_host_channel,d.google_viewed_host_channels);Y("pv_h_ch",Gc)}d.google_enable_first_party_cookie&&Y("cookie",d._GA_googleCookieHelper.l());Z("google_page_url");$("google_color_bg",f);$("google_color_text",f);$("google_color_link",f);$("google_color_url",f);$("google_color_border",f);$("google_color_line",f);d.google_reuse_colors?W("reuse_colors",1):W("reuse_colors",0);X("google_font_face");X("google_kw_type");Z("google_kw");Z("google_contents");X("google_num_radlinks");X("google_max_radlink_len");
X("google_rl_filtering");X("google_rl_mode");X("google_rt");Z("google_rl_dest_url");X("google_num_radlinks_per_unit");X("google_ad_type");X("google_image_size");X("google_ad_region");fc(d.google_eids);Y("eid",U);var ib=d.google_allow_expandable_ads;if(ib!=l)ib?W("ea","1"):W("ea","0");X("google_feedback");Z("google_referrer_url");Z("google_page_location");W("frm",d.google_iframing);X("google_bid");X("google_ctr_threshold");X("google_cust_age");X("google_cust_gender");X("google_cust_interests");X("google_cust_id");
X("google_cust_job");X("google_cust_u_url");X("google_cust_l");X("google_cust_lh");X("google_cust_ch");X("google_ed");X("google_video_doc_id");X("google_video_product_type");Z("google_ui_features");Z("google_ui_version");Z("google_tag_info");Z("google_only_ads_with_video");Z("google_only_pyv_ads");Z("google_disable_video_autoplay");if(a){Y("dff",Wb(a));Y("dfs",$b(a));var x;if(b)if(typeof a.getBoundingClientRect=="function"){var jb=a.getBoundingClientRect();x={x:jb.left,y:jb.top}}else{x={};x.x="-252738";
x.y="-252738"}else try{x=Ub(a)}catch(Tc){x={};x.x="-252738";x.y="-252738"}var ta=zb(window);if(x&&ta){Y("biw",ta.width);Y("bih",ta.height);Y("adx",x.x);Y("ady",x.y)}}ac();W("ga_vid",d.gaGlobal.vid);W("ga_sid",d.gaGlobal.sid);W("ga_hid",d.gaGlobal.hid);W("ga_fc",d.gaGlobal.from_cookie);Z("google_analytics_uacct");X("google_ad_override");X("google_flash_version");W("w",d.google_ad_width||-1);W("h",d.google_ad_height||-1);lc(d);return g}
function Ac(a,b){for(var c=a.split("|"),d=-1,e=[],f=0;f<c.length;f++){var j=c[f].split(zc);b[f]||(b[f]={});for(var k="",i=0;i<j.length;i++){var h=j[i];if(!(h==""))if(b[f][h])k+="+"+h;else b[f][h]=1}k=k.slice(1);e[f]=k;if(k!="")d=f}var z="";if(d>-1){for(f=0;f<d;f++)z+=e[f]+"|";z+=e[d]}return z}
function Bc(){var a=window,b=document;mc(a);var c=rc();ec(c);var d,e=m,f=m,j=m;switch(c){case "68120031":j=g;case "68120021":f=g;case "68120041":e=g;break;case "36812002":if(!window.google_atf_included){window.google_atf_included=g;ma("http://"+q+"/pagead/atf.js")}break}if(e){var k="google_temp_span";d=a.google_container_id&&wb(a.google_container_id)||wb(k);if(!d&&!a.google_container_id){b.write("<span id="+k+"></span>");d=wb(k)}}var i=m;i=f?xc(d,j):xc();d&&d.id==k&&Fb(d);if(i){sc(a,b,a.google_ad_url);
wc(a)}}function tc(a){var b=(new Date).getTime()-n,c="&dtd="+(b<1000?b:"M");return a+c}function Cc(){Bc();return g}
function Dc(a){var b=window,c=l,d=b.onerror;b.onerror=a;if(b.google_ad_frameborder==c)b.google_ad_frameborder=0;if(b.google_ad_output==c)b.google_ad_output="html";if(v(b.google_ad_format)){var e=b.google_ad_format.match(/^(\d+)x(\d+)_.*/);if(e){b.google_ad_width=parseInt(e[1],10);b.google_ad_height=parseInt(e[2],10);b.google_ad_output="html"}}if(b.google_ad_format==c&&b.google_ad_output=="html")b.google_ad_format=b.google_ad_width+"x"+b.google_ad_height;Ea(b,document);if(b.google_num_slots_by_channel==
c)b.google_num_slots_by_channel=[];if(b.google_viewed_host_channels==c)b.google_viewed_host_channels=[];if(b.google_num_slots_by_client==c)b.google_num_slots_by_client=[];if(b.google_prev_ad_formats_by_region==c)b.google_prev_ad_formats_by_region=[];if(b.google_prev_ad_slotnames_by_region==c)b.google_prev_ad_slotnames_by_region=[];if(b.google_correlator==c)b.google_correlator=n;if(b.google_adslot_loaded==c)b.google_adslot_loaded={};if(b.google_adContentsBySlot==c)b.google_adContentsBySlot={};if(b.google_flash_version==
c)b.google_flash_version=qa();if(b.google_new_domain_checked==c)b.google_new_domain_checked=0;if(b.google_new_domain_enabled==c)b.google_new_domain_enabled=0;b.onerror=d}function Ec(a){for(var b={},c=a.split("?"),d=c[c.length-1].split("&"),e=0;e<d.length;e++){var f=d[e].split("=");if(f[0])try{b[f[0].toLowerCase()]=f.length>1?window.decodeURIComponent?decodeURIComponent(f[1].replace(/\+/g," ")):unescape(f[1]):""}catch(j){}}return b}
function Fc(){var a=window,b=Ec(document.URL);if(b.google_ad_override){a.google_ad_override=b.google_ad_override;a.google_adtest="on"}}function uc(a,b,c){if(a){var d=b.getElementById(a);if(d&&c&&c.length!=""){d.style.visibility="visible";d.innerHTML=c}}}var zc=/[+, ]/;window.google_render_ad=Bc;var Hc={google:1,googlegroups:1,gmail:1,googlemail:1,googleimages:1,googleprint:1};function Ic(a){var b=a.google_page_location||a.google_page_url;if(!b)return m;b=b.toString();if(b.indexOf("http://")==0)b=b.substring(7,b.length);else if(b.indexOf("https://")==0)b=b.substring(8,b.length);var c=b.indexOf("/");if(c==-1)c=b.length;var d=b.substring(0,c),e=d.split("."),f=m;if(e.length>=3)f=e[e.length-3]in Hc;if(e.length>=2)f=f||e[e.length-2]in Hc;return f}
function kc(a,b,c){if(Ic(a)){a.google_new_domain_checked=1;return m}if(a.google_new_domain_checked==0){var d=Math.random();if(d<=c){var e="http://"+ea+"/pagead/test_domain.js",f="script";b.write("<"+f+' src="'+e+'"></'+f+">");a.google_new_domain_checked=1;return g}}return m}function yc(a){if(!Ic(a)&&a.google_new_domain_enabled==1)return"http://"+ea;return"http://"+fa};var Jc=["30143070","30143071","30143072","30143073","30143074","30143075"],Kc=typeof window.postMessage=="function"||typeof window.postMessage=="object"||typeof document.postMessage=="function",Mc=function(a,b){typeof A1_googleCreateSlot=="function"?A1_googleCreateSlot(a.google_ad_client):Lc(a,b)},Nc=function(){if(!(Kc||!L))return m;return g},Oc=function(a){if(ua(a)||v(a.google_ad_format))return m;var b=a.google_ad_output;if(b&&b!="html")return m;var c=a.google_ad_client;if(typeof c!="string"||c.substring(0,
4)!="pub-"&&c.substring(0,7)!="ca-pub-")return m;return g},Qc=function(a){if(typeof a.google_a1_eid=="string")return a.google_a1_eid;var b=o("0.01",0);a.google_a1_eid=Pc(Jc,b);return a.google_a1_eid},Lc=function(a,b){if(!a.google_included_a1_script){var c="script",d="/pagead/show_ads_sra2.js";b.write("<"+c+' src="http://'+q+d+'"></'+c+">");a.google_included_a1_script=g}},Pc=function(a,b){var c=Math.random();if(c<b){var d=Math.floor(c/b*a.length);return a[d]}return""};function Rc(){Fc();Dc(Cc);hc(window,document)}if(!Nc(window)||!Oc(window))Rc();else{var Sc=Qc(window);if(Sc){ec(Sc);window.google_allow_expandable_ads=m}!Sc||Sc=="30143070"?Rc():Mc(window,document)};
})()


}
/*
     FILE ARCHIVED ON 00:42:57 May 28, 2009 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 16:34:18 Dec 27, 2022.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.074
  exclusion.robots.policy: 0.064
  RedisCDXSource: 2.147
  esindex: 0.009
  LoadShardBlock: 192.56 (6)
  PetaboxLoader3.datanode: 142.483 (7)
  CDXLines.iter: 111.0 (3)
  PetaboxLoader3.resolve: 1324.389 (2)
  load_resource: 1306.554
*/
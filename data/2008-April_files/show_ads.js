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
var h=document;function m(){var b=h.cookie,a=Math.round((new Date).getTime()/1000),c=b.indexOf("__utma=")>-1,e=b.indexOf("__utmb=")>-1,d=b.indexOf("__utmc=")>-1,f,g={};if(c){f=b.split("__utma=")[1].split(";")[0].split(".");g.sid=(!e||!d?a:f[4])+"";g.vid=f[1]+"."+f[2];g.from_cookie=true}else{g.sid=window&&window.gaGlobal&&window.gaGlobal.sid?window.gaGlobal.sid:a+"";g.vid=window&&window.gaGlobal&&window.gaGlobal.vid?window.gaGlobal.vid:Math.round(Math.random()*2147483647)+"."+a;g.from_cookie=false}g.hid=
window&&window.gaGlobal&&window.gaGlobal.hid?window.gaGlobal.hid:Math.round(Math.random()*2147483647);window.gaGlobal=g;return g};var n={google_ad_channel:"channel",google_ad_host:"host",google_ad_region:"region",google_ad_section:"region",google_ad_type:"ad_type",google_adtest:"adtest",google_alternate_ad_url:"alternate_ad_url",google_alternate_color:"alt_color",google_bid:"bid",google_city:"gcs",google_color_bg:"color_bg",google_color_border:"color_border",google_color_line:"color_line",google_color_link:"color_link",google_color_text:"color_text",google_color_url:"color_url",google_contents:"contents",google_country:"gl",
google_cust_age:"cust_age",google_cust_ch:"cust_ch",google_cust_gender:"cust_gender",google_cust_id:"cust_id",google_cust_interests:"cust_interests",google_cust_job:"cust_job",google_cust_l:"cust_l",google_cust_lh:"cust_lh",google_cust_u_url:"cust_u_url",google_disable_video_autoplay:"disable_video_autoplay",google_ed:"ed",google_encoding:"oe",google_feedback:"feedback_link",google_flash_version:"flash",google_gl:"gl",google_hints:"hints",google_kw:"kw",google_kw_type:"kw_type",google_language:"hl",
google_referrer_url:"ref",google_region:"gr",google_reuse_colors:"reuse_colors",google_safe:"adsafe",google_targeting:"targeting",google_ui_features:"ui"},r={google_ad_format:"format",google_ad_output:"output",google_ad_callback:"callback",google_ad_override:"google_ad_override",google_ad_slot:"slotname",google_analytics_uacct:"ga_wpids",google_correlator:"correlator",google_cpa_choice:"cpa_choice",google_image_size:"image_size",google_last_modified_time:"lmt",google_max_num_ads:"num_ads",google_max_radlink_len:"max_radlink_len",
google_num_radlinks:"num_radlinks",google_num_radlinks_per_unit:"num_radlinks_per_unit",google_only_ads_with_video:"only_ads_with_video",google_page_location:"loc",google_page_url:"url",google_rl_dest_url:"rl_dest_url",google_rl_filtering:"rl_filtering",google_rl_mode:"rl_mode",google_rt:"rt",google_skip:"skip"};function s(b){return n[b]||r[b]||null};function v(){}v.prototype.e=function(){};v.prototype.m=function(){};v.prototype.P=function(){};var y=null;function z(){this.b=this.M();this.p=false;if(!this.b){this.p=this.C();if(!this.p)y.m("Browser does not allow cookies")}}z.prototype.n="__gads=";z.prototype.f="GoogleAdServingTest=";z.prototype.G=function(){return this.b};z.prototype.setCookieInfo=function(b){this.a=b._cookies_[0];if(this.a!=null){this.b=this.a._value_;this.O()}};z.prototype.F=function(b){var a=(new Date).valueOf(),c=new Date;
c.setTime(a+b);return c};z.prototype.D=function(b){if(this.b!=null||!this.p){y.e("Skipping fetch cookie call");return}var a=document.domain,c="https://web.archive.org/web/20080414175709/http://partner.googleadservices.com/gampad/cookie.js?callback=_GA_googleCookieHelper.setCookieInfo&client="+C(b)+"&domain="+C(a);y.e("Issuing a fetch cookie call with <a href='"+c+"'>"+c+"</a>");document.write("<script src = '"+c+"'><\/script>")};z.prototype.C=function(){document.cookie=this.f+"Good";var b=this.w(this.f),a=b=="Good";if(a){var c=this.F(-1);
document.cookie=this.f+"; expires="+c.toGMTString()}return a};z.prototype.M=function(){var b=this.w(this.n);if(b!=null)y.e("Read first party cookie: "+b);else y.m("No first party cookie found");return b};z.prototype.w=function(b){var a=document.cookie,c=a.indexOf(b),e=null;if(c!=-1){var d=c+b.length,f=a.indexOf(";",d);if(f==-1)f=a.length;e=a.substring(d,f)}return e};z.prototype.O=function(){if(this.a==null)y.m("Skipping cookie creation: no cookie info");else if(this.b==null)y.P("Skipping cookie creation: no cookie value");
else{var b=new Date;b.setTime(1000*this.a._expires_);var a=this.a._domain_,c=this.n+this.b+"; expires="+b.toGMTString()+"; path="+this.a._path_+"; domain=."+a;document.cookie=c;y.e("Written cookie: "+c)}};(function(){function b(){}b.prototype.s=function(e){var d=e.indexOf("#")+1;return d?e.substr(d):""};b.prototype.u=function(e){return/[&<>\"]/.test(e)?e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\"/g,"&quot;"):e};b.prototype.d=function(e){var d="<iframe";for(var f in e)d+=" "+f+'="'+this.u(e[f])+'"';return d+"></iframe>"};b.prototype.t=function(e,d){try{return e.frames[d]}catch(f){return null}};b.prototype.i=function(e){var d=document.createElement("iframe");for(var f in e)d.setAttribute(f,
e[f]);return d};b.prototype.o=function(e,d){var f=this;setTimeout(function(){document.body.appendChild(f.i({id:e,name:e,src:d,width:0,height:0,frameBorder:0}))},0)};b.prototype.B=function(e,d){var f=this;document.write(f.d({id:e,name:e,src:d,width:0,height:0,frameBorder:0}))};b.prototype.k=function(e,d){var f=[],g=e.length,k=0;while(k<g){var j=e.substr(k,d),l=j.length;if(k+l<g)for(var i=1;i<3;++i)if(j.charAt(l-i)=="%")j=j.substr(0,l-=i);f.push(j);k+=l}return f};b.prototype.c=function(e,d,f){if(!window[e]){var g=
window[e]=new d;for(var k=0;k<f.length;++k)g[f[k][0]]=f[k][1]}};var a=b.prototype,c=[["getHash",a.s],["htmlEscape",a.u],["makeIframeTag",a.d],["getIframe",a.t],["makeIframeNode",a.i],["appendHiddenIframe",a.o],["writeHiddenIframe",a.B],["splitURIComponent",a.k],["exportSingleton",a.c],["MAX_URL_LENGTH",4095],["IDI_DEFAULT_POLLING_INTERVAL",1000]];b.prototype.c("IDICommon",b,c)})();(function(){function b(d,f){for(var g in f)d[g]=f[g]}function a(){var d=this;d.H=window.location.href.replace(/([^:\/])\/.*$/,"$1/robots.txt");d.I="";d.r={};d.g={};d.j={};d.J={};d.v={}}a.prototype.L=function(d,f,g){var k;if(typeof g=="object")k=g.moduleRelayUrl;var j=this,l=j.g[d];if(isNaN(l))throw new Error("Invalid module id");else{var i=typeof k=="string"?k:j.h(j.J[d]),o=encodeURIComponent(f)+"$",q=IDICommon.MAX_URL_LENGTH-1-i.length,t=IDICommon.k(o,q),w=t.length;for(var p=0;p<w;++p)IDICommon.o(d+
"_"+(l+p),i+"#"+t[p]);j.g[d]+=w}};a.prototype.z=function(d,f,g){var k=this;k.l(d);k.v[d]=window.setInterval(function(){k.K(d,f)},typeof g=="object"&&g.pollingInterval||IDICommon.IDI_DEFAULT_POLLING_INTERVAL)};a.prototype.l=function(d){var f=this;window.clearInterval(f.v[d]);f.v[d]=0};a.prototype.N=function(d){this.H=d};a.prototype.A=function(d){this.I=d};a.prototype.h=function(d){return this.I||d.replace(/([^:\/]\/).*$/,"$1ig/idi_relay")};a.prototype.K=function(d,f){var g=this,k=window.frames[d];
if(k){var j;while(j=IDICommon.t(k,d+"_"+g.r[d])){try{if(j.location.href=="about:blank")break}catch(l){break}g.j[d]+=IDICommon.s(j.location.href);++g.r[d]}var i=g.j[d].split("$"),o=i.length-1;if(o>0){g.j[d]=i[o];for(var q=0;q<o;++q)f(decodeURIComponent(i[q]),d)}}};a.prototype.q=function(d,f,g,k,j){var l=this,i={frameBorder:0,scrolling:"no"},o,q,t,w,p;if(typeof j=="object"){o=j.iframeAttrs;q=j.callback;t=j.userPrefs;w=j.pollingInterval;p=j.parentDivId}if(typeof o=="object")b(i,o);b(i,{id:f,name:f,src:d,
width:g,height:k});l.r[f]=0;l.g[f]=0;l.j[f]="";l.J[f]=d;var x=[];if(typeof t=="object")for(var u in t)x.push(encodeURIComponent(u)+"="+encodeURIComponent(t[u]));if(typeof q=="function"){x.push("idi_hr="+encodeURIComponent(l.H));l.z(f,q,j)}if(x.length){var A=x.join("&");if(i.src.length+1+A.length>IDICommon.MAX_URL_LENGTH){A+="$";var L=l.h(d),V=IDICommon.MAX_URL_LENGTH-1-L.length,M=IDICommon.k(A,V),N=M.length;for(var u=0;u<N;++u){var H=f+"_"+u,O=L+"#"+M[u];if(p){var B=document.getElementById(p);B.innerHTML=
B.innerHTML+l.i({id:H,name:H,src:O,width:0,height:0,frameBorder:0})}else IDICommon.B(H,O)}l.g[f]+=N;A=""}i.src+="#"+A}if(p){var B=document.getElementById(p);B.innerHTML=B.innerHTML+IDICommon.d(i)}else document.write(IDICommon.d(i))};var c=a.prototype,e=[["setHostRelayUrl",c.N],["setModuleRelayUrl",c.A],["getModuleRelayUrl",c.h],["createModule",c.q],["postMessageToModule",c.L],["registerListener",c.z],["unregisterListener",c.l]];IDICommon.c("IDIHost",a,e)})();function D(b){return b!=null?'"'+b+'"':'""'}function C(b){if(typeof encodeURIComponent=="function")return encodeURIComponent(b);else return escape(b)}function E(b,a){if(b&&a)window.google_ad_url+="&"+b+"="+a}function F(b){var a=window,c=s(b),e=a[b];E(c,e)}function G(b,a){if(a)E(b,C(a))}function I(b){var a=window,c=s(b),e=a[b];G(c,e)}function J(b,a){var c=window,e=s(b),d=c[b];if(e&&d&&typeof d=="object")d=d[a%d.length];E(e,d)}function K(b,a){var c=b.screen,e=navigator.javaEnabled(),d=-a.getTimezoneOffset();
if(c){E("u_h",c.height);E("u_w",c.width);E("u_ah",c.availHeight);E("u_aw",c.availWidth);E("u_cd",c.colorDepth)}E("u_tz",d);E("u_his",history.length);E("u_java",e);if(navigator.plugins)E("u_nplug",navigator.plugins.length);if(navigator.mimeTypes)E("u_nmime",navigator.mimeTypes.length)}function P(b){if(!b.google_enable_first_party_cookie)return;if(y==null)y=new v;if(b._GA_googleCookieHelper==null)b._GA_googleCookieHelper=new z;if(!b._google_cookie_fetched){b._google_cookie_fetched=true;b._GA_googleCookieHelper.D(Q(b.google_ad_client))}}
function Q(b){if(b){b=b.toLowerCase();if(b.substring(0,3)!="ca-")b="ca-"+b}return b}function R(b){if(b){b=b.toLowerCase();if(b.substring(0,9)!="dist-aff-")b="dist-aff-"+b}return b}function S(b,a){var c=document.getElementById(b);c.style.height=a+"px"}function T(b,a,c){window.clearTimeout(c);var e=/^google_resize_flash_ad_idi\((\d+)\)/,d=b.match(e);if(d)S(a,d[1])}function aa(b,a,c,e){c=c.substring(0,2000);c=c.replace(/%\w?$/,"");if((b.google_ad_output=="js"||b.google_ad_output=="json_html")&&(b.google_ad_request_done||
b.google_radlink_request_done))a.write('<script language="JavaScript1.1" src='+D(c)+"><\/script>");else if(b.google_ad_output=="html"){if(b.name!="google_ads_frame"){if(e!=null)a.write('<div id="'+e+'">');if(ba(b.google_ad_output,b.google_ad_client)){IDIHost.A("https://web.archive.org/web/20080414175709/http://pagead2.googlesyndication.com/pagead/idi_relay.html");var d=0;if(b.google_num_0ad_slots)d+=b.google_num_0ad_slots;if(b.google_num_ad_slots)d+=b.google_num_ad_slots;if(b.google_num_sdo_slots)d+=b.google_num_sdo_slots;var f="google_inline_div"+
d,g="<div id="+D(f)+' style="position:relative;width:'+b.google_ad_width+'px"></div><div style="position:relative;width:'+b.google_ad_width+"px;height:"+b.google_ad_height+'px;z-index:-1"></div>';a.write(g);var k="google_frame"+d,j=b.setTimeout(function(){IDIHost.l(k)},5000);IDIHost.q(c,k,b.google_ad_width,b.google_ad_height,{callback:function(l,i){T(l,i,j)},pollingInterval:500,iframeAttrs:{style:"position: absolute;left:0px",marginWidth:"0",marginHeight:"0",vspace:"0",hspace:"0",allowTransparency:"true"},
parentDivId:f})}else{a.write('<iframe name="google_ads_frame" width='+D(b.google_ad_width)+" height="+D(b.google_ad_height)+" frameborder="+D(b.google_ad_frameborder)+" src="+D(c)+' marginwidth="0" marginheight="0" vspace="0" hspace="0" allowtransparency="true" scrolling="no">');a.write("</iframe>")}if(e!=null)a.write("</div>")}}else if(b.google_ad_output=="textlink")a.write('<script language="JavaScript1.1" src='+D(c)+"><\/script>")}function ca(b){for(var a in n)b[a]=null;for(var a in r){if(a=="google_correlator")continue;
b[a]=null}}function da(b){if(b.google_ad_format)return b.google_ad_format.indexOf("_0ads")>0;return b.google_ad_output!="html"&&b.google_num_radlinks>0}function U(b){return b&&b.indexOf("_sdo")!=-1}function ea(){var b=null,a=window,c=document,e=new Date,d=e.getTime(),f=a.google_ad_format;if(a.google_cpa_choice!=b){a.google_ad_url="https://web.archive.org/web/20080414175709/http://pagead2.googlesyndication.com/cpa/ads?";a.google_ad_url+="client="+escape(Q(a.google_ad_client));a.google_ad_region="_google_cpa_region_";F("google_cpa_choice");
if(typeof c.characterSet!="undefined")G("oe",c.characterSet);else if(typeof c.charset!="undefined")G("oe",c.charset)}else if(U(f)){a.google_ad_url="https://web.archive.org/web/20080414175709/http://pagead2.googlesyndication.com/pagead/sdo?";a.google_ad_url+="client="+escape(R(a.google_ad_client))}else{a.google_ad_url="https://web.archive.org/web/20080414175709/http://pagead2.googlesyndication.com/pagead/ads?";a.google_ad_url+="client="+escape(Q(a.google_ad_client))}F("google_ad_host");var g=a.google_num_slots_by_client,k=a.google_num_slots_by_channel,j=a.google_prev_ad_formats_by_region,
l=a.google_prev_ad_slotnames_by_region;if(a.google_ad_region==b&&a.google_ad_section!=b)a.google_ad_region=a.google_ad_section;var i=a.google_ad_region==b?"":a.google_ad_region;if(U(f)){if(a.google_num_sdo_slots)a.google_num_sdo_slots=a.google_num_sdo_slots+1;else a.google_num_sdo_slots=1;if(a.google_num_sdo_slots>4)return false}else if(da(a)){if(a.google_num_0ad_slots)a.google_num_0ad_slots=a.google_num_0ad_slots+1;else a.google_num_0ad_slots=1;if(a.google_num_0ad_slots>3)return false}else if(a.google_cpa_choice==
b){if(a.google_num_ad_slots)a.google_num_ad_slots=a.google_num_ad_slots+1;else a.google_num_ad_slots=1;if(a.google_num_slots_to_rotate){j[i]=b;l[i]=b;if(a.google_num_slot_to_show==b)a.google_num_slot_to_show=d%a.google_num_slots_to_rotate+1;if(a.google_num_slot_to_show!=a.google_num_ad_slots)return false}else if(a.google_num_ad_slots>6&&i=="")return false}E("dt",e.getTime());F("google_language");if(a.google_country)F("google_country");else F("google_gl");F("google_region");I("google_city");I("google_hints");
F("google_safe");F("google_encoding");F("google_last_modified_time");I("google_alternate_ad_url");F("google_alternate_color");F("google_skip");F("google_targeting");var o=a.google_ad_client;if(!g[o]){g[o]=1;g.length+=1}else g[o]+=1;if(j[i])if(!U(f)){G("prev_fmts",j[i].toLowerCase());if(g.length>1)E("slot",g[o])}if(l[i])G("prev_slotnames",l[i].toLowerCase());if(f&&!a.google_ad_slot){G("format",f.toLowerCase());if(!U(f))if(j[i])j[i]=j[i]+","+f;else j[i]=f}if(a.google_ad_slot)if(l[i])l[i]=l[i]+","+a.google_ad_slot;
else l[i]=a.google_ad_slot;F("google_max_num_ads");E("output",a.google_ad_output);F("google_adtest");F("google_ad_callback");F("google_ad_slot");I("google_correlator");if(a.google_ad_channel){I("google_ad_channel");var q="",t=a.google_ad_channel.split(/[+, ]/);for(var w=0;w<t.length;w++){var p=t[w];if(!k[p])k[p]=1;else q+=p+"+"}G("pv_ch",q)}if(a.google_enable_first_party_cookie)G("cookie",a._GA_googleCookieHelper.G());I("google_page_url");J("google_color_bg",d);J("google_color_text",d);J("google_color_link",
d);J("google_color_url",d);J("google_color_border",d);J("google_color_line",d);if(a.google_reuse_colors)E("reuse_colors",1);else E("reuse_colors",0);F("google_kw_type");I("google_kw");I("google_contents");F("google_num_radlinks");F("google_max_radlink_len");F("google_rl_filtering");F("google_rl_mode");F("google_rt");I("google_rl_dest_url");F("google_num_radlinks_per_unit");F("google_ad_type");F("google_image_size");F("google_ad_region");F("google_feedback");I("google_referrer_url");I("google_page_location");
E("frm",a.google_iframing);F("google_bid");F("google_cust_age");F("google_cust_gender");F("google_cust_interests");F("google_cust_id");F("google_cust_job");F("google_cust_u_url");F("google_cust_l");F("google_cust_lh");F("google_cust_ch");F("google_ed");I("google_ui_features");I("google_only_ads_with_video");I("google_disable_video_autoplay");if(W(a,c)&&c.body){var x=c.body.scrollHeight,u=c.body.clientHeight;if(u&&x)G("cc",Math.round(u*100/x))}m();E("ga_vid",a.gaGlobal.vid);E("ga_sid",a.gaGlobal.sid);
E("ga_hid",a.gaGlobal.hid);E("ga_fc",a.gaGlobal.from_cookie);I("google_analytics_uacct");F("google_ad_override");F("google_flash_version");K(a,e);return true}function X(){var b=window,a=document;P(b);if(!ea())return;aa(b,a,b.google_ad_url,null);ca(b)}function fa(){X();return true}function W(b,a){return b.top.location==a.location}function ga(b,a){var c=a.documentElement;if(W(b,a))return false;if(b.google_ad_width&&b.google_ad_height){var e=1,d=1;if(b.innerHeight){e=b.innerWidth;d=b.innerHeight}else if(c&&
c.clientHeight){e=c.clientWidth;d=c.clientHeight}else if(a.body){e=a.body.clientWidth;d=a.body.clientHeight}if(d>2*b.google_ad_height||e>2*b.google_ad_width)return false}return true}function ha(b){var a=window,c=null,e=a.onerror;a.onerror=b;if(a.google_ad_frameborder==c)a.google_ad_frameborder=0;if(a.google_ad_output==c)a.google_ad_output="html";if(U(a.google_ad_format)){var d=a.google_ad_format.match(/^(\d+)x(\d+)_.*/);if(d){a.google_ad_width=parseInt(d[1],10);a.google_ad_height=parseInt(d[2],10);
a.google_ad_output="html"}}if(a.google_ad_format==c&&a.google_ad_output=="html")a.google_ad_format=a.google_ad_width+"x"+a.google_ad_height;ia(a,document);if(a.google_num_slots_by_channel==c)a.google_num_slots_by_channel=[];if(a.google_num_slots_by_client==c)a.google_num_slots_by_client=[];if(a.google_prev_ad_formats_by_region==c)a.google_prev_ad_formats_by_region=[];if(a.google_prev_ad_slotnames_by_region==c)a.google_prev_ad_slotnames_by_region=[];if(a.google_correlator==c)a.google_correlator=(new Date).getTime();
if(a.google_adslot_loaded==c)a.google_adslot_loaded={};if(a.google_adContentsBySlot==c)a.google_adContentsBySlot={};if(a.google_flash_version==c)a.google_flash_version=ja();a.onerror=e}function ka(b){if(b in Y)return Y[b];return Y[b]=navigator.userAgent.toLowerCase().indexOf(b)!=-1}var Y={};function ba(b,a){if(b!="html")return false;var c={};c["ca-pub-7027491298716603"]=true;c["ca-pub-8344185808443527"]=true;c["ca-pub-9812682548211238"]=true;c["ca-pub-4424308218891706"]=true;c["ca-pub-6922559858235084"]=
true;c["ca-pub-6477563040863705"]=true;c["ca-google"]=true;return c[Q(a)]!=null}function la(b){var a={},c=b.split("?"),e=c[c.length-1].split("&");for(var d=0;d<e.length;d++){var f=e[d].split("=");if(f[0])try{a[f[0].toLowerCase()]=f.length>1?(window.decodeURIComponent?decodeURIComponent(f[1].replace(/\+/g," ")):unescape(f[1])):""}catch(g){}}return a}function ma(){var b=window,a=la(document.URL);if(a.google_ad_override)b.google_ad_override=a.google_ad_override}function ja(){if(navigator.plugins&&navigator.mimeTypes.length){var b=
navigator.plugins["Shockwave Flash"];if(b&&b.description)return b.description.replace(/([a-zA-Z]|\s)+/,"").replace(/(\s)+r/,".")}else if(navigator.userAgent&&navigator.userAgent.indexOf("Windows CE")>=0){var a=3,c=1;while(c)try{c=new ActiveXObject("ShockwaveFlash.ShockwaveFlash."+(a+1));a++}catch(e){c=null}return a.toString()}else if(ka("msie")&&!window.opera){var c=null;try{c=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7")}catch(e){var a=0;try{c=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");
a=6;c.AllowScriptAccess="always"}catch(e){if(a==6)return a.toString()}try{c=new ActiveXObject("ShockwaveFlash.ShockwaveFlash")}catch(e){}}if(c!=null){var a=c.GetVariable("$version").split(" ")[1];return a.replace(/,/g,".")}}return"0"}function na(b,a){for(var c in a)b["google_"+c]=a[c]}function Z(b,a){if(!a)return b.location;return b.referrer}function oa(b,a){if(b.location==a)return Date.parse(b.lastModified)/1000;else return null}function pa(b,a){if(!a&&b.google_referrer_url==null)return"0";else if(a&&
b.google_referrer_url==null)return"1";else if(!a&&b.google_referrer_url!=null)return"2";else if(a&&b.google_referrer_url!=null)return"3";return"4"}function qa(b,a,c){if(c)return b.google_referrer_url;else if(b.google_page_url&&b.google_referrer_url)return b.google_referrer_url;else return a.referrer}function ra(b,a,c,e){b.page_url=Z(c,e);b.page_location=null}function sa(b,a,c,e){b.page_url=a.google_page_url;b.page_location=Z(c,e)||"EMPTY"}function ta(b,a){var c={},e=ga(b,a);c.iframing=pa(b,e);if(!(!b.google_page_url))sa(c,
b,a,e);else ra(c,b,a,e);c.last_modified_time=oa(a,c.page_url);c.referrer_url=qa(b,a,e);return c}function ua(b){var a={},c=b.URL.substring(b.URL.lastIndexOf("http"));a.iframing=null;a.page_url=c;a.page_location=b.location;a.last_modified_time=null;a.referrer_url=c;return a}function ia(b,a){var c;if(b.google_page_url==null&&$[a.domain])c=ua(a);else c=ta(b,a);na(b,c)}var $={};$["ad.yieldmanager.com"]=true;ma();ha(fa);X();
})()


}
/*
     FILE ARCHIVED ON 17:57:09 Apr 14, 2008 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 16:38:08 Dec 27, 2022.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.083
  exclusion.robots.policy: 0.071
  RedisCDXSource: 34.051
  esindex: 0.01
  LoadShardBlock: 190.709 (6)
  PetaboxLoader3.datanode: 96.775 (7)
  CDXLines.iter: 114.863 (3)
  PetaboxLoader3.resolve: 112.34 (2)
  load_resource: 73.768
*/
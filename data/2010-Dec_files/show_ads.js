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


(function(){var g=true,h=null,i=false,j=(new Date).getTime();var k=this,aa=function(a,b,c){a=a.split(".");c=c||k;!(a[0]in c)&&c.execScript&&c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)if(!a.length&&b!==undefined)c[d]=b;else c=c[d]?c[d]:c[d]={}},ba=function(a){return a.call.apply(a.bind,arguments)},ca=function(a,b){var c=b||k;if(arguments.length>2){var d=Array.prototype.slice.call(arguments,2);return function(){var f=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(f,d);return a.apply(c,f)}}else return function(){return a.apply(c,
arguments)}},l=function(){l=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?ba:ca;return l.apply(h,arguments)};var n=function(a,b){var c=parseFloat(a);return isNaN(c)||c>1||c<0?b:c},p=function(a,b){if(a=="true")return g;if(a=="false")return i;return b},da=/^([\w-]+\.)*([\w-]{2,})(\:[0-9]+)?$/,fa=function(a,b){if(!a)return b;var c=a.match(da);return c?c[0]:b};var ga=function(){return fa("","pagead2.googlesyndication.com")},ha=function(){return fa("","pagead2.googlesyndication.com")};var ia=/&/g,ja=/</g,ka=/>/g,la=/\"/g,t={"\u0000":"\\0","\u0008":"\\b","\u000c":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\u000b":"\\x0B",'"':'\\"',"\\":"\\\\"},u={"'":"\\'"},v=function(a,b){if(a<b)return-1;else if(a>b)return 1;return 0};var y,A,B,C,D=function(){return k.navigator?k.navigator.userAgent:h};C=B=A=y=i;var F;if(F=D()){var ma=k.navigator;y=F.indexOf("Opera")==0;A=!y&&F.indexOf("MSIE")!=-1;B=!y&&F.indexOf("WebKit")!=-1;C=!y&&!B&&ma.product=="Gecko"}var G=A,na=C,oa=B,H;
a:{var I="",J;if(y&&k.opera){var K=k.opera.version;I=typeof K=="function"?K():K}else{if(na)J=/rv\:([^\);]+)(\)|;)/;else if(G)J=/MSIE\s+([^\);]+)(\)|;)/;else if(oa)J=/WebKit\/(\S+)/;if(J){var pa=J.exec(D());I=pa?pa[1]:""}}if(G){var L,qa=k.document;L=qa?qa.documentMode:undefined;if(L>parseFloat(I)){H=String(L);break a}}H=I}
var ra=H,sa={},M=function(a){var b;if(!(b=sa[a])){b=0;for(var c=String(ra).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),d=String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),f=Math.max(c.length,d.length),e=0;b==0&&e<f;e++){var ua=c[e]||"",s=d[e]||"",m=RegExp("(\\d*)(\\D*)","g"),z=RegExp("(\\d*)(\\D*)","g");do{var q=m.exec(ua)||["","",""],o=z.exec(s)||["","",""];if(q[0].length==0&&o[0].length==0)break;b=v(q[1].length==0?0:parseInt(q[1],10),o[1].length==0?0:parseInt(o[1],10))||v(q[2].length==
0,o[2].length==0)||v(q[2],o[2])}while(b==0)}b=sa[a]=b>=0}return b};!G||M("9");G&&M("9");var ta=document,N=window;ha();var O=function(a){return!!a&&typeof a=="function"&&!!a.call},va=function(a){if(arguments.length<2)return a.length;for(var b=1,c=arguments.length;b<c;++b)a.push(arguments[b]);return a.length};function P(a){return typeof encodeURIComponent=="function"?encodeURIComponent(a):escape(a)}function wa(a,b){if(a.attachEvent){a.attachEvent("onload",b);return g}if(a.addEventListener){a.addEventListener("load",b,i);return g}return i}
var xa=function(a){if(!("google_onload_fired"in a)){a.google_onload_fired=i;wa(a,function(){a.google_onload_fired=g})}};var ya=n("0",0),za=n("0",0),Aa=n("0",0);var Ba=p("false",i),Ca=p("false",i),Da=p("false",i);aa("google_protectAndRun",function(a,b,c){a=l(b,k,a);b=window.onerror;window.onerror=a;try{c()}catch(d){c=d.toString();var f="";if(d.fileName)f=d.fileName;var e=-1;if(d.lineNumber)e=d.lineNumber;if(!a(c,f,e))throw d;}window.onerror=b},void 0);
aa("google_handleError",function(a,b,c,d){if(Math.random()<0.01){a=["http://",ga(),"/pagead/gen_204","?id=jserror","&jscb=",Ba?1:0,"&jscd=",Ca?1:0,"&context=",P(a),"&msg=",P(b),"&file=",P(c),"&line=",P(d.toString()),"&url=",P(ta.URL.substring(0,512)),"&ref=",P(ta.referrer.substring(0,512))];a.push(["&client=",P(N.google_ad_client),"&format=",P(N.google_ad_format),"&slotname=",P(N.google_ad_slot),"&output=",P(N.google_ad_output),"&ad_type=",P(N.google_ad_type)].join(""));a=a.join("");N.google_image_requests||
(N.google_image_requests=[]);b=new Image;b.src=a;N.google_image_requests.push(b)}return!Da},void 0);var Ea=function(a){try{var b=a.google_test;a.google_test=!b;if(a.google_test===!b){a.google_test=b;return g}}catch(c){}return i},Q=h,Fa=function(){if(!Q){for(var a=window;a!=a.parent&&Ea(a.parent);)a=a.parent;Q=a}return Q};var R,S=function(a){this.e=[];this.b=a||window;this.a=0;this.c=h},Ha=function(a,b){this.h=a;this.n=b};S.prototype.g=function(a,b){this.e.push(new Ha(a,b||this.b));T(this)};S.prototype.i=function(a){this.a=1;if(a)this.c=this.b.setTimeout(l(this.f,this),a)};S.prototype.f=function(){if(this.a==1){if(this.c!=h){this.b.clearTimeout(this.c);this.c=h}this.a=0}T(this)};S.prototype.l=function(){return g};S.prototype.nq=S.prototype.g;S.prototype.al=S.prototype.i;S.prototype.rl=S.prototype.f;
S.prototype.sz=S.prototype.l;var T=function(a){a.b.setTimeout(l(a.m,a),0)};S.prototype.m=function(){if(this.a==0&&this.e.length){var a=this.e.shift();this.a=2;a.n.setTimeout(l(this.j,this,a),0);T(this)}};S.prototype.j=function(a){this.a=0;a.h()};
var Ia=function(a){try{return a.sz()}catch(b){return i}},Ja=function(a){return!!a&&(typeof a=="object"||typeof a=="function")&&Ia(a)&&O(a.nq)&&O(a.al)&&O(a.rl)},Ka=function(){if(R&&Ia(R))return R;var a=Fa(),b=a.google_jobrunner;if(Ja(b))return R=b;return a.google_jobrunner=R=new S(a)};var U,La;La=U=i;var V=D();if(V)if(V.indexOf("Firefox")!=-1)U=g;else if(V.indexOf("Camino")==-1)if(!(V.indexOf("iPhone")!=-1||V.indexOf("iPod")!=-1))if(V.indexOf("iPad")==-1)if(V.indexOf("Android")==-1)if(V.indexOf("Chrome")!=-1)La=g;var Ma=U,Na=La;var Oa=function(a,b,c){var d=["<iframe"],f;for(f in a)va(d,f+"="+a[f]);d.push('style="left:0;position:absolute;top:0;"');d.push("></iframe>");b="border:none;height:"+c+"px;margin:0;padding:0;position:relative;visibility:visible;width:"+b+"px";return['<ins style="display:inline-table;',b,'"><ins id="',a.id+"_anchor",'" style="display:block;',b,'">',d.join(" "),"</ins></ins>"].join("")};var Pa=function(){},Ra=function(a,b,c){switch(typeof b){case "string":Qa(a,b,c);break;case "number":c.push(isFinite(b)&&!isNaN(b)?b:"null");break;case "boolean":c.push(b);break;case "undefined":c.push("null");break;case "object":if(b==h){c.push("null");break}if(b instanceof Array){var d=b.length;c.push("[");for(var f="",e=0;e<d;e++){c.push(f);Ra(a,b[e],c);f=","}c.push("]");break}c.push("{");d="";for(f in b)if(b.hasOwnProperty(f)){e=b[f];if(typeof e!="function"){c.push(d);Qa(a,f,c);c.push(":");Ra(a,
e,c);d=","}}c.push("}");break;case "function":break;default:throw Error("Unknown type: "+typeof b);}},Sa={'"':'\\"',"\\":"\\\\","/":"\\/","\u0008":"\\b","\u000c":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\u000b":"\\u000b"},Ta=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g,Qa=function(a,b,c){c.push('"');c.push(b.replace(Ta,function(d){if(d in Sa)return Sa[d];var f=d.charCodeAt(0),e="\\u";if(f<16)e+="000";else if(f<256)e+="00";else if(f<4096)e+="0";return Sa[d]=e+f.toString(16)}));
c.push('"')};var W=["google_ad_block","google_ad_channel","google_ad_client","google_ad_format","google_ad_height","google_ad_host","google_ad_host_channel","google_ad_host_tier_id","google_ad_output","google_ad_override","google_ad_region","google_ad_section","google_ad_slot","google_ad_type","google_ad_width","google_adtest","google_allow_expandable_ads","google_alternate_ad_url","google_alternate_color","google_analytics_domain_name","google_analytics_uacct","google_bid","google_city","google_color_bg","google_color_border",
"google_color_line","google_color_link","google_color_text","google_color_url","google_container_id","google_contents","google_country","google_cpm","google_ctr_threshold","google_cust_age","google_cust_ch","google_cust_gender","google_cust_id","google_cust_interests","google_cust_job","google_cust_l","google_cust_lh","google_cust_u_url","google_disable_video_autoplay","google_ed","google_eids","google_enable_osd","google_encoding","google_font_face","google_font_size","google_frame_id","google_gl",
"google_hints","google_image_size","google_kw","google_kw_type","google_language","google_max_num_ads","google_max_radlink_len","google_num_radlinks","google_num_radlinks_per_unit","google_num_slots_to_rotate","google_only_ads_with_video","google_only_pyv_ads","google_only_userchoice_ads","google_override_format","google_page_url","google_referrer_url","google_region","google_reuse_colors","google_rl_dest_url","google_rl_filtering","google_rl_mode","google_rt","google_safe","google_skip","google_tag_info",
"google_targeting","google_ui_features","google_ui_version","google_video_doc_id","google_video_product_type","google_with_pyv_ads"];var Ua=function(a){this.b=a;a.google_iframe_oncopy||(a.google_iframe_oncopy={handlers:{},log:[],img:Math.random()<0.1?[]:h});this.d=a.google_iframe_oncopy;a.setTimeout(l(this.k,this),3E4)},Va;var X="var i=this.id,s=window.google_iframe_oncopy,H=s&&s.handlers,h=H&&H[i],w=this.contentWindow,d;try{d=w.document}catch(e){}if(h&&d&&(!d.body||!d.body.firstChild)){if(h.call){i+='.call';setTimeout(h,0)}else if(h.match){i+='.nav';w.location.replace(h)}s.log&&s.log.push(i)}";
if(/[&<>\"]/.test(X)){if(X.indexOf("&")!=-1)X=X.replace(ia,"&amp;");if(X.indexOf("<")!=-1)X=X.replace(ja,"&lt;");if(X.indexOf(">")!=-1)X=X.replace(ka,"&gt;");if(X.indexOf('"')!=-1)X=X.replace(la,"&quot;")}Va=X;Ua.prototype.set=function(a,b){this.d.handlers[a]=b};
Ua.prototype.k=function(){if(this.d.img){var a=this.d.log,b=this.b.document;if(a.length){b=["http://",ga(),"/pagead/gen_204?id=iframecopy&log=",P(a.join("-")),"&url=",P(b.URL.substring(0,512)),"&ref=",P(b.referrer.substring(0,512))].join("");a.length=0;a=new Image;this.d.img.push(a);a.src=b}}};var Wa=function(){var a="script";return["<",a,' src="http://',ha(),"/pagead/js/r20101117/r20101214/show_ads_impl.js",'"></',a,">"].join("")},Xa=function(a,b,c,d){return function(){var f=i;d&&Ka().al(3E4);try{var e;try{e=!!a.document.getElementById(b).contentWindow.document}catch(ua){e=i}if(e){var s=a.document.getElementById(b).contentWindow,
m=s.document;if(!(m.body&&m.body.firstChild)){m.open();s.google_async_iframe_close=g;m.write(c)}}else{var z=a.document.getElementById(b).contentWindow,q;e=c;e=String(e);if(e.quote)q=e.quote();else{s=['"'];for(m=0;m<e.length;m++){var o=e.charAt(m),Ga=o.charCodeAt(0),ob=s,pb=m+1,ea;if(!(ea=t[o])){var E;if(Ga>31&&Ga<127)E=o;else{var r=o;if(r in u)E=u[r];else if(r in t)E=u[r]=t[r];else{var w=r,x=r.charCodeAt(0);if(x>31&&x<127)w=r;else{if(x<256){w="\\x";if(x<16||x>256)w+="0"}else{w="\\u";if(x<4096)w+=
"0"}w+=x.toString(16).toUpperCase()}E=u[r]=w}}ea=E}ob[pb]=ea}s.push('"');q=s.join("")}z.location.replace("javascript:"+q)}f=g}catch(wb){z=Fa().google_jobrunner;Ja(z)&&z.rl()}f&&(new Ua(a)).set(b,Xa(a,b,c,i))}},Ya=function(){return ya&&za/ya||typeof window.google_hash_ratio=="number"&&window.google_hash_ratio||h};window.google_loader_used=g;if(!window.google_loader_experiment){var Za;a:{var $a=["async","block"];if(!(Math.random()<1.0E-4)){var ab=Math.random();if(ab<Aa){Za=$a[Math.floor(ab/Aa*$a.length)];break a}}Za=""}window.google_loader_experiment=Za||"none"}var bb;if(bb=window.google_enable_async===g||window.google_loader_experiment=="async")bb=window.google_enable_async===i?i:(G&&M(7)||Na||Ma&&!!window.document.body)&&!window.google_container_id&&(!window.google_ad_output||window.google_ad_output=="html");
if(bb){var cb=window;if(cb.google_unique_id)++cb.google_unique_id;else cb.google_unique_id=1;xa(window);for(var Y=window,_script$$inline_209="script",db,Z={allowtransparency:'"true"',frameborder:'"0"',height:'"'+Y.google_ad_height+'"',hspace:'"0"',marginwidth:'"0"',marginheight:'"0"',onload:'"'+Va+'"',scrolling:'"no"',vspace:'"0"',width:'"'+Y.google_ad_width+'"'},eb=Y.document,$=Z.id,fb=0;!$||Y.document.getElementById($);)$="aswift_"+fb++;Z.id=$;Z.name=$;eb.write(Oa(Z,Y.google_ad_width,Y.google_ad_height));
db=$;for(var gb,hb=[],ib=0,jb=W.length;ib<jb;ib++){var kb=W[ib];if(Y[kb]!=h){var lb;try{var mb=[];Ra(new Pa,Y[kb],mb);lb=mb.join("")}catch(nb){}lb&&va(hb,kb,"=",lb,";")}}gb=hb.join("");for(var qb=0,rb=W.length;qb<rb;qb++)Y[W[qb]]=h;var sb=(new Date).getTime(),tb=Ya(),ub=window.google_loader_experiment,vb=["<!doctype html><html><body><",_script$$inline_209,">",gb,"google_show_ads_impl=true;google_unique_id=",Y.google_unique_id,';google_async_iframe_id="',db,'";google_start_time=',j,";",tb?"google_hash_ratio="+
tb+";":"",ub?'google_loader_experiment="'+ub+'";':"","google_bpp=",sb>j?sb-j:1,";</",_script$$inline_209,">",Wa(),"</body></html>"].join(""),xb=Xa(Y,db,vb,g);Ka().nq(xb,void 0)}else{window.google_start_time=j;window.google_hash_ratio=Ya();document.write(Wa())};})();


}
/*
     FILE ARCHIVED ON 07:10:02 Dec 27, 2010 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 16:41:18 Dec 27, 2022.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.12
  exclusion.robots.policy: 0.104
  cdx.remote: 0.15
  esindex: 0.014
  LoadShardBlock: 130.708 (6)
  PetaboxLoader3.datanode: 106.738 (7)
  CDXLines.iter: 138.759 (3)
  PetaboxLoader3.resolve: 58.391 (2)
  load_resource: 64.312
*/
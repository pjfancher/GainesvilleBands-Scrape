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

// Title: tigra menu
// Description: See the demo at url
// URL: http://www.softcomplex.com/products/tigra_menu/
// Version: 2.0 (size optimized version)
// Date: 04-05-2003 (mm-dd-yyyy)
// Tech. Support: http://www.softcomplex.com/forum/forumdisplay.php?fid=40
// Notes: This script is free. Visit official site for further details.

var TMA=[];function menu(TMB,TMC){if(!document.body||!document.body.style)return;this.TMD=TMB;this.TMC=TMC;this.TME=TMA.length;this.TMF=[];this.TMG=[];this.TMH=TMI;this.TMJ=TMK;this.onclick=TML;this.onmouseout=TMM;this.onmouseover=TMN;this.onmousedown=TMO;this.TMP={'block_top':16,'block_left':16,'top':20,'left':4,'width':120,'height':22,'hide_delay':0,'expd_delay':0,'css':{'inner':'','outer':''}};this.TMQ=function(TMR){return this.TMP[TMR]};this.TMS=this;this.TMT=-1;this.TMU=0;this.TMV=0;for(TMW=0;TMW<TMB.length;TMW++)new TMX(this,TMW);TMA[this.TME]=this;for(var TMW=0;TMW<this.TMG.length;TMW++)this.TMG[TMW].TMY.style.visibility='visible'}function TMK(TME){clearTimeout(this.TMZ);var TMa=(TME?this.TMF[TME].TMT:0);for(TME=0;TME<this.TMF.length;TME++){var TMb=this.TMF[TME];if(TMb.TMT>TMa&&TMb.TMc){TMb.TMY.style.visibility='hidden';TMb.TMc=false}}if(!TME)this.TMd=null}function TMI(TME){if(this.TMe)return;var TMf=this.TMF[TME];if(this.TMd&&this.TMd.TMT>=TMf.TMT)this.TMJ(TMf.TME);this.TMd=TMf;if(!TMf.TMG)return;for(var TMW=0;TMW<TMf.TMG.length;TMW++){var TMb=TMf.TMG[TMW];TMb.TMY.style.visibility='visible';TMb.TMc=true}}function TML(TME){return Boolean(this.TMF[TME].TMD[1])}function TMM(TME){var TMf=this.TMF[TME];TMf.TMY.className=TMf.TMg(0,0);TMf.TMh.className=TMf.TMg(1,0);TMf.TMi(7);this.TMe=setTimeout('TMA['+this.TME+'].TMJ();',TMf.TMQ('hide_delay'))}function TMN(TME){clearTimeout(this.TMe);this.TMe=null;clearTimeout(this.TMZ);var TMf=this.TMF[TME];TMf.TMi();TMf.TMY.className=TMf.TMg(0,1);TMf.TMh.className=TMf.TMg(1,1);if(TMf.TMQ('expd_delay')<0)return;this.TMZ=setTimeout('TMA['+this.TME+'].TMH('+TME+');',TMf.TMQ('expd_delay'))}function TMO(TME){var TMf=this.TMF[TME];TMf.TMY.className=TMf.TMg(0,2);TMf.TMh.className=TMf.TMg(1,2);this.TMH(TME)}function TMX(TMj,TMW){this.TMT=TMj.TMT+1;this.TMD=TMj.TMD[TMW+(this.TMT?3:0)];if(!this.TMD)return;this.TMS=TMj.TMS;this.TMj=TMj;this.TMW=TMW;this.TME=this.TMS.TMF.length;this.TMS.TMF[this.TME]=this;TMj.TMG[TMW]=this;var TMS=this.TMS,TMC=this.TMS.TMC;this.TMQ=TMk;this.TMg=TMl;this.TMi=TMm;this.TMU=TMW?TMj.TMG[TMW-1].TMU+this.TMQ('left'):TMj.TMU+this.TMQ('block_left');this.TMV=TMW?TMj.TMG[TMW-1].TMV+this.TMQ('top'):TMj.TMV+this.TMQ('block_top');document.write('<a id="e'+TMS.TME+'_'+this.TME+'o" class="'+this.TMg(0,0)+'" href="'+this.TMD[1]+'"'+(this.TMD[2]&&this.TMD[2]['tw']?' target="'+this.TMD[2]['tw']+'"':'')+' style="position: absolute; top: '+this.TMV+'px; left: '+this.TMU+'px; width: '+this.TMQ('width')+'px; height: '+this.TMQ('height')+'px; visibility: hidden;'+' z-index: '+this.TMT+';" '+'onclick="return TMA['+TMS.TME+'].onclick('+this.TME+');" onmouseout="TMA['+TMS.TME+'].onmouseout('+this.TME+');" onmouseover="TMA['+TMS.TME+'].onmouseover('+this.TME+');" onmousedown="TMA['+TMS.TME+'].onmousedown('+this.TME+');"><div  id="e'+TMS.TME+'_'+this.TME+'i" class="'+this.TMg(1,0)+'">'+this.TMD[0]+"</div></a>\n");this.TMh=document.getElementById('e'+TMS.TME+'_'+this.TME+'i');this.TMY=document.getElementById('e'+TMS.TME+'_'+this.TME+'o');this.TMc=!this.TMT;if(this.TMD.length<4)return;this.TMG=[];for(var TMW=0;TMW<this.TMD.length-3;TMW++)new TMX(this,TMW)}function TMk(TMR){var TMn=null,TMo=this.TMS.TMC[this.TMT];if(TMo)TMn=TMo[TMR];return(TMn==null?this.TMj.TMQ(TMR):TMn)}function TMl(TMp,TMq){var TMr=this.TMQ('css');var TMs=TMr[TMp?'inner':'outer'];if(typeof(TMs)=='string')return TMs;for(var TMt=TMq;TMt>=0;TMt--)if(TMs[TMt])return TMs[TMt]}function TMm(TMu){window.setTimeout("window.status=unescape('"+(TMu?'':(this.TMD[2]&&this.TMD[2]['sb']?escape(this.TMD[2]['sb']):escape(this.TMD[0])+(this.TMD[1]?' ('+escape(this.TMD[1])+')':'')))+"')",10)}

}
/*
     FILE ARCHIVED ON 00:17:50 Feb 22, 2007 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 16:30:59 Dec 27, 2022.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 115.478
  exclusion.robots: 0.119
  exclusion.robots.policy: 0.108
  RedisCDXSource: 7.157
  esindex: 0.009
  LoadShardBlock: 87.246 (3)
  PetaboxLoader3.datanode: 461.885 (4)
  CDXLines.iter: 17.984 (3)
  PetaboxLoader3.resolve: 56.435 (2)
  load_resource: 435.72
*/
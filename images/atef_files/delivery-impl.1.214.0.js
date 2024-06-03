(()=>{var t={787:()=>{!function(t){var e=function(e){this._options={checkOnLoad:!1,resetOnEnd:!1,loopCheckTime:50,loopMaxNumber:5,baitClass:"pub_300x250 pub_300x250m pub_728x90 text-ad textAd text_ad text_ads text-ads text-ad-links",baitStyle:"width: 1px !important; height: 1px !important; position: absolute !important; left: -10000px !important; top: -1000px !important;",debug:!1},this._var={version:"3.2.1",bait:null,checking:!1,loop:null,loopNumber:0,event:{detected:[],notDetected:[]}},void 0!==e&&this.setOption(e);var i=this,n=function(){setTimeout((function(){!0===i._options.checkOnLoad&&(!0===i._options.debug&&i._log("onload->eventCallback","A check loading is launched"),null===i._var.bait&&i._creatBait(),setTimeout((function(){i.check()}),1))}),1)};void 0!==t.addEventListener?t.addEventListener("load",n,!1):t.attachEvent("onload",n)};e.prototype._options=null,e.prototype._var=null,e.prototype._bait=null,e.prototype._log=function(t,e){console.log("[BlockAdBlock]["+t+"] "+e)},e.prototype.setOption=function(t,e){if(void 0!==e){var i=t;(t={})[i]=e}for(var n in t)this._options[n]=t[n],!0===this._options.debug&&this._log("setOption",'The option "'+n+'" he was assigned to "'+t[n]+'"');return this},e.prototype._creatBait=function(){var e=document.createElement("div");e.setAttribute("class",this._options.baitClass),e.setAttribute("style",this._options.baitStyle),this._var.bait=t.document.body.appendChild(e),this._var.bait.offsetParent,this._var.bait.offsetHeight,this._var.bait.offsetLeft,this._var.bait.offsetTop,this._var.bait.offsetWidth,this._var.bait.clientHeight,this._var.bait.clientWidth,!0===this._options.debug&&this._log("_creatBait","Bait has been created")},e.prototype._destroyBait=function(){t.document.body.removeChild(this._var.bait),this._var.bait=null,!0===this._options.debug&&this._log("_destroyBait","Bait has been removed")},e.prototype.check=function(t){if(void 0===t&&(t=!0),!0===this._options.debug&&this._log("check","An audit was requested "+(!0===t?"with a":"without")+" loop"),!0===this._var.checking)return!0===this._options.debug&&this._log("check","A check was canceled because there is already an ongoing"),!1;this._var.checking=!0,null===this._var.bait&&this._creatBait();var e=this;return this._var.loopNumber=0,!0===t&&(this._var.loop=setInterval((function(){e._checkBait(t)}),this._options.loopCheckTime)),setTimeout((function(){e._checkBait(t)}),1),!0===this._options.debug&&this._log("check","A check is in progress ..."),!0},e.prototype._checkBait=function(e){var i=!1;if(null===this._var.bait&&this._creatBait(),null===t.document.body.getAttribute("abp")&&null!==this._var.bait.offsetParent&&0!=this._var.bait.offsetHeight&&0!=this._var.bait.offsetLeft&&0!=this._var.bait.offsetTop&&0!=this._var.bait.offsetWidth&&0!=this._var.bait.clientHeight&&0!=this._var.bait.clientWidth||(i=!0),void 0!==t.getComputedStyle){var n=t.getComputedStyle(this._var.bait,null);!n||"none"!=n.getPropertyValue("display")&&"hidden"!=n.getPropertyValue("visibility")||(i=!0)}!0===this._options.debug&&this._log("_checkBait","A check ("+(this._var.loopNumber+1)+"/"+this._options.loopMaxNumber+" ~"+(1+this._var.loopNumber*this._options.loopCheckTime)+"ms) was conducted and detection is "+(!0===i?"positive":"negative")),!0===e&&(this._var.loopNumber++,this._var.loopNumber>=this._options.loopMaxNumber&&this._stopLoop()),!0===i?(this._stopLoop(),this._destroyBait(),this.emitEvent(!0),!0===e&&(this._var.checking=!1)):null!==this._var.loop&&!1!==e||(this._destroyBait(),this.emitEvent(!1),!0===e&&(this._var.checking=!1))},e.prototype._stopLoop=function(t){clearInterval(this._var.loop),this._var.loop=null,this._var.loopNumber=0,!0===this._options.debug&&this._log("_stopLoop","A loop has been stopped")},e.prototype.emitEvent=function(t){!0===this._options.debug&&this._log("emitEvent","An event with a "+(!0===t?"positive":"negative")+" detection was called");var e=this._var.event[!0===t?"detected":"notDetected"];for(var i in e)!0===this._options.debug&&this._log("emitEvent","Call function "+(parseInt(i)+1)+"/"+e.length),e.hasOwnProperty(i)&&e[i]();return!0===this._options.resetOnEnd&&this.clearEvent(),this},e.prototype.clearEvent=function(){this._var.event.detected=[],this._var.event.notDetected=[],!0===this._options.debug&&this._log("clearEvent","The event list has been cleared")},e.prototype.on=function(t,e){return this._var.event[!0===t?"detected":"notDetected"].push(e),!0===this._options.debug&&this._log("on",'A type of event "'+(!0===t?"detected":"notDetected")+'" was added'),this},e.prototype.onDetected=function(t){return this.on(!0,t)},e.prototype.onNotDetected=function(t){return this.on(!1,t)},t.BlockAdBlock=e,void 0===t.blockAdBlock&&(t.blockAdBlock=new e({checkOnLoad:!0,resetOnEnd:!0}))}(window)}},e={};function i(n){var o=e[n];if(void 0!==o)return o.exports;var s=e[n]={exports:{}};return t[n](s,s.exports,i),s.exports}(()=>{"use strict";function t(){return window.apstag||function(t,e,i,n,o,s,r){function a(i,n){e[t]._Q.push([i,n])}e[t]||(e[t]={init:function(){a("i",arguments)},fetchBids:function(){a("f",arguments)},setDisplayBids:function(){},targetingKeys:function(){return[]},_Q:[]},(s=i.createElement(n)).async=!0,s.src="//c.amazon-adsystem.com/aax2/apstag.js",(r=i.getElementsByTagName(n)[0]).parentNode.insertBefore(s,r))}("apstag",window,document,"script"),window.apstag}window.googletag=window.googletag||{},window.googletag.cmd=window.googletag.cmd||[];const e=()=>window.PWT,n=window.addEventListener;function o(){return window.console}function s(t){return Boolean(window.console&&window.console[t])}function r(){return window.location}const a=(t,e)=>{if(!t||!e)return null;let i=null;return t.some((t=>t.getId()===e&&(i=t,!0))),i},d=(t,e)=>t&&e?a(t,e.getSlotElementId()):null;function l(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(t){const e=16*Math.random()|0;return("x"==t?e:3&e|8).toString(16)}))}function g(t,e){if(t&&t.eventCallbacks&&t.eventCallbacks[e])try{t.eventCallbacks[e]()}catch(t){}}function c(t){const e=typeof t;return null!=t&&("object"===e||"function"===e)}function u(t){return Array.from(t)}let h=null;function p(){return"mobile"===function(){if(null===h){const t=window.navigator.userAgent||"",e=window.screen.width||window.innerWidth;h="desktop",e<900&&(h="mobile"),t.match(/(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/i)?h="tablet":t.match(/Mobile|iP(hone|od)|BlackBerry|IEMobile/i)&&(h="mobile")}return h}()}function f(t){const e=new RegExp("^(.*;)?\\s*"+t+"\\s*=(\\s*[^;]*)").exec(document.cookie);return e&&e[2]||""}let m=null,v=null;function b(){return"#test_mode"===r().hash}function w(t){const e=new RegExp("[\\?&]"+t+"=([^&#]*)").exec(r().search);return null===e?"":decodeURIComponent(e[1].replace(/\+/g," "))}function y(){return null===m&&(m="TRUE"===w("ads_debug").toUpperCase()||"1"===f("ads_debug")),m}function I(...t){y()&&s("info")&&o().info(...A(t,"INFO:"))}function _(...t){y()&&s("error")&&o().error(A(t,"ERROR:"))}function A(t,e,i){t=[].slice.call(t),e&&t.unshift(e);const n=i?"red":"#0cb";return t.unshift(`display: inline-block; color: #fff; background: ${n}; padding: 1px 4px; border-radius: 3px;`),t.unshift("%cAds-Manager"),t}const C={renderAdsOnInit:!1,bidderTimeout:2e3,bidders:{},adUnitChanges:()=>{},requestBidsCallback:()=>{}},E=function(){let t={},e=C;return{clear:function(){e={},t={}},getConfig:function(t,i){return t?function(t,e,i){const n=String(e).split(".");for(let e=0;e<n.length;e++)if(void 0===(t=t[n[e]]))return i;return t}(e,t,i):e},setConfig:function(i){"object"==typeof i?Object.keys(i).forEach((n=>{let o=i[n];"object"==typeof t[n]&&"object"==typeof o&&(o=Object.assign({},t[n],o)),e[n]=o})):_("setConfig options must be an object")},setDefaults:function(i){"object"==typeof i?(Object.assign(t,i),Object.assign(e,i)):_("defaults must be an object")},setConfigValue:function(t,i){if("string"!=typeof t||t.length<1)return void _("defaults must be an object");const n=String(t).split("."),o=n.length;let s=e;for(let t=0;t<o;t++)o-1===t?s[n[t]]=i:void 0===s[n[t]]&&(s[n[t]]={}),s=s[n[t]]}}}(),S="targeting",k="rgKey",x="renderAdsOnInit",B=1400;function T(t){const e=t.sizeMappings.sort((function(t){return Array.isArray(t[0][0])?t[0][0][0]:t[0][0]})).filter((function(t){return window.matchMedia(`(min-width: ${t[0][0]}px)`).matches})).pop();return e&&e[1]}function z(t){t.matches&&F().filter((function(t){return document.body.contains(t.element)&&t.sizeMappings&&t.sizeMappings.length&&!function(t){const e=T(t);return!(!e||!e.length)&&JSON.stringify(e)===JSON.stringify(t.sizes)}(t)})).forEach((t=>{t.sizes=T(t),t.resetGptSlot()}))}function R(t,e){window.dispatchEvent(new window.CustomEvent(t,{detail:e}))}function O(t){return{slotId:t.getSlotId(),performance:{adRequestStart:t.requestTimestamp,adViewableAt:Date.now(),actionAt:Date.now()},metadata:{lineItemId:t.lineItemId,creativeId:t.creativeId,creativeTemplateId:t.creativeTemplateId,advertiserId:t.advertiserId,isEmpty:t.isEmpty,rgKey:E.getConfig(k,null),experimentVariant:E.getConfig("targeting.experimentVariant",null),adCorrelationId:t.adCorrelationId}}}function P(t){t&&R("rgAdBidRequest",O(t))}class L{getName(){return"amazon"}getDisplayName(){return"Amazon"}init(){t().init({pubID:"d48a1f7a-417f-49a9-bb7f-fe32af3648db",adServer:"googletag",bidTimeout:E.getConfig("bidderTimeout",B)})}requestBids(e,i,n){const o=e.map((t=>({slotID:t.getId(),slotName:t.getAdUnitPath(),sizes:t.getSizes().filter((t=>Array.isArray(t)))}))).filter((({sizes:t})=>t.length));o.length?(e.forEach((t=>P(t))),t().fetchBids({slots:o,timeout:E.getConfig("bidderTimeout",B)},(()=>{I(`[${i}] [Amazon] Applying bids to [${o.map((t=>t.slotID)).join(", ")}].`),t().setDisplayBids(),n(this.getName(),i)}))):n(this.getName(),i)}removeBids(t){for(const e of t){const t=e.getSlot();t.getTargetingKeys().filter((t=>t.startsWith("amznb"))).forEach((e=>{t.clearTargeting(e)}))}}}class N{constructor(){this.placementCounter={}}getName(){return"opnwrp"}getDisplayName(){return"OpenWrap"}init(){}requestBids(t,i,n){var o;const s=window,r=null===(o=null==s?void 0:s.openwrap)||void 0===o?void 0:o.cmd;r&&r.push((()=>{let o="article";const r=E.getConfig(k,null);if(r)switch(r.split(":")[0]){case"PB":o="publication";break;case"AU":o="author";break;case"PT":o="question";break;case"AC":o="researcher";break;case"K":o="category";break;case"PJ":o="project"}s.openwrap_adagio_pagetype=o,s.openwrap_adagio_environment=p()?"mobile":"desktop";const a=t.filter((function(t){return t.getSlot()})),d=a.map((function(t){return t.getSlot()}));I("[OpenWrap] Requesting bids for ["+a.map((t=>t.getAdUnitPath())).join(",")+"].");const l=p()?"Mobile":"Desktop",g={};a.forEach((t=>{if(t.adLocation){g[t.getSlot().getAdUnitPath()]=`${t.adLocation}_${l}_Ad`;const e=t.getSlot().getSlotElementId(),i=this.placementCounter[t.adLocation]||1;s.openwrap_render_counters||(s.openwrap_render_counters={}),s.openwrap_render_counters[e]=i,this.placementCounter[t.adLocation]=i+1}}));const c=e().generateConfForGPT(d);c.forEach((t=>{g[t.adUnitId]&&(t.reverseLookup=t.adUnitId,t.adUnitId=g[t.adUnitId])})),"function"==typeof e().requestBids&&(a.forEach((t=>P(t))),e().requestBids(c,(t=>{I("[OpenWrap] Applying bids for slots ["+t.map((t=>t.reverseLookup)).join(",")+"]."),e().addKeyValuePairsToGPTSlots(t),n(this.getName(),i)})))}))}removeBids(t){var i;const n=(null===(i=e())||void 0===i?void 0:i.removeKeyValuePairsFromGPTSlots)||{},o=t.map((t=>t.getSlot()));n&&n(o)}}function D(t){let e=null;function i(t){const e=t;for(;t=t.previousElementSibling;)if(t.offsetParent)return t;for(t=e;t=t.nextElementSibling;)if(t.offsetParent)return t}for(;null===t.offsetParent;)e=i(t),t=e||t.parentNode;return t.getBoundingClientRect()}function M(t,e){return 0===e||function(t){const e=t.lazy,i=t.clientRect.top;return i<window.innerHeight*e&&i>0}({clientRect:D(t),lazy:e})}function U(t){return 0===t.getLazySetting()||(e=D(t.element)).top>=0&&e.left>=0&&e.right<=(window.innerWidth||document.documentElement.clientWidth)&&e.bottom<=(window.innerHeight||document.documentElement.clientHeight);var e}function q(t){let e=t.getLazySetting();return 0===e||(e+=-.5,M(t.element,e))}let $=window.scrollY,j=!1;function V(){if(j)return;const t=E.getConfig(x,!1),e=Y(U).filter((function(t){return!(G.getInstance().hasPendingBidRequest(t)||-1!==["Inread_Video","LoggedOut_PublicationWithoutFulltext_InReadVideo","LoggedOut_Post_InReadVideo"].indexOf(t.getSlotId())&&t.refreshCounter>0)})),i=e.map((function(t){return t.getGptSlot()}));i.length&&(e.forEach((function(t){t.setRequestTimestamp(Date.now());const e=t.getSlot();e.setTargeting("refreshCounter",[`${t.refreshCounter}`]),e.setTargeting("refresh",[t.refreshCounter>0?"true":"false"]);const i=t.generateAdCorrelationId();e.setTargeting("adCorrelationId",[i]),function(t){t&&R("rgAdRequest",O(t))}(t)})),t&&E.setConfigValue(x,!1),I("[AdManager] Calling refresh for ["+i.map((t=>t.getAdUnitPath())).join(",")+"]."),googletag.pubads().refresh(function(t){return t.map((t=>-1===t.getAdUnitPath().indexOf("Video")?{sortIndex:0,slot:t}:{sortIndex:1e4,slot:t})).sort(((t,e)=>t.sortIndex===e.sortIndex?0:t.sortIndex>e.sortIndex?1:-1)).map((({slot:t})=>t))}(i),{changeCorrelator:!1}),G.getInstance().removeBids(e),e.forEach((function(t){t.setGptRefresh()})))}class G{constructor(){this.bidders=[],this.blockedAdUnits={},this.pendingBids={},this.runningBids={},this.providers=function(){const t=[new L,new N],e=E.getConfig("bidders",[]),i=[];for(const n of t)-1!==e.indexOf(n.getName())&&i.push(n);return i}()}static getInstance(){return G.instance||(G.instance=new G),G.instance}hasPendingBidRequest(t){return!!this.blockedAdUnits[t.getId()]}init(){if(!b())for(const t of this.providers)I(`Setting up ${t.getDisplayName()}`),t.init()}requestBids(){if(!this.providers.length)return;const t=Y(q).filter((t=>!this.pendingBids[t.getId()]));if(!t.length)return;const e=l();for(const i of t)this.blockedAdUnits[i.getId()]=e,this.pendingBids[i.getId()]=e;this.runningBids[e]=[];const i=E.getConfig("bidderTimeout",B);setTimeout((()=>{this.runningBids[e]&&(I(`[${e}] Request Bids timed out after ${i} ms.`),this.removeBiddingAndRenderAds(e))}),i);const n=t.map((t=>t.getAdUnitPath()));for(const i of this.providers)try{i.requestBids(t,e,((t,e)=>{this.handleBidsBack(t,e)})),I(`[${e}] Request bids provider ${i.getDisplayName()} for adUnits [${n.join(", ")}].`)}catch(t){I(`[${e}] Error on request bids provider ${i.getDisplayName()} for adUnits [${n.join(", ")}].`),this.handleBidsBack(i.getName(),e)}}removeBiddingAndRenderAds(t){delete this.runningBids[t];for(const e in this.blockedAdUnits)this.blockedAdUnits[e]===t&&delete this.blockedAdUnits[e];V()}handleBidsBack(t,e){this.runningBids[e]&&-1===this.runningBids[e].indexOf(e)&&(this.runningBids[e].push(t),this.runningBids[e].length>=this.providers.length&&this.removeBiddingAndRenderAds(e))}removeBids(t){for(const e of t)delete this.pendingBids[e.getId()];for(const e of this.providers)e.removeBids(t)}}class H{constructor(t){this.advertiserId=null,this.lineItemId=null,this.creativeId=null,this.snippetId=null,this.isEmpty=null,this.serviceName=null,this.size=null,this.creativeTemplateId=null,this.gptRefresh=!1,this.lastRefresh=null,this.refreshCounter=0,this.refreshTimeout=null,this.refresh=!!this.refreshTimeout,this.id=t.id;const e="true"===t.getAttribute("data-new");if(this.adUnitPath=t.getAttribute((e?"data-":"")+"ad-unit-path"),this.onGptEvent=t.ongptevent,t.hasAttribute((e?"data-":"")+"ad-location")&&(this.adLocation=t.getAttribute((e?"data-":"")+"ad-location")),t.hasAttribute((e?"data-":"")+"ad-unit-sizes"))try{this.sizes=JSON.parse(t.getAttribute((e?"data-":"")+"ad-unit-sizes"))}catch(t){}if(Array.isArray(this.sizes)||(this.sizes=u(t.getElementsByTagName((e?"data-":"")+"rg-ad-size")).map((function(t){try{const i=t.getAttribute((e?"data-":"")+"size");return JSON.parse(i)}catch(t){return"fluid"}}))),this.sizeMappings=u(t.getElementsByTagName((e?"data-":"")+"rg-ad-sizeset")).map((function(t){try{return[JSON.parse(t.getAttribute((e?"data-":"")+"viewport-size")),JSON.parse(t.getAttribute("slot-sizes"))]}catch(t){return null}})).filter((t=>null!==t)),"Catfish"!==this.adLocation||this.sizeMappings&&this.sizeMappings.length||(this.sizeMappings=[[[0,0],[[320,50],[320,100],[300,50],[300,100]]],[[768,0],[]]]),t.hasAttribute("data-size-mappings"))try{this.sizeMappings=JSON.parse(t.getAttribute("data-size-mappings"))}catch(t){}if(this.sizeMappings.length>0){const t=T(this);t&&(this.sizes=t)}else 0===this.sizes.length&&(this.sizes=["fluid"]);if(t.hasAttribute((e?"data-":"")+"refresh-timeout")){const i=parseInt(t.getAttribute((e?"data-":"")+"refresh-timeout"));this.refreshTimeout=-1===i?E.getConfig("defaultRefreshTimeout",3e4):i}else this.refreshTimeout=0;t.hasAttribute((e?"data-":"")+"load-on-init")?this.loadOnInit="true"===t.getAttribute((e?"data-":"")+"load-on-init"):this.loadOnInit=!1,t.hasAttribute((e?"data-":"")+"collapse")&&(this.collapse=t.getAttribute((e?"data-":"")+"collapse")),-1===["Right","Top"].indexOf(this.adLocation)||"1"!==t.getAttribute((e?"data-":"")+"targeting-sequence")||p()||(this.loadOnInit=!0),this.targeting=function(t){const i={},n=(e?"data-":"")+"targeting-";for(let e=0;e<t.attributes.length;e+=1){const o=t.attributes[e];0===o.name.indexOf(n)&&(i[o.name.slice(n.length)]=o.value.split(","))}return i}(t),t.classList.add("is-registered"),E.getConfig("refreshDisabled",!1)&&(this.refreshTimeout=0);const i=E.getConfig("refreshDisabledForLocations",[]);Array.isArray(i)&&i.length>0&&-1!==i.indexOf(this.adLocation)&&(this.refreshTimeout=0),this.element=t,this.gptSlot=null,this.advertiserId=null,this.lineItemId=null,this.creativeId=null,this.isEmpty=null,this.serviceName=null,this.size=null,this.creativeTemplateId=null,this.gptRefresh=!1,this.lastRefresh=null,this.refreshCounter=0,this.refresh=!!this.refreshTimeout,this.snippetId=this.id,this.targeting.snippet_id=[this.snippetId]}createSlot(){this.gptSlot||(this.gptSlot=function(t){const e=googletag.defineSlot(t.getAdUnitPath(),t.isResponsive()?["fluid"]:t.getSizes(),t.getId()),i=t.getSlotId();if(t.isResponsive()){const i=googletag.sizeMapping();t.sizeMappings.forEach((t=>{i.addSize(t[0],t[1])})),e.defineSizeMapping(i.build())}else if(-1===["Native_Publication_Overview_Middle","Native_HomeFeed_ATF_Middle","Preview"].indexOf(i)){const n=googletag.sizeMapping();-1!==i.toLowerCase().indexOf("mobile")?(n.addSize([0,0],t.getSizes()),n.addSize([992,0],[])):(n.addSize([0,0],[]),n.addSize([992,0],t.getSizes())),e.defineSizeMapping(n.build())}e.addService(googletag.pubads()),nt(i,"TargetingInfoSet"),function(t,e){switch(t){case"never":e.setCollapseEmptyDiv(!1);break;case"afterFetch":e.setCollapseEmptyDiv(!0);break;case"beforeFetch":e.setCollapseEmptyDiv(!0,!0)}}(t.collapse,e);const n=E.getConfig("targeting.variants",[]),o=t.getTargeting();return o&&Object.keys(o).forEach((t=>{const i=o[t];"variants"===t&&n.forEach((t=>{-1===i.indexOf(t)&&i.push(t)})),e.setTargeting(t,i)})),googletag.enableServices(),googletag.display(e.getSlotElementId()),e}(this))}getSlot(){return this.gptSlot}getLazySetting(){return E.getConfig("defaultLazyLoad",.5)}getAdUnitPath(){return this.adUnitPath}getSlotId(){return this.adUnitPath.split("/").pop()}getSizes(){return this.sizes||[[1,1]]}getId(){return this.id}setGptRefresh(){this.gptRefresh=!0,this.refreshCounter++,this.lastRefresh=Date.now()}resetGptRefresh(){this.gptRefresh=!1}resetGptSlot(){googletag.cmd.push((()=>{this.gptSlot&&(this.gptRefresh=!1,this.lastRefresh=null,googletag.pubads().clear([this.gptSlot]),G.getInstance().removeBids([this]))}))}setRequestTimestamp(t){this.requestTimestamp=t}generateAdCorrelationId(){return this.adCorrelationId=l(),this.adCorrelationId}disableRefresh(){this.refreshTimeout=0}isResponsive(){return this.sizeMappings.length>0}getGptRefresh(){return this.gptRefresh}isLoadOnInit(){return this.loadOnInit}getRefreshTimeout(){return this.refreshTimeout}getRequestTimestamp(){return this.requestTimestamp}getAdLocation(){return this.adLocation}getRefreshCounter(){return this.refreshCounter}getLastRefresh(){return this.lastRefresh}getGptSlot(){return this.gptSlot}getCollapse(){return this.collapse}getSizeMappings(){return this.sizeMappings}getTargeting(){return this.targeting}}let W=[];const J=()=>{let t=(e=document.querySelectorAll(".rg-ad:not(.is-registered)"),Array.from(e));var e;const i=E.getConfig("whitelistedAdUnits",[]);i&&i.length>0&&(t.forEach((t=>{t.classList.add("is-registered")})),t=t.filter((t=>{const e=t.getAttribute("ad-unit-path");return-1!==i.indexOf(e)})));const n=t.map((function(t){const e=new H(t);return W.push(e),e}));n.length&&I(`Registered ${n.length} adUnits from rg-ad elements. [${n.map((t=>t.getAdUnitPath())).join(", ")}]`)},F=()=>W;function K(){return F().filter((t=>!t.getSlot()))}const Q=t=>{const e=t.map((t=>t.getId()));W=W.filter((t=>-1===e.indexOf(t.getId())))};function Y(t,e=!0){const i=E.getConfig(x,!1);return F().filter((t=>!t.gptRefresh&&document.body.contains(t.element))).filter((t=>!e||t.getSlot())).filter((e=>i||e.loadOnInit||t(e)))}let X=[],Z=!1,tt=null;function et(){var t,e;if(tt=null,X.length>0){X.filter((({type:t})=>-1!==["SlotRenderEnded"].indexOf(t))).length&&X.push({type:"globalTargeting",targeting:E.getConfig(S,{})});const i="/beacon/ads/v1/track"+(Object.keys((null===(t=null===window||void 0===window?void 0:window.pageConfig)||void 0===t?void 0:t.trackingPayload)||{}).length>0?`?_tp=${btoa(JSON.stringify(null===(e=null===window||void 0===window?void 0:window.pageConfig)||void 0===e?void 0:e.trackingPayload))}`:"");navigator.sendBeacon(i,JSON.stringify(X)),X=[]}}let it={};function nt(t,e,i,n){if(i||n){let n=0;i&&i.requestTimestamp&&(n=Date.now()-i.requestTimestamp,(n<0||n>6e4)&&(n=0));const r={mv:"1.214.0"},a=E.getConfig(k,null),d=E.getConfig("targeting.experimentVariant",null);if(i){const t=`${e}-${i.adCorrelationId}`;if(it[t])return;it[t]=!0,r.li=i.lineItemId,r.ci=i.creativeId,r.ct=i.creativeTemplateId,r.ai=i.advertiserId,r.ie=i.isEmpty,r.ck=a,r.va=d,r.aci=i.adCorrelationId;const n=i.getSlot();if(n){const t={};n.getTargetingKeys().forEach((e=>{t[e]=n.getTargeting(e)||[]})),r.ta=t}}!function(t,e,i,n){var r;!function(...t){y()&&s("log")&&o().log(A(t,"MESSAGE:"))}(`TrackLoading slot ${t} type ${e}`),r={slotId:t,type:e,msrs:i,...n},X.push(r),Z||(window.addEventListener("visibilitychange",(()=>"hidden"===document.visibilityState&&et())),Z=!0),tt||(tt=setTimeout(et,3e4))}(t,e,n,r)}}i(787);const ot=()=>{nt("AdBlockCheck","AdBlockEnabled",null,!0),window.ga&&window.ga("send","event","Ads","AdBlockEnabled"),I("Ad blocker detected.")};function st(t,e,i={}){const n=(o=t,document.getElementById(o));var o;n&&n.dispatchEvent(new CustomEvent("adUnitEvent",{detail:{...i,type:e}}))}const rt=t=>{let e=t.data;if("string"==typeof e)try{e=JSON.parse(e)}catch(t){e=void 0}if("object"!=typeof e)return;if(!e||!e.msg||!e.snippet)return;const{snippet:i,msg:n}=e,o=F(),s=a(o,i);s?"adInteract"===n?st(i,"interact"):"disableRefresh"===n?(s.disableRefresh(),I(`Disabled refresh for adunit with snippetId ${i}.`)):I(`Unsupported message ${n}.`):I(`Could not find ad unit with snippetId ${i}.`)};function at(t,e){const{slot:i}=e;st(i.getSlotElementId(),t,{gptEvent:e,[t]:e})}function dt(t){const{slot:e}=t;I(`SlotRenderEndedEvent ${e.getAdUnitPath()} element ${e.getSlotElementId()}`);const i=F(),n=d(i,e);if(n){n.onGptEvent&&n.onGptEvent("slotRenderEnded",t),at("slotRenderEnded",t);const{creativeId:e,isEmpty:i,lineItemId:o,campaignId:s,advertiserId:r,serviceName:a,size:d,creativeTemplateId:l}=t;10007040===l&&n.disableRefresh(),Object.assign(n,{creativeId:e,isEmpty:i,lineItemId:o,campaignId:s,advertiserId:r,serviceName:a,size:d,creativeTemplateId:l}),nt(n.getSlotId(),"SlotRenderEnded",n);const c=function(t){const{creativeId:e,isEmpty:i,lineItemId:n,advertiserId:o,serviceName:s,size:r,creativeTemplateId:a,refreshCounter:d}=t;return{renderCount:d,advertiserId:o,creativeId:e,lineItemId:n,isEmpty:i,serviceName:s,size:r,creativeTemplateId:a}}(n),u=E.getConfig(`adUnitChangeCallback.${n.snippetId}`);if(u&&u("updateSlot",c),t.isEmpty)g(n,"isEmpty");else{const t=E.getConfig("refreshingAdvertiserIds",[]);t&&t.length&&-1===t.indexOf(r)&&n.disableRefresh()}}t.isEmpty&&googletag.pubads().clear([e])}function lt(t){const{slot:e}=t;I(`SlotOnloadEvent ${e.getAdUnitPath()} element ${e.getSlotElementId()}`);const i=F(),n=d(i,e);n&&(n.onGptEvent&&n.onGptEvent("slotOnload",t),at("slotOnload",t),nt(n.getSlotId(),"SlotOnload",n),g(n,"view"),function(t){t&&R("rgAdImpression",O(t))}(n))}function gt(t){const{slot:e}=t;I(`ImpressionViewableEvent ${e.getAdUnitPath()} element ${e.getSlotElementId()}`);const i=F(),n=d(i,e);n&&(n.onGptEvent&&n.onGptEvent("impressionViewable",t),at("impressionViewable",t),nt(n.getSlotId(),"ImpressionViewable",n),function(t){t&&R("rgAdViewableImpression",O(t))}(n))}const ct=()=>{(()=>{const t=E.getConfig(S,{}),e=[];(window.pageConfig&&void 0!==window.pageConfig.isLitePage?window.pageConfig.isLitePage:document.getElementsByClassName("lite-page").length>0)&&e.push("lite-page"),null===v&&(v="TRUE"===w("force_test_ads").toUpperCase()),v&&(e.push("debug-ads"),I("Debugging for ads enabled, setting variants to debug-ads to force filled slots")),e.length&&(t.variants?e.forEach((e=>t.variants.push(e))):t.variants=e),b()&&(t.variants||(t.variants=[]),t.variants.push("test_mode")),t.managerVersion=["1.214.0"],Object.keys(t).forEach((e=>{let i=t[e];Array.isArray(i)||(i=[i]),googletag.pubads().setTargeting(e,i.map((t=>`${t}`)))})),E.setConfigValue(S,t),I("Page targeting set")})(),googletag.pubads().addEventListener("slotRenderEnded",dt),googletag.pubads().addEventListener("slotOnload",lt),googletag.pubads().addEventListener("impressionViewable",gt),window.cookieConsentConfig&&void 0!==window.cookieConsentConfig.googlePersonalization&&(window.cookieConsentConfig.googlePersonalization||(I("Setting non personalized ads"),googletag.pubads().setRequestNonPersonalizedAds(1))),"1"===f("google_restrict_data_processing")&&googletag.pubads().setPrivacySettings({restrictDataProcessing:!0});const t=E.getConfig("ppid",null);t&&googletag.pubads().setPublisherProvidedId(t),googletag.pubads().enableSingleRequest(),googletag.pubads().setCentering(!0),googletag.pubads().disableInitialLoad(),googletag.enableServices(),I("GPT services started"),F().forEach((t=>t.createSlot()))};let ut;class ht{constructor(){this.queue=[]}push(t){this.queue.push(t)}setCallback(t){this.queue.push=t}execute(t){this.queue.forEach(t)}}function pt(){return ut||(ut=new ht),ut}function ft(t,e){const i=void 0===e?t.getLazySetting():e;return M(t.element,i)}const mt=()=>{if(!(()=>{let t="hidden";return void 0!==document.hidden?t="hidden":void 0!==document.msHidden?t="msHidden":void 0!==document.webkitHidden&&(t="webkitHidden"),"boolean"!=typeof document[t]||!document[t]})())return;if(function(){if(E.getConfig("disableFastScrollCheck",!1))return j=!1,j;const t=Math.abs($-window.scrollY);return $=window.scrollY,j=t>500,j}())return;const t=Date.now(),e=F().filter((t=>t.gptRefresh&&t.refreshTimeout>0&&document.body.contains(t.element))).filter(ft),i=e.filter((e=>t-e.lastRefresh>=e.refreshTimeout));e.length===i.length&&e.forEach((t=>t.resetGptRefresh())),G.getInstance().requestBids(),V()};function vt(){J(),K().length>0&&googletag.cmd.push((()=>K().forEach((t=>t.createSlot())))),mt()}const bt=t=>t(),wt=t=>(t(),0);const yt=t=>{const e=XMLHttpRequest.prototype.open;XMLHttpRequest.prototype.open=function(){try{t(...arguments)}catch(t){}return e.apply(this,[].slice.call(arguments))}},It=t=>{const e=t[1];if(!(t=>{const e=new URL(t);return"securepubads.g.doubleclick.net"===e.hostname&&"/gampad/ads"===e.pathname&&!(e.searchParams.has("cust_params")&&e.searchParams.has("prev_scp"))})(e))return;const i={adsUrl:e,targeting:E.getConfig(S,{})};navigator.sendBeacon("/beacon/ads/logTargeting",JSON.stringify(i))},_t=["publisherDomain","bidderTimeout"],At=t=>{if(!c(t))return void _("delivery-manager can only be initialized with object as config.");if(E.getConfig("initialized"))return void _("delivery-manager can only be initialized once.");if(t.enableLogging&&(m=!0,I("Logging enabled.")),E.setConfig({...t,initialized:!0}),"boolean"!=typeof E.getConfig("gdprApplies"))return void _("gdprApplies is a mandatory config setting.");let e=!1;_t.forEach((t=>{E.getConfig(t)||(_(`${t} is a mandatory config setting.`),e=!0)})),e||((()=>{const t=window.blockAdBlock;I("Checking for ad blocker."),void 0===t?ot():(t.onDetected(ot),t.onNotDetected((()=>{I("No ad blocker detected.")})),t.check())})(),E.getConfig("logAdTargeting",!1)&&yt(It),J(),googletag.cmd.push((()=>{n("message",rt,!1),ct(),function(){if(!window.matchMedia||void 0===window.matchMedia("all").addEventListener)return;const t=[];F().forEach((e=>{const i=[];let n;for(e.sizeMappings.forEach((t=>{const e=Array.isArray(t[0][0])?t[0][0][0]:t[0][0];i.push(e)})),n=0;n<i.length;n++){const e=i[n],o=i[n+1];let s=`(min-width: ${e}px)`;o&&(s=`${s} and (max-width: ${o-1}px)`),-1===t.indexOf(s)&&(window.matchMedia(s).addEventListener("change",z),t.push(s))}}))}(),pt().execute(bt),pt().setCallback(wt),G.getInstance().init(),mt(),function(){const t=window.MutationObserver;t&&new t((function(t){const e=[];t.forEach((t=>{Array.from(t.addedNodes||[]).forEach((t=>{const i=(null==t?void 0:t.className)||"";(null==i?void 0:i.length)&&-1!==i.indexOf("rg-ad")&&e.push(t)}))})),e.length>0&&vt()})).observe(document.body,{subtree:!0,childList:!0})}(),setInterval(vt,250)})))};window.rgDelivery=window.rgDelivery||{},window.rgDelivery.cmd=window.rgDelivery.cmd||[];const Ct=window.rgDelivery;function Et(t){if("function"==typeof t)try{t.call(),t.called=!0}catch(t){_("Error processing command :",t.message,t.stack)}else _("Commands written into rgDelivery.cmd.push must be wrapped in a function")}I("AdsManager v1.214.0 loaded"),Ct.setConfig=E.setConfig,Ct.getConfig=E.getConfig,Ct.initManager=t=>{"interactive"===document.readyState||"complete"===document.readyState?At(t):window.addEventListener("DOMContentLoaded",(()=>{At(t)}))},Ct.startManager=()=>{},Ct.registerAdSlot=()=>{},Ct.unregisterAdSlot=t=>{t?googletag.cmd.push((()=>{const e=F().filter((e=>e.getId()===t));Q(e);const i=e.map((t=>t.getSlot()));i.length&&googletag.destroySlots(i)})):_("SnippetId required for performing remove.")},Ct.refreshAdSlot=t=>{t?googletag.cmd.push((()=>{const e=F().filter((e=>e.getId()===t)).map((t=>t.getSlot()));e.length>0&&(I(`Refreshing slots [${e.map((t=>t.getSlotElementId())).join(",")}]`),googletag.pubads().refresh(e))})):_("SnippetId required for performing refresh.")},Ct.updateContextTargeting=t=>{if(!c(t))return void _("Targeting provided is not a valid targeting map.");const e={...E.getConfig(S,{}),...t};E.setConfigValue(S,e),Object.keys(e).forEach((t=>{let i=e[t];Array.isArray(i)||(i=[i]),googletag.pubads().setTargeting(t,i)}))},Ct.refreshAdSlots=t=>{Array.isArray(t)&&t.length?googletag.cmd.push((()=>{const e=F().filter((e=>-1!==t.indexOf(e.getSlotId()))).map((t=>t.getSlot()));e.length>0&&(I(`Refreshing slots [${e.map((t=>t.getSlotElementId())).join(",")}]`),googletag.pubads().refresh(e))})):_("AdUnit codes required for refreshing.")},Ct.cmd.push=Et,Ct.processQueue=function(){!function(t){t.forEach((function(t){void 0===t.called&&Et(t)}))}(Ct.cmd)},Ct.processQueue()})()})();
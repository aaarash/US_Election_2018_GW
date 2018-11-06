var helpers=createHelpers();function createHelpers(){return{createSecondaryPayload:function(e,t){return{flag:!1,type:t,loaded:0,srcs:e}},toCamelCase:function(e){var t="";return e.indexOf("-")<0?e.replace(/#|\./g,""):(e.replace(/#|\./g,"").split("-").forEach(function(e,n){var a=e.toLowerCase();t+=0===n?a:a[0].toUpperCase()+a.slice(1)}),t)},externalLoader:{img:function(e,t,n){var a=new Image,r=Enabler.getUrl(t);a.onload=a.onerror=a.onabort=n.bind({},e,t),a.src=r},js:function(e,t,n){Enabler.loadScript(t,n.bind({},e))}},createStyleSheet:function(){var e=document.createElement("style");return e.appendChild(document.createTextNode("")),document.head.appendChild(e),e.sheet},cssRuleMaker:{img:function(e,t){creative.rules.insertRule("."+e+"{position:absolute;background-image:url("+t+");}",creative.rules.cssRules.length)}},addListeners:function(e){e.forEach(function(e){e.obj.addEventListener(e.type,e.callback,!1)})},getChromeVersion:function(){var e=navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);return!!e&&parseInt(e[2],10)},createRule:function(e,t,n){creative.rules.insertRule(e+"{"+t+":"+n+";}",creative.rules.cssRules.length)},setup:function(){creative.selectors.forEach(function(e){creative.dom[helpers.toCamelCase(e)]="."===e[0]&&document.querySelectorAll(e).length>1?document.querySelectorAll(e):document.querySelector(e)})}}}function preInit(){Enabler.isInitialized()?init():Enabler.addEventListener(studio.events.StudioEvent.INIT,init)}function loadHTML(){httpGet(layout[dynamicContent.parent[0].creative_template]+".html",function(e){document.querySelector("#content-wrap").innerHTML=e})}function httpGet(e,t){var n=new XMLHttpRequest;n.onreadystatechange=function(){4===n.readyState&&200===n.status&&t(n.responseText)},n.open("GET",e),n.send(null)}function loadCSS(e){var t=document.createElement("link"),n=document.querySelector("head");t.type="text/css",t.rel="stylesheet",t.href=Enabler.getUrl(e),n.appendChild(t)}var layout={endemic_copy_bottom:"end_lfst_mfun",lifestyle_art_full:"end_lfst_mfun",mid_funnel:"end_lfst_mfun",rmc_incentives:"rmc_incentives",lfst_life:"lfst_life",lifestyle_launch:"lifestyle_launch"};function init(){loadHTML(),loadCSS(layout[dynamicContent.parent[0].creative_template]+".css"),Enabler.loadScript(layout[dynamicContent.parent[0].creative_template]+".js"),dynamicContent.messages[0].cta_1_override.Url.length&&(dynamicContent.ctas[0].exit_cta1.Url=dynamicContent.messages[0].cta_1_override.Url),dynamicContent.messages[0].cta_2_override.Url.length&&(dynamicContent.ctas[0].exit_cta2.Url=dynamicContent.messages[0].cta_2_override.Url),dynamicContent.messages[0].nameplate_image_override.Url&&(dynamicContent.parent[0].nameplate_image.Url=dynamicContent.messages[0].nameplate_image_override.Url),dynamicContent.messages[0].jellybean_override.Url&&(dynamicContent.endemic_images[0].endemic_image.Url=dynamicContent.messages[0].jellybean_override.Url),dynamicContent.messages[0].text_cta1_override&&(dynamicContent.ctas[0].text_cta1=dynamicContent.messages[0].text_cta1_override),dynamicContent.messages[0].text_cta2_override&&(dynamicContent.ctas[0].text_cta2=dynamicContent.messages[0].text_cta2_override),dynamicContent.messages[0].logo_override.Url&&(dynamicContent.parent[0].logo.Url=dynamicContent.messages[0].logo_override.Url)}window.addEventListener("load",preInit);
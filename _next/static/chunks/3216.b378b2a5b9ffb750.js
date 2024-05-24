"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3216],{23216:function(t,e,r){r.d(e,{a:function(){return l},b:function(){return _},c:function(){return o},d:function(){return I},e:function(){return M},f:function(){return N},g:function(){return C},h:function(){return A},i:function(){return x},j:function(){return D},k:function(){return P},l:function(){return d},m:function(){return R},p:function(){return B},s:function(){return T},u:function(){return c}});var a=r(20089),n=r(31347),i=r(67730);const s={extension:(t,e,r)=>{a.l.trace("Making markers for ",r),t.append("defs").append("marker").attr("id",r+"_"+e+"-extensionStart").attr("class","marker extension "+e).attr("refX",18).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 1,7 L18,13 V 1 Z"),t.append("defs").append("marker").attr("id",r+"_"+e+"-extensionEnd").attr("class","marker extension "+e).attr("refX",1).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 1,1 V 13 L18,7 Z")},composition:(t,e,r)=>{t.append("defs").append("marker").attr("id",r+"_"+e+"-compositionStart").attr("class","marker composition "+e).attr("refX",18).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),t.append("defs").append("marker").attr("id",r+"_"+e+"-compositionEnd").attr("class","marker composition "+e).attr("refX",1).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z")},aggregation:(t,e,r)=>{t.append("defs").append("marker").attr("id",r+"_"+e+"-aggregationStart").attr("class","marker aggregation "+e).attr("refX",18).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),t.append("defs").append("marker").attr("id",r+"_"+e+"-aggregationEnd").attr("class","marker aggregation "+e).attr("refX",1).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z")},dependency:(t,e,r)=>{t.append("defs").append("marker").attr("id",r+"_"+e+"-dependencyStart").attr("class","marker dependency "+e).attr("refX",6).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 5,7 L9,13 L1,7 L9,1 Z"),t.append("defs").append("marker").attr("id",r+"_"+e+"-dependencyEnd").attr("class","marker dependency "+e).attr("refX",13).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L14,7 L9,1 Z")},lollipop:(t,e,r)=>{t.append("defs").append("marker").attr("id",r+"_"+e+"-lollipopStart").attr("class","marker lollipop "+e).attr("refX",13).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("circle").attr("stroke","black").attr("fill","transparent").attr("cx",7).attr("cy",7).attr("r",6),t.append("defs").append("marker").attr("id",r+"_"+e+"-lollipopEnd").attr("class","marker lollipop "+e).attr("refX",1).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("circle").attr("stroke","black").attr("fill","transparent").attr("cx",7).attr("cy",7).attr("r",6)},point:(t,e,r)=>{t.append("marker").attr("id",r+"_"+e+"-pointEnd").attr("class","marker "+e).attr("viewBox","0 0 10 10").attr("refX",6).attr("refY",5).attr("markerUnits","userSpaceOnUse").attr("markerWidth",12).attr("markerHeight",12).attr("orient","auto").append("path").attr("d","M 0 0 L 10 5 L 0 10 z").attr("class","arrowMarkerPath").style("stroke-width",1).style("stroke-dasharray","1,0"),t.append("marker").attr("id",r+"_"+e+"-pointStart").attr("class","marker "+e).attr("viewBox","0 0 10 10").attr("refX",4.5).attr("refY",5).attr("markerUnits","userSpaceOnUse").attr("markerWidth",12).attr("markerHeight",12).attr("orient","auto").append("path").attr("d","M 0 5 L 10 10 L 10 0 z").attr("class","arrowMarkerPath").style("stroke-width",1).style("stroke-dasharray","1,0")},circle:(t,e,r)=>{t.append("marker").attr("id",r+"_"+e+"-circleEnd").attr("class","marker "+e).attr("viewBox","0 0 10 10").attr("refX",11).attr("refY",5).attr("markerUnits","userSpaceOnUse").attr("markerWidth",11).attr("markerHeight",11).attr("orient","auto").append("circle").attr("cx","5").attr("cy","5").attr("r","5").attr("class","arrowMarkerPath").style("stroke-width",1).style("stroke-dasharray","1,0"),t.append("marker").attr("id",r+"_"+e+"-circleStart").attr("class","marker "+e).attr("viewBox","0 0 10 10").attr("refX",-1).attr("refY",5).attr("markerUnits","userSpaceOnUse").attr("markerWidth",11).attr("markerHeight",11).attr("orient","auto").append("circle").attr("cx","5").attr("cy","5").attr("r","5").attr("class","arrowMarkerPath").style("stroke-width",1).style("stroke-dasharray","1,0")},cross:(t,e,r)=>{t.append("marker").attr("id",r+"_"+e+"-crossEnd").attr("class","marker cross "+e).attr("viewBox","0 0 11 11").attr("refX",12).attr("refY",5.2).attr("markerUnits","userSpaceOnUse").attr("markerWidth",11).attr("markerHeight",11).attr("orient","auto").append("path").attr("d","M 1,1 l 9,9 M 10,1 l -9,9").attr("class","arrowMarkerPath").style("stroke-width",2).style("stroke-dasharray","1,0"),t.append("marker").attr("id",r+"_"+e+"-crossStart").attr("class","marker cross "+e).attr("viewBox","0 0 11 11").attr("refX",-1).attr("refY",5.2).attr("markerUnits","userSpaceOnUse").attr("markerWidth",11).attr("markerHeight",11).attr("orient","auto").append("path").attr("d","M 1,1 l 9,9 M 10,1 l -9,9").attr("class","arrowMarkerPath").style("stroke-width",2).style("stroke-dasharray","1,0")},barb:(t,e,r)=>{t.append("defs").append("marker").attr("id",r+"_"+e+"-barbEnd").attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",14).attr("markerUnits","strokeWidth").attr("orient","auto").append("path").attr("d","M 19,7 L9,13 L14,7 L9,1 Z")}},l=(t,e,r,a)=>{e.forEach((e=>{s[e](t,r,a)}))};const o=(t,e,r,i)=>{let s=t||"";if("object"===typeof s&&(s=s[0]),(0,a.m)((0,a.c)().flowchart.htmlLabels)){s=s.replace(/\\n|\n/g,"<br />"),a.l.debug("vertexText"+s);let t=function(t){const e=(0,n.Ys)(document.createElementNS("http://www.w3.org/2000/svg","foreignObject")),r=e.append("xhtml:div"),a=t.label,i=t.isNode?"nodeLabel":"edgeLabel";var s,l;return r.html('<span class="'+i+'" '+(t.labelStyle?'style="'+t.labelStyle+'"':"")+">"+a+"</span>"),s=r,(l=t.labelStyle)&&s.attr("style",l),r.style("display","inline-block"),r.style("white-space","nowrap"),r.attr("xmlns","http://www.w3.org/1999/xhtml"),e.node()}({isNode:i,label:(0,a.M)(s).replace(/fa[blrs]?:fa-[\w-]+/g,(t=>`<i class='${t.replace(":"," ")}'></i>`)),labelStyle:e.replace("fill:","color:")});return t}{const t=document.createElementNS("http://www.w3.org/2000/svg","text");t.setAttribute("style",e.replace("color:","fill:"));let a=[];a="string"===typeof s?s.split(/\\n|\n|<br\s*\/?>/gi):Array.isArray(s)?s:[];for(const e of a){const a=document.createElementNS("http://www.w3.org/2000/svg","tspan");a.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve"),a.setAttribute("dy","1em"),a.setAttribute("x","0"),r?a.setAttribute("class","title-row"):a.setAttribute("class","row"),a.textContent=e.trim(),t.appendChild(a)}return t}},d=async(t,e,r,s)=>{let l;const d=e.useHtmlLabels||(0,a.m)((0,a.c)().flowchart.htmlLabels);l=r||"node default";const c=t.insert("g").attr("class",l).attr("id",e.domId||e.id),h=c.insert("g").attr("class","label").attr("style",e.labelStyle);let y;y=void 0===e.labelText?"":"string"===typeof e.labelText?e.labelText:e.labelText[0];const p=h.node();let g;g="markdown"===e.labelType?(0,i.a)(h,(0,a.d)((0,a.M)(y),(0,a.c)()),{useHtmlLabels:d,width:e.width||(0,a.c)().flowchart.wrappingWidth,classes:"markdown-node-label"}):p.appendChild(o((0,a.d)((0,a.M)(y),(0,a.c)()),e.labelStyle,!1,s));let x=g.getBBox();const f=e.padding/2;if((0,a.m)((0,a.c)().flowchart.htmlLabels)){const t=g.children[0],e=(0,n.Ys)(g),r=t.getElementsByTagName("img");if(r){const t=""===y.replace(/<img[^>]*>/g,"").trim();await Promise.all([...r].map((e=>new Promise((r=>{function n(){if(e.style.display="flex",e.style.flexDirection="column",t){const t=(0,a.c)().fontSize?(0,a.c)().fontSize:window.getComputedStyle(document.body).fontSize,r=5,n=parseInt(t,10)*r+"px";e.style.minWidth=n,e.style.maxWidth=n}else e.style.width="100%";r(e)}setTimeout((()=>{e.complete&&n()})),e.addEventListener("error",n),e.addEventListener("load",n)})))))}x=t.getBoundingClientRect(),e.attr("width",x.width),e.attr("height",x.height)}return d?h.attr("transform","translate("+-x.width/2+", "+-x.height/2+")"):h.attr("transform","translate(0, "+-x.height/2+")"),e.centerLabel&&h.attr("transform","translate("+-x.width/2+", "+-x.height/2+")"),h.insert("rect",":first-child"),{shapeSvg:c,bbox:x,halfPadding:f,label:h}},c=(t,e)=>{const r=e.node().getBBox();t.width=r.width,t.height=r.height};function h(t,e,r,a){return t.insert("polygon",":first-child").attr("points",a.map((function(t){return t.x+","+t.y})).join(" ")).attr("class","label-container").attr("transform","translate("+-e/2+","+r/2+")")}function y(t,e,r,a){var n=t.x,i=t.y,s=n-a.x,l=i-a.y,o=Math.sqrt(e*e*l*l+r*r*s*s),d=Math.abs(e*r*s/o);a.x<n&&(d=-d);var c=Math.abs(e*r*l/o);return a.y<i&&(c=-c),{x:n+d,y:i+c}}function p(t,e,r,a){var n,i,s,l,o,d,c,h,y,p,x,f,u;if(n=e.y-t.y,s=t.x-e.x,o=e.x*t.y-t.x*e.y,y=n*r.x+s*r.y+o,p=n*a.x+s*a.y+o,(0===y||0===p||!g(y,p))&&(i=a.y-r.y,l=r.x-a.x,d=a.x*r.y-r.x*a.y,c=i*t.x+l*t.y+d,h=i*e.x+l*e.y+d,(0===c||0===h||!g(c,h))&&0!==(x=n*l-i*s)))return f=Math.abs(x/2),{x:(u=s*d-l*o)<0?(u-f)/x:(u+f)/x,y:(u=i*o-n*d)<0?(u-f)/x:(u+f)/x}}function g(t,e){return t*e>0}const x=(t,e)=>{var r,a,n=t.x,i=t.y,s=e.x-n,l=e.y-i,o=t.width/2,d=t.height/2;return Math.abs(l)*o>Math.abs(s)*d?(l<0&&(d=-d),r=0===l?0:d*s/l,a=d):(s<0&&(o=-o),r=o,a=0===s?0:o*l/s),{x:n+r,y:i+a}},f={node:function(t,e){return t.intersect(e)},circle:function(t,e,r){return y(t,e,e,r)},ellipse:y,polygon:function(t,e,r){var a=t.x,n=t.y,i=[],s=Number.POSITIVE_INFINITY,l=Number.POSITIVE_INFINITY;"function"===typeof e.forEach?e.forEach((function(t){s=Math.min(s,t.x),l=Math.min(l,t.y)})):(s=Math.min(s,e.x),l=Math.min(l,e.y));for(var o=a-t.width/2-s,d=n-t.height/2-l,c=0;c<e.length;c++){var h=e[c],y=e[c<e.length-1?c+1:0],g=p(t,r,{x:o+h.x,y:d+h.y},{x:o+y.x,y:d+y.y});g&&i.push(g)}return i.length?(i.length>1&&i.sort((function(t,e){var a=t.x-r.x,n=t.y-r.y,i=Math.sqrt(a*a+n*n),s=e.x-r.x,l=e.y-r.y,o=Math.sqrt(s*s+l*l);return i<o?-1:i===o?0:1})),i[0]):t},rect:x},u=(t,e,r)=>{const a=(t=>{const e=new Set;for(const r of t)switch(r){case"x":e.add("right"),e.add("left");break;case"y":e.add("up"),e.add("down");break;default:e.add(r)}return e})(t),n=e.height+2*r.padding,i=n/2,s=e.width+2*i+r.padding,l=r.padding/2;return a.has("right")&&a.has("left")&&a.has("up")&&a.has("down")?[{x:0,y:0},{x:i,y:0},{x:s/2,y:2*l},{x:s-i,y:0},{x:s,y:0},{x:s,y:-n/3},{x:s+2*l,y:-n/2},{x:s,y:-2*n/3},{x:s,y:-n},{x:s-i,y:-n},{x:s/2,y:-n-2*l},{x:i,y:-n},{x:0,y:-n},{x:0,y:-2*n/3},{x:-2*l,y:-n/2},{x:0,y:-n/3}]:a.has("right")&&a.has("left")&&a.has("up")?[{x:i,y:0},{x:s-i,y:0},{x:s,y:-n/2},{x:s-i,y:-n},{x:i,y:-n},{x:0,y:-n/2}]:a.has("right")&&a.has("left")&&a.has("down")?[{x:0,y:0},{x:i,y:-n},{x:s-i,y:-n},{x:s,y:0}]:a.has("right")&&a.has("up")&&a.has("down")?[{x:0,y:0},{x:s,y:-i},{x:s,y:-n+i},{x:0,y:-n}]:a.has("left")&&a.has("up")&&a.has("down")?[{x:s,y:0},{x:0,y:-i},{x:0,y:-n+i},{x:s,y:-n}]:a.has("right")&&a.has("left")?[{x:i,y:0},{x:i,y:-l},{x:s-i,y:-l},{x:s-i,y:0},{x:s,y:-n/2},{x:s-i,y:-n},{x:s-i,y:-n+l},{x:i,y:-n+l},{x:i,y:-n},{x:0,y:-n/2}]:a.has("up")&&a.has("down")?[{x:s/2,y:0},{x:0,y:-l},{x:i,y:-l},{x:i,y:-n+l},{x:0,y:-n+l},{x:s/2,y:-n},{x:s,y:-n+l},{x:s-i,y:-n+l},{x:s-i,y:-l},{x:s,y:-l}]:a.has("right")&&a.has("up")?[{x:0,y:0},{x:s,y:-i},{x:0,y:-n}]:a.has("right")&&a.has("down")?[{x:0,y:0},{x:s,y:0},{x:0,y:-n}]:a.has("left")&&a.has("up")?[{x:s,y:0},{x:0,y:-i},{x:s,y:-n}]:a.has("left")&&a.has("down")?[{x:s,y:0},{x:0,y:0},{x:s,y:-n}]:a.has("right")?[{x:i,y:-l},{x:i,y:-l},{x:s-i,y:-l},{x:s-i,y:0},{x:s,y:-n/2},{x:s-i,y:-n},{x:s-i,y:-n+l},{x:i,y:-n+l},{x:i,y:-n+l}]:a.has("left")?[{x:i,y:0},{x:i,y:-l},{x:s-i,y:-l},{x:s-i,y:-n+l},{x:i,y:-n+l},{x:i,y:-n},{x:0,y:-n/2}]:a.has("up")?[{x:i,y:-l},{x:i,y:-n+l},{x:0,y:-n+l},{x:s/2,y:-n},{x:s,y:-n+l},{x:s-i,y:-n+l},{x:s-i,y:-l}]:a.has("down")?[{x:s/2,y:0},{x:0,y:-l},{x:i,y:-l},{x:i,y:-n+l},{x:s-i,y:-n+l},{x:s-i,y:-l},{x:s,y:-l}]:[{x:0,y:0}]},w=t=>t?" "+t:"",b=(t,e)=>`${e||"node default"}${w(t.classes)} ${w(t.class)}`,m=async(t,e)=>{const{shapeSvg:r,bbox:n}=await d(t,e,b(e,void 0),!0),i=n.width+e.padding+(n.height+e.padding),s=[{x:i/2,y:0},{x:i,y:-i/2},{x:i/2,y:-i},{x:0,y:-i/2}];a.l.info("Question main (Circle)");const l=h(r,i,i,s);return l.attr("style",e.style),c(e,l),e.intersect=function(t){return a.l.warn("Intersect called"),f.polygon(e,s,t)},r};function k(t,e,r,n){const i=[],s=t=>{i.push(t,0)},l=t=>{i.push(0,t)};e.includes("t")?(a.l.debug("add top border"),s(r)):l(r),e.includes("r")?(a.l.debug("add right border"),s(n)):l(n),e.includes("b")?(a.l.debug("add bottom border"),s(r)):l(r),e.includes("l")?(a.l.debug("add left border"),s(n)):l(n),t.attr("stroke-dasharray",i.join(" "))}const v=(t,e,r)=>{const a=t.insert("g").attr("class","node default").attr("id",e.domId||e.id);let n=70,i=10;"LR"===r&&(n=10,i=70);const s=a.append("rect").attr("x",-1*n/2).attr("y",-1*i/2).attr("width",n).attr("height",i).attr("class","fork-join");return c(e,s),e.height=e.height+e.padding/2,e.width=e.width+e.padding/2,e.intersect=function(t){return f.rect(e,t)},a},L={rhombus:m,composite:async(t,e)=>{const{shapeSvg:r,bbox:n,halfPadding:i}=await d(t,e,"node "+e.classes,!0),s=r.insert("rect",":first-child"),l=e.positioned?e.width:n.width+e.padding,o=e.positioned?e.height:n.height+e.padding,h=e.positioned?-l/2:-n.width/2-i,y=e.positioned?-o/2:-n.height/2-i;if(s.attr("class","basic cluster composite label-container").attr("style",e.style).attr("rx",e.rx).attr("ry",e.ry).attr("x",h).attr("y",y).attr("width",l).attr("height",o),e.props){const t=new Set(Object.keys(e.props));e.props.borders&&(k(s,e.props.borders,l,o),t.delete("borders")),t.forEach((t=>{a.l.warn(`Unknown node property ${t}`)}))}return c(e,s),e.intersect=function(t){return f.rect(e,t)},r},question:m,rect:async(t,e)=>{const{shapeSvg:r,bbox:n,halfPadding:i}=await d(t,e,"node "+e.classes+" "+e.class,!0),s=r.insert("rect",":first-child"),l=e.positioned?e.width:n.width+e.padding,o=e.positioned?e.height:n.height+e.padding,h=e.positioned?-l/2:-n.width/2-i,y=e.positioned?-o/2:-n.height/2-i;if(s.attr("class","basic label-container").attr("style",e.style).attr("rx",e.rx).attr("ry",e.ry).attr("x",h).attr("y",y).attr("width",l).attr("height",o),e.props){const t=new Set(Object.keys(e.props));e.props.borders&&(k(s,e.props.borders,l,o),t.delete("borders")),t.forEach((t=>{a.l.warn(`Unknown node property ${t}`)}))}return c(e,s),e.intersect=function(t){return f.rect(e,t)},r},labelRect:async(t,e)=>{const{shapeSvg:r}=await d(t,e,"label",!0);a.l.trace("Classes = ",e.class);const n=r.insert("rect",":first-child");if(n.attr("width",0).attr("height",0),r.attr("class","label edgeLabel"),e.props){const t=new Set(Object.keys(e.props));e.props.borders&&(k(n,e.props.borders,0,0),t.delete("borders")),t.forEach((t=>{a.l.warn(`Unknown node property ${t}`)}))}return c(e,n),e.intersect=function(t){return f.rect(e,t)},r},rectWithTitle:(t,e)=>{let r;r=e.classes?"node "+e.classes:"node default";const i=t.insert("g").attr("class",r).attr("id",e.domId||e.id),s=i.insert("rect",":first-child"),l=i.insert("line"),d=i.insert("g").attr("class","label"),h=e.labelText.flat?e.labelText.flat():e.labelText;let y="";y="object"===typeof h?h[0]:h,a.l.info("Label text abc79",y,h,"object"===typeof h);const p=d.node().appendChild(o(y,e.labelStyle,!0,!0));let g={width:0,height:0};if((0,a.m)((0,a.c)().flowchart.htmlLabels)){const t=p.children[0],e=(0,n.Ys)(p);g=t.getBoundingClientRect(),e.attr("width",g.width),e.attr("height",g.height)}a.l.info("Text 2",h);const x=h.slice(1,h.length);let u=p.getBBox();const w=d.node().appendChild(o(x.join?x.join("<br/>"):x,e.labelStyle,!0,!0));if((0,a.m)((0,a.c)().flowchart.htmlLabels)){const t=w.children[0],e=(0,n.Ys)(w);g=t.getBoundingClientRect(),e.attr("width",g.width),e.attr("height",g.height)}const b=e.padding/2;return(0,n.Ys)(w).attr("transform","translate( "+(g.width>u.width?0:(u.width-g.width)/2)+", "+(u.height+b+5)+")"),(0,n.Ys)(p).attr("transform","translate( "+(g.width<u.width?0:-(u.width-g.width)/2)+", 0)"),g=d.node().getBBox(),d.attr("transform","translate("+-g.width/2+", "+(-g.height/2-b+3)+")"),s.attr("class","outer title-state").attr("x",-g.width/2-b).attr("y",-g.height/2-b).attr("width",g.width+e.padding).attr("height",g.height+e.padding),l.attr("class","divider").attr("x1",-g.width/2-b).attr("x2",g.width/2+b).attr("y1",-g.height/2-b+u.height+b).attr("y2",-g.height/2-b+u.height+b),c(e,s),e.intersect=function(t){return f.rect(e,t)},i},choice:(t,e)=>{const r=t.insert("g").attr("class","node default").attr("id",e.domId||e.id),a=[{x:0,y:14},{x:14,y:0},{x:0,y:-14},{x:-14,y:0}];return r.insert("polygon",":first-child").attr("points",a.map((function(t){return t.x+","+t.y})).join(" ")).attr("class","state-start").attr("r",7).attr("width",28).attr("height",28),e.width=28,e.height=28,e.intersect=function(t){return f.circle(e,14,t)},r},circle:async(t,e)=>{const{shapeSvg:r,bbox:n,halfPadding:i}=await d(t,e,b(e,void 0),!0),s=r.insert("circle",":first-child");return s.attr("style",e.style).attr("rx",e.rx).attr("ry",e.ry).attr("r",n.width/2+i).attr("width",n.width+e.padding).attr("height",n.height+e.padding),a.l.info("Circle main"),c(e,s),e.intersect=function(t){return a.l.info("Circle intersect",e,n.width/2+i,t),f.circle(e,n.width/2+i,t)},r},doublecircle:async(t,e)=>{const{shapeSvg:r,bbox:n,halfPadding:i}=await d(t,e,b(e,void 0),!0),s=r.insert("g",":first-child"),l=s.insert("circle"),o=s.insert("circle");return s.attr("class",e.class),l.attr("style",e.style).attr("rx",e.rx).attr("ry",e.ry).attr("r",n.width/2+i+5).attr("width",n.width+e.padding+10).attr("height",n.height+e.padding+10),o.attr("style",e.style).attr("rx",e.rx).attr("ry",e.ry).attr("r",n.width/2+i).attr("width",n.width+e.padding).attr("height",n.height+e.padding),a.l.info("DoubleCircle main"),c(e,l),e.intersect=function(t){return a.l.info("DoubleCircle intersect",e,n.width/2+i+5,t),f.circle(e,n.width/2+i+5,t)},r},stadium:async(t,e)=>{const{shapeSvg:r,bbox:a}=await d(t,e,b(e,void 0),!0),n=a.height+e.padding,i=a.width+n/4+e.padding,s=r.insert("rect",":first-child").attr("style",e.style).attr("rx",n/2).attr("ry",n/2).attr("x",-i/2).attr("y",-n/2).attr("width",i).attr("height",n);return c(e,s),e.intersect=function(t){return f.rect(e,t)},r},hexagon:async(t,e)=>{const{shapeSvg:r,bbox:a}=await d(t,e,b(e,void 0),!0),n=a.height+e.padding,i=n/4,s=a.width+2*i+e.padding,l=[{x:i,y:0},{x:s-i,y:0},{x:s,y:-n/2},{x:s-i,y:-n},{x:i,y:-n},{x:0,y:-n/2}],o=h(r,s,n,l);return o.attr("style",e.style),c(e,o),e.intersect=function(t){return f.polygon(e,l,t)},r},block_arrow:async(t,e)=>{const{shapeSvg:r,bbox:a}=await d(t,e,void 0,!0),n=a.height+2*e.padding,i=n/2,s=a.width+2*i+e.padding,l=u(e.directions,a,e),o=h(r,s,n,l);return o.attr("style",e.style),c(e,o),e.intersect=function(t){return f.polygon(e,l,t)},r},rect_left_inv_arrow:async(t,e)=>{const{shapeSvg:r,bbox:a}=await d(t,e,b(e,void 0),!0),n=a.width+e.padding,i=a.height+e.padding,s=[{x:-i/2,y:0},{x:n,y:0},{x:n,y:-i},{x:-i/2,y:-i},{x:0,y:-i/2}];return h(r,n,i,s).attr("style",e.style),e.width=n+i,e.height=i,e.intersect=function(t){return f.polygon(e,s,t)},r},lean_right:async(t,e)=>{const{shapeSvg:r,bbox:a}=await d(t,e,b(e),!0),n=a.width+e.padding,i=a.height+e.padding,s=[{x:-2*i/6,y:0},{x:n-i/6,y:0},{x:n+2*i/6,y:-i},{x:i/6,y:-i}],l=h(r,n,i,s);return l.attr("style",e.style),c(e,l),e.intersect=function(t){return f.polygon(e,s,t)},r},lean_left:async(t,e)=>{const{shapeSvg:r,bbox:a}=await d(t,e,b(e,void 0),!0),n=a.width+e.padding,i=a.height+e.padding,s=[{x:2*i/6,y:0},{x:n+i/6,y:0},{x:n-2*i/6,y:-i},{x:-i/6,y:-i}],l=h(r,n,i,s);return l.attr("style",e.style),c(e,l),e.intersect=function(t){return f.polygon(e,s,t)},r},trapezoid:async(t,e)=>{const{shapeSvg:r,bbox:a}=await d(t,e,b(e,void 0),!0),n=a.width+e.padding,i=a.height+e.padding,s=[{x:-2*i/6,y:0},{x:n+2*i/6,y:0},{x:n-i/6,y:-i},{x:i/6,y:-i}],l=h(r,n,i,s);return l.attr("style",e.style),c(e,l),e.intersect=function(t){return f.polygon(e,s,t)},r},inv_trapezoid:async(t,e)=>{const{shapeSvg:r,bbox:a}=await d(t,e,b(e,void 0),!0),n=a.width+e.padding,i=a.height+e.padding,s=[{x:i/6,y:0},{x:n-i/6,y:0},{x:n+2*i/6,y:-i},{x:-2*i/6,y:-i}],l=h(r,n,i,s);return l.attr("style",e.style),c(e,l),e.intersect=function(t){return f.polygon(e,s,t)},r},rect_right_inv_arrow:async(t,e)=>{const{shapeSvg:r,bbox:a}=await d(t,e,b(e,void 0),!0),n=a.width+e.padding,i=a.height+e.padding,s=[{x:0,y:0},{x:n+i/2,y:0},{x:n,y:-i/2},{x:n+i/2,y:-i},{x:0,y:-i}],l=h(r,n,i,s);return l.attr("style",e.style),c(e,l),e.intersect=function(t){return f.polygon(e,s,t)},r},cylinder:async(t,e)=>{const{shapeSvg:r,bbox:a}=await d(t,e,b(e,void 0),!0),n=a.width+e.padding,i=n/2,s=i/(2.5+n/50),l=a.height+s+e.padding,o="M 0,"+s+" a "+i+","+s+" 0,0,0 "+n+" 0 a "+i+","+s+" 0,0,0 "+-n+" 0 l 0,"+l+" a "+i+","+s+" 0,0,0 "+n+" 0 l 0,"+-l,h=r.attr("label-offset-y",s).insert("path",":first-child").attr("style",e.style).attr("d",o).attr("transform","translate("+-n/2+","+-(l/2+s)+")");return c(e,h),e.intersect=function(t){const r=f.rect(e,t),a=r.x-e.x;if(0!=i&&(Math.abs(a)<e.width/2||Math.abs(a)==e.width/2&&Math.abs(r.y-e.y)>e.height/2-s)){let n=s*s*(1-a*a/(i*i));0!=n&&(n=Math.sqrt(n)),n=s-n,t.y-e.y>0&&(n=-n),r.y+=n}return r},r},start:(t,e)=>{const r=t.insert("g").attr("class","node default").attr("id",e.domId||e.id),a=r.insert("circle",":first-child");return a.attr("class","state-start").attr("r",7).attr("width",14).attr("height",14),c(e,a),e.intersect=function(t){return f.circle(e,7,t)},r},end:(t,e)=>{const r=t.insert("g").attr("class","node default").attr("id",e.domId||e.id),a=r.insert("circle",":first-child"),n=r.insert("circle",":first-child");return n.attr("class","state-start").attr("r",7).attr("width",14).attr("height",14),a.attr("class","state-end").attr("r",5).attr("width",10).attr("height",10),c(e,n),e.intersect=function(t){return f.circle(e,7,t)},r},note:async(t,e)=>{e.useHtmlLabels||(0,a.c)().flowchart.htmlLabels||(e.centerLabel=!0);const{shapeSvg:r,bbox:n,halfPadding:i}=await d(t,e,"node "+e.classes,!0);a.l.info("Classes = ",e.classes);const s=r.insert("rect",":first-child");return s.attr("rx",e.rx).attr("ry",e.ry).attr("x",-n.width/2-i).attr("y",-n.height/2-i).attr("width",n.width+e.padding).attr("height",n.height+e.padding),c(e,s),e.intersect=function(t){return f.rect(e,t)},r},subroutine:async(t,e)=>{const{shapeSvg:r,bbox:a}=await d(t,e,b(e,void 0),!0),n=a.width+e.padding,i=a.height+e.padding,s=[{x:0,y:0},{x:n,y:0},{x:n,y:-i},{x:0,y:-i},{x:0,y:0},{x:-8,y:0},{x:n+8,y:0},{x:n+8,y:-i},{x:-8,y:-i},{x:-8,y:0}],l=h(r,n,i,s);return l.attr("style",e.style),c(e,l),e.intersect=function(t){return f.polygon(e,s,t)},r},fork:v,join:v,class_box:(t,e)=>{const r=e.padding/2;let i;i=e.classes?"node "+e.classes:"node default";const s=t.insert("g").attr("class",i).attr("id",e.domId||e.id),l=s.insert("rect",":first-child"),d=s.insert("line"),h=s.insert("line");let y=0,p=4;const g=s.insert("g").attr("class","label");let x=0;const u=e.classData.annotations&&e.classData.annotations[0],w=e.classData.annotations[0]?"\xab"+e.classData.annotations[0]+"\xbb":"",b=g.node().appendChild(o(w,e.labelStyle,!0,!0));let m=b.getBBox();if((0,a.m)((0,a.c)().flowchart.htmlLabels)){const t=b.children[0],e=(0,n.Ys)(b);m=t.getBoundingClientRect(),e.attr("width",m.width),e.attr("height",m.height)}e.classData.annotations[0]&&(p+=m.height+4,y+=m.width);let k=e.classData.label;void 0!==e.classData.type&&""!==e.classData.type&&((0,a.c)().flowchart.htmlLabels?k+="&lt;"+e.classData.type+"&gt;":k+="<"+e.classData.type+">");const v=g.node().appendChild(o(k,e.labelStyle,!0,!0));(0,n.Ys)(v).attr("class","classTitle");let L=v.getBBox();if((0,a.m)((0,a.c)().flowchart.htmlLabels)){const t=v.children[0],e=(0,n.Ys)(v);L=t.getBoundingClientRect(),e.attr("width",L.width),e.attr("height",L.height)}p+=L.height+4,L.width>y&&(y=L.width);const S=[];e.classData.members.forEach((t=>{const r=t.getDisplayDetails();let i=r.displayText;(0,a.c)().flowchart.htmlLabels&&(i=i.replace(/</g,"&lt;").replace(/>/g,"&gt;"));const s=g.node().appendChild(o(i,r.cssStyle?r.cssStyle:e.labelStyle,!0,!0));let l=s.getBBox();if((0,a.m)((0,a.c)().flowchart.htmlLabels)){const t=s.children[0],e=(0,n.Ys)(s);l=t.getBoundingClientRect(),e.attr("width",l.width),e.attr("height",l.height)}l.width>y&&(y=l.width),p+=l.height+4,S.push(s)})),p+=8;const M=[];if(e.classData.methods.forEach((t=>{const r=t.getDisplayDetails();let i=r.displayText;(0,a.c)().flowchart.htmlLabels&&(i=i.replace(/</g,"&lt;").replace(/>/g,"&gt;"));const s=g.node().appendChild(o(i,r.cssStyle?r.cssStyle:e.labelStyle,!0,!0));let l=s.getBBox();if((0,a.m)((0,a.c)().flowchart.htmlLabels)){const t=s.children[0],e=(0,n.Ys)(s);l=t.getBoundingClientRect(),e.attr("width",l.width),e.attr("height",l.height)}l.width>y&&(y=l.width),p+=l.height+4,M.push(s)})),p+=8,u){let t=(y-m.width)/2;(0,n.Ys)(b).attr("transform","translate( "+(-1*y/2+t)+", "+-1*p/2+")"),x=m.height+4}let T=(y-L.width)/2;return(0,n.Ys)(v).attr("transform","translate( "+(-1*y/2+T)+", "+(-1*p/2+x)+")"),x+=L.height+4,d.attr("class","divider").attr("x1",-y/2-r).attr("x2",y/2+r).attr("y1",-p/2-r+8+x).attr("y2",-p/2-r+8+x),x+=8,S.forEach((t=>{(0,n.Ys)(t).attr("transform","translate( "+-y/2+", "+(-1*p/2+x+4)+")");const e=null==t?void 0:t.getBBox();x+=((null==e?void 0:e.height)??0)+4})),x+=8,h.attr("class","divider").attr("x1",-y/2-r).attr("x2",y/2+r).attr("y1",-p/2-r+8+x).attr("y2",-p/2-r+8+x),x+=8,M.forEach((t=>{(0,n.Ys)(t).attr("transform","translate( "+-y/2+", "+(-1*p/2+x)+")");const e=null==t?void 0:t.getBBox();x+=((null==e?void 0:e.height)??0)+4})),l.attr("style",e.style).attr("class","outer title-state").attr("x",-y/2-r).attr("y",-p/2-r).attr("width",y+e.padding).attr("height",p+e.padding),c(e,l),e.intersect=function(t){return f.rect(e,t)},s}};let S={};const M=async(t,e,r)=>{let n,i;if(e.link){let s;"sandbox"===(0,a.c)().securityLevel?s="_top":e.linkTarget&&(s=e.linkTarget||"_blank"),n=t.insert("svg:a").attr("xlink:href",e.link).attr("target",s),i=await L[e.shape](n,e,r)}else i=await L[e.shape](t,e,r),n=i;return e.tooltip&&i.attr("title",e.tooltip),e.class&&i.attr("class","node default "+e.class),n.attr("data-node","true"),n.attr("data-id",e.id),S[e.id]=n,e.haveCallback&&S[e.id].attr("class",S[e.id].attr("class")+" clickable"),n},T=(t,e)=>{S[e.id]=t},_=()=>{S={}},B=t=>{const e=S[t.id];a.l.trace("Transforming node",t.diff,t,"translate("+(t.x-t.width/2-5)+", "+t.width/2+")");const r=t.diff||0;return t.clusterNode?e.attr("transform","translate("+(t.x+r-t.width/2)+", "+(t.y-t.height/2-8)+")"):e.attr("transform","translate("+t.x+", "+t.y+")"),r},C=({flowchart:t})=>{var e,r;const a=(null==(e=null==t?void 0:t.subGraphTitleMargin)?void 0:e.top)??0,n=(null==(r=null==t?void 0:t.subGraphTitleMargin)?void 0:r.bottom)??0;return{subGraphTitleTopMargin:a,subGraphTitleBottomMargin:n,subGraphTitleTotalMargin:a+n}},E={aggregation:18,extension:18,composition:18,dependency:6,lollipop:13.5,arrow_point:5.3};function Y(t,e){if(void 0===t||void 0===e)return{angle:0,deltaX:0,deltaY:0};t=$(t),e=$(e);const[r,a]=[t.x,t.y],[n,i]=[e.x,e.y],s=n-r,l=i-a;return{angle:Math.atan(l/s),deltaX:s,deltaY:l}}const $=t=>Array.isArray(t)?{x:t[0],y:t[1]}:t,P=t=>({x:function(e,r,a){let n=0;if(0===r&&Object.hasOwn(E,t.arrowTypeStart)){const{angle:e,deltaX:r}=Y(a[0],a[1]);n=E[t.arrowTypeStart]*Math.cos(e)*(r>=0?1:-1)}else if(r===a.length-1&&Object.hasOwn(E,t.arrowTypeEnd)){const{angle:e,deltaX:r}=Y(a[a.length-1],a[a.length-2]);n=E[t.arrowTypeEnd]*Math.cos(e)*(r>=0?1:-1)}return $(e).x+n},y:function(e,r,a){let n=0;if(0===r&&Object.hasOwn(E,t.arrowTypeStart)){const{angle:e,deltaY:r}=Y(a[0],a[1]);n=E[t.arrowTypeStart]*Math.abs(Math.sin(e))*(r>=0?1:-1)}else if(r===a.length-1&&Object.hasOwn(E,t.arrowTypeEnd)){const{angle:e,deltaY:r}=Y(a[a.length-1],a[a.length-2]);n=E[t.arrowTypeEnd]*Math.abs(Math.sin(e))*(r>=0?1:-1)}return $(e).y+n}}),R=(t,e,r,a,n)=>{e.arrowTypeStart&&W(t,"start",e.arrowTypeStart,r,a,n),e.arrowTypeEnd&&W(t,"end",e.arrowTypeEnd,r,a,n)},O={arrow_cross:"cross",arrow_point:"point",arrow_barb:"barb",arrow_circle:"circle",aggregation:"aggregation",extension:"extension",composition:"composition",dependency:"dependency",lollipop:"lollipop"},W=(t,e,r,n,i,s)=>{const l=O[r];if(!l)return void a.l.warn(`Unknown arrow type: ${r}`);const o="start"===e?"Start":"End";t.attr(`marker-${e}`,`url(${n}#${i}_${s}-${l}${o})`)};let X={},H={};const I=()=>{X={},H={}},N=(t,e)=>{const r=(0,a.m)((0,a.c)().flowchart.htmlLabels),s="markdown"===e.labelType?(0,i.a)(t,e.label,{style:e.labelStyle,useHtmlLabels:r,addSvgBackground:!0}):o(e.label,e.labelStyle),l=t.insert("g").attr("class","edgeLabel"),d=l.insert("g").attr("class","label");d.node().appendChild(s);let c,h=s.getBBox();if(r){const t=s.children[0],e=(0,n.Ys)(s);h=t.getBoundingClientRect(),e.attr("width",h.width),e.attr("height",h.height)}if(d.attr("transform","translate("+-h.width/2+", "+-h.height/2+")"),X[e.id]=l,e.width=h.width,e.height=h.height,e.startLabelLeft){const r=o(e.startLabelLeft,e.labelStyle),a=t.insert("g").attr("class","edgeTerminals"),n=a.insert("g").attr("class","inner");c=n.node().appendChild(r);const i=r.getBBox();n.attr("transform","translate("+-i.width/2+", "+-i.height/2+")"),H[e.id]||(H[e.id]={}),H[e.id].startLeft=a,j(c,e.startLabelLeft)}if(e.startLabelRight){const r=o(e.startLabelRight,e.labelStyle),a=t.insert("g").attr("class","edgeTerminals"),n=a.insert("g").attr("class","inner");c=a.node().appendChild(r),n.node().appendChild(r);const i=r.getBBox();n.attr("transform","translate("+-i.width/2+", "+-i.height/2+")"),H[e.id]||(H[e.id]={}),H[e.id].startRight=a,j(c,e.startLabelRight)}if(e.endLabelLeft){const r=o(e.endLabelLeft,e.labelStyle),a=t.insert("g").attr("class","edgeTerminals"),n=a.insert("g").attr("class","inner");c=n.node().appendChild(r);const i=r.getBBox();n.attr("transform","translate("+-i.width/2+", "+-i.height/2+")"),a.node().appendChild(r),H[e.id]||(H[e.id]={}),H[e.id].endLeft=a,j(c,e.endLabelLeft)}if(e.endLabelRight){const r=o(e.endLabelRight,e.labelStyle),a=t.insert("g").attr("class","edgeTerminals"),n=a.insert("g").attr("class","inner");c=n.node().appendChild(r);const i=r.getBBox();n.attr("transform","translate("+-i.width/2+", "+-i.height/2+")"),a.node().appendChild(r),H[e.id]||(H[e.id]={}),H[e.id].endRight=a,j(c,e.endLabelRight)}return s};function j(t,e){(0,a.c)().flowchart.htmlLabels&&t&&(t.style.width=9*e.length+"px",t.style.height="12px")}const D=(t,e)=>{a.l.debug("Moving label abc88 ",t.id,t.label,X[t.id],e);let r=e.updatedPath?e.updatedPath:e.originalPath;const n=(0,a.c)(),{subGraphTitleTotalMargin:i}=C(n);if(t.label){const n=X[t.id];let s=t.x,l=t.y;if(r){const n=a.u.calcLabelPosition(r);a.l.debug("Moving label "+t.label+" from (",s,",",l,") to (",n.x,",",n.y,") abc88"),e.updatedPath&&(s=n.x,l=n.y)}n.attr("transform",`translate(${s}, ${l+i/2})`)}if(t.startLabelLeft){const e=H[t.id].startLeft;let n=t.x,i=t.y;if(r){const e=a.u.calcTerminalLabelPosition(t.arrowTypeStart?10:0,"start_left",r);n=e.x,i=e.y}e.attr("transform",`translate(${n}, ${i})`)}if(t.startLabelRight){const e=H[t.id].startRight;let n=t.x,i=t.y;if(r){const e=a.u.calcTerminalLabelPosition(t.arrowTypeStart?10:0,"start_right",r);n=e.x,i=e.y}e.attr("transform",`translate(${n}, ${i})`)}if(t.endLabelLeft){const e=H[t.id].endLeft;let n=t.x,i=t.y;if(r){const e=a.u.calcTerminalLabelPosition(t.arrowTypeEnd?10:0,"end_left",r);n=e.x,i=e.y}e.attr("transform",`translate(${n}, ${i})`)}if(t.endLabelRight){const e=H[t.id].endRight;let n=t.x,i=t.y;if(r){const e=a.u.calcTerminalLabelPosition(t.arrowTypeEnd?10:0,"end_right",r);n=e.x,i=e.y}e.attr("transform",`translate(${n}, ${i})`)}},U=(t,e)=>{a.l.debug("abc88 cutPathAtIntersect",t,e);let r=[],n=t[0],i=!1;return t.forEach((t=>{if(((t,e)=>{const r=t.x,a=t.y,n=Math.abs(e.x-r),i=Math.abs(e.y-a),s=t.width/2,l=t.height/2;return n>=s||i>=l})(e,t)||i)n=t,i||r.push(t);else{const s=((t,e,r)=>{a.l.debug(`intersection calc abc89:\n  outsidePoint: ${JSON.stringify(e)}\n  insidePoint : ${JSON.stringify(r)}\n  node        : x:${t.x} y:${t.y} w:${t.width} h:${t.height}`);const n=t.x,i=t.y,s=Math.abs(n-r.x),l=t.width/2;let o=r.x<e.x?l-s:l+s;const d=t.height/2,c=Math.abs(e.y-r.y),h=Math.abs(e.x-r.x);if(Math.abs(i-e.y)*l>Math.abs(n-e.x)*d){let t=r.y<e.y?e.y-d-i:i-d-e.y;o=h*t/c;const n={x:r.x<e.x?r.x+o:r.x-h+o,y:r.y<e.y?r.y+c-t:r.y-c+t};return 0===o&&(n.x=e.x,n.y=e.y),0===h&&(n.x=e.x),0===c&&(n.y=e.y),a.l.debug(`abc89 topp/bott calc, Q ${c}, q ${t}, R ${h}, r ${o}`,n),n}{o=r.x<e.x?e.x-l-n:n-l-e.x;let t=c*o/h,i=r.x<e.x?r.x+h-o:r.x-h+o,s=r.y<e.y?r.y+t:r.y-t;return a.l.debug(`sides calc abc89, Q ${c}, q ${t}, R ${h}, r ${o}`,{_x:i,_y:s}),0===o&&(i=e.x,s=e.y),0===h&&(i=e.x),0===c&&(s=e.y),{x:i,y:s}}})(e,n,t);let l=!1;r.forEach((t=>{l=l||t.x===s.x&&t.y===s.y})),r.some((t=>t.x===s.x&&t.y===s.y))||r.push(s),i=!0}})),r},A=function(t,e,r,i,s,l,o){let d=r.points;a.l.debug("abc88 InsertEdge: edge=",r,"e=",e);let c=!1;const h=l.node(e.v);var y=l.node(e.w);(null==y?void 0:y.intersect)&&(null==h?void 0:h.intersect)&&(d=d.slice(1,r.points.length-1),d.unshift(h.intersect(d[0])),d.push(y.intersect(d[d.length-1]))),r.toCluster&&(a.l.debug("to cluster abc88",i[r.toCluster]),d=U(r.points,i[r.toCluster].node),c=!0),r.fromCluster&&(a.l.debug("from cluster abc88",i[r.fromCluster]),d=U(d.reverse(),i[r.fromCluster].node).reverse(),c=!0);const p=d.filter((t=>!Number.isNaN(t.y)));let g=n.$0Z;!r.curve||"graph"!==s&&"flowchart"!==s||(g=r.curve);const{x:x,y:f}=P(r),u=(0,n.jvg)().x(x).y(f).curve(g);let w;switch(r.thickness){case"normal":w="edge-thickness-normal";break;case"thick":case"invisible":w="edge-thickness-thick";break;default:w=""}switch(r.pattern){case"solid":w+=" edge-pattern-solid";break;case"dotted":w+=" edge-pattern-dotted";break;case"dashed":w+=" edge-pattern-dashed"}const b=t.append("path").attr("d",u(p)).attr("id",r.id).attr("class"," "+w+(r.classes?" "+r.classes:"")).attr("style",r.style);let m="";((0,a.c)().flowchart.arrowMarkerAbsolute||(0,a.c)().state.arrowMarkerAbsolute)&&(m=window.location.protocol+"//"+window.location.host+window.location.pathname+window.location.search,m=m.replace(/\(/g,"\\("),m=m.replace(/\)/g,"\\)")),R(b,r,m,o,s);let k={};return c&&(k.updatedPath=d),k.originalPath=r.points,k}}}]);
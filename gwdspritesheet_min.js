-function(){"use strict";var d;var g=function(a){if(null==a.gwdActivate||"function"==typeof a.gwdActivate)if(null==a.gwdIsActive||!a.gwdIsActive()){var b=f(a),c=b&&null!=b.gwdIsActive&&"function"==typeof b.gwdIsActive;null==b&&a.gwdActivate();c&&b.gwdIsActive()&&a.gwdActivate()}},h=function(a){return"gwd-page"==a.tagName.toLowerCase()||"gwd-page"==a.getAttribute("is")},f=function(a){if(h(a))return a;for(;a&&9!=a.nodeType;)if((a=a.parentElement)&&h(a))return a;return null},k=function(a,b,c){a=parseInt(a.getAttribute(b),10);isNaN(a)&&
(a=c);return a},m=function(a,b,c){return a.hasAttribute(b)?a.getAttribute(b):c};var q=function(a,b){var c;c=document.createEvent("Event");c.initEvent(a,!0,!0);b.dispatchEvent(c)};var r=function(a){a||(a="");return/^[\s\xa0]*$/.test(a)},t=function(a){a=parseInt(a,10);1>a&&(a=1);return a},u=function(){};goog.inherits(u,HTMLElement);d=u.prototype;
d.createdCallback=function(){this.L="gwd_spritesheet_"+(2147483648*Math.random()|0);this.style.display="block";this.a=document.createElement("canvas");this.a.className=this.L;this.appendChild(this.a);this.G=this.C=!1;this.N=parseInt(window.getComputedStyle(this,null).getPropertyValue("width"),10);this.M=parseInt(window.getComputedStyle(this,null).getPropertyValue("height"),10);this.D=m(this,"imagesource","");this.w=k(this,"offsetx","0");this.H=k(this,"offsety","0");this.c=k(this,"clipwidth","64");
this.g=k(this,"clipheight","64");this.P=this.F=0;this.m=this.hasAttribute("autoplay");this.O=this.hasAttribute("endonstartframe");this.s=this.hasAttribute("reverseplay");this.f=k(this,"totalframecount","1");this.i=k(this,"duration","100");this.o=k(this,"loopcount","0");this.c=t(this.c);this.g=t(this.g);this.i=t(this.i);this.f=t(this.f);this.j=this.b=0;this.h=!1;this.A=this.B=this.u=this.J=0;this.l=m(this,"scaling","auto");r(this.l)&&(this.l="auto");v(this);this.v=m(this,"alignment","top left");r(this.v)&&
(this.v="top left");w(this);this.K=this.a.getContext("2d")};d.attachedCallback=function(){if("function"==typeof this.gwdLoad&&"function"==typeof this.gwdIsLoaded&&!this.gwdIsLoaded()){var a=f(this),b=a&&"function"==typeof a.gwdIsLoaded;(!a||b&&a.gwdIsLoaded())&&this.gwdLoad()}};d.gwdIsLoaded=function(){return this.C};d.gwdLoad=function(){r(this.D)?(this.C=!0,q("ready",this),g(this)):x(this)};d.gwdActivate=function(){this.m?this.gwdIsLoaded()&&this.play():this.gwdIsLoaded()&&y(this,0);this.G=!0};
d.gwdDeactivate=function(){this.pause();this.G=!1};d.gwdIsActive=function(){return this.G};
d.attributeChangedCallback=function(a){var b=this.getAttribute(a);switch(a){case "imagesource":this.pause();this.D=b;this.attachedCallback();break;case "offsetx":this.w=parseInt(b,10);break;case "offsety":this.H=parseInt(b,10);break;case "clipwidth":this.c=t(b);break;case "clipheight":this.g=t(b);break;case "scaling":b?(this.l=b,v(this)):this.setAttribute(a,"auto");break;case "alignment":b?(this.v=b,w(this)):this.setAttribute(a,"top left");break;case "totalframecount":this.f=t(b);break;case "duration":this.i=
t(b);break;case "loopcount":this.o=parseInt(b,10);break;case "autoplay":(this.m="true"===b)?this.play():this.pause()}};
var y=function(a,b){var c=Math.floor((a.F-a.w)/a.c),c=t(c),e=Math.floor(a.F/a.c),e=t(e),n=a.w,l=a.H,p=b;b>=c&&(p=(b-c)%e,n=0,l+=a.g*Math.floor(1+(b-c)/e));a.K.clearRect(0,0,a.c,a.g);a.K.drawImage(a.I,n+p*a.c,l,a.c,a.g,0,0,a.c,a.g)},v=function(a){var b=a.N/a.c,c=a.M/a.g,e=0;"100% 100%"===a.l?(a.a.style.width="100%",a.a.style.height="100%",a.style.overflow="visible"):"contain"===a.l?(e=b<c?b:c,a.a.style.width=a.c*e+"px",a.a.style.height=a.g*e+"px",a.style.overflow="visible"):"cover"===a.l?(e=b<c?c:
b,a.a.style.width=a.c*e+"px",a.a.style.height=a.g*e+"px",a.style.overflow="hidden"):(a.a.style.width=a.c+"px",a.a.style.height=a.g+"px",a.style.overflow="visible");a.a.width=a.c;a.a.height=a.g},w=function(a){if("100% 100%"!=a.l){var b=parseInt(a.a.style.width,10),c=parseInt(a.a.style.height,10);a.style.position="absolute;";a.a.style.position="relative";switch(a.v){case "center":a.a.style.left="50%";a.a.style.top="50%";a.a.style.transform="translate(-"+b/2+"px, -"+c/2+"px)";break;case "bottom":a.a.style.left=
"50%";a.a.style.top="100%";a.a.style.transform="translate(-"+b/2+"px, -"+c+"px)";break;case "bottom left":a.a.style.left="0%";a.a.style.top="100%";a.a.style.transform="translate(0px, -"+c+"px)";break;case "bottom right":a.a.style.left="100%";a.a.style.top="100%";a.a.style.transform="translate(-"+b+"px, -"+c+"px)";break;case "left":a.a.style.left="0%";a.a.style.top="50%";a.a.style.transform="translate(0px, -"+c/2+"px)";break;case "right":a.a.style.left="100%";a.a.style.top="50%";a.a.style.transform=
"translate(-"+b+"px, -"+c/2+"px)";break;case "top":a.a.style.left="50%";a.a.style.top="0%";a.a.style.transform="translate(-"+b/2+"px, 0px)";break;case "top left":a.a.style.top="0%";a.a.style.left="0%";a.a.style.transform="translate(0px, 0px)";break;case "top right":a.a.style.top="0%",a.a.style.left="100%",a.a.style.transform="translate(-"+b+"px, 0px)"}}},z=function(a){a.h&&(y(a,a.b),a.s?(a.b=(a.b-1+a.f)%a.f,a.b==a.f-1&&a.j++):(a.b==a.f-1&&a.j++,a.b=(a.b+1)%a.f),a.j<a.o||0===a.o?(a.u+=a.i,a.B=(new Date).getTime()-
a.J-a.u,a.A=setTimeout(function(){z(a)},a.i-a.B)):a.A=!0===a.O?setTimeout(function(){a.s?a.goToFrame(a.f-1):a.goToFrame(0);q("animationend",a)},a.i):setTimeout(function(){a.h=!1;q("animationend",a)},a.i))},A=function(a){a.J=+new Date;a.u=-a.i;a.B=0;clearTimeout(a.A)},x=function(a){a.I=new Image;a.I.addEventListener("load",function(){a.F=parseInt(this.naturalWidth,10);a.P=parseInt(this.naturalHeight,10);A(a);a.s&&(a.b=a.f-1);y(a,a.b);!0===a.m&&(a.h=!0,z(a));a.C=!0;q("ready",a);g(a)});a.I.src=a.D};
d=u.prototype;d.newAnimation=function(a,b,c,e,n,l,p,B,C){this.w=parseInt(a,10);this.H=parseInt(b,10);this.s=C;this.m=B;this.f=parseInt(n,10);this.i=parseInt(l,10);this.o=parseInt(p,10);this.j=this.b=0;c=parseInt(c,10);e=parseInt(e,10);if(c!=this.c||e!=this.g)this.c=c,this.g=e,v(this);!0===this.s&&(this.b=this.f-1);this.j=0;!0===this.m?this.restart():(this.h=!1,y(this,0))};d.goToFrame=function(a){0>a&&(a=this.f-Math.abs(a)%this.f);this.b=a%this.f;y(this,this.b);this.h=!1};
d.play=function(){(this.j<this.o||0==this.o)&&!1===this.h&&(q("animationplay",this),this.h=!0,A(this),z(this))};d.pause=function(){this.h&&(q("animationpause",this),this.h=!1)};d.togglePlay=function(){!1===this.h?this.play():this.pause()};d.restart=function(){q("animationrestart",this);this.b=0;this.s&&(this.b=this.f-1);this.j=0;!1===this.h&&this.play()};d.previousFrame=function(){this.b--;this.goToFrame(this.b)};d.nextFrame=function(){this.b++;this.goToFrame(this.b)};
document.registerElement("gwd-spritesheet",{prototype:u.prototype});}()

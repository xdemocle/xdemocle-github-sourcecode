!function(e){"use strict";var n=e.document,t=function(e,n){if("undefined"!=typeof XMLHttpRequest){var t;t=new XMLHttpRequest,t.onreadystatechange=function(){4===t.readyState&&200===t.status&&n(t.responseText)},t.open("GET",e,!0),t.send()}},a=function(e){return n.createElement(e)},i=function(e,t){t=t||"alert";var i=a("div"),l=a("div"),d=a("div"),c=a("div"),f=a("div"),u="modal "+t;if(s(i,u),s(l,"modal-wrapper"),s(d,"modal-content"),s(c,"text"),c.innerHTML='<p class="firstLine">'+e.firstLine+'</p><p class="secondLine">'+e.secondLine+"</p>",d.appendChild(c),l.appendChild(d),i.appendChild(l),"confirm"===t){s(f,"confirmBox"),f.innerHTML='<div><a href="#okay">Show All Words</a><a href="#nope">Hide Bad Words</a></div>',d.appendChild(f);var m=f.getElementsByTagName("a");r(m,"click",function(e){var t=e.target.hash.replace("#","");t.length>0&&("nope"===t&&s(n.body,"hide-harsh"),"okay"===t&&o(n.body,"hide-harsh"),o(i,"open"),s(i,"close"),o(n.getElementById("main"),"blur")),e.preventDefault()})}s(n.getElementById("main"),"blur"),n.body.appendChild(i),setTimeout(function(){s(i,"open")},100)},s=function(e,n){if(e){var t=e.className;return-1===t.indexOf(n)&&(null===t||""===t?e.className=n:e.className+=" "+n),e}},o=function(e,n){var t=e.className;return-1!==t.indexOf(" "+n)?void(e.className=e.className.replace(" "+n,"")):-1!==t.indexOf(n+" ")?void(e.className=e.className.replace(n+" ","")):-1!==t.indexOf(n)?void(e.className=e.className.replace(n,"")):e},r=function(n,t,a){var i=function(n){e.addEventListener?n.addEventListener(t,a,!1):e.attachEvent&&n.attachEvent(t,a,!1)};if("object"==typeof n&&n.length>0)for(var s=0;s<n.length;s++)i(n[s]);else i(n)};e.utils={ajax:t,listenEvent:r,addClass:s,removeClass:o,simpleModal:i}}(this),function(e,n,t){"use strict";var a=function(){return confirm("Are you sure?")},i=function(){var e=n.getElementById("shittyVersion");t.ajax("/manifest.json",function(n){e.innerHTML="v"+JSON.parse(n).version})},s=function(n){n.addEventListener("click",function(n){if(n.preventDefault(),"hire-me"===n.target.className&&!a())return!1;var t=-1!==n.target.protocol.search("http")&&!0;return t&&n.target.host!==e.location.hostname?e.open(n.target.href,"_blank"):void(e.location.href=n.target.href)},!1)},o=function(){var e=n.getElementById("yearsOld"),t=(new Date).getFullYear()-1982;e.innerHTML=t},r=function(){for(var e=n.getElementsByTagName("a"),t=0;t<e.length;t++)s(e[t])},l=function(e){var t=n.getElementsByTagName("html")[0];t.className=t.className.replace("no-js",""),e&&(t.className=t.className+" "+e)},d=function(){t.addClass(n.getElementById("preloader"),"displayHide"),t.removeClass(n.getElementById("main"),"hide"),t.simpleModal({firstLine:"&#8220;True spirit of Zen, allowing your bright side coexist with your dark one.&#8221;",secondLine:'This website contain an harsh language that could offendsomeone as well as isn\'t such professional. So, if you are thinkingto propose me a job choose "Hide Bad Words" below.'},"confirm")},c=function(){l(),o(),r(),i()};t.listenEvent(n,"DOMContentLoaded",c),t.listenEvent(e,"load",d)}(this,this.document,this.utils);
function smoothScroll(e){var t=window.pageYOffset,n=e>t;setTimeout(function(){n&&e>=t?(t=t+(e-t)/20+1,window.scrollTo(0,t),setTimeout(arguments.callee,10)):!n&&t>=e?(t=t-(t-e)/20-1,window.scrollTo(0,t),setTimeout(arguments.callee,10)):window.scrollTo(0,e)},10)}function scrollToContent(e){var t=document.getElementById(e.replace(/^#/,"")).getBoundingClientRect().top+window.pageYOffset;smoothScroll(t),document.body.classList.contains("offcanvas")&&toggleoffcanvas()}function toggleoffcanvas(){if(document.body.classList.contains("offcanvas"))document.body.classList.remove("offcanvas");else{document.body.classList.add("offcanvas");var e=document.getElementsByClassName("menulist")[0];e.addEventListener("touchmove",function(t){var n=e.scrollTop,o=e.scrollHeight-e.offsetHeight-1;1>n?(t.preventDefault(),e.scrollTop=1):n>o&&(t.preventDefault(),e.scrollTop=o)})}}function resize(){var e=document.getElementById("blog-title-content").clientWidth+"px";document.documentElement.style.setProperty("--content-width",e)}window.onresize=resize,window.onload=function(){document.body.classList.add("rotate")}(function(){resize();var e=document.getElementById("box2-inner").children,t=document.getElementById("blog-title-content");t.appendChild(e[0]);var n=document.getElementById("category-box");n.appendChild(e[2].getElementsByClassName("hatena-urllist")[0]);var o=document.getElementsByClassName("menulist")[0].getElementsByTagName("li");Array.prototype.forEach.call(o,function(e){("createTouch"in document||"ontouchstart"in document)&&"orientation"in window?e.addEventListener("touchstart",function(){e.classList.toggle("hover")}):(e.addEventListener("mouseover",function(){e.classList.add("hover")}),e.addEventListener("mouseout",function(){e.classList.remove("hover")}))});var a=document.body.classList;if(a.contains("page-entry")||a.contains("static-page-inquiry")){var s=document.getElementsByClassName("entry-header")[0],l=s.getElementsByClassName("entry-title-link")[0];l.innerHTML=l.innerHTML.replace(/( )/g,"<br />"),document.getElementById("top-editarea-inner").appendChild(s);var i=s.getElementsByTagName("time")[0],c=new Date(i.getAttribute("datetime")),r={weekday:"long",year:"numeric",month:"short",day:"numeric"};i.innerHTML="Published on "+c.toLocaleDateString("en-us",r)+"."}else if(a.contains("page-index")){var e=document.getElementsByClassName("entry-thumb"),d=/https%3A%2F%2F.+\.(jpg|jpeg|gif|png|bmp)/i;Array.prototype.forEach.call(e,function(e){var t=d.exec(e.getAttribute("style"));null!==t&&(e.style.backgroundImage="url("+decodeURIComponent(t[0])+")")})}}());
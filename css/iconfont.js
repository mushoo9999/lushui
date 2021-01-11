(function(window){var svgSprite="<svg>"+""+'<symbol id="icon-back" viewBox="0 0 1024 1024">'+""+'<path d="M363.840919 472.978737C336.938714 497.358861 337.301807 537.486138 364.730379 561.486138L673.951902 832.05497C682.818816 839.813519 696.296418 838.915012 704.05497 830.048098 711.813519 821.181184 710.915012 807.703582 702.048098 799.94503L392.826577 529.376198C384.59578 522.174253 384.502227 511.835287 392.492414 504.59418L702.325747 223.807723C711.056111 215.895829 711.719614 202.404616 703.807723 193.674252 695.895829 184.943889 682.404617 184.280386 673.674253 192.192278L363.840919 472.978737Z"  ></path>'+""+"</symbol>"+""+'<symbol id="icon-more" viewBox="0 0 1024 1024">'+""+'<path d="M642.174253 504.59418C650.164439 511.835287 650.070886 522.174253 641.84009 529.376198L332.618569 799.94503C323.751654 807.703582 322.853148 821.181184 330.611697 830.048098 338.370249 838.915012 351.847851 839.813519 360.714765 832.05497L669.936288 561.486138C697.36486 537.486138 697.727953 497.358861 670.825747 472.978737L360.992414 192.192278C352.26205 184.280386 338.770837 184.943889 330.858944 193.674252 322.947053 202.404616 323.610556 215.895829 332.340919 223.807723L642.174253 504.59418Z"  ></path>'+""+"</symbol>"+""+'<symbol id="icon-map" viewBox="0 0 1024 1024">'+""+'<path d="M509.762838 0c-230.765207 0-417.839035 187.073828-417.839035 417.839035 0 236.927214 293.162398 509.476324 388.363447 591.741083a44.562694 44.562694 0 0 0 58.676438-0.282589c94.926309-83.575657 388.630336-360.818882 388.630336-591.458494 0.00785-230.773057-187.058129-417.839035-417.831186-417.839035z m0 572.195353c-84.721712 0-153.398655-68.676944-153.398655-153.398655 0-84.721712 68.676944-153.398655 153.398655-153.398656s153.398655 68.676944 153.398656 153.398656c0.00785 84.721712-68.676944 153.398655-153.398656 153.398655z" fill="" ></path>'+""+"</symbol>"+""+'<symbol id="icon-pause" viewBox="0 0 1024 1024">'+""+'<path d="M512 0C229.248 0 0 229.248 0 512s229.248 512 512 512 512-229.248 512-512S794.752 0 512 0m0 76.8c240 0 435.2 195.2 435.2 435.2S752 947.2 512 947.2 76.8 752 76.8 512 272 76.8 512 76.8m-127.872 647.712a38.4 38.4 0 0 1-38.4-38.4V337.888a38.4 38.4 0 1 1 76.8 0v348.224a38.4 38.4 0 0 1-38.4 38.4m255.744 0a38.4 38.4 0 0 1-38.4-38.4V337.888a38.4 38.4 0 1 1 76.8 0v348.224a38.4 38.4 0 0 1-38.4 38.4" fill="" ></path>'+""+"</symbol>"+""+'<symbol id="icon-play" viewBox="0 0 1024 1024">'+""+'<path d="M511.5 4C231.216 4 4 231.216 4 511.5S231.216 1019 511.5 1019 1019 791.784 1019 511.5 791.784 4 511.5 4z m0 919.844c-227.73 0-412.344-184.614-412.344-412.344S283.77 99.156 511.5 99.156 923.844 283.77 923.844 511.5 739.23 923.844 511.5 923.844zM384.624 289.468L765.25 511.5 384.624 733.532V289.468z"  ></path>'+""+"</symbol>"+""+'<symbol id="icon-close" viewBox="0 0 1024 1024">'+""+'<path d="M544.448 499.2l284.576-284.576a32 32 0 0 0-45.248-45.248L499.2 453.952 214.624 169.376a32 32 0 0 0-45.248 45.248l284.576 284.576-284.576 284.576a32 32 0 0 0 45.248 45.248l284.576-284.576 284.576 284.576a31.904 31.904 0 0 0 45.248 0 32 32 0 0 0 0-45.248L544.448 499.2z"  ></path>'+""+"</symbol>"+""+"</svg>";var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)
(()=>{var e,t={93:(e,t,n)=>{"use strict";const o=window.React,i=window.wp.blocks,s=window.wp.i18n,d=window.wp.blockEditor,a=JSON.parse('{"UU":"create-block/emb-org"}');var r=n(722),l=n.n(r),c=n(417),p=n.n(c);window.wp.components,(0,i.registerBlockType)(a.UU,{edit:function(){return(0,o.createElement)("p",{...(0,d.useBlockProps)()},(0,s.__)("Organograma Embratur","emb-org"))},organograma:l(),video:p(),icon:()=>(0,o.createElement)("svg",{width:"24",height:"24",viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg"},(0,o.createElement)("path",{d:"M88.2,53.4c0.8,0,1.5-0.7,1.5-1.5V39.2c0-0.8-0.7-1.5-1.5-1.5h-8.6v-6.1c0-0.8-0.7-1.5-1.5-1.5H51.5v-4.6h13.7c0.8,0,1.5-0.7,1.5-1.5V5c0-0.8-0.7-1.5-1.5-1.5H34.8c-0.8,0-1.5,0.7-1.5,1.5v19c0,0.8,0.7,1.5,1.5,1.5h13.7v4.6H21.9c-0.8,0-1.5,0.7-1.5,1.5v6.1h-8.6c-0.8,0-1.5,0.7-1.5,1.5v12.7c0,0.8,0.7,1.5,1.5,1.5H32c0.8,0,1.5-0.7,1.5-1.5V39.2c0-0.8-0.7-1.5-1.5-1.5h-8.6v-4.6h25.1v4.6h-8.6c-0.8,0-1.5,0.7-1.5,1.5v12.7c0,0.8,0.7,1.5,1.5,1.5h8.9v5.9h-8.9c-0.8,0-1.5,0.7-1.5,1.5v12.7c0,0.8,0.7,1.5,1.5,1.5h20.2c0.8,0,1.5-0.7,1.5-1.5V60.8c0-0.8-0.7-1.5-1.5-1.5h-8.3v-5.9h8.3c0.8,0,1.5-0.7,1.5-1.5V39.2c0-0.8-0.7-1.5-1.5-1.5h-8.6v-4.6h25.1v4.6H68c-0.8,0-1.5,0.7-1.5,1.5v12.7c0,0.8,0.7,1.5,1.5,1.5h8.6v5.9H68c-0.8,0-1.5,0.7-1.5,1.5v12.7c0,0.8,0.7,1.5,1.5,1.5h8.6v5.9H68c-0.8,0-1.5,0.7-1.5,1.5V95c0,0.8,0.7,1.5,1.5,1.5h20.2c0.8,0,1.5-0.7,1.5-1.5V82.3c0-0.8-0.7-1.5-1.5-1.5h-8.6v-5.9h8.6c0.8,0,1.5-0.7,1.5-1.5V60.8c0-0.8-0.7-1.5-1.5-1.5h-8.6v-5.9H88.2z M36.3,6.5h27.3v16H36.3V6.5z M30.5,50.4H13.3v-9.7h17.2V50.4z M58.6,71.9H41.4v-9.7h17.2V71.9z M58.6,50.4H41.4v-9.7h17.2V50.4z M86.7,93.5H69.5v-9.7h17.2V93.5z M86.7,71.9H69.5v-9.7h17.2V71.9z M69.5,40.7h17.2v9.7H69.5V40.7z"})),save:function(){return null}})},722:()=>{document.addEventListener("DOMContentLoaded",(async function(){const e=document.body,t=document.createElement("script");t.src="https://d3js.org/d3.v7.min.js",t.onload=function(){const t=document.createElement("script");t.src="https://cdn.jsdelivr.net/npm/d3-org-chart@2.6.0",t.onload=function(){const t=document.createElement("script");t.src="https://cdn.jsdelivr.net/npm/d3-flextree@2.1.2/build/d3-flextree.js",t.onload=function(){},e.appendChild(t)},e.appendChild(t)},e.appendChild(t);const n=document.createElement("link");n.rel="stylesheet",n.href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css",e.appendChild(n);const o=document.getElementById("organograma-container");o&&await fetch("/wp-json/emb-org/v1/membros/").then((e=>e.json())).then((t=>{const[n,i]=d3.extent(t,(e=>e.value)),s=d3.scaleSqrt().domain([n,i]).range([10,100]);t.forEach((e=>{e._radius=Math.round(10*s(e.value))/10})),function(t,n){if(!n||!n.length)return void(t.innerHTML="<p>Nenhum membro encontrado.</p>");let o=(new d3.OrgChart).compact(!1);o.layoutBindings().top.linkY=e=>e.y-24,o.container(t).svgHeight(window.innerHeight).data(n&&n).rootMargin(120).nodeHeight((e=>200)).nodeWidth((e=>300)).childrenMargin((e=>100)).compactMarginBetween((e=>100)).compactMarginPair((e=>100)).neightbourMargin(((e,t)=>25)).siblingsMargin((e=>25)).onNodeClick((e=>{(function(e){const t=function(e){return i.find((t=>t.id===e))}(e);t&&(s=t,!1===s.movie_url?p():c())})(e),function(){if("Gerências da presidência"!==s.first_name){if(!1===s.movie_url&&p(),!1!==s.movie_url){if("Gerências da presidência"===s.first_name)return;c()}a.style.display="flex"}}()})).buttonContent((({node:e,state:t})=>`<div style="position: relative; color:#565656;border-radius:3px;padding:6px;font-size:10px;margin:auto auto;background-color:#D9D9D9;border: 1px solid #E4E2E9"> <span style="font-size:9px">${e.children?'<i class="fas fa-angle-up"></i>':'<i class="fas fa-angle-down"></i>'}</span></div>`)).linkUpdate((function(e,t,n){d3.select(this).attr("stroke",(e=>(e.data._upToTheRootHighlighted,"#4B4B4B"))).attr("stroke-width",(e=>e.data._upToTheRootHighlighted?5:1)),e.data._upToTheRootHighlighted&&d3.select(this).raise()})).nodeContent((function(e,t,n,o){const i="presidencia"===e.data.composition,s="diretoria_de_gestao_e_inovacao"===e.data.composition,d="diretoria_de_marketing_internacional"===e.data.composition;return`\n            <div class="container" style="font-family: 'Raleway', sans-serif; font-weight:700; ;background-color:#FFFFFF; position:absolute;margin-top:-1px; margin-left:-1px;width:${e.width}px;height:${e.height}px;border-radius:20px;">\n              <div class="top-bar-container">\n\t\t\t\t\t\t\t\t<div style="background-color: ${(i?"#0165B1":s&&"#107b49")||d&&"#FCD900"}" class="top-bar"></div>\n              </div>\n              <div style="display: flex; justify-content: center;">\n                <img src="${e.data.img_url}" style="position: absolute; margin-top: -50px; border-radius: 100px; width: 100px; height: 100px; object-fit: cover; border: 4px solid white;" />\n              </div>\n              <div style="height: 100%; display: flex; flex-direction: column; justify-content: center; align-items: center; padding: 0 1rem;">\n                <div style="font-size:20px; color:#4B4B4B; text-align: center; line-height: 25.2px;"> ${e.data.first_name}</div>\n                <div style="color:#909090; font-size:16px; font-weight: 400; line-height: 18.4px; text-align: center;"> ${e.data.department_name} </div>\n              </div>\n           </div>\n\n           <style>\n            .container {\n              width: 300px;\n              height: 300px;\n              position: relative;\n              background-color: #fff;\n              box-shadow: 0px 4px 4px 0px #00000040;\n\n            }\n\n            .top-bar-container {\n              width: 100%;\n              height: 20px;\n              position: absolute;\n              top: 0;\n              overflow: hidden;\n              border-top-left-radius: 20px;\n              border-top-right-radius: 20px;\n            }\n\n            .top-bar {\n              width: 100%;\n              height: 7px;\n              background-color: #0165B1;\n            }\n\n            .btn {\n              margin: 3px;\n              color: inherit;\n              text-transform: uppercase;\n              word-wrap: break-word;\n              white-space: normal;\n              cursor: pointer;\n              border: 0;\n              border-radius: 0.125rem;\n              -webkit-box-shadow: 0 2px 5px 0 rgb(0 0 0 / 16%),\n                0 2px 10px 0 rgb(0 0 0 / 12%);\n              box-shadow: 0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%);\n              -webkit-transition: color 0.15s ease-in-out,\n                background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,\n                -webkit-box-shadow 0.15s ease-in-out;\n              transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,\n                border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;\n              transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,\n                border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n              transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,\n                border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out,\n                -webkit-box-shadow 0.15s ease-in-out;\n              padding: 0.84rem 2.14rem;\n              font-size: 0.81rem;\n              display: inline-block;\n              font-weight: 400;\n              color: #212529;\n              text-align: center;\n              vertical-align: middle;\n              -webkit-user-select: none;\n              -moz-user-select: none;\n              -ms-user-select: none;\n              user-select: none;\n              border: 1px solid transparent;\n              padding: 0.375rem 0.75rem;\n              font-size: 1rem;\n              line-height: 1.5;\n              border-radius: 0.25rem;\n            }\n\n            .btn-action-button {\n              text-transform: lowercase;\n              font-size: 11px !important;\n              border-radius: 7px !important;\n              color: white !important;\n              padding: 4px 5px !important;\n              background-color: #0165B1 !important;\n            }\n\n            // .action-buttons {\n            //   position: absolute;\n            //   top: 10px;\n            //   right: 35px;\n\t\t\t\t\t\t// \tdisplay: flex;\n\t\t\t\t\t\t// \tgap: 0.5rem;\n            // }\n\n            .svg-chart-container {\n              background-color: #f1f1f1;\n            }\n\n            .svg-chart-container:before {\n              content: '';\n              position: absolute;\n              left: 0;\n              right: 0;\n              top: 0;\n              bottom: 0;\n              background: radial-gradient(circle at center, #04192b 0, #000b0e 100%);\n            }\n\n          </style>\n  `})).render(),o.zoomOut();let i=n,s=null;function d(){let e=document.getElementById("video-container"),t=document.querySelector(".close-video"),n=document.getElementById("play-button"),o=document.getElementById("pause-button"),i=document.getElementById("progress-container");e.classList.add("video-container"),video.style.objectFit="cover",video.style.backgroundColor="",video.style.borderTopLeftRadius="25px",video.style.borderBottomLeftRadius="25px",t.style.display="none",video.style.position="",video.currentTime=0,video.pause(),video.classList.add("video-dimmed"),i.style.display="none",n.style.display="block",o.style.display="none"}const a=document.createElement("div");a.id="modalBackground",a.style.display="none",e.appendChild(a);const r=document.createElement("div");r.id="modal",r.classList="modal",r.innerHTML='\n\t\t<div id="video-container" class="video-container">\n        <video class="video-dimmed video" id="video" height="240" preload="metadata">\n          <source id="movie" src="" type="video/mp4">\n        </video>\n        <div id="play-button" class="play-button">&#9658;</div>\n        <div id="pause-button" class="pause-button" style="display: none;">&#10074;&#10074;</div>\n        <div id="progress-container" class="progress-container">\n          <div id="progress-bar" class="progress-bar"></div>\n        </div>\n\t\t\t\t<span class="close-video">&times;</span>\n      </div>\n      <div id="content" class="content">\n        <div class="title-container">\n          <h2 id="title"></h2>\n          <span class="close">&times;</span>\n        </div>\n        <h4 id="department"></h4>\n        <span class="separator"></span>\n        <p id="body"></p>\n        <span class="separator"></span>\n        <div class="contact-container">\n          <span id="phone"></span>\n          <span id="email"></span>\n        </div>\n      </div>\n\n\t\t',a.appendChild(r),r.querySelector(".close").addEventListener("click",(function(){a.style.display="none"}));const l='\n\t\t\t<video class="video-dimmed video" id="video" height="240" preload="metadata">\n          <source id="movie" src="" type="video/mp4">\n        </video>\n        <div id="play-button" class="play-button">&#9658;</div>\n        <div id="pause-button" class="pause-button" style="display: none;">&#10074;&#10074;</div>\n        <div id="progress-container" class="progress-container">\n          <div id="progress-bar" class="progress-bar"></div>\n        </div>\n\t\t\t\t<span class="close-video">&times;</span>\n\t\t';function c(){let e,t=document.getElementById("play-button"),n=document.getElementById("pause-button"),o=document.querySelector(".close-video"),i=document.getElementById("video"),a=document.querySelector("#progress-bar"),c=document.getElementById("progress-container");if(s){function p(){var o=document.getElementById("video-container"),i=document.getElementById("video");let s=document.getElementById("modal"),d=document.querySelector(".close-video");i.paused?(s.style.borderRadius="25px",s.style.overflow="hidden",o.classList.remove("video-container"),i.style.width="100%",i.style.position="absolute",i.style.objectFit="contain",i.play(),i.classList.remove("video-dimmed"),d.style.display="flex",d.style.position="absolute",d.style.zIndex="99999",d.style.top="1.3rem",d.style.right="2rem",t.style.display="none",n.style.display="block",c.style.display="block",m()):(i.pause(),i.classList.add("video-dimmed"),t.style.display="block",n.style.display="none",clearTimeout(e))}function m(){clearTimeout(e),e=setTimeout((function(){i.paused||(n.style.display="none")}),3e3)}i||t||n||o||(document.getElementById("video-container").innerHTML=l),t&&n&&(t.addEventListener("click",p),n.addEventListener("click",p)),i&&i.addEventListener("timeupdate",(function(){let e=i.currentTime/i.duration*100;a.style.width=e+"%"})),c.addEventListener("click",(function(e){let t=e.offsetX/c.offsetWidth*i.duration;i.currentTime=t})),i&&(r.querySelector(".close-video").addEventListener("click",d),i.addEventListener("click",p),i.addEventListener("mousemove",(function(){i.paused||(n.style.display="block",m())})),i.addEventListener("mouseleave",(function(){i.paused||(n.style.display="none")})),i.addEventListener("ended",(function(){let e=document.getElementById("video-container"),o=(document.getElementById("content"),document.getElementById("modal"),document.querySelector(".close-video"));e.classList.add("video-container"),i.style.objectFit="cover",i.style.backgroundColor="",i.style.borderTopLeftRadius="25px",i.style.borderBottomLeftRadius="25px",o.style.display="none",i.style.position="",i.currentTime=0,i.pause(),i.classList.add("video-dimmed"),c.style.display="none",t.style.display="block",n.style.display="none"}))),n&&(n.addEventListener("mouseenter",(function(){clearTimeout(e)})),n.addEventListener("mouseleave",(function(){i.paused||m()})));let u=document.getElementById("title");u.textContent=s.first_name,"presidencia"===s.composition&&(u.style.color="#0165B1"),"diretoria_de_gestao_e_inovacao"===s.composition&&(u.style.color="#107b49"),"diretoria_de_marketing_internacional"===s.composition&&(u.style.color="#FCD900"),document.getElementById("department").textContent=s.department_name,document.getElementById("body").textContent=s.bio,document.getElementById("movie").src=s.movie_url,i&&i.load(),s.phone&&(document.getElementById("phone").innerHTML=`<div id="phone-icon" style="display: flex; gap: 10px; font-weight: 300; align-items: center;"><svg class="icone-telefone" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\n\t\t\t\t<path fill="currentColor" d="M21,15.46l-5.27-2.11a.61.61,0,0,0-.74.18L13.2,16.29a13.14,13.14,0,0,1-4.63-4.63l2.76-2.76a.61.61,0,0,0,.18-.74L8.54,3a.6.6,0,0,0-.65-.39L3,2.89A.6.6,0,0,0,2.43,3.6,18.52,18.52,0,0,0,21.4,22.57a.6.6,0,0,0,.71-.57l.28-4.88A.61.61,0,0,0,21,15.46Z"/>\n\t\t\t\t</svg> ${s.phone}</div>`),s.email&&(document.getElementById("email").innerHTML=`<div id="email-icon" style="display: flex; gap: 10px; font-weight: 300; align-items: center;"><svg class="icone-telefone" class="feather feather-mail" fill="none" height="24" stroke="#FFFFFF"\n\t\t\t\t\tstroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24"\n\t\t\t\t\txmlns="http://www.w3.org/2000/svg">\n\t\t\t\t\t<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />\n\t\t\t\t\t<polyline points="22,6 12,13 2,6" />\n\t\t\t\t</svg> ${s.email}</div>`)}s.phone&&"presidencia"===s.composition&&(document.querySelector("#phone-icon svg path").style.fill="#0165B1"),s.phone&&"diretoria_de_gestao_e_inovacao"===s.composition&&(document.querySelector("#phone-icon svg path").style.fill="#107b49"),s.phone&&"diretoria_de_marketing_internacional"===s.composition&&(document.querySelector("#phone-icon svg path").style.fill="#FCD900"),s.email&&"presidencia"===s.composition&&(document.querySelector("#email-icon svg path").style.fill="#0165B1"),s.email&&"diretoria_de_gestao_e_inovacao"===s.composition&&(document.querySelector("#email-icon svg path").style.fill="#107b49"),s.email&&"diretoria_de_marketing_internacional"===s.composition&&(document.querySelector("#email-icon svg path").style.fill="#FCD900"),"presidencia"===s.composition&&t&&n&&(t.style.backgroundColor="#0165B1",n.style.backgroundColor="#0165B1",a.style.backgroundColor="#0165B1"),"diretoria_de_gestao_e_inovacao"===s.composition&&t&&n&&(t.style.backgroundColor="#107b49",n.style.backgroundColor="#107b49",a.style.backgroundColor="#107b49"),"diretoria_de_marketing_internacional"===s.composition&&t&&n&&(t.style.backgroundColor="#FCD900",n.style.backgroundColor="#FCD900",a.style.backgroundColor="#FCD900")}function p(){if(s){let e=document.getElementById("title");e.textContent=s.first_name,"presidencia"===s.composition&&(e.style.color="#0165B1"),"diretoria_de_gestao_e_inovacao"===s.composition&&(e.style.color="#107b49"),"diretoria_de_marketing_internacional"===s.composition&&(e.style.color="#FCD900"),document.getElementById("department").textContent=s.department_name,document.getElementById("body").textContent=s.bio;let t=document.getElementById("video-container");t.classList.add("lessVideo");let n=document.getElementById("video"),o=document.getElementById("play-button"),i=document.getElementById("pause-button"),d=document.querySelector(".close-video"),a=t.querySelector(".cover-image");if(a)a.src=s.img_url;else{let e=document.createElement("img");e.classList.add("cover-image"),e.src=s.img_url,t.appendChild(e)}n&&t&&o&&i&&d&&(t.removeChild(n),t.removeChild(o),t.removeChild(i),t.removeChild(d)),s.phone&&(document.getElementById("phone").innerHTML=`<div id="phone-icon" style="display: flex; gap: 10px; font-weight: 300; align-items: center;"><svg class="icone-telefone" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\n\t\t\t\t<path fill="currentColor" d="M21,15.46l-5.27-2.11a.61.61,0,0,0-.74.18L13.2,16.29a13.14,13.14,0,0,1-4.63-4.63l2.76-2.76a.61.61,0,0,0,.18-.74L8.54,3a.6.6,0,0,0-.65-.39L3,2.89A.6.6,0,0,0,2.43,3.6,18.52,18.52,0,0,0,21.4,22.57a.6.6,0,0,0,.71-.57l.28-4.88A.61.61,0,0,0,21,15.46Z"/>\n\t\t\t\t</svg> ${s.phone}</div>`),s.email&&(document.getElementById("email").innerHTML=`<div id="email-icon" style="display: flex; gap: 10px; font-weight: 300; align-items: center;"><svg class="icone-telefone" class="feather feather-mail" fill="none" height="24" stroke="#FFFFFF"\n\t\t\t\t\tstroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24"\n\t\t\t\t\txmlns="http://www.w3.org/2000/svg">\n\t\t\t\t\t<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />\n\t\t\t\t\t<polyline points="22,6 12,13 2,6" />\n\t\t\t\t</svg> ${s.email}</div>`)}s.phone&&"presidencia"===s.composition&&(document.querySelector("#phone-icon svg path").style.fill="#0165B1"),s.phone&&"diretoria_de_gestao_e_inovacao"===s.composition&&(document.querySelector("#phone-icon svg path").style.fill="#107b49"),s.phone&&"diretoria_de_marketing_internacional"===s.composition&&(document.querySelector("#phone-icon svg path").style.fill="#FCD900"),s.email&&"presidencia"===s.composition&&(document.querySelector("#email-icon svg path").style.fill="#0165B1"),s.email&&"diretoria_de_gestao_e_inovacao"===s.composition&&(document.querySelector("#email-icon svg path").style.fill="#107b49"),s.email&&"diretoria_de_marketing_internacional"===s.composition&&(document.querySelector("#email-icon svg path").style.fill="#FCD900")}window.onclick=function(e){e.target===a&&(a.style.display="none")}}(o,t)})).catch((e=>console.error("Erro ao buscar dados:",e)))}))},417:()=>{document.addEventListener("OrganogramaReady",(function(){let e,t=document.getElementById("video"),n=document.getElementById("play-button"),o=document.getElementById("pause-button"),i=document.getElementById("progress-bar"),s=document.getElementById("progress-container");function d(){console.log("CLICOU NO PLAY");var t=document.getElementById("video-container"),i=document.getElementById("video");let d=document.getElementById("modal"),r=document.querySelector(".close-video");i.paused?(d.style.borderRadius="25px",d.style.overflow="hidden",t.classList.remove("video-container"),i.style.width="100%",i.style.position="absolute",i.style.objectFit="contain",i.play(),i.classList.remove("video-dimmed"),r.style.display="flex",r.style.position="absolute",r.style.zIndex="99999",r.style.top="1.3rem",r.style.right="2rem",n.style.display="none",o.style.display="block",s.style.display="block",a()):(i.pause(),i.classList.add("video-dimmed"),n.style.display="block",o.style.display="none",clearTimeout(e))}function a(){clearTimeout(e),e=setTimeout((function(){t.paused||(o.style.display="none")}),3e3)}n.addEventListener("click",d),o.addEventListener("click",d),t.addEventListener("timeupdate",(function(){let e=t.currentTime/t.duration*100;i.style.width=e+"%"})),s.addEventListener("click",(function(e){let n=e.offsetX/s.offsetWidth*t.duration;t.currentTime=n})),t.addEventListener("click",d),t.addEventListener("mousemove",(function(){t.paused||(o.style.display="block",a())})),t.addEventListener("mouseleave",(function(){t.paused||(o.style.display="none")})),t.addEventListener("ended",(function(){let e=document.getElementById("video-container"),i=(document.getElementById("content"),document.getElementById("modal"),document.querySelector(".close-video"));e.classList.add("video-container"),t.style.objectFit="cover",t.style.backgroundColor="",t.style.borderTopLeftRadius="25px",t.style.borderBottomLeftRadius="25px",i.style.display="none",t.style.position="",t.currentTime=0,t.pause(),t.classList.add("video-dimmed"),s.style.display="none",n.style.display="block",o.style.display="none"})),o.addEventListener("mouseenter",(function(){clearTimeout(e)})),o.addEventListener("mouseleave",(function(){t.paused||a()}))}))}},n={};function o(e){var i=n[e];if(void 0!==i)return i.exports;var s=n[e]={exports:{}};return t[e](s,s.exports,o),s.exports}o.m=t,e=[],o.O=(t,n,i,s)=>{if(!n){var d=1/0;for(c=0;c<e.length;c++){for(var[n,i,s]=e[c],a=!0,r=0;r<n.length;r++)(!1&s||d>=s)&&Object.keys(o.O).every((e=>o.O[e](n[r])))?n.splice(r--,1):(a=!1,s<d&&(d=s));if(a){e.splice(c--,1);var l=i();void 0!==l&&(t=l)}}return t}s=s||0;for(var c=e.length;c>0&&e[c-1][2]>s;c--)e[c]=e[c-1];e[c]=[n,i,s]},o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={57:0,350:0};o.O.j=t=>0===e[t];var t=(t,n)=>{var i,s,[d,a,r]=n,l=0;if(d.some((t=>0!==e[t]))){for(i in a)o.o(a,i)&&(o.m[i]=a[i]);if(r)var c=r(o)}for(t&&t(n);l<d.length;l++)s=d[l],o.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return o.O(c)},n=globalThis.webpackChunkemb_org=globalThis.webpackChunkemb_org||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var i=o.O(void 0,[350],(()=>o(93)));i=o.O(i)})();
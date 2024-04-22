/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/edit.js":
/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editor.scss */ "./src/editor.scss");

/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */


/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
function Edit() {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)()
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Organograma Embratur', 'emb-org'));
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./src/block.json");
/* harmony import */ var _js_organograma__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/organograma */ "./src/js/organograma.js");
/* harmony import */ var _js_organograma__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_js_organograma__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _js_video__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./js/video */ "./src/js/video.js");
/* harmony import */ var _js_video__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_js_video__WEBPACK_IMPORTED_MODULE_6__);
/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * Internal dependencies
 */






/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_4__.name, {
  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  organograma: (_js_organograma__WEBPACK_IMPORTED_MODULE_5___default()),
  video: (_js_video__WEBPACK_IMPORTED_MODULE_6___default()),
  /**
   * @see ./save.js
   */
  save: function () {
    return null; // Ou uma marcação mínima se necessário
  }
});

/***/ }),

/***/ "./src/js/organograma.js":
/*!*******************************!*\
  !*** ./src/js/organograma.js ***!
  \*******************************/
/***/ (() => {

document.addEventListener("DOMContentLoaded", async function () {
  // importação dos cdn scripts e css
  const body = document.body;
  const head = document.head;
  const cdnImportD3 = document.createElement("script");
  cdnImportD3.src = "https://d3js.org/d3.v7.min.js";
  cdnImportD3.onload = function () {
    console.log("D3 carregado");
    const cdnImportD3OrgChart = document.createElement("script");
    cdnImportD3OrgChart.src = "https://cdn.jsdelivr.net/npm/d3-org-chart@2.6.0";
    cdnImportD3OrgChart.onload = function () {
      console.log("D3 Org Chart carregado");
      const cdnImportD3Flextree = document.createElement("script");
      cdnImportD3Flextree.src = "https://cdn.jsdelivr.net/npm/d3-flextree@2.1.2/build/d3-flextree.js";
      cdnImportD3Flextree.onload = function () {
        console.log("D3 Flextree carregado");
      };
      body.appendChild(cdnImportD3Flextree);
    };
    body.appendChild(cdnImportD3OrgChart);
  };
  body.appendChild(cdnImportD3);

  // Adiciona CSS para Font Awesome
  const cdnImportD3FontAwesome = document.createElement("link");
  cdnImportD3FontAwesome.rel = "stylesheet";
  cdnImportD3FontAwesome.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css";
  body.appendChild(cdnImportD3FontAwesome);
  const container = document.getElementById("organograma-container");
  if (container) {
    console.log("Container obtido.");
    console.log("Obtendo dados da API...");
    await fetch("/wp-json/emb-org/v1/membros/").then(response => response.json()).then(data => {
      const [min, max] = d3.extent(data, d => d.value);
      const radiusScale = d3.scaleSqrt().domain([min, max]).range([10, 100]);
      data.forEach(d => {
        d._radius = Math.round(radiusScale(d.value) * 10) / 10;
      });
      // cdnImportD3OrgChart.onload = function () {
      console.log("Dados recebidos:", data);
      createOrganizationChart(container, data);
      // };
    }).catch(error => console.error("Erro ao buscar dados:", error));
  }
  function createOrganizationChart(container, data) {
    if (!data || !data.length) {
      console.log("Nenhum membro encontrado.");
      container.innerHTML = "<p>Nenhum membro encontrado.</p>";
      return;
    }
    console.log("Iniciando a criação do organograma com dados:", data);
    console.log("TESTE");
    let chart = new d3.OrgChart().compact(false);
    chart.layoutBindings().top.linkY = n => n.y - 24;
    chart.container(container).svgHeight(window.innerHeight).data(data && data).nodeHeight(d => 200).nodeWidth(d => {
      return 300;
    })
    // .nodeUpdate(function (d) {
    // 	d3.select(this)
    // 		.select('.node')
    // 		.on('click.node', (e, d) => {
    // 			chart.onButtonClick(e, d);
    // 		});

    // 	d3.select(this).select('.node-button-foreign-object').remove();
    // })
    // .setActiveNodeCentered(false)
    .childrenMargin(d => 100).compactMarginBetween(d => 100).compactMarginPair(d => 100).neightbourMargin((a, b) => 25).siblingsMargin(d => 25)
    // Captura o click no nó
    .onNodeClick(d => {
      setData(d);
      handleOpenModal();
    })
    // Botão para exibir filhos dos nós
    .buttonContent(({
      node,
      state
    }) => {
      return `<div style="position: relative; color:#565656;border-radius:3px;padding:6px;font-size:10px;margin:auto auto;background-color:#D9D9D9;border: 1px solid #E4E2E9"> <span style="font-size:9px">${node.children ? `<i class="fas fa-angle-up"></i>` : `<i class="fas fa-angle-down"></i>`}</span></div>`;
      // return `<div style="position: relative;bottom: 20px;color:#4B4B4B;border-radius:3px;width:20px; height: 20px; display: flex; justify-content: center; align-items: center;font-size:16px;margin:auto auto;background-color:#D9D9D9;border: 1px solid #E4E2E9"> <span style="font-size:9px"></span> ${node.data._directSubordinates}</div>`;
    }).linkUpdate(function (d, i, arr) {
      d3.select(this).attr("stroke", d => d.data._upToTheRootHighlighted ? "#152785" : "#E4E2E9").attr("stroke-width", d => d.data._upToTheRootHighlighted ? 5 : 1);
      if (d.data._upToTheRootHighlighted) {
        d3.select(this).raise();
      }
    })
    // Conteúdo do nó
    .nodeContent(function (d, i, arr, state) {
      const color = "#FFFFFF";
      const presidencia = d.data.composition === "presidencia";
      const diretoria_de_gestao_e_inovacao = d.data.composition === "diretoria_de_gestao_e_inovacao";
      const diretoriai_de_marketing_internacional = d.data.composition === "diretoriai_de_marketing_internacional";
      return `
            <div class="container" style="font-family: 'Raleway', sans-serif; font-weight:700; ;background-color:${color}; position:absolute;margin-top:-1px; margin-left:-1px;width:${d.width}px;height:${d.height}px;border-radius:20px;">
              <div class="top-bar-container">
								<div style="background-color: ${presidencia && "#0165B1" || diretoria_de_gestao_e_inovacao && "#107b49" || diretoriai_de_marketing_internacional && "#FCD900"}" class="top-bar"></div>
              </div>
              <div style="display: flex; justify-content: center;">
                <img src="${d.data.img_url}" style="position: absolute; margin-top: -50px; border-radius: 100px; width: 100px; height: 100px; object-fit: cover; border: 4px solid white;" />
              </div>
              <div style="height: 100%; display: flex; flex-direction: column; justify-content: center; align-items: center; padding: 0 1rem;">
                <div style="font-size:20px; color:#4B4B4B; text-align: center; line-height: 25.2px;"> ${d.data.first_name}</div>
                <div style="color:#909090; font-size:16px; font-weight: 400; line-height: 18.4px; text-align: center;"> ${d.data.department_name} </div>
              </div>
           </div>

           <style>
            .container {
              width: 300px;
              height: 300px;
              position: relative;
              background-color: #fff;
              box-shadow: 0px 4px 4px 0px #00000040;

            }

            .top-bar-container {
              width: 100%;
              height: 20px;
              position: absolute;
              top: 0;
              overflow: hidden;
              border-top-left-radius: 20px;
              border-top-right-radius: 20px;
            }

            .top-bar {
              width: 100%;
              height: 7px;
              background-color: #0165B1;
            }

            .btn {
              margin: 3px;
              color: inherit;
              text-transform: uppercase;
              word-wrap: break-word;
              white-space: normal;
              cursor: pointer;
              border: 0;
              border-radius: 0.125rem;
              -webkit-box-shadow: 0 2px 5px 0 rgb(0 0 0 / 16%),
                0 2px 10px 0 rgb(0 0 0 / 12%);
              box-shadow: 0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%);
              -webkit-transition: color 0.15s ease-in-out,
                background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
                -webkit-box-shadow 0.15s ease-in-out;
              transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
                border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
              transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
                border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
              transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
                border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out,
                -webkit-box-shadow 0.15s ease-in-out;
              padding: 0.84rem 2.14rem;
              font-size: 0.81rem;
              display: inline-block;
              font-weight: 400;
              color: #212529;
              text-align: center;
              vertical-align: middle;
              -webkit-user-select: none;
              -moz-user-select: none;
              -ms-user-select: none;
              user-select: none;
              border: 1px solid transparent;
              padding: 0.375rem 0.75rem;
              font-size: 1rem;
              line-height: 1.5;
              border-radius: 0.25rem;
            }

            .btn-action-button {
              text-transform: lowercase;
              font-size: 11px !important;
              border-radius: 7px !important;
              color: white !important;
              padding: 4px 5px !important;
              background-color: #0165B1 !important;
            }

            .action-buttons {
              position: absolute;
              top: 10px;
              right: 35px;
            }

            .svg-chart-container {
              background-color: #fff;
            }

            .svg-chart-container:before {
              content: '';
              position: absolute;
              left: 0;
              right: 0;
              top: 0;
              bottom: 0;
              background: radial-gradient(circle at center, #04192b 0, #000b0e 100%);
            }

          </style>
  `;
    }).render();
    console.log("Organograma criado com sucesso.");

    // Funções relacionadas ao modal

    // Variável global para armazenamento dos dados da planilha
    let dataFlattenedGlobal = data;
    // Variável que armazena o nó atual
    let currentNodeData = null;

    // Obtém os dados do nó pelo id
    function getNodeDataById(nodeId) {
      return dataFlattenedGlobal.find(node => node.id === nodeId);
    }

    // Atualiza o currentNodeData com os dados do nó clicado e o modal
    function setData(nodeId) {
      const nodeData = getNodeDataById(nodeId);
      if (nodeData) {
        currentNodeData = nodeData;
        modalUpdate();
      }
    }

    // Oculta o modal e o background
    function handleCloseModal() {
      modalBackgroundElement.style.display = "none";
    }
    const modalHtml = `
		<div id="video-container" class="video-container">
        <video class="video-dimmed video" id="video" height="240" preload="metadata">
          <source id="movie" src="" type="video/mp4">
        </video>
        <div id="play-button" class="play-button">&#9658;</div>
        <div id="pause-button" class="pause-button" style="display: none;">&#10074;&#10074;</div>
        <div id="progress-container" class="progress-container">
          <div id="progress-bar" class="progress-bar"></div>
        </div>
      </div>
      <div id="content" class="content">
        <div class="title-container">
          <h2 id="title"></h2>
          <span class="close" onclick="handleCloseModal()">&times;</span>
        </div>
        <h4 id="department"></h4>
        <span class="separator"></span>
        <p id="body"></p>
        <span class="separator"></span>
        <div class="contact-container">
          <span id="phone"></span>
          <span id="email"></span>
        </div>
      </div>
		`;
    const modalBackgroundElement = document.createElement("div");
    modalBackgroundElement.id = "modalBackground";
    modalBackgroundElement.style.display = "none";
    body.appendChild(modalBackgroundElement);
    console.log("Modalbackground criado");
    const modalElement = document.createElement("div");
    modalElement.id = "modal";
    modalElement.classList = "modal";
    modalElement.innerHTML = modalHtml;
    modalBackgroundElement.appendChild(modalElement);
    console.log("Modal criado");

    // Adiciona event listener ao botão de fechar
    const closeButton = modalElement.querySelector(".close");
    closeButton.addEventListener("click", handleCloseModal);

    // Atualiza o modal
    function modalUpdate() {
      if (currentNodeData) {
        document.getElementById("title").textContent = currentNodeData.first_name;
        document.getElementById("department").textContent = currentNodeData.department_name;
        document.getElementById("body").textContent = currentNodeData.bio;
        // document.getElementById('image').src = currentNodeData.img_url;

        // Insere o source do vídeo
        var source = document.getElementById("movie");
        source.src = currentNodeData.movie_url;
        // Carrega vídeo
        var video = document.getElementById("video");
        video.load();

        // icones do modal
        // let phoneIconPath = "../imgs/phone.svg";
        // let emailIconPath = "../imgs/mail.svg";

        currentNodeData.phone && (document.getElementById("phone").innerHTML = `<div style="display: flex; gap: 10px; font-weight: 300;"><img src="https://embratur.1md.com.br/wp-content/uploads/2024/04/phone.png" class="icone-telefone" /> ${currentNodeData.phone}</div>`);
        currentNodeData.email && (document.getElementById("email").innerHTML = `<div style="display: flex; gap: 10px; font-weight: 300;"><img src="https://embratur.1md.com.br/wp-content/uploads/2024/04/mail.png" class="icone-telefone" /> ${currentNodeData.email}</div>`);
      }
    }

    // Obtém o modal
    let modal = document.getElementById("modal");

    // Abre o modal
    function handleOpenModal() {
      modalUpdate();
      // display inicial do modal aberto e do background
      modalBackgroundElement.style.display = "flex";
      modal.style.display = "grid";
    }

    // Fecha modal ao clicar fora
    window.onclick = function (event) {
      if (event.target === modalBackgroundElement) {
        modalBackgroundElement.style.display = "none";
        modal.style.display = "none";
      }
    };
  }
  document.dispatchEvent(new CustomEvent("OrganogramaReady"));
});

/***/ }),

/***/ "./src/js/video.js":
/*!*************************!*\
  !*** ./src/js/video.js ***!
  \*************************/
/***/ (() => {

document.addEventListener("OrganogramaReady", function () {
  let video = document.getElementById("video");
  let playButton = document.getElementById("play-button");
  let pauseButton = document.getElementById("pause-button");
  let pauseTimeout;
  let progressBar = document.getElementById("progress-bar");
  let progressContainer = document.getElementById("progress-container");
  playButton.addEventListener("click", togglePlayPause);
  pauseButton.addEventListener("click", togglePlayPause);
  video.addEventListener("timeupdate", updateProgressBar);
  progressContainer.addEventListener("click", seekVideo);
  function updateProgressBar() {
    let percentage = video.currentTime / video.duration * 100;
    progressBar.style.width = percentage + "%";
  }
  function seekVideo(e) {
    let progressTime = e.offsetX / progressContainer.offsetWidth * video.duration;
    video.currentTime = progressTime;
  }
  video.addEventListener("click", togglePlayPause);
  video.addEventListener("mousemove", function () {
    if (!video.paused) {
      pauseButton.style.display = "block";
      autoHidePauseButton();
    }
  });
  video.addEventListener("mouseleave", function () {
    if (!video.paused) {
      pauseButton.style.display = "none";
    }
  });
  video.addEventListener("ended", function () {
    let content = document.getElementById("content");
    content.style.display = '';
    let videoContainer = document.getElementById("video-container");
    video.style.objectFit = "";
    videoContainer.style.position = "relative";
    videoContainer.style.width = "";
    videoContainer.style.height = "";
    video.style.objectFit = "";
    video.style.backgroundColor = "";
    videoContainer.style.borderTopRightRadius = "";
    videoContainer.style.borderBottomRightRadius = "";
    // content.style.display = 'flex'

    video.currentTime = 0;
    video.pause();
    video.classList.add("video-dimmed");
    progressContainer.style.display = "none";
    playButton.style.display = "block";
    pauseButton.style.display = "none";
  });
  pauseButton.addEventListener("mouseenter", function () {
    clearTimeout(pauseTimeout);
  });
  pauseButton.addEventListener("mouseleave", function () {
    if (!video.paused) {
      autoHidePauseButton();
    }
  });
  function togglePlayPause() {
    if (video.paused) {
      expandedVideo();
      // videoContainer.classList.remove("video-container");
      video.play();
      video.classList.remove("video-dimmed");
      playButton.style.display = "none";
      pauseButton.style.display = "block";
      progressContainer.style.display = "block";
      autoHidePauseButton();
    } else {
      video.pause();
      video.classList.add("video-dimmed");
      playButton.style.display = "block";
      pauseButton.style.display = "none";
      clearTimeout(pauseTimeout);
    }
  }
  function expandedVideo() {
    console.log("EXPANDED VIDEO");
    let videoContainer = document.getElementById("video-container");
    let content = document.getElementById("content");
    content.style.display = 'none';
    videoContainer.style.position = "absolute";
    videoContainer.style.width = "100%";
    // videoContainer.style.height = "100%";
    videoContainer.style.borderTopRightRadius = "25px";
    videoContainer.style.borderBottomRightRadius = "25px";
    video.style.objectFit = "contain";
    video.style.backgroundColor = "#000";
  }
  function autoHidePauseButton() {
    clearTimeout(pauseTimeout);
    pauseTimeout = setTimeout(function () {
      if (!video.paused) {
        pauseButton.style.display = "none";
      }
    }, 3000);
  }
});

/***/ }),

/***/ "./src/save.js":
/*!*********************!*\
  !*** ./src/save.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */


/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */
function save() {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save()
  }, 'Emb Org – hello from the saved content!');
}

/***/ }),

/***/ "./src/editor.scss":
/*!*************************!*\
  !*** ./src/editor.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = window["React"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./src/block.json":
/*!************************!*\
  !*** ./src/block.json ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"create-block/emb-org","version":"0.1.0","title":"Emb Org","category":"widgets","icon":"smiley","description":"Example block scaffolded with Create Block tool.","example":{},"supports":{"html":false},"textdomain":"emb-org","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css"}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0,
/******/ 			"./style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkemb_org"] = globalThis["webpackChunkemb_org"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["./style-index"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map
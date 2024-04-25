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
			cdnImportD3Flextree.src =
				"https://cdn.jsdelivr.net/npm/d3-flextree@2.1.2/build/d3-flextree.js";
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
	cdnImportD3FontAwesome.href =
		"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css";
	body.appendChild(cdnImportD3FontAwesome);

	const container = document.getElementById("organograma-container");

	if (container) {
		console.log("Container obtido.");
		console.log("Obtendo dados da API...");
		await fetch("/wp-json/emb-org/v1/membros/")
			.then((response) => response.json())
			.then((data) => {
				const [min, max] = d3.extent(data, (d) => d.value);
				const radiusScale = d3.scaleSqrt().domain([min, max]).range([10, 100]);
				data.forEach((d) => {
					d._radius = Math.round(radiusScale(d.value) * 10) / 10;
				});
				// cdnImportD3OrgChart.onload = function () {
				console.log("Dados recebidos:", data);
				createOrganizationChart(container, data);
				// };
			})
			.catch((error) => console.error("Erro ao buscar dados:", error));
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

		chart.layoutBindings().top.linkY = (n) => n.y - 24;

		chart
			.container(container)
			.svgHeight(window.innerHeight)
			.data(data && data)
			.rootMargin(120)
			.nodeHeight((d) => 200)
			.nodeWidth((d) => {
				return 300;
			})
			// .nodeUpdate(function (d) {
			// 	d3.select(this)
			// 		.select(".node")
			// 		.on("click.node", (e, d) => {
			// 			chart.onButtonClick(e, d);
			// 		});

			// 	d3.select(this).select(".node-button-foreign-object").remove();
			// })
			// .setActiveNodeCentered(true)
			.childrenMargin((d) => 100)
			.compactMarginBetween((d) => 100)
			.compactMarginPair((d) => 100)
			.neightbourMargin((a, b) => 25)
			.siblingsMargin((d) => 25)
			// Captura o click no nó
			.onNodeClick((d) => {
				setData(d);
				handleOpenModal();
			})
			// Botão para exibir filhos dos nós
			.buttonContent(({ node, state }) => {
				return `<div style="position: relative; color:#565656;border-radius:3px;padding:6px;font-size:10px;margin:auto auto;background-color:#D9D9D9;border: 1px solid #E4E2E9"> <span style="font-size:9px">${
					node.children
						? `<i class="fas fa-angle-up"></i>`
						: `<i class="fas fa-angle-down"></i>`
				}</span></div>`;
				// return `<div style="position: relative;bottom: 20px;color:#4B4B4B;border-radius:3px;width:20px; height: 20px; display: flex; justify-content: center; align-items: center;font-size:16px;margin:auto auto;background-color:#D9D9D9;border: 1px solid #E4E2E9"> <span style="font-size:9px"></span> ${node.data._directSubordinates}</div>`;
			})
			.linkUpdate(function (d, i, arr) {
				d3.select(this)
					.attr("stroke", (d) =>
						d.data._upToTheRootHighlighted ? "#152785" : "#E4E2E9",
					)
					.attr("stroke-width", (d) =>
						d.data._upToTheRootHighlighted ? 5 : 1,
					);

				if (d.data._upToTheRootHighlighted) {
					d3.select(this).raise();
				}
			})
			// Conteúdo do nó
			.nodeContent(function (d, i, arr, state) {
				const color = "#FFFFFF";
				const presidencia = d.data.composition === "presidencia";
				const diretoria_de_gestao_e_inovacao =
					d.data.composition === "diretoria_de_gestao_e_inovacao";
				const diretoria_de_marketing_internacional =
					d.data.composition === "diretoria_de_marketing_internacional";
				return `
            <div class="container" style="font-family: 'Raleway', sans-serif; font-weight:700; ;background-color:${color}; position:absolute;margin-top:-1px; margin-left:-1px;width:${
							d.width
						}px;height:${d.height}px;border-radius:20px;">
              <div class="top-bar-container">
								<div style="background-color: ${
									(presidencia && "#0165B1") ||
									(diretoria_de_gestao_e_inovacao && "#107b49") ||
									(diretoria_de_marketing_internacional && "#FCD900")
								}" class="top-bar"></div>
              </div>
              <div style="display: flex; justify-content: center;">
                <img src="${
									d.data.img_url
								}" style="position: absolute; margin-top: -50px; border-radius: 100px; width: 100px; height: 100px; object-fit: cover; border: 4px solid white;" />
              </div>
              <div style="height: 100%; display: flex; flex-direction: column; justify-content: center; align-items: center; padding: 0 1rem;">
                <div style="font-size:20px; color:#4B4B4B; text-align: center; line-height: 25.2px;"> ${
									d.data.first_name
								}</div>
                <div style="color:#909090; font-size:16px; font-weight: 400; line-height: 18.4px; text-align: center;"> ${
									d.data.department_name
								} </div>
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
              // position: absolute;
              // top: 10px;
              // right: 35px;
							display: flex;
							gap: 0.5rem;
            }

            .svg-chart-container {
              background-color: #f1f1f1;
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
			})
			.render();
		console.log("Organograma criado com sucesso.");

		// Funções relacionadas ao modal

		// Variável global para armazenamento dos dados da planilha
		let dataFlattenedGlobal = data;
		// Variável que armazena o nó atual
		let currentNodeData = null;

		// Obtém os dados do nó pelo id
		function getNodeDataById(nodeId) {
			return dataFlattenedGlobal.find((node) => node.id === nodeId);
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

		// Fecha o vídeo
		function handleCloseVideo() {
			let videoContainer = document.getElementById("video-container");
			let closeVideo = document.querySelector(".close-video");
			let playButton = document.getElementById("play-button");
			let pauseButton = document.getElementById("pause-button");
			let progressContainer = document.getElementById("progress-container");

			videoContainer.classList.add("video-container");
			video.style.objectFit = "cover";
			video.style.backgroundColor = "";
			video.style.borderTopLeftRadius = "25px";
			video.style.borderBottomLeftRadius = "25px";

			closeVideo.style.display = "none";

			video.style.position = "";
			video.currentTime = 0;
			video.pause();
			video.classList.add("video-dimmed");
			progressContainer.style.display = "none";
			playButton.style.display = "block";
			pauseButton.style.display = "none";
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
				<span class="close-video">&times;</span>
      </div>
      <div id="content" class="content">
        <div class="title-container">
          <h2 id="title"></h2>
          <span class="close">&times;</span>
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

		// Adiciona event listener ao botão de fechar modal
		const closeButtonModal = modalElement.querySelector(".close");
		closeButtonModal.addEventListener("click", handleCloseModal);

		// Adiciona event listener ao botão de fechar video
		const closeButtonVideo = modalElement.querySelector(".close-video");
		closeButtonVideo.addEventListener("click", handleCloseVideo);

		// Atualiza o modal
		function modalUpdate() {
			if (currentNodeData) {
				let modalTitle = document.getElementById("title");
				modalTitle.textContent = currentNodeData.first_name;

				if (currentNodeData.composition === "presidencia") {
					modalTitle.style.color = "#0165B1";
				}

				if (currentNodeData.composition === "diretoria_de_gestao_e_inovacao") {
					modalTitle.style.color = "#107b49";
				}

				if (
					currentNodeData.composition === "diretoria_de_marketing_internacional"
				) {
					modalTitle.style.color = "#FCD900";
				}

				let modalDepartment = document.getElementById("department");
				modalDepartment.textContent = currentNodeData.department_name;

				let modalContent = document.getElementById("body");
				modalContent.textContent = currentNodeData.bio;
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

				currentNodeData.phone &&
					(document.getElementById(
						"phone",
					).innerHTML = `<div id="phone-icon" style="display: flex; gap: 10px; font-weight: 300; align-items: center;"><svg class="icone-telefone" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
				<path fill="currentColor" d="M21,15.46l-5.27-2.11a.61.61,0,0,0-.74.18L13.2,16.29a13.14,13.14,0,0,1-4.63-4.63l2.76-2.76a.61.61,0,0,0,.18-.74L8.54,3a.6.6,0,0,0-.65-.39L3,2.89A.6.6,0,0,0,2.43,3.6,18.52,18.52,0,0,0,21.4,22.57a.6.6,0,0,0,.71-.57l.28-4.88A.61.61,0,0,0,21,15.46Z"/>
				</svg> ${currentNodeData.phone}</div>`);

				currentNodeData.email &&
					(document.getElementById(
						"email",
					).innerHTML = `<div id="email-icon" style="display: flex; gap: 10px; font-weight: 300; align-items: center;"><svg class="icone-telefone" class="feather feather-mail" fill="none" height="24" stroke="#FFFFFF"
					stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24"
					xmlns="http://www.w3.org/2000/svg">
					<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
					<polyline points="22,6 12,13 2,6" />
				</svg> ${currentNodeData.email}</div>`);
			}

			if (
				currentNodeData.phone &&
				currentNodeData.composition === "presidencia"
			) {
				document.querySelector("#phone-icon svg path").style.fill = "#0165B1";
			}

			if (
				currentNodeData.phone &&
				currentNodeData.composition === "diretoria_de_gestao_e_inovacao"
			) {
				document.querySelector("#phone-icon svg path").style.fill = "#107b49";
			}

			if (
				currentNodeData.phone &&
				currentNodeData.composition === "diretoria_de_marketing_internacional"
			) {
				document.querySelector("#phone-icon svg path").style.fill = "#FCD900";
			}

			if (
				currentNodeData.email &&
				currentNodeData.composition === "presidencia"
			) {
				document.querySelector("#email-icon svg path").style.fill = "#0165B1";
			}

			if (
				currentNodeData.email &&
				currentNodeData.composition === "diretoria_de_gestao_e_inovacao"
			) {
				document.querySelector("#email-icon svg path").style.fill = "#107b49";
			}

			if (
				currentNodeData.email &&
				currentNodeData.composition === "diretoria_de_marketing_internacional"
			) {
				document.querySelector("#email-icon svg path").style.fill = "#FCD900";
			}

			let playButton = document.querySelector("#play-button");
			let pauseButton = document.querySelector("#pause-button");
			let progressBar = document.querySelector("#progress-bar");

			if (currentNodeData.composition === "presidencia") {
				playButton.style.backgroundColor = "#0165B1";
				pauseButton.style.backgroundColor = "#0165B1";
				progressBar.style.backgroundColor = "#0165B1";
			}

			if (currentNodeData.composition === "diretoria_de_gestao_e_inovacao") {
				playButton.style.backgroundColor = "#107b49";
				pauseButton.style.backgroundColor = "#107b49";
				progressBar.style.backgroundColor = "#107b49";
			}

			if (
				currentNodeData.composition === "diretoria_de_marketing_internacional"
			) {
				playButton.style.backgroundColor = "#FCD900";
				pauseButton.style.backgroundColor = "#FCD900";
				progressBar.style.backgroundColor = "#FCD900";
			}
		}

		// Obtém o modal
		let modal = document.getElementById("modal");

		// Abre o modal
		function handleOpenModal() {
			modalUpdate();
			// display inicial do modal aberto e do background
			modalBackgroundElement.style.display = "flex";
			// modal.style.display = "grid";
		}

		// Fecha modal ao clicar fora
		window.onclick = function (event) {
			if (event.target === modalBackgroundElement) {
				modalBackgroundElement.style.display = "none";
				// modal.style.display = "none";
			}
		};

		const actionButtons = `
    <button onclick="chart.fit()" class="btn btn-action-button waves-effect waves-light">
      <i class="fas fa-sync"></i> Centralizar
    </button>
    <br />
    <button onclick="chart.exportImg()" class="btn btn-action-button waves-effect waves-light">
      <i class="far fa-images"></i> Exportar PNG
    </button>
    <br />

    <button onclick="chart.exportImg({full:true})" class="btn btn-action-button waves-effect waves-light">
      <i class="far fa-images"></i> Exportar Full PNG
    </button>
    <br />

    <button onclick="chart.exportSvg()" class="btn btn-action-button waves-effect waves-light">
      <i class="fas fa-file-download"></i> Exportar SVG
    </button>
    <br />
    <button onclick="chart.expandAll()" class="btn btn-action-button waves-effect waves-light">
      <i class="fas fa-angle-double-down"></i> Expandir tudo</button><br />

    <button onclick="chart.collapseAll()" class="btn btn-action-button waves-effect waves-light">
      <i class="fas fa-angle-double-up"></i> Recolher tudo</button><br />

    <button onclick="chart.zoomOut()" class="btn btn-action-button waves-effect waves-light">
      <i class="fas fa-minus"></i> Zoom OUT</button><br />
    <button onclick="chart.zoomIn()" class="btn btn-action-button waves-effect waves-light">
      <i class="fas fa-plus"></i> Zoom IN
    </button>
    <br />
		`;


		// const actionButtonsElement = document.createElement("div");
		// actionButtonsElement.classList.add("action-buttons");
		// actionButtonsElement.innerHTML = actionButtons;
		// body.appendChild(actionButtonsElement);
		// console.log("actionButtonsElement criado");
	}

	document.dispatchEvent(new CustomEvent("OrganogramaReady"));
});

document.addEventListener("DOMContentLoaded", function () {
	const container = document.getElementById("organograma-container");

	if (container) {
		fetch("/wp-json/emb-org/v1/membros/")
			.then((response) => response.json())
			.then((data) => {
				createOrganizationChart(container, data);
			})
			.catch((error) => console.error("Erro ao buscar dados:", error));
	}
});

function createOrganizationChart(container, dados) {
	console.log(dados);
}

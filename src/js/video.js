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
		let percentage = (video.currentTime / video.duration) * 100;
		progressBar.style.width = percentage + "%";
	}

	function seekVideo(e) {
		let progressTime =
			(e.offsetX / progressContainer.offsetWidth) * video.duration;
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
		let videoContainer = document.getElementById("video-container");
		videoContainer.style.transition = "width 0.5s ease-in-out";
		videoContainer.classList.add("video-container");
		video.removeAttribute("style");

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
		let videoContainer = document.getElementById("video-container");

		if (video.paused) {
			// videoContainer.classList.remove("video-container");
			video.style.objectFit = "center";
			videoContainer.style.position = "absolute";
			videoContainer.style.width = "100%";
			videoContainer.style.height = "100%";
			// video.style.objectFit = "center";
			video.style.backgroundColor = "#000";
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

	function autoHidePauseButton() {
		clearTimeout(pauseTimeout);
		pauseTimeout = setTimeout(function () {
			if (!video.paused) {
				pauseButton.style.display = "none";
			}
		}, 3000);
	}
});

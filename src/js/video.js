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
		video.style.objectFit = "";
		videoContainer.style.position = "relative";
		videoContainer.style.width = "";
		videoContainer.style.height = "";
		video.style.objectFit = "";
		video.style.backgroundColor = "";
		videoContainer.style.borderTopRightRadius = "";
		videoContainer.style.borderBottomRightRadius = "";
		content.style.display = ''

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
			expandedVideo()
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
		let videoContainer = document.getElementById("video-container");
		let content = document.getElementById("content");
		content.style.display = 'none'
		video.style.objectFit = "center";
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

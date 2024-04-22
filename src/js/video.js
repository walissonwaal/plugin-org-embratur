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
		let content = document.getElementById("content");
		let modal = document.getElementById("modal");
		let closeVideo = document.querySelector(".close-video");

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
		var videoContainer = document.getElementById("video-container");
		var video = document.getElementById("video");
		let modal = document.getElementById("modal");
		let closeVideo = document.querySelector(".close-video");

		if (video.paused) {
			modal.style.borderRadius = "25px";
			modal.style.overflow = "hidden";
			videoContainer.classList.remove("video-container");
			video.style.width = "100%";
			video.style.position = "absolute";
			video.style.objectFit = "contain";
			video.play();
			video.classList.remove("video-dimmed");

			closeVideo.style.display = "flex";
			closeVideo.style.position = "absolute";
			closeVideo.style.zIndex = "99999";
			closeVideo.style.top = "1.3rem";
			closeVideo.style.right = "2rem";

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

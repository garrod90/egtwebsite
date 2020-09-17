const videos = document.querySelectorAll(".vid");
const images = document.querySelectorAll(".cover-image")

for (let i = 0; i < videos.length; i++) {
    videos[i].classList.add("hide-display");
};

for (let j = 0; j < images.length; j++) {
    images[j].addEventListener("click", () => {
        images[j].classList.add("hide-display");
        if (images[j] === images[0]) {
            videos[0].style.display = "inline-block";
        } else if (images[j] === images[1]) {
            videos[1].style.display = "inline-block";
        } else if (images[j] === images[2]) {
            videos[2].style.display = "inline-block";
        } else if (images[j] === images[3]) {
            videos[3].style.display = "inline-block";
        } else if (images[j] === images[4]) {
            videos[4].style.display = "inline-block";
        } else if (images[j] === images[5]) {
            videos[5].style.display = "inline-block";
        } else if (images[j] === images[6]) {
            videos[6].style.display = "inline-block";
        }
  });
}

    // // 2. This code loads the IFrame Player API code asynchronously.
    // var tag = document.createElement('script');

    // tag.src = "https://www.youtube.com/iframe_api";
    // var firstScriptTag = document.getElementsByTagName('script')[0];
    // firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // // 3. This function creates an <iframe> (and YouTube player)
    // //    after the API code downloads.
    // var player;
    // function onYouTubeIframeAPIReady() {
    //   player = new YT.Player('player', {
    //     height: '390',
    //     width: '640',
    //     videoId: 'M7lc1UVf-VE',
    //     events: {
    //       'onReady': onPlayerReady,
    //       'onStateChange': onPlayerStateChange
    //     }
    //   });
    // }

    // // 4. The API will call this function when the video player is ready.
    // function onPlayerReady(event) {
    //   event.target.playVideo();
    // }

    // // 5. The API calls this function when the player's state changes.
    // //    The function indicates that when playing a video (state=1),
    // //    the player should play for six seconds and then stop.
    // var done = false;
    // function onPlayerStateChange(event) {
    //   if (event.data == YT.PlayerState.PLAYING && !done) {
    //     setTimeout(stopVideo, 6000);
    //     done = true;
    //   }
    // }
    // function stopVideo() {
    //   player.stopVideo();
    // }


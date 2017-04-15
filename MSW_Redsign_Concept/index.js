(function() {
    //为播放器添加播放效果
    var playContainer = document.getElementsByClassName('play-container')[0];
    var video = document.getElementsByClassName('play-video')[0];

    var playVideo = document.getElementsByClassName('play')[0];
    var stopVideo = document.getElementsByClassName('stop')[0];

    function runVideo() {
        if (video.paused || video.ended) {
            video.play();
            playVideo.style.display = 'block';
            stopVideo.style.display = 'none';
        } else {
            video.pause();
            playVideo.style.display = 'none';
            stopVideo.style.display = 'block';
        }
    }

    playContainer.addEventListener('click', runVideo, false);

}());

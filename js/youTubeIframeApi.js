window.youTubeIframeApiPlayer = {};

function youTubeIframeApi(id, playlist) {
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    
    window.onYouTubeIframeAPIReady = function() {
        window.youTubeIframeApiPlayer[id] = new YT.Player(id, {
            height: '390',
            width: '640',
            events: {
                'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange
            }
        });
    };

    function onPlayerReady(event) {
        let a = event.target.a;
        let b = document.querySelector('.player-wrapper');
        let aspectRatio = a.clientWidth / a.clientHeight;
        let orientation = aspectRatio < 1 ? 'portrait' : 'landscape';
        let scale = (aspectRatio === 'landscape') ? b.clientHeight / a.clientHeight: b.clientWidth / a.clientWidth;
        let maxScale = b.clientHeight / a.clientHeight;
        console.log(scale);
        a.height = a.clientHeight * Math.min(maxScale, scale);
        a.width = a.clientWidth * Math.min(maxScale, scale);
        event.target.cuePlaylist({listType: 'playlist', list: playlist});
        event.target.playVideo();
    }

    function onPlayerStateChange(event) {
        console.log(event);
        //console.log(event.target.getVideoData());
        //event.target.showVideoInfo();
        if (event.data == YT.PlayerState.PLAYING) {
            const id = event.target.getVideoData().video_id;
            ajaxUtilities.create(
                `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${id}&key=AIzaSyDi1ioaq5tWNtQQiZuL9GiRx5SpW6OXtJg`,
                {done: function(xhr, data){
                    event.target.a.parentNode.parentNode.querySelector('.description').innerText = data.items[0].snippet.description;
                    console.log(xhr);
                    }
                },
                'GET',
                null
            )
        }
    }
}
function youTubeIframeApiStopVideo(id) {
    window.youTubeIframeApiPlayer[id].stopVideo();
    delete window.youTubeIframeApiPlayer[id];
}

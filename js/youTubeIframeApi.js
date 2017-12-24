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
        console.dir(event.target.a);
        let a = event.target.a;
        console.log(a.clientWidth / a.clientHeight);
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
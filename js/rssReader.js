function rssReader(url){
    ajaxUtilities.create(
        url, {
            done: function (xhr) {
                console.log(xhr.responseText);
            }
        }
        , 'GET'
    );
}

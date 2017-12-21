function rssReader(url){
    ajaxUtilities.create(
        url, {
            done: function (xhr) {
                const parser = new DOMParser();
                const xmlDoc = parser.parseFromString(xhr.responseText, 'text/xml');
                let items = Array.from(xmlDoc.getElementsByTagName('guid'));
                items = items.map((item)=>{
                    return item.textContent.substring(item.textContent.lastIndexOf('/') + 1);
                });
                items = items.map((element) => {
                    return `<p data-height="791" data-theme-id="0" data-slug-hash="${element}" data-default-tab="result" data-user="nigeljohnwade"
                            data-embed-version="2" data-pen-title="Pan/Zoom Canvas 4" data-preview="true" class="codepen">See the Pen <a
                            href="https://codepen.io/nigeljohnwade/pen/${element}/">Pan/Zoom Canvas 4</a> by Nigel Wade (<a
                            href="https://codepen.io/nigeljohnwade">@nigeljohnwade</a>) on <a href="https://codepen.io">CodePen</a>.</p>`
                });
                let descriptions = Array.from(xmlDoc.getElementsByTagName('description')).map((element, index, array)=>{
                    return element.textContent;
                });
                document.getElementById('codepen').innerHTML = items.join('');
                let script = document.createElement('script');
                script.src = 'https://production-assets.codepen.io/assets/embed/ei.js';
                document.head.appendChild(script);
                console.log(descriptions);
            }
        }
        , 'GET'
    );
}

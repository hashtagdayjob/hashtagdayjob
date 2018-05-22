function rssReader(url){
                const parser = new DOMParser();
                ajaxUtilities.create(
                    url, {
                        done: function (xhr) {
                const xmlDoc = parser.parseFromString(xhr.responseText, 'text/xml');
                let items = {
                    guids: Array.from(xmlDoc.getElementsByTagName('guid')),
                    titles: Array.from(xmlDoc.getElementsByTagName('title'))
                };
                items.titles.shift();
                items = items.guids.map((element, index) => {
                    let guid = element.textContent.substring(element.textContent.lastIndexOf('/') + 1);
                    return `<p data-height="791" data-theme-id="0" data-slug-hash="${guid}" data-default-tab="result" data-user="nigeljohnwade"
                            data-embed-version="2" data-pen-title="Pan/Zoom Canvas 4" data-preview="true" class="codepen">See the Pen <a
                            href="https://codepen.io/nigeljohnwade/pen/${guid}/">${items.titles[index].textContent}</a> by Nigel Wade (<a
                            href="https://codepen.io/nigeljohnwade">@nigeljohnwade</a>) on <a href="https://codepen.io">CodePen</a>.</p>`
                });
                let descriptions = Array.from(xmlDoc.getElementsByTagName('description')).map((element, index, array)=>{
                    return element.textContent;
                });
                let d = document.createElement('div');
                d.innerHTML = descriptions[1];
                let description = d.querySelector('p:nth-child(3)');
                console.log(description);
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

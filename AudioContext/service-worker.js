const CACHE_NAME = 'audio-v1';
const urlsToCache = [
    'index.html',
    'experiments/chorus.html',
    'experiments/flanger.html',
    'experiments/effectstation.html',
    'experiments/flangerES2016module.html',
    'experiments/inchdown_reverb.html',
    'experiments/simplethiser.html',
    'experiments/simplethiser_v2.html',
    'css/style.css',
    'audio/In The Silo Revised.wav',
    'js/audioContext.js',
    'js/require.js',
    'js/simplethiser.js',
    'js/simplethiser_v2.js',
    'js/chorus.js',
    'js/effectstation.js',
    'js/flanger.js',
    'js/inchdown.js',
    'js/flangerES2016module.js',
    'js/simplethiser_v2.js',
    'js/simplethiser_v2.js',
    'js/simplethiser_v2.js',
    'js/simplethiser_v2.js',
];
self.addEventListener('install', function(event) {
    console.log(event);
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function(cache){
                console.log(cache);
                return cache.addAll(urlsToCache);
            })
    );
});
self.addEventListener('fetch', function(event) {
    console.log(event);
    event.respondWith(
        caches.match(event.request)
            .then(function(response) {
                // Cache hit - return response
                if (response) {
                    return response;
                }

                // IMPORTANT: Clone the request. A request is a stream and
                // can only be consumed once. Since we are consuming this
                // once by cache and once by the browser for fetch, we need
                // to clone the response.
                var fetchRequest = event.request.clone();

                return fetch(fetchRequest).then(
                    function(response) {
                        // Check if we received a valid response
                        if(!response || response.status !== 200 || response.type !== 'basic') {
                        return response;
                        }

                        // IMPORTANT: Clone the response. A response is a stream
                        // and because we want the browser to consume the response
                        // as well as the cache consuming the response, we need
                        // to clone it so we have two streams.
                        var responseToCache = response.clone();

                        caches.open(CACHE_NAME)
                        .then(function(cache) {
                            if(event.request.method === "POST") return;
                            cache.put(event.request, responseToCache);
                        });

                        return response;
                    }
                );
            })
    );
});
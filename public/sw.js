
// cached items
var CACHE_ARRAY = [
  '/',
  '/bundle.js'
];

var CACHE_NAME = 'v8.1';

//install event
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then( (cache) => {
      console.log("Cache has been opened");
      console.log("another New SW");
      return cache.addAll(CACHE_ARRAY);
    })
  );
});

//activate - cleans up old caches if they are still around
self.addEventListener( 'activate' , (event) => {
  var cacheWhitelist = CACHE_NAME;

  event.waitUntil(
    caches.keys().then( (keyList) => {
      return Promise.all( keyList.map( (key) => {
        if (cacheWhitelist.indexOf(key) === -1) {
          return caches.delete(key);
        }
      }));
    })
  );
});


//fetch event
self.addEventListener( 'fetch', (event) => {

  event.respondWith(
    caches.match(event.request)
    .then((response) => {
      //if response is truthy return it - else fetch the network
      //if error in network call the fallback

      response ? console.log('returned from cache') : console.log('atttemp to network');

      return response || fetch(event.request).catch( () => {
        console.log('newtwork failed');
        return new Response( "<h1> This is the offline fallback </h1>" , {
          headers: {
            'Content-Type' : 'text/html'
          }
        })
      } );

    })
  );
} );

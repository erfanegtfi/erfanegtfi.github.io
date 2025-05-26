'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "9565adc54ce94ac72a8423261bf2c9a4",
"assets/AssetManifest.bin.json": "40e9fc26bcf9b5e196ee030879afc45a",
"assets/AssetManifest.json": "4bdf78448acde0810b751235925ab5f6",
"assets/assets/fonts/iransans.ttf": "80470e5cc0dea2d75af2700d8c35ba6a",
"assets/assets/icons/ic_fast_forward.png": "587340f8b4b35dcd5da350c64bf51624",
"assets/assets/icons/ic_library.svg": "b3bcb8356f850b779b22178e2991c522",
"assets/assets/icons/ic_next.png": "53c8aec9da25316171fca33609c13d36",
"assets/assets/icons/ic_pause.png": "94e4fc10b4c1b5173d6b9958b45ac24d",
"assets/assets/icons/ic_play.png": "bb6288ead0209ff3c8d21009e4124a5c",
"assets/assets/icons/ic_previous.png": "df2119b9e723832c6a910ef103d4aa74",
"assets/assets/icons/ic_profile.svg": "0f048ac8d2b8a74448e49e3a2d628acd",
"assets/assets/icons/ic_rewind.png": "6c3995c9434165b1042ae1941713ccbf",
"assets/assets/icons/ic_right_arrow.svg": "cbaa36a4e27cc50368ee316fb483a57a",
"assets/assets/icons/ic_speed.png": "b1354f575e242db3b5bfc24abea761c4",
"assets/assets/icons/ic_volume.png": "475f199422256059df85a42901b7f3d0",
"assets/assets/images/bg_header_bubble.svg": "3c3129a7131ec8c5c551159dd7c2fecf",
"assets/assets/images/bg_header_login.jpg": "01ef8b45172ab86fa03c5387bf9ab9c5",
"assets/assets/images/ic_launcher.png": "5c530bb4c2510fbe91dcf9db42104e7c",
"assets/assets/images/web_logo.png": "38a3517d285cfc46092b1404f8ff5ca8",
"assets/assets/launcher/ic_launcher.png": "d0ab6e95aeb17c563c36852be6bb693c",
"assets/assets/launcher/ic_launcher_round.png": "27bd2792d5b1b68406377586b858388a",
"assets/assets/launcher/ic_launcher_web.png": "cdde8f2bbad0aab86619b598ed9a067a",
"assets/FontManifest.json": "f0811f322b597a3bcc8e7434409bdbbf",
"assets/fonts/MaterialIcons-Regular.otf": "bcbc4e4579da31bdb4e1ae092613035b",
"assets/NOTICES": "a4920116449323f45cf60726fb77f7d3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5454b7a8d24c2c39f98e93b71304cc5c",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "d2ff2c313fa0bf770cd10c991c9dd266",
"icons/Icon-192.png": "634c12a104339a5d526e1ee79fe4551f",
"icons/Icon-512.png": "5c530bb4c2510fbe91dcf9db42104e7c",
"icons/Icon-maskable-192.png": "5c530bb4c2510fbe91dcf9db42104e7c",
"icons/Icon-maskable-512.png": "5c530bb4c2510fbe91dcf9db42104e7c",
"index.html": "23b21e832636773c7359cbbb39f58f1e",
"/": "23b21e832636773c7359cbbb39f58f1e",
"loader.css": "14beb1d6839de6646049a310e2e098c5",
"main.dart.js": "fd1ade283de422c71ab437342518b4b2",
"manifest.json": "b9c9bc799918b2abeff8134234b9f741",
"version.json": "7368345c5606390b23f74b712c72084e"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

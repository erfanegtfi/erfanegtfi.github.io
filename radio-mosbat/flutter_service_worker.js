'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "7a4f773e10ba46236c7bff6f2e48da18",
"assets/AssetManifest.json": "b842b975ec083dff65936c5128edb86f",
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
"assets/FontManifest.json": "f0811f322b597a3bcc8e7434409bdbbf",
"assets/fonts/MaterialIcons-Regular.otf": "db913f12d7260d1492ebba8a6da584fe",
"assets/NOTICES": "3ff1bf34eb78d1fe7220c4f8da99bb2a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/fluttertoast/assets/toastify.css": "910ddaaf9712a0b0392cf7975a3b7fb5",
"assets/packages/fluttertoast/assets/toastify.js": "18cfdd77033aa55d215e8a78c090ba89",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "5caccb235fad20e9b72ea6da5a0094e6",
"canvaskit/canvaskit.wasm": "d9f69e0f428f695dc3d66b3a83a4aa8e",
"canvaskit/chromium/canvaskit.js": "ffb2bb6484d5689d91f393b60664d530",
"canvaskit/chromium/canvaskit.wasm": "393ec8fb05d94036734f8104fa550a67",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"cors.json": "b9cb08b122cdb1e46a75ce7eec974089",
"favicon.png": "378aade94484dccfcb7270e6c7933511",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "634c12a104339a5d526e1ee79fe4551f",
"icons/Icon-512.png": "5c530bb4c2510fbe91dcf9db42104e7c",
"icons/Icon-maskable-192.png": "5c530bb4c2510fbe91dcf9db42104e7c",
"icons/Icon-maskable-512.png": "5c530bb4c2510fbe91dcf9db42104e7c",
"index.html": "2922659fd02ef8ac9b8ce87ae85200fd",
"/": "2922659fd02ef8ac9b8ce87ae85200fd",
"loader.css": "b92e57821cf09cf8b53e82f49a549115",
"main.dart.js": "d0bf275cfb36555e8b1d2c724c8b725d",
"manifest.json": "73ff3c3231b5a1c09e68fe0fb987bb53",
"version.json": "80487b81b7a45effaf69b88a6bd7cc46"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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

'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "dc20735584fca35672f364bee42aedc5",
".git/config": "1edfbffaec4c08bf82f6d187aec49e82",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "9ca192ed892c2aef9f9e470372f14069",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b5dd47efe08b5932887ec702b3c6515a",
".git/logs/refs/heads/master": "718cf7d8ba2c765a33056d296c9b2e15",
".git/logs/refs/remotes/origin/master": "82a3150acacb14e749c6e97a2ad3618e",
".git/objects/00/5ae8a029012eac12a17ec8aa91eb920ec1d8a2": "f0df17d22ca1d61550e63c7da5096480",
".git/objects/04/108dd442891997f74e8737775a5aa76829167a": "dfe25dbed8dd234ce24ab7a159ff58de",
".git/objects/04/c26b9c56857a7ab5ce4d580b971fab344661b5": "767abf4216e33dfdc700053a63fe5912",
".git/objects/05/febdc1043ee5f38462372719215ff4d024c5c9": "42734b43aa2697307044656412d385dc",
".git/objects/07/5a105daa8c9212a8722eb6881ea836ad942da2": "3970d3cf34cf87d6721c92e2380e5add",
".git/objects/0d/5bb64bbca2296cb9805b512cba643ca2432bdf": "5a32778f91c281827ad4ce6c466fe160",
".git/objects/11/ebe0abf0e894a859e0fb58e7eae195cda45183": "a448adc1da0456db701dc50d773d932a",
".git/objects/13/17c828dea6bc7dfbbf25b7020d519e25ffe2f4": "ec2e9e607c27d5ade297f3730d2508f4",
".git/objects/17/bf9095ce245be4e76e8a45c4e17360601eeb5c": "9463241e3a6c2cf8d26d0ce0482e0da7",
".git/objects/1d/5dda2885076226f6629b07196c48b67fa2368b": "d9f865ea62534fea8586ec8d7d0fd094",
".git/objects/21/9ec5d108979061fb58ea8cd26612c2cbe4ac17": "0b75b6c5e5173f330a51f531d99204ae",
".git/objects/23/1aca6cbc286239f5d9455c1ac7df458b39ee60": "57f69f21dc1758c2fe17c0030a6d39ed",
".git/objects/23/94da32de9bf4b1392159bffbf696258cc6e107": "21fb776c1396a4b9d7b1507bfeb311f9",
".git/objects/2a/4a4fa18407692acd1af67b094b6295fb1b03c0": "dd5a29544252f13ff7642db20bd95a92",
".git/objects/2c/a111eba696c2b4e7bf8e9da7a47168e4883cd6": "35a8e43b241ff2825fbaecbf8da84675",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/2d/c47a9309dd0a67c7fcbb0fc0d039457f4e6741": "2574815481c773f86901d10f027c9969",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/33/29d5bb519c00fac6a1cb06e7bd32fa10cb7578": "1af4ed4862cf12371bffa986b6a4844d",
".git/objects/3b/693e3236e6d605a1050ea6c1aa4ab738acabd2": "dec138d4db8b9fe51eb32f7ffe640a51",
".git/objects/3c/b3b53a24ee4712b8463133dca203ddd72fb43b": "c3066eae2c84f5465b93f0624f5ecfa6",
".git/objects/3e/432a152179956cfe12e2950b8ff174b71cc83e": "826b5cc9c80202498cefa215496978b0",
".git/objects/42/db626fd0da17be511a2dee7e22ee54e4a14c3b": "cd7b7ceca3853368c53495e2d09695ef",
".git/objects/44/e518939c0610c901ea088fe3ad5606befc509c": "d63a1c20ceed3da56e7a7c29b7ea6462",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/52/2e942dca54fb64d02d1e21f8cddade0247d662": "5de8ab628bd484fa7bdc53e8c2744cc0",
".git/objects/55/296d6b2384c338b4e122f99c38384c68d58501": "91805bcf2dd10147ebfe59d78b117338",
".git/objects/5f/5d6c6f77b4d5e915c4ae5ca97ccecac27fcac3": "ac6578d8a18a87ca4fa8a0fb5223ea9a",
".git/objects/65/647fb5bcca55e208cb176be85c26cdd9315dc2": "1d19117857b7683440941fd0eeede76f",
".git/objects/65/b19b7cd4b8527e3494f8ff54bd0af8d0532a97": "9fc733af48e5c12b38133ae28d1822b6",
".git/objects/65/b384c04ef7ee9fb9b7582b77377280c5d64cd5": "88422bbb2bc42436f8f242eb59c23af7",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7e/924fde8c219e6b2fa2697403637d75826958cd": "c3a738af83fd6b28c92e4b8f94b6b6a6",
".git/objects/7f/cfedfef5cf9bb2f413c4c19e09479b76d4130c": "28119b7f474e2517d3f2bdb0975cb25b",
".git/objects/87/748811d9bdbffffa46bb959351dcefc851eef9": "f6ae000509c1c6189205c1dffee84fb3",
".git/objects/87/f054e04ed114946a8053f1e1af75ae02515ad8": "5564957db507df4c078a0fee4df56451",
".git/objects/8c/b3c4073c36e35542ceccdc79618635ac9133ef": "e0eb62bbcdd7224e0227277a2b219e74",
".git/objects/a0/6222e3eed7e086687833066c197f8dbbd51dd3": "d9a2884c1d5434a58d8fa1c0b01567f1",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a5/0a7ef4774433656eafa895757fb965c466976e": "7d13e1447d092e7c9a462d5ca559570e",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ac/dff003233d90b91aebe67dcd38d5049aacda7b": "6fea100e06e06948e49143e92be1a8dd",
".git/objects/ae/1cccc7ca6ebf26b1e4104baba791f1ee278785": "d6c9a4268f64077e9f6637d2afce5d73",
".git/objects/b7/12458eea24559f11e0ee177596a461e5f8cfa4": "97cea715c4f4b9941a34f348ab82e649",
".git/objects/b7/36dfc20bc9a86c9eb52d10c261a3ffa0e655f1": "ff8b9a275f5dda00058c055b0bfbf959",
".git/objects/b8/279903b50a0d8a8e3f985187c9cae684f680f6": "07bf0e10dd33157b149dbd07d4337c84",
".git/objects/c2/9636f52a9855caab37712cb176704ddd828649": "bc1f7c1b75f99b1df8b96e18b6b89c6b",
".git/objects/c5/7333f497983d0190b9b36dac33c4d55b4fd83d": "25450bd067c00dfc318aa991b9da87f0",
".git/objects/c6/773e572d47495daae584462cc80185a58c81b9": "6a37b92bc6cd449b53db4bd5dacee3a3",
".git/objects/cf/fba639ca0610082b3b66975df9461393b4d694": "9cf7c9a55c89b6fc4681f2990182c925",
".git/objects/d4/6b5493ede2f639a1961f6e461cfa6fe61d8442": "c2ab7eadc6a221f5bfb20d5ed4ae9563",
".git/objects/e2/2df59a2f99464935f1b4e53a0863ce510ceccf": "d23187995efdada1fb2b1bdc9eeb80a4",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f7/59f37b463863d18c547992f865b3434cc0b7fe": "0736f286a7bc4a08538725eae9e39f59",
".git/objects/f9/408f18261d806526c04f2a4ffd98950d84070f": "e3073c9fcf5ce505b05ee81bfc215a7f",
".git/objects/f9/fe1db473afe323e282e61087254b4ed14cec75": "27de122d6be69ee373bbd8a95fec673e",
".git/objects/fd/68a39e93a4acf4f4fc1eb00f0e72086698db59": "5e6237f948d701e8173c83c6e4f53468",
".git/refs/heads/master": "3e029eb3e3cea40b08b42d17282aeb90",
".git/refs/remotes/origin/master": "3e029eb3e3cea40b08b42d17282aeb90",
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
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "3cea07f4881eace45d6f6c212dd21753",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "378aade94484dccfcb7270e6c7933511",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"icons/Icon-192.png": "634c12a104339a5d526e1ee79fe4551f",
"icons/Icon-512.png": "5c530bb4c2510fbe91dcf9db42104e7c",
"icons/Icon-maskable-192.png": "5c530bb4c2510fbe91dcf9db42104e7c",
"icons/Icon-maskable-512.png": "5c530bb4c2510fbe91dcf9db42104e7c",
"index.html": "332cda762bd308fabd4f584a7f54390d",
"/": "d5775428ebca57da1a0fb608ce1f3d09",
"main.dart.js": "1df7a97256082f9d1741762f8b1e05cb",
"manifest.json": "73ff3c3231b5a1c09e68fe0fb987bb53",
"radio-mosbat/assets/AssetManifest.json": "b842b975ec083dff65936c5128edb86f",
"radio-mosbat/assets/assets/fonts/iransans.ttf": "80470e5cc0dea2d75af2700d8c35ba6a",
"radio-mosbat/assets/assets/icons/ic_fast_forward.png": "587340f8b4b35dcd5da350c64bf51624",
"radio-mosbat/assets/assets/icons/ic_library.svg": "b3bcb8356f850b779b22178e2991c522",
"radio-mosbat/assets/assets/icons/ic_next.png": "53c8aec9da25316171fca33609c13d36",
"radio-mosbat/assets/assets/icons/ic_pause.png": "94e4fc10b4c1b5173d6b9958b45ac24d",
"radio-mosbat/assets/assets/icons/ic_play.png": "bb6288ead0209ff3c8d21009e4124a5c",
"radio-mosbat/assets/assets/icons/ic_previous.png": "df2119b9e723832c6a910ef103d4aa74",
"radio-mosbat/assets/assets/icons/ic_profile.svg": "0f048ac8d2b8a74448e49e3a2d628acd",
"radio-mosbat/assets/assets/icons/ic_rewind.png": "6c3995c9434165b1042ae1941713ccbf",
"radio-mosbat/assets/assets/icons/ic_right_arrow.svg": "cbaa36a4e27cc50368ee316fb483a57a",
"radio-mosbat/assets/assets/icons/ic_speed.png": "b1354f575e242db3b5bfc24abea761c4",
"radio-mosbat/assets/assets/icons/ic_volume.png": "475f199422256059df85a42901b7f3d0",
"radio-mosbat/assets/assets/images/bg_header_bubble.svg": "3c3129a7131ec8c5c551159dd7c2fecf",
"radio-mosbat/assets/assets/images/bg_header_login.jpg": "01ef8b45172ab86fa03c5387bf9ab9c5",
"radio-mosbat/assets/assets/images/ic_launcher.png": "5c530bb4c2510fbe91dcf9db42104e7c",
"radio-mosbat/assets/FontManifest.json": "f0811f322b597a3bcc8e7434409bdbbf",
"radio-mosbat/assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"radio-mosbat/assets/NOTICES": "4e342da6af40fc66b5c696da66bd7617",
"radio-mosbat/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"radio-mosbat/assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"radio-mosbat/assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"radio-mosbat/canvaskit/canvaskit.js": "62b9906717d7215a6ff4cc24efbd1b5c",
"radio-mosbat/canvaskit/canvaskit.wasm": "b179ba02b7a9f61ebc108f82c5a1ecdb",
"radio-mosbat/canvaskit/profiling/canvaskit.js": "3783918f48ef691e230156c251169480",
"radio-mosbat/canvaskit/profiling/canvaskit.wasm": "6d1b0fc1ec88c3110db88caa3393c580",
"radio-mosbat/favicon.png": "378aade94484dccfcb7270e6c7933511",
"radio-mosbat/icons/Icon-192.png": "634c12a104339a5d526e1ee79fe4551f",
"radio-mosbat/icons/Icon-512.png": "5c530bb4c2510fbe91dcf9db42104e7c",
"radio-mosbat/icons/Icon-maskable-192.png": "5c530bb4c2510fbe91dcf9db42104e7c",
"radio-mosbat/icons/Icon-maskable-512.png": "5c530bb4c2510fbe91dcf9db42104e7c",
"radio-mosbat/index.html": "d5775428ebca57da1a0fb608ce1f3d09",
"radio-mosbat/main.dart.js": "0661f2c187d8203e7e86725022834892",
"radio-mosbat/manifest.json": "73ff3c3231b5a1c09e68fe0fb987bb53",
"radio-mosbat/README.md": "d95b3531e85071c4ac9143ca7c66b8cb",
"radio-mosbat/version.json": "80487b81b7a45effaf69b88a6bd7cc46",
"version.json": "80487b81b7a45effaf69b88a6bd7cc46"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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

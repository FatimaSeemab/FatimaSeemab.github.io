'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "945cae0fd49a89f0cf2af89548588474",
"version.json": "cc132570d6d238130e38adc59e1f998d",
"index.html": "c1c5f29031926111ab3ccb7c551c88f9",
"/": "c1c5f29031926111ab3ccb7c551c88f9",
"main.dart.js": "9724a9b1ef26b99a9e61740b2bf45aa9",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "d40c47d1c161f94dbcb13094d37f1f55",
"assets/AssetManifest.json": "0f8f2a9d87fb0c69baddd0bca73109a8",
"assets/NOTICES": "ed45a955a28816a14f3419083f67e430",
"assets/FontManifest.json": "ec8a82ec184cf6cd45fbf68291b1fe6b",
"assets/AssetManifest.bin.json": "b876623a148a4c0cb6ae2ebb06f2cb3a",
"assets/packages/simple_icons/fonts/SimpleIcons.ttf": "36006a2aee699bab11e4562e9bd81963",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/syncfusion_flutter_pdfviewer/assets/squiggly.png": "c9602bfd4aa99590ca66ce212099885f",
"assets/packages/syncfusion_flutter_pdfviewer/assets/strikethrough.png": "cb39da11cd936bd01d1c5a911e429799",
"assets/packages/syncfusion_flutter_pdfviewer/assets/highlight.png": "7384946432b51b56b0990dca1a735169",
"assets/packages/syncfusion_flutter_pdfviewer/assets/underline.png": "c94a4441e753e4744e2857f0c4359bf0",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "737188ce7a36c30bfe19dff90923c7bd",
"assets/fonts/MaterialIcons-Regular.otf": "dc3a9c410ff6ef06a4a15990c55c3628",
"assets/assets/518-5189049_web-development-js-html-css-svg-hd-png.png": "f8d6b0e741176138ea2343e731f1d6e4",
"assets/assets/Labs/AI%2520header.png": "7193132f35c0c6101f38063b5b646657",
"assets/assets/Labs/Dl%2520header.png": "d135049275ce7a88b65c3caa518b516c",
"assets/assets/Labs/DIP.png": "352a8e3848ce8b40e36d65ecdd4d0145",
"assets/assets/Labs/DSA.png": "dc15064e08b56f465ccd828ee21e0aa7",
"assets/assets/Labs/AI/Lab%25204/update.png": "bbf2895555f287a4985478b31dcb9c3a",
"assets/assets/Labs/AI/Lab%25204/updated.png": "ff141c233a54e6be304cd33fad3978ce",
"assets/assets/Labs/AI/Lab%25203/Alpha%2520Beta%2520Pruning.png": "7da89edb88f3417950f5cec2af4c84d5",
"assets/assets/Labs/AI/Lab%25203/minimax.png": "c049666b0461f69f2d279d16135bdf40",
"assets/assets/Labs/AI/Lab%25202/DFS.png": "19dd646bb069202fe05efc7b27af8c3b",
"assets/assets/Labs/AI/Lab%25202/output.png": "bf459a8116350afedeb2bc6903b5f495",
"assets/assets/Labs/AI/Lab%25205/Output.png": "e0e96cd77ed2bc57ae57346a026eda27",
"assets/assets/Labs/AI/Lab%252010/Plant%2520Architecture.png": "c3d0f91ce439cbb1074ad40575b2f390",
"assets/assets/Labs/AI/Lab%252010/Plant%2520Classification.png": "11d5f960ed27be2294a2ad6fea661d60",
"assets/assets/Labs/AI/Lab%252010/XOR.png": "99941a2c5229654b270b4e97921897b4",
"assets/assets/Labs/AI/Lab%25209/100%2520random%2520forests.png": "c823f01948e16d110fefcc3760b542da",
"assets/assets/Labs/AI/Lab%25209/500%2520random%2520forests.png": "877e57bd4086505d6feebae59948a407",
"assets/assets/Labs/AI/Lab%25209/300%2520random%2520forests.png": "5b62e65dc2965cb5e00911cc07afd20c",
"assets/assets/Labs/AI/Lab%25209/csv.png": "c47f03f694457628307595d53e8c09aa",
"assets/assets/Labs/AI/Lab%25207/code.png": "f343850a2ab66463e965111d6facb1e9",
"assets/assets/Labs/AI/Lab%25207/output.png": "40885c697e4e8ba476c5a62bf7e6eb17",
"assets/assets/Labs/AI/Lab%25206/code.png": "17cc5daf38ef764053c34076eaedd154",
"assets/assets/Labs/AI/Lab%25206/output.png": "2b96d9c53ac7edce603421908f864bed",
"assets/assets/Labs/AI/Lab%25201/Code.png": "434b9d8453263bda7486aeaae878c362",
"assets/assets/Labs/AI/Lab%25201/img.png": "f7f36e43fa1e220dbeb08e2049ab545b",
"assets/assets/Labs/AI/Lab%25208/knn_k_3.png": "d97f590f02ef4eae10525661890d7921",
"assets/assets/Labs/AI/Lab%25208/knn_k_7.png": "652585d570807d6f3d318f42d7541d00",
"assets/assets/Labs/AI/Lab%25208/data.png": "654508ada34bbf9bade5b0aeb1ac907a",
"assets/assets/Labs/AI/Lab%25208/knn_k_5.png": "4db12c48409a6a707e2080300408e1a4",
"assets/assets/Labs/Web.png": "9fcfe52ebdc40e616bd8ee671f8d6da2",
"assets/assets/Labs/DL/Lab%25204/result.png": "6bfc964842c6fce9982b550f4eb6aaed",
"assets/assets/Labs/DL/Lab%25203/cm.png": "2073fce09122aa3260fa366ef9b004c1",
"assets/assets/Labs/DL/Lab%25203/test%2520set.png": "dd33cfefb606e266f9c3a62eb718066d",
"assets/assets/Labs/DL/Lab%25203/training%2520set.png": "28f44deff218d6bb03b331804d9f4517",
"assets/assets/Labs/DL/Lab%25203/graphs.png": "14815fd1894e092fbc06062154fbeb5f",
"assets/assets/Labs/DL/Lab%25202/results.png": "6f0f72a4f1ec24f1b78c346a6695b7d5",
"assets/assets/Labs/DL/Lab%25202/graphs.png": "dae67360a2b460eb95c9f835f4d7d574",
"assets/assets/Labs/DL/Lab%25205/model.png": "690914474e87c8355543ebbd32be753b",
"assets/assets/Labs/DL/Lab%25205/loss.png": "86838be8e434b88d33f06034ab3fd751",
"assets/assets/Labs/DL/Lab%252011/epochs.png": "cd69972c5a859e6478cc15fdddd87509",
"assets/assets/Labs/DL/Lab%252011/graphs.png": "f46e837867782a9b573840c51169773e",
"assets/assets/Labs/DL/Lab%252011/architecture.png": "e4be59fe61c5ed238515ca01cc633b4b",
"assets/assets/Labs/DL/Lab%252010/5%2520epochs.png": "ca1f8ee425072f11e1c926a876334dcc",
"assets/assets/Labs/DL/Lab%252010/epoch%252010.png": "d9264923b8ea666bb74f158caab47df8",
"assets/assets/Labs/DL/Lab%252010/architecture.png": "982be57c6d5d448de03f46a865b13477",
"assets/assets/Labs/DL/Lab%25209/architecture.png": "f4f814382ba7afa3b46e1fab27208cd6",
"assets/assets/Labs/DL/Lab%25207/results.png": "33ed785697df90ba17f9ac8ff99548ee",
"assets/assets/Labs/DL/Lab%25207/model.png": "f962c42b07bcf6285e77de57a95745d1",
"assets/assets/Labs/DL/Lab%25206/loss.png": "bec258674e94f8247d58e9d8e3aadc80",
"assets/assets/Labs/DL/Lab%25201/model.png": "f7a1cc34ae89b8eba1158ac645554f62",
"assets/assets/Labs/DL/Lab%25201/graphs.png": "20587786f51564e92b80b3d15ee3a17f",
"assets/assets/Labs/DL/Lab%25208/results.png": "d48a76c70b49925c5380ad6132eba50e",
"assets/assets/Labs/DL/Lab%25208/model.png": "6386daf107b9b479536b764f3feeeb4c",
"assets/assets/Labs/DBMS.png": "a7744deb178fd1c9ae29cc1dbca062f8",
"assets/assets/Labs/OS.png": "ef4f424128b351582c967e01264bbfce",
"assets/assets/web%2520app.png": "a97f5a4dc5d2eee47ce0c9b418c87178",
"assets/assets/tensorflow.png": "60d85d154508d7636a60f20c87108607",
"assets/assets/Python.png": "e2d9c3445731fd52d4a630761bfff3c7",
"assets/assets/ai2.png": "8184fa363537e9d0037f1d235237c5bd",
"assets/assets/Flutter_logo.svg.png": "44efaf9569e25fe92202d62d049246b1",
"assets/assets/web%2520dev.png": "04f1108cc8dfe4f51928129da2e4d5f0",
"assets/assets/database.png": "c63fb5c7067bcd303b798be85f9b9e8e",
"assets/assets/C++.svg.png": "c1c5353e8ce476277f0350ff2771b423",
"assets/assets/profile%2520pic.png": "3a78291f6ddd318c4ad0bd150e11a139",
"assets/assets/Java.svg.png": "45c03e17b7eceae184c48b7fa4cf4de6",
"assets/assets/certificates/Coursera%2520Course%25201.png": "b1322c96ac63b7a4738953f1f9862742",
"assets/assets/certificates/Coursera%2520Course%25203.png": "1cd5c184e5ad6906d074e529474b5d7e",
"assets/assets/certificates/Coursera%2520Course%25202.png": "da87f394f6ca23c30bb3e9d622e5fabc",
"assets/assets/certificates/Data%2520Science%25202.png": "53aab0978a4a055b03a3e79337192131",
"assets/assets/certificates/Data%2520Science%25201.png": "42cf13906a7ba0417bb93ad430240d76",
"assets/assets/application%2520development.jpeg": "dbb76625c4aaede816fe9ee8fbe47779",
"assets/assets/Research%2520Projects/Aircraft/DIP.pdf": "c169a2e63d137b99e87453b563aecd9b",
"assets/assets/Research%2520Projects/Aircraft/Image%25205.png": "6eabf620f8373ec9a40fbeb6ca694027",
"assets/assets/Research%2520Projects/Aircraft/Image%25204.png": "98d48cf24297e50ef74df372cb961b45",
"assets/assets/Research%2520Projects/Aircraft/Image%25201.png": "18e88b53202f69e14fdd27bcaeb1728a",
"assets/assets/Research%2520Projects/Aircraft/Image%25203.png": "3d5e5ddab76007f9389ab7a1c3e41eac",
"assets/assets/Research%2520Projects/Aircraft/Image%25202.png": "121596aad5e62a1e9ecc3721e9698b8d",
"assets/assets/Research%2520Projects/ASR%25202.png": "92610cd4ab9f748bc3df2ca5332ea1b6",
"assets/assets/Research%2520Projects/transformers/Screenshot%25202024-04-10%2520at%252021.29.58.png": "7f40d55f263ea59cc7eaa8e3fea6e2dc",
"assets/assets/Research%2520Projects/transformers/Screenshot%25202024-04-10%2520at%252021.30.57.png": "2b742f72ccafc3a71cb9c26934cae140",
"assets/assets/Research%2520Projects/transformers/Screenshot%25202024-04-10%2520at%252021.30.38.png": "2b23e4fe6c536cc5a53766cd38081c47",
"assets/assets/Research%2520Projects/Book/Results.png": "e4bbb8ea2b641e28b6f705c94d170472",
"assets/assets/Research%2520Projects/Book/Proposed%2520Approach.png": "37b9138391ef6b6b3b800457f4cbbc29",
"assets/assets/Research%2520Projects/aircraft%2520recognition.jpeg": "faa5dcc4d8395e018dc8923d6343b89c",
"assets/assets/Research%2520Projects/ASR.png": "d71333aab15ccb9cde9526e0252015a0",
"assets/assets/Research%2520Projects/surgical%2520robot.png": "6e73572589a50a183a0c247192688a02",
"assets/assets/WebProjects/Portfolio.mp4": "159ece1b35625082eaec4fa6b3fd290c",
"assets/assets/WebProjects/Netflix.mp4": "354b64ef18e682d7dff5cc96898e243e",
"assets/assets/WebProjects/Library.mp4": "7334e2ad9c787fd0a34725027e5aa7c4",
"assets/assets/WebProjects/Airbnb.mp4": "a4063e9d1f3eb9e80511518551cb21d9",
"assets/assets/WebProjects/TableTantrum.mp4": "e8f6e290a1678ed4dfeccfb9b4df0ea5",
"assets/assets/AI%2520Projects/Action%2520Recognition/Transfer%2520Learning.png": "15a5c474ce7be5b62a517a6a5bbdcbab",
"assets/assets/AI%2520Projects/Action%2520Recognition/VGG.png": "45c5536446e3e77daca10515a39f833b",
"assets/assets/AI%2520Projects/Action%2520Recognition/kinetics%2520Val.png": "1dc3c3f538ee816ccd61c3ec3e84c95d",
"assets/assets/AI%2520Projects/Action%2520Recognition/ArtNet-ResNet18.png": "2efb8f96c301eec48dd8f60a26445f6f",
"assets/assets/AI%2520Projects/Action%2520Recognition/UCF%2520validation.png": "a1a76208594cb98db796787e0db72ffc",
"assets/assets/AI%2520Projects/Action%2520Recognition/Tl%2520Val.png": "9003f0e715d16b310c820258ceee8b9a",
"assets/assets/AI%2520Projects/Action%2520Recognition/Kinetcs%2520Loss.png": "30832f8d0c38213b188bdd946886e544",
"assets/assets/AI%2520Projects/Action%2520Recognition/UCF%2520training.png": "aa839f7fcfc06257077166a0dec4eedd",
"assets/assets/AI%2520Projects/toxic%2520comment.png": "31c4245cb6b73dfb97be6f26ef8a7252",
"assets/assets/AI%2520Projects/FYP/Bat%2520Ball.png": "d4139aab5683529efc33d04344e0fea3",
"assets/assets/AI%2520Projects/FYP/whole%2520procedure.png": "6f07997ea2329bb925ac08fdfa06076f",
"assets/assets/AI%2520Projects/FYP/FYP.mp4": "2dc3c3c894d19fead66c9c0ec0694eab",
"assets/assets/AI%2520Projects/FYP/strong/strong%2520step%25201.5.png": "8958dcd5ba727e8736fcf22f16e68ade",
"assets/assets/AI%2520Projects/FYP/strong/strong%2520step%25201.png": "1cca234f474cb98615664475778f6fe1",
"assets/assets/AI%2520Projects/FYP/strong/strong%2520step%25202.png": "580a8efd28e1f9f17a966a074fe54b74",
"assets/assets/AI%2520Projects/FYP/strong/strong.png": "0dd464a7a9ecb4adc9f0794df77c9616",
"assets/assets/AI%2520Projects/FYP/strong/strong%2520out.png": "bb606756a31982010ea49dc39525a83f",
"assets/assets/AI%2520Projects/FYP/Untitled%2520design.mp4": "101079dda4514456a361f74e1f29b200",
"assets/assets/AI%2520Projects/FYP/ball%2520detection%25202.png": "5f069eaafd9cc29a045397ea1ebcef04",
"assets/assets/AI%2520Projects/FYP/FYPs.mp4": "4251a2eab5e8cbed106e18ea92bedfdd",
"assets/assets/AI%2520Projects/FYP/Batsman%2520bowler%2520cm.png": "520b9c363a7e539f5a4e0c375aed2b13",
"assets/assets/AI%2520Projects/FYP/Ball%2520classification.png": "fdd1bc6bbddc63c950ea43881f6a4153",
"assets/assets/AI%2520Projects/FYP_architecture.png": "2e57d27a70a36ce97c4f6e3bb2b3c7b5",
"assets/assets/AI%2520Projects/Action%2520Recognition.png": "fa357bb07b6d647b0e843d13f62e461f",
"assets/assets/AI%2520Projects/CricAce.jpeg": "347c7c8d4b3578591ebc789ed9ea0d18",
"assets/assets/AI%2520Projects/Toxic/accuracy.png": "f93ca52f5ba5b5fb9ab4e313959cff8a",
"assets/assets/AI%2520Projects/Toxic/loss.png": "ed87d262b7afb88e15ad4961d1d8d3d8",
"assets/assets/AI%2520Projects/Toxic/architecture.png": "1cacc52fc7f28ca281cfb683e339b992",
"assets/assets/profile_pic2.png": "31a439e20b31505320c0d8ce472ae4ff",
"assets/assets/Tensorflow.svg.png": "7f40f7b6213ec174476e83bdf01ee561",
"assets/assets/scikitlearn.png": "f0f50003d0e332fe8232c3d685b6b221",
"assets/assets/SQLite.svg.png": "4423f797eb6575ddbcb78d9d2b81f264",
"assets/assets/MySQL.svg.png": "16be35690289999726fffc349791a0e0",
"assets/assets/programming.jpeg": "e6da3a5cd7c2d1759bcb5dd2d5e9794d",
"assets/assets/React-icon.svg.png": "1bf9e36a76d7c9c41691fb26026caf55",
"assets/assets/mysql.svg": "4bbde615f7ee2351e12232bb8dd3b4d5",
"canvaskit/skwasm.js": "f17a293d422e2c0b3a04962e68236cc2",
"canvaskit/skwasm.js.symbols": "2c6d3c59f3235b58cb927f07257ea1b8",
"canvaskit/canvaskit.js.symbols": "2d62f4f47caef67697a64d0fc1cf24b2",
"canvaskit/skwasm.wasm": "4e805176cbcd680925d79a162d4885ed",
"canvaskit/chromium/canvaskit.js.symbols": "a57ae2b1fe72ed7e55adf471aa00a123",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "d5631d7cad4d894141203e5c6474a318",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "823666cbd1b646ab8ab1201e17cf1369",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
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

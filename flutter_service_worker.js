'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "favicon.png": "5dcef449791fa27946b3d35ad8803796",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/objects/41/fda2be8cc3f422ba5e4406e30e06f8ab56cf01": "345c424a40c7683d0164b85118c78478",
".git/objects/41/d185d9fc89be9f2bee6319e59263f856daba4e": "9a7b3aa1fa989ef00659d59a1b6e6b2c",
".git/objects/b0/98740cc4236ce9dd8377e16f1ef9c09dc9d1a3": "d43234d6199140797f2015253e545563",
".git/objects/fb/045820dcc8461631e354143fa622f2bdca88cf": "f3f84fe6b66a69df59ccc3044b9c3b5c",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/1e/5aef7deb4c0a49a72bf3905f98ea095e8eb1db": "ac939a4830e686581d0ed3c8ba997304",
".git/objects/1e/dcdf6449797d3d9e2f5679dfb646eb61f00092": "1384923432d75faa82a12121d8885fc9",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/49/5a8a653f1e93f863ea8414124941675c09d7ba": "93b537b16eed7a0e56a2380283089347",
".git/objects/5d/036ae67da4012d816bc687b2a4940bb522b376": "0b227f22b9351f556ef2a255efda1a8f",
".git/objects/83/5761b6440454a16dcd328e28e04396cb3c3275": "99a0dea7efb36f314963ae159e1f6098",
".git/objects/83/ab4167f89b13340749286919a86fdc58f56ed6": "575dfe9f6e213bfd38f6933bb795188d",
".git/objects/51/f33912f9e95f8fd4fa4c5fc919d8599256f9c9": "34cf5282163156cd6e3bbd54c1f0395e",
".git/objects/da/98e7d395145cb40fa0ca4082b6eff4d61a5e92": "ef3ce5e5ae0bdb571f718ba968cbf086",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/bb/f5a104e6b57dcdc1ae0792f9c7861e8364203a": "2d9ff2bfd9733fab722eae199e7eb43d",
".git/objects/24/668d9a225c0c10347b48118e39c09c0a5ce6b9": "460d86cdd538971bb06ca8596097a873",
".git/objects/c7/ab4739f5d7650e7d58721fd0955d288d2d7ad0": "89635bd6ebd5657d68c599fde0a18a48",
".git/objects/15/d86089978f1c03cac8b9eff90dc83fb91ff65b": "d731d4a6417c2c45b04cc365e4b8d666",
".git/objects/b1/8ae9ef2d3c4fcfe86a39b05ca2ba9e3c492a68": "d5e7b268f1e3845cefdf52553d5e219f",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/1a/ec40648ff3820ecabcbbd8174b7587184a5568": "6a81956947d82adaf41348d4005a2521",
".git/objects/43/a0de25df7f68fdae97b5738f448b9628078f05": "e1f1dd14f71a08d5d835b897c8421426",
".git/objects/cd/6f02be26cb8c3e7e556b6878cd2b829f0dd6fd": "d27dce82880245752e18a54312b09aea",
".git/objects/8f/b0e03e3956aa797672aa62031769e4264bbfb9": "b9f74f18cd1d95390a7a31e3d4658cf2",
".git/objects/bf/b470d204954abd1ae2be780f92b5247e740975": "52a90bfdec6081bb294163992e5f655f",
".git/objects/57/855cba150312a831c4026813e8b3a7b752da69": "ed9d2da24e48e82763f6598a2d3eb89e",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/66/93cbb6e6a3a7c352f4d05a82163aa012da6655": "ea7d23f65e3eb886c1ef5dbfb2ecb8c3",
".git/objects/80/f71ff3a668b4ce73501584b87b04108b83c4a9": "e2dcbb91aed89f04adf0b8b3daa1d2c5",
".git/objects/d7/50d08811d0a693443733f0c72c2f683c3478c2": "de6369fe809608caaec3878fdc5ae196",
".git/objects/b5/f2538fbf9de48baa55b37b1ddfe2e06f4ba99e": "4657b8088a1722e733efcd1f73f0172c",
".git/objects/b9/d96322b3d989d840a1ef3032cb6e66de1b9912": "dceb1bf3b126618bb49c0a7ba56b9b76",
".git/objects/ff/8d0ad70e00c71b0b3b6fa257a5f87701f2353d": "3178c4b3ce4623d5bf69ea7d1922ef3e",
".git/objects/b4/c9603fc40d652b28bfaa84e8cf7ee1e371c461": "97fcd6ff215544c351794408656d13d8",
".git/objects/76/9c3c6df7dfbd7e43f087998337186d1f17bf8f": "a25f78bdf986aedd5a92876575202ddf",
".git/objects/17/ace170bdd3b9a552b4254e02641739e56048dd": "85ad0bc5ca57a200194f4ebea93f970a",
".git/objects/ef/7eff72907ee3bfb8cd18f185f02f39e31e1bef": "a0fc3d4d4862fac5aaf9889464b72a36",
".git/objects/21/2cf1c977d2a6d62f708901526c5303f0f8e93e": "a472569a1cddefa48fbe3adaebdde146",
".git/objects/0e/e9beb90645b8f94592c8c9e780d66ba805a660": "93ccc13736824da7f32582e93131900f",
".git/objects/5e/a3c201a63a78fc8033555c6882cb754574bc29": "642caadccc9001c68ac76a3f6253b359",
".git/objects/12/292f4b7d73c0d76fc4d29420ff962d99b95481": "25c1604faa4dae8fddd998a0e9ab3875",
".git/objects/2c/5fd501f16421a7d759ba7ad9c7af19bd6e22ff": "c868ce75bc07f80d5ae75667c529784b",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/39/8266ca43ac3c16baa669e9a575ed8612827ba8": "e6ef19244decf9c508cc9df66e7ae2f8",
".git/objects/ad/e7fb520ca90351fcf5e8bca789b606b95e33d9": "41751220c346bc6e336fe050c44bb9b7",
".git/objects/a6/8fb10d840f006e81fc03aed90c4af923ee9553": "8a3fd8b428bea1006c298783c72c1bf6",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/5c/336b2b9da4abaf156a1341aeb75c7ea4d3f41b": "cb1830f13d78450d5bafce41a7c85c64",
".git/objects/20/04ceab9827426703472d8dff6e99727d9eb4d6": "b2a7e8d7acd26ce711e0c8cc6c9733f6",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/00/391f4d1ee396ba6bdfef3dd2c958a0b7e6228e": "79199d7673e2c0fbb87a738b5ef53bdb",
".git/objects/2f/2be395a45e74ca76d5f7eaa4930e8df3c54236": "80182433de0fe92b9429c3a62507a13a",
".git/objects/38/6435630a8adaa41e2fc9ad865503fbd0c400c8": "837c6edb75a445fb3aaca9959abd4c91",
".git/objects/74/2e256837eaa66fa6e299126796096153ff3647": "4834ef21d3e9d0b9ab18f883fb8307c3",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/fa/d0a1a166f5bbf36df42976213b91d36fbc40d1": "e74dec3bcf0d617684b08f916e898158",
".git/objects/31/0587c66bfa27cc375e9be434ead9babba969b8": "897f23f2abc101eb79d26331e8ebd734",
".git/objects/dc/79905818db44ba66efcc39135a416e7c2a0d0f": "9c8b0ee26cfc152115b4dcfeeb247030",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/9e/db94f98566a6074054c78e373e3e2ace3d0b35": "c425be8b566c1615fe4a895f7d269eb2",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/f28d1eb2d29c943555e1540df4ae042ff4c57d": "61c5c0dae3dbab0b7868bde459dc91d0",
".git/objects/f1/b81f9c442693b40a59d6597690daa2b597fed1": "46ea46eef187153ec22bd4d779f3d593",
".git/objects/e6/da2788c7c56f2bb7b4d193cfc5228ad7332420": "a76cf406b94f0db9b6d2de158fcdc67a",
".git/objects/70/4073ad8f3b26a0b75c402cf6c872db92c1e4e6": "3f6e931958a06a68b20a6ec6d54eba72",
".git/objects/82/6eab95f327f4d1ec02af1f8be8bd9e096760f1": "d6bb2890126dd6229f03a4125ec74b8a",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/ORIG_HEAD": "e06a7cfcbef60609b47fbbd4cdea1dda",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "db4d62db2039e4bec38baa7567788284",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/config": "40fccf8141c3d59338f717d85456e2c2",
".git/refs/heads/main": "e06a7cfcbef60609b47fbbd4cdea1dda",
".git/COMMIT_EDITMSG": "52c8bb3fd7a01d3300d8c570ef572e06",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/logs/refs/heads/main": "34fa17c812144e8be9957649b445b0ba",
".git/logs/HEAD": "2f2b8f4f2b15d5de2af6ea39f33f391f",
".git/index": "9b56fdcf750de269b550e2d3c7848e08",
".git/FETCH_HEAD": "c463867a6cf84ea040384e197deaf752",
"main.dart.js": "a8b2c86837be440f2f555d5833aa3f6e",
"assets/NOTICES": "7c86b9532674718115e55f35da6d3fa1",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/assets/images/tcp.png": "235d9220cbae2f9509914149d817bfbc",
"assets/assets/images/contact_us.svg": "f64ead39987e760b87798adcb7608475",
"assets/assets/images/chat.png": "b49b6236ccc7feab3457f65ed71babc5",
"assets/assets/images/contact_us.png": "96bf3203a1d8ac0467a4781e5f14f650",
"assets/assets/images/api.jpeg": "0335b521c0694294a96d6451e37a6d7d",
"assets/assets/images/spring.jpg": "292ad671405f582cf87d905b09cc8e66",
"assets/assets/images/detection.jpeg": "5079cd080afb21178a38d1a70aaf07b1",
"assets/assets/images/social.jpg": "10085f68736770b68f0f82860230901d",
"assets/assets/images/newfeed.jpeg": "24e80e98ab2086dbbc651b29772e529a",
"assets/assets/icons/js.png": "c7140ae897077ae303aa769001cd0619",
"assets/assets/icons/github_icon.png": "6e337456c44298738557550913fa8c26",
"assets/assets/icons/spring.png": "1b6d559181f1c0d62cbe0206aea4058a",
"assets/assets/icons/A.png": "dcabf60d035b7608c867c940135246af",
"assets/assets/icons/firebase.png": "0e4792f1b38576bce30728eec593a301",
"assets/assets/icons/linkedIn_icon.png": "eb316c3d741c12d6380fb9b92acc0f63",
"assets/assets/icons/java.png": "0414fcd53fdb6903fb57134fdd8a9af2",
"assets/assets/icons/flutter.png": "523e893dc26b7baace16f90b4c362549",
"assets/assets/icons/scala.png": "b6adece63f4d2c99ab49a5a119e36945",
"assets/assets/icons/c.png": "07d3ae46119591201ff78163df6935e6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/AssetManifest.json": "fe93c660315d4e07e2de257653dc5ee9",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"index.html": "acd974b62aa1e2f21525183810676255",
"/": "acd974b62aa1e2f21525183810676255",
"manifest.json": "5364c52d278ac02167a5165d346529b5",
"version.json": "704f833d60ee91156b0b40e7e935fa3a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
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

"use strict";var precacheConfig=[["/index.html","ac4824730bcaba2e83cdfa595155b710"],["/static/css/main.16d9e671.css","81b3c4adaac765ba49ba17d20001b792"],["/static/js/main.f34a1a8a.js","f1c7e9f15d16f1f21c1057f281726ed0"],["/static/media/GrudgeTrudgersReport.90a3ab01.pdf","90a3ab01c89e43560ebda2872e03d779"],["/static/media/StanHuang_MyResume.153f9b60.pdf","153f9b60b2120ef753aa977a333ad31a"],["/static/media/TIDAL_Final.a77a4024.pdf","a77a4024371d3232b957e751ebf4bdd7"],["/static/media/dmDisrespected.041dca64.PNG","041dca6422f7f232ef8878a6aae745ea"],["/static/media/dmHome.379ce8fc.PNG","379ce8fcb2d66c61f97f1fecd5964d09"],["/static/media/dmHome2.0e9ffe56.PNG","0e9ffe5652e0d73c14dc0f52d57bbfeb"],["/static/media/dmJournal.2bcb2661.PNG","2bcb266128691e7186fc2dc75737e779"],["/static/media/dmLove.901adba8.PNG","901adba8b131d8a62cf61c94a43e956f"],["/static/media/dmRepair.439c73b5.PNG","439c73b54d1f889e2e4ebce6f96ebe95"],["/static/media/dmSummary.a8e925cd.PNG","a8e925cd2f1f22f629493b47897d24e5"],["/static/media/faceshot.ca317233.jpg","ca317233c1f8ff785850ecfc67ba4a1b"],["/static/media/fintech11.8a420864.png","8a4208647e94886c5ff6a3acf8f3480e"],["/static/media/fintech12.dd313320.png","dd313320e53b338e363a4dde50eb8dae"],["/static/media/fintech13.0f2d8101.png","0f2d8101fd4029ac0483888f144b6124"],["/static/media/home.01ea06f7.PNG","01ea06f7c5183a75b99cc4dd4f53550f"],["/static/media/inkrubbing.7da9bee2.jpeg","7da9bee25b0533c597cd029fcc70c93f"],["/static/media/inkrubbing2.d37b872d.PNG","d37b872d0e20a29980a8fb4243745354"],["/static/media/inkrubbing3.a76eb98b.PNG","a76eb98b7cbe4487b13638a2da3851d2"],["/static/media/inkrubbing4.752d7be7.PNG","752d7be7d8c2ef93541857472523ed04"],["/static/media/l10.08f1cb6f.png","08f1cb6f6354ad6c042a6107e087d95b"],["/static/media/l11.6ade1296.png","6ade1296d3c8a813af6b871caee8a84c"],["/static/media/l12.5aca76f7.png","5aca76f790728e440515a3c6cfd8da4a"],["/static/media/l2.8a23bd0a.png","8a23bd0a25c3e7cfd405b85334c6447a"],["/static/media/l3.6bed3882.png","6bed3882aef035c5f5ed91d4da27b333"],["/static/media/l4.f6c5ffc9.png","f6c5ffc929e01968b8d03dce709a2ee8"],["/static/media/l5.92d4d8fe.png","92d4d8fe054251d20d3b28257e5bbc67"],["/static/media/l6.7d62fce2.png","7d62fce2008c6e1b21862adf2e7f99bb"],["/static/media/l7.62ca3af5.png","62ca3af560f301c557fe09172866c851"],["/static/media/l8.09cb6565.png","09cb6565131a3b53780d3ae48642e6f6"],["/static/media/l9.9f6ec82f.png","9f6ec82f7f00410082c7b979fe80fc8f"],["/static/media/landingPage.dea662d3.PNG","dea662d30999a8e2782ae9d4db2ce618"],["/static/media/logoFill.38faa2f5.svg","38faa2f5d5ae43e4e54779294f87400a"],["/static/media/pingpong.8ab8bce0.jpg","8ab8bce0b248ae21eb9f8aa3ff0c8c69"],["/static/media/pingpong2.5c6f43a6.jpg","5c6f43a608e317e6f8b7a1d9868f5a5a"],["/static/media/pingpong3.9e44d367.jpg","9e44d3672855964683e4b6308b27bf63"],["/static/media/pvmnt2.ff2a79ff.png","ff2a79ff4497f0a2bad790a5d6020bd8"],["/static/media/s1.94be0311.png","94be0311f678840099e0ad80ec765471"],["/static/media/s10.1e433e08.png","1e433e08b8d636ff9d269249b67d0d70"],["/static/media/s11.9b66ed96.png","9b66ed9609a1b6ca47d70f247bf87ddc"],["/static/media/s12.012d32db.png","012d32db6c2d365d8c7957a5a6b0a3ed"],["/static/media/s2.710cd27a.png","710cd27aa3342d50e62bd85286135298"],["/static/media/s3.a4080147.png","a408014776a6e45fee67784fa64d2bc8"],["/static/media/s4.1ee4c8c0.png","1ee4c8c0119392e8adbab7de9e47c8ee"],["/static/media/s5.5f1ab6b3.png","5f1ab6b3d0d28fb392b63e0514840e83"],["/static/media/s6.c9213e2c.png","c9213e2c57bbf22ddebf08d6f9c6d85b"],["/static/media/s7.364516b7.png","364516b76591f518b9c59449925fd8af"],["/static/media/s8.c8b20162.png","c8b20162f099d7db7116b8227a3728be"],["/static/media/s9.6c673ed2.png","6c673ed2f3c82607679df18b59b43847"],["/static/media/subscriptions.097144db.PNG","097144db3889171dbb6e0b40528faf73"],["/static/media/upcoming.2acba392.PNG","2acba3925c9745ac7803d9c798649b74"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var c=new Request(t,{credentials:"same-origin"});return fetch(c).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),c="index.html";(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),a=urlsToCacheKeys.has(t));var n="/index.html";!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL(n,self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});
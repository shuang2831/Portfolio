"use strict";var precacheConfig=[["/index.html","1661c1f69e26bca39c8797d2b9750719"],["/static/css/main.dbb54541.css","95651eb36ed328d28cd3b89c2ce55b64"],["/static/js/main.ad1c4ee9.js","5afa89bd5eb3de65ec4abc3a67fa982b"],["/static/media/GrudgeTrudgersReport.90a3ab01.pdf","90a3ab01c89e43560ebda2872e03d779"],["/static/media/TIDAL_Final.a77a4024.pdf","a77a4024371d3232b957e751ebf4bdd7"],["/static/media/dmDisrespected.041dca64.PNG","041dca6422f7f232ef8878a6aae745ea"],["/static/media/dmHome.b4424872.PNG","b4424872fbd0f4d6509a09bc69cbd348"],["/static/media/dmHome2.1245ad2a.PNG","1245ad2a2b9239b0cb1f0e65bcf572c0"],["/static/media/dmJournal.2bcb2661.PNG","2bcb266128691e7186fc2dc75737e779"],["/static/media/dmLove.bcfd6736.PNG","bcfd6736a918812667520a7bc60ba7c7"],["/static/media/dmRepair.8b580704.PNG","8b58070436c1f786274d9006a0114081"],["/static/media/dmSummary.a8e925cd.PNG","a8e925cd2f1f22f629493b47897d24e5"],["/static/media/faceshot.6b9933ce.jpg","6b9933ce529d3d289ca10e955f402696"],["/static/media/home.de4d4db4.PNG","de4d4db41a3f44ea06e561e4c73f3586"],["/static/media/inkrubbing.7c45ec23.jpeg","7c45ec2337d947c9d3a9cc04ba02963a"],["/static/media/inkrubbing2.6468ba61.PNG","6468ba61d6a3458bceec75a41d420c7f"],["/static/media/inkrubbing3.8c9446ed.PNG","8c9446ed780438a43643db8e75bbb98a"],["/static/media/inkrubbing4.5c4d5e8b.PNG","5c4d5e8bcd6db5302d76edbc7f0ace85"],["/static/media/iphone.581730f2.png","581730f26fd30d4e74890e792396de06"],["/static/media/l10.acb16531.png","acb165317cee51773afa850e128cb83a"],["/static/media/l11.941bc6ba.png","941bc6ba5bc7ae0723d5b0a84b205bb1"],["/static/media/l12.9c44c005.png","9c44c005785699a0e6b3cee69c844d39"],["/static/media/l2.6f481f32.png","6f481f32dedb53ae305792b2fb330053"],["/static/media/l3.9e40cc1e.png","9e40cc1e52c1cc9f9dd0f4be329eae95"],["/static/media/l4.123d67f2.png","123d67f2435740dca9c58b2377078331"],["/static/media/l5.71d04717.png","71d047174276cc4b525ff7172df037f8"],["/static/media/l6.e326c18b.png","e326c18ba81fb599f692b41e3a62162b"],["/static/media/l7.cd7a5c45.png","cd7a5c4563d27923e760ed2d27e3e82f"],["/static/media/l8.f0729bb0.png","f0729bb070e8a74a2258d06ee4b8de17"],["/static/media/l9.2d59a2b3.png","2d59a2b3414800e44d81ed5d93a4e86c"],["/static/media/logo.5d5d9eef.svg","5d5d9eefa31e5e13a6610d9fa7a283bb"],["/static/media/logoFill.38faa2f5.svg","38faa2f5d5ae43e4e54779294f87400a"],["/static/media/pingpong.1de32fd9.jpg","1de32fd90a96d2e34ee5a165095afcd6"],["/static/media/pingpong2.9fd04cf1.jpg","9fd04cf18137393dbcba5a093e4229c6"],["/static/media/pingpong3.b52f99b1.jpg","b52f99b15d664da48589be27b18c1b34"],["/static/media/pvmnt2.d5ecae74.png","d5ecae74bc8f1a24608d3ac58dbf1492"],["/static/media/s1.78414f2b.png","78414f2bb2b93c2f9bcd12c3615c8b26"],["/static/media/s10.fe726fa7.png","fe726fa73c136ca49d4e822facf55e40"],["/static/media/s11.61f2d1ae.png","61f2d1aebb58e4eff37fa3cd9355b819"],["/static/media/s12.c6c9d713.png","c6c9d7137c34dd0c653b463b0c75bb1a"],["/static/media/s2.506810a8.png","506810a8083d0ebc82c7c607b57828cb"],["/static/media/s3.b1041e12.png","b1041e122c1c8ec974623880e1b546d0"],["/static/media/s5.8c35c23a.png","8c35c23a36aa20e86993f0bbafbde2f2"],["/static/media/s6.bd889d5a.png","bd889d5ae435ad8893b1b6c968995749"],["/static/media/s7.56861044.png","56861044d545a418dc78728f6583ec7d"],["/static/media/s9.ff3d5b03.png","ff3d5b030c7df7d1d341d8e6c65f56cd"],["/static/media/solstice.8b42b52b.svg","8b42b52babab4eb4110294a77fa39fff"],["/static/media/subscriptions.bf1225f5.PNG","bf1225f57d52e50fcb9815fc84a6b253"],["/static/media/upcoming.92a3555e.PNG","92a3555e497d1b861803ea325d7d1938"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var c=new Request(t,{credentials:"same-origin"});return fetch(c).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),c="index.html";(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),a=urlsToCacheKeys.has(t));var n="/index.html";!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL(n,self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});
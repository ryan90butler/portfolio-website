"use strict";var precacheConfig=[["/index.html","a44ba6554547ea47d914c00bf2e2268f"],["/static/css/main.70a01fab.css","857f23aca533e9d4f03f8bb530654205"],["/static/js/main.e3386465.js","4c9037d581f3a6a9ed86f053bfde6c1b"],["/static/media/JS.7f130501.png","7f130501681cb3d0129f266820c78b24"],["/static/media/api.2c4784ab.svg","2c4784ab577ba417ffd2ad98d47b8f4f"],["/static/media/codebar.63ee979e.png","63ee979eb274240a6b672ced375a38d7"],["/static/media/codebar1.12095903.png","120959037f3ec64a55238cc4cb8208e4"],["/static/media/codebar2.caf861e4.png","caf861e45d61fbbc665931e1f6ff456b"],["/static/media/css.0f2f4554.svg","0f2f4554ab6d918dee8bc9a4dbca753a"],["/static/media/email.229079c8.png","229079c8f5240851cece598cf8eee770"],["/static/media/github.1acf1264.svg","1acf12649c0fc70b4441430701fc1587"],["/static/media/html.46a69c28.svg","46a69c2814acd1e0939bfa563e4b7cec"],["/static/media/me.a9e183fb.jpeg","a9e183fb317d4aaf9df9a69bdcf65f29"],["/static/media/mocha.77e9c015.png","77e9c015ee20d43c1ca24750e38754b3"],["/static/media/mountains.5cf341c0.jpg","5cf341c0c5fcbe7f9d3b4fdb3b5a3907"],["/static/media/myPark.6b61cb96.png","6b61cb96ee5ad6dfb61298ce82580ba8"],["/static/media/myPark1.009f942f.png","009f942fdd0c6434bcf4aa31590096b7"],["/static/media/myPark2.dc0b4a82.png","dc0b4a82ebc2dc2088c2163817bcf20d"],["/static/media/node.e87d5cff.png","e87d5cffe8cecda810bfa6010cfce41e"],["/static/media/postgres.d7c985e7.svg","d7c985e7cca077dc2d77f89a66573e35"],["/static/media/react.4009eef3.svg","4009eef3b3e291f296e71962c70895c5"],["/static/media/redux.5ae1af16.svg","5ae1af16ffc2f55bd739da81176302e9"],["/static/media/sass.74c36290.png","74c362907475d0d7f0d59d0fb662135c"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],c=new URL(t,self.location),n=createCacheKey(c,hashParamName,a,/\.\w{8}\./);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,c),e=urlsToCacheKeys.has(a));var n="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});
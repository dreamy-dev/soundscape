importScripts("https://storage.googleapis.com/workbox-cdn/releases/6.5.4/workbox-sw.js");const s="cool-cache",t=["/assets/"];self.addEventListener("install",e=>{e.waitUntil((async()=>{(await caches.open(s)).addAll(t)})())});self.addEventListener("push",()=>{event.waitUntil(registration.showNotification("Hello!",{body:"This is a push notification!"}))});workbox.precaching.precacheAndRoute([{"revision":null,"url":"code/app-about.5cbba0bc.js"},{"revision":null,"url":"code/index.805acaef.js"},{"revision":null,"url":"code/index.88d277e7.css"},{"revision":"ea044f19f4dbd48d145eddd3ad492236","url":"index.html"},{"revision":"43da6340821a90124ea5e21807c0d767","url":"manifest.json"},{"revision":"91badfb5fbde539542977a540149f2db","url":"registerSW.js"},{"revision":"f980e63aa43f3506cd8e3aa8385ee823","url":"manifest.webmanifest"}]||[]);
//# sourceMappingURL=sw.js.map

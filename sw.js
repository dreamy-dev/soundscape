importScripts("https://storage.googleapis.com/workbox-cdn/releases/6.5.4/workbox-sw.js");self.addEventListener("push",()=>{event.waitUntil(registration.showNotification("Hello!",{body:"This is a push notification!"}))});workbox.precaching.precacheAndRoute([{"revision":null,"url":"code/app-about.0415676b.js"},{"revision":null,"url":"code/index.729f4d80.css"},{"revision":null,"url":"code/index.a646a7e7.js"},{"revision":"cf55ea43e757debe7c0e6b2ba0c53fd3","url":"index.html"},{"revision":"c9c6f74df5057546d3f6e0a3db199bf3","url":"manifest.json"},{"revision":"91badfb5fbde539542977a540149f2db","url":"registerSW.js"},{"revision":"f980e63aa43f3506cd8e3aa8385ee823","url":"manifest.webmanifest"}]||[]);
//# sourceMappingURL=sw.js.map

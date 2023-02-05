importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/6.5.4/workbox-sw.js'
)

const CACHE_NAME = 'cool-cache'

// Add whichever assets you want to pre-cache here:
const PRECACHE_ASSETS = ['/assets/']

// Listener for the install event - pre-caches our assets list on service worker install.
self.addEventListener('install', (event) => {
    event.waitUntil(
        (async () => {
            const cache = await caches.open(CACHE_NAME)
            cache.addAll(PRECACHE_ASSETS)
        })()
    )
})

self.addEventListener('push', () => {
    event.waitUntil(
        registration.showNotification('Hello!', {
            body: 'This is a push notification!',
        })
    )
})

workbox.precaching.precacheAndRoute(self.__WB_MANIFEST || [])

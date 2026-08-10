const CACHE_NAME = 'kagaribi-menu-v71'; // Update this version number to invalidate old caches

// 1. Install the Service Worker
self.addEventListener('install', (event) => {
    self.skipWaiting(); // Forces the waiting service worker to become the active service worker
});

// 2. Activate and CLEAN UP old caches (This is the new part!)
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    // If the cache name doesn't match our current 'v2', delete it!
                    if (cacheName !== CACHE_NAME) {
                        console.log('Clearing old cache:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
    // Ensure the new service worker takes control of clients immediately
    return self.clients.claim(); 
});

// 3. Intercept image requests
self.addEventListener('fetch', (event) => {
    // Only target image files (jpg, png, jpeg, gif, webp)
    if (event.request.destination === 'image') {
        event.respondWith(
            caches.open(CACHE_NAME).then((cache) => {
                return cache.match(event.request).then((cachedResponse) => {
                    // 1. Return from cache if available
                    if (cachedResponse) {
                        return cachedResponse;
                    }
                    // 2. Otherwise, fetch from server and cache it
                    return fetch(event.request).then((networkResponse) => {
                        cache.put(event.request, networkResponse.clone());
                        return networkResponse;
                    });
                });
            })
        );
    }
});
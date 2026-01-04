const CACHE_NAME = 'teslapilot-v1';
const ASSETS = [
  './',
  './index.html',
  'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css',
  'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js',
  'https://cdn.jsdelivr.net/npm/leaflet-geometryutil@0.9.3/src/leaflet.geometryutil.min.js',
  'https://unpkg.com/leaflet-edgebuffer@1.2.0/src/leaflet.edgebuffer.js'
];

// Installation : Mise en cache des ressources critiques
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('TeslaPilot: Mise en cache des ressources');
      return cache.addAll(ASSETS);
    })
  );
  self.skipWaiting();
});

// Activation : Nettoyage des anciens caches
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) return caches.delete(key);
        })
      );
    })
  );
});

// Stratégie Fetch : Cache First avec Network Fallback
self.addEventListener('fetch', (e) => {
  // On ne gère pas les requêtes vers l'API Overpass (données temps réel) via le cache
  if (e.request.url.includes('overpass-api.de')) {
    return e.respondWith(fetch(e.request));
  }

  e.respondWith(
    caches.match(e.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(e.request);
    })
  );
});

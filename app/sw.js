// Service worker mínimo: guarda la "carcasa" de la app para que abra rápido.
// Las llamadas a Supabase van siempre a red (el fichaje necesita conexión).
const CACHE = 'fichaje-v1';
const SHELL = ['./', './index.html', '../config.js?v=1793277094', './icon-192.png', './icon-512.png', './icon-180.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  if (url.origin !== location.origin || e.request.method !== 'GET') return;
  // Red primero; si no hay red, la copia guardada.
  e.respondWith(
    fetch(e.request).then(r => { const cp = r.clone(); caches.open(CACHE).then(c => c.put(e.request, cp)); return r; })
      .catch(() => caches.match(e.request, { ignoreSearch: true }))
  );
});

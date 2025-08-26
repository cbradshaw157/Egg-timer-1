const CACHE_NAME = "egg-timer-v1";
const urlsToCache = [
  "perfect-egg-timer.html",
  "manifest.json",
  "alarm.mp3",
  "icon.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

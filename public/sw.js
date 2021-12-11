self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open("static").then((c) => {
      return c.addAll(["./", "./favicon.ico", "./manifest.json", "./img/icon-192.png", "./src/main.js"]);
    })
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((r) => {
      return r || fetch(e.request);
    })
  );
});

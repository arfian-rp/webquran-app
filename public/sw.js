self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open("static").then((c) => {
      return c.addAll(["./", "./img/icon-192.png"]);
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

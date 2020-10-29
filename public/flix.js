let cacheUserData = "user_data";

this.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(cacheUserData).then((data) => {
      data.addAll([
        "/static/js/bundle.js",
        "/static/js/main.chunk.js",
        "/static/js/0.chunk.js",
        "index.html",
        "/Banner.js",
        "/Banner.css",
        "/Nav.js",
        "/Nav.css",
        "/Row.js",
        "/Row.css",
        "/requests.js",
        "/axios.css",

        "/",
      ]);
    })
  );
});

this.addEventListener("fetch", (event) => {
  if (!navigator.onLine) {
    event.respondWith(
      caches.match(event.request).then((resp) => {
        if (resp) {
          return resp;
        }
        let requestUrl = event.request.clone();
        fetch(requestUrl);
      })
    );
  }
});

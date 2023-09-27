// index.js
console.log("Bun Running.");
var server = Bun.serve({
  async fetch(req) {
    const url = new URL(req.url);
    switch (url.pathname) {
      case "/scanner.ts":
        return new Response(Bun.file(import.meta.dir + "/main/scanner.ts"), {
          headers: {
            "Content-Type": "text/javascript; charset=utf-8"
          }
        });
      case "/scanner.html":
      case "/":
        return new Response(Bun.file(import.meta.dir + "/scanner.html"), {
          headers: {
            "Content-Type": "text/html; charset=utf-8"
          }
        });
      default:
        return new Response("404!");
    }
  }
});
console.log(`Listening on http://localhost:${server.port} ...`);

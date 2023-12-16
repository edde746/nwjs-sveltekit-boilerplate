const portfinder = require("portfinder");
const { Server } = require("node-static");
const http = require("http");

/** @type {NWJS_Helpers.WindowOpenOption} */
const options = {};

const main = async () => {
  const port = await portfinder.getPortPromise({ port: 9000 });

  var file = new Server("./app", { cache: 0 });

  http
    .createServer((req, res) => {
      req
        .addListener("end", () =>
          file.serve(req, res, (err) => err && err.status === 404 && file.serveFile("/index.html", 200, {}, req, res)),
        )
        .resume();
    })
    .listen(port, "localhost");

  nw.Window.open("http://localhost:" + port, options, () => {});
};

if (process.env.NODE_ENV === "development") nw.Window.open("http://localhost:5173", options, () => {});
else main();

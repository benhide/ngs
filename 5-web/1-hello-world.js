const http = require("http");

const requestListener = (req, res) => {
  console.dir(req, { depth: 0 });
  res.end("Hello World\n");
};

const server = http.createServer();
server.on("request", requestListener);

server.listen(4242, () => {
  console.log("Server is running...");
});

const http = require("http");
const fs = require("fs");

const hostname = '121.4.99.190';
const port = 80;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
	res.setHeader("Content-Type", "text/html;charset='utf-8'");
	fs.readFile("./index.html", "utf-8", function (err, data) {
		if (err) {
			console.log("index.html loading is failed :" + err);
		}
		else {
			console.log("index.html loading is failed :" + err);
			res.end(data);
		}
	});
})

server.listen(port, () => {
  console.log(`服务器运行在 http://${hostname}:${port}/`);
})
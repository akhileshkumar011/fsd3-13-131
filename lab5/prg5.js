const http = require("http");

const server = http.createServer((req, res) => {

    if (req.url === "/") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end("<h1>Hello Server</h1>");

    } else if (req.url === "/products") {

        const products = [
            { id: 1, name: "bottle" },
            { id: 2, name: "laptop" }
        ];

        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(products));

    } else {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end("<h1>404 - Page Not Found</h1>");
    }
});

server.listen(5001, () => {
    console.log("prog5 is running on port 5001");
});
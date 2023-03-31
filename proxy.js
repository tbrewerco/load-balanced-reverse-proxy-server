// dependencies
import httpProxy from 'http-proxy';

// create proxy
const proxy = httpProxy.createProxyServer({});

// define array containing urls of servers
const servers = ['http://localhost:3000', 'http://localhost:3001', 'http://localhost:3002'];

let currentIndex = 0;

// create server
const server = httpProxy.createServer((req, res) => {

    // set target server and forward request to target
    const target = servers[currentIndex];
    proxy.web(req, res, { target });

    // increment current index and ensure it stays within bounds of server array
    currentIndex = (currentIndex + 1) % servers.length;

});

// set listener to listen to proxy port
const proxyPort = 8080;

server.listen(proxyPort, (req, res) => {
    console.log(`Reverse proxy server listening on port ${proxyPort}`);
});

// import dependencies
import express from 'express';

// create servers
const createServers = (port) => {
    const app = express();

    app.get('/', (req, res) => {
        res.send(`Hello from server on port ${port}`);
    });

    app.listen(port, (req, res) => {
        console.log(`listening on port ${port}`)
    });

};

const ports = [3000, 3001, 3002];

// run servers
ports.forEach(createServers);
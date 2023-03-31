# Load-Balanced Reverse Proxy Server

This repository contains a basic implementation of a load-balanced reverse proxy server using Node.js and the `http-proxy` library. The reverse proxy server distributes incoming client requests across multiple servers, ensuring efficient utilization of resources.

## Features

- Round-robin load balancing
- Easy horizontal scalability
- Isolation for backend servers

## Prerequisites

- [Node.js](https://nodejs.org/) 

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Start app.js and proxy.js: `node app.js proxy.js`
4. Test setup by making requests to `http://localhost:3000`, `http://localhost:3001` and `http://localhost:3002`

## Customizing the Configuration

Customize by modifying the servers array in proxy.js
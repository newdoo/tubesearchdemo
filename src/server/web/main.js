/* eslint-disable no-console */
const express = require('express')
const next = require('next')
const routes = require('../../common/routes')
const http = require('http')
const https = require('https')
const dev = process.env.NODE_ENV !== 'production'
const app = next({dir: './src/client', dev})
const handler = routes.getRequestHandler(app)
const api = require('./api/handler')
const config = require('../../common/config')
const conn = require('../mongoDB/conn')
conn();

const devProxy = {
  '/webTest': {
    target: 'https://stipop.io/webTest',
    pathRewrite: { '^/webTest': '/' },
    changeOrigin: true
  }
}

const Youtube = require("youtube-api")
// const fs = require("fs")
// const readJson = require("r-json")
// const Lien = require("lien")
// const Logger = require("bug-killer")
// const opn = require("opn")
// const prettyBytes = require("pretty-bytes")

let server
app
  .prepare()
  .then(() => {
    server = express()

    // Set up the proxy.
    if (devProxy) {
      const proxyMiddleware = require('http-proxy-middleware')
      Object.keys(devProxy).forEach(function (context) {
        server.use(proxyMiddleware(context, devProxy[context]))
      })
    }

    server.get('/api/:id/:msg', (req, res) => {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Credentials", "true");
      res.header("Access-Control-Allow-Methods", "GET");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  
      return req.params.msg === undefined ? app.render(req, res, '/') : api(req, res);
    });

    // server.get('/oauth2callback', (req, res) => {
    //   console.log('/oauth2callback callback');
    //   console.log(req.query.code);

    //   const oauth = Youtube.authenticate({
    //     type: "oauth", 
    //     client_id: config.youtubeClientID,

    
    //     client_secret: config.youtubeClientSecert, 
    //     redirect_url: config.youtubeRedirectUrl
    //   });

    //   oauth.getToken(req.query.code, (err, tokens) => {
    //     console.log(tokens);
    //   });

    //   return app.render(req, res, '/');
    // });

    // Default catch-all handler to allow Next.js to handle all other routes
    server.all('*', (req, res) => handler(req, res))

    config.createServer === 'http' ? createHttpServer(server) : createHttpsServer(server);
  })
  .catch(err => {
    console.log('An error occurred, unable to start the server')
    console.log(err)
  })


const createHttpServer = server => {
    http.createServer(server).listen(config.port, () => {
        console.log(config.name, 'http listen (', config.port, ')');
    });
}

const createHttpsServer = server => {
    var options = {  
        key: fs.readFileSync(config[process.env.NODE_ENV].key),
        cert: fs.readFileSync(config[deprocess.env.NODE_ENV].cert)
    };

    https.createServer(server).listen(options, config.port, () => {
        console.log(config.name, 'https listen (', config.port, ')');
    });
}
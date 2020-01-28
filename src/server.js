const Hapi = require('@hapi/hapi');
const routes = require('./routes/getRoutes.js');


const server = Hapi.Server({
  host: 'localhost',
  port: 8080,
});
server.route(routes);


module.exports = server;

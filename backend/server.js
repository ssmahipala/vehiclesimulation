const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

// Load custom routes
const customRoutes = require('./routes.json');
server.use(jsonServer.rewriter(customRoutes));

server.use(middlewares);
server.use(router);

server.listen(3001, () => {
  console.log('JSON Server is running');
});

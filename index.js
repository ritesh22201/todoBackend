const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middleware = jsonServer.defaults();
const port = process.env.PORT || 5000;

server.use(middleware);
server.use(router);

server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})
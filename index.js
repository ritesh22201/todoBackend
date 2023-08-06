const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middleware = jsonServer.defaults();
require('dotenv').config();

server.use(middleware);
server.use(router);

server.listen(process.env.PORT, () => {
    console.log(`Server is listening on port ${process.env.PORT}`);
})
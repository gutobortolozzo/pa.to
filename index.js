const server = require('./src/services/index');
const port = parseInt(process.env.PORT);

server.listen(port, _ => console.log(`listening on port ${port}`));
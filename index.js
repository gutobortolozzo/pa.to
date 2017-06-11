const server = require('./src/services/index');
const port = parseInt(process.env.PORT);

require('./src/jobs/ttlJob').register();

server.listen(port, _ => console.log(`listening on port ${port}`));
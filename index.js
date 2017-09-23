const port = parseInt(process.env.PORT);

const migrations = require('./src/migrations/migrations');

migrations.migrate()
    .then(_ => {

        const server = require('./src/services/index');
        return server.listen(port, _ => console.log(`listening on port ${port}`));
    })
    .catch(err => {
        console.log("SIGTERM ERROR", err);

        process.exit(1);
    });
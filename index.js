const express = require('express');
const app = express();
const useragent = require('express-useragent');

const port = parseInt(process.env.PORT);

app.use(useragent.express());


app.get('/', (request, response) => {

    response.send(request.useragent);

});

app.listen(port, _ => console.log(`listening on port ${port}`));
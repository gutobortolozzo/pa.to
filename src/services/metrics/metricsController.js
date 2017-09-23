const metrics = (request, response) => {

    const key = request.params.key;

    const queryParameters = request.query;

    console.log('request.query', request.query);

    if(!key){
        response.status(400);
        response.send({ error : "invalid key" });
        return response;
    }

    const decodedKey = decode(key);

    const query = {
        where : {
            key : decodedKey
        }
    };

    const urlEntity = db.Access.findAll(query);

    response.status(200).send(urlEntity);

    return response;
};

module.exports = {
    '/:key/metric' : {
        method  : 'GET',
        handler : metrics
    }
};

const supportedOperations = ['count', 'summary', 'raw'];

const checkQueryFieldsAndValues = (queryParameters) => {

    const queries = Object.keys(queryParameters);

    return queries.map(query => {

        const isFieldSupported = db.Access.fieldsName.indexOf(query) >= 0;

        let isOperationSupported;

        if(Array.isArray(queryParameters[query])){

            isOperationSupported = queryParameters[query]
                .map(operation => supportedOperations.indexOf(operation) >= 0)
                .reduce((acc, current) => acc && current);
        } else {
            isOperationSupported = supportedOperations.indexOf(queryParameters[query]) >= 0;
        }

        if(!isFieldSupported || !isOperationSupported) {

            const error = {};

            error[query] = `Parameter ${query}`;

            if(!isOperationSupported){
                error[query] += ` and operation${Array.isArray(queryParameters[query]) ? 's' : ''} ${queryParameters[query]}`
            }

            error[query] += ` not supported`;

            error['supported'] = `Supported operations ${supportedOperations} and parameters ${db.Access.fieldsName}`;

            return error;
        }

    }).filter(el => !!el);
};

module.exports.checkQueryFieldsAndValues = checkQueryFieldsAndValues;



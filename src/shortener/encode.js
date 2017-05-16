const dictionary = require('./dictionary');

module.exports = (numericalKey) => {

    let encoded = '';

    while(numericalKey > 0){
        encoded += dictionary.alphabet[numericalKey % dictionary.base];

        numericalKey = parseInt(numericalKey / dictionary.base, 10);
    }

    return encoded.split('').reverse().join('');
};
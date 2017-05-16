const dictionary = require('./dictionary');

module.exports = (encodedKey) => {

    let i = 0;

    for(let index = 0; index < encodedKey.length; index++){
        i = i * dictionary.base + dictionary.alphabet.indexOf(encodedKey[index])
    }

    return i;
};
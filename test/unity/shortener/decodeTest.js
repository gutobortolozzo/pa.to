require('should');

const encode = require('../../../src/shortener/encode');
const decode = require('../../../src/shortener/decode');

describe('Shortener decoder', () => {

    it('should encode and decode number 10', () => {

        const encoded = encode(10);
        decode(encoded).should.be.eql(10);
    });

    it('should encode and decode number 100', () => {

        const encoded = encode(100);
        decode(encoded).should.be.eql(100);
    });

    it('should encode and decode number 1000', () => {

        const encoded = encode(1000);
        decode(encoded).should.be.eql(1000);
    });

    it('should encode and decode number 10000', () => {

        const encoded = encode(10000);
        decode(encoded).should.be.eql(10000);
    });

    it('should encode and decode number 100000', () => {

        const encoded = encode(100000);
        decode(encoded).should.be.eql(100000);
    });

    it('should encode and decode number 1000000', () => {

        const encoded = encode(1000000);
        decode(encoded).should.be.eql(1000000);
    });

    it('should encode and decode number 10000000', () => {

        const encoded = encode(10000000);
        decode(encoded).should.be.eql(10000000);
    });

    it('should encode and decode number 100000000', () => {

        const encoded = encode(100000000);
        decode(encoded).should.be.eql(100000000);
    });

    it('should encode and decode number 1000000000', () => {

        const encoded = encode(1000000000);
        decode(encoded).should.be.eql(1000000000);
    });

    it('should encode and decode number 10000000000', () => {

        const encoded = encode(10000000000);
        decode(encoded).should.be.eql(10000000000);
    });

    it('should encode and decode number 100000000000', () => {

        const encoded = encode(100000000000);
        decode(encoded).should.be.eql(100000000000);
    });

    it('should encode and decode number 1000000000000', () => {

        const encoded = encode(1000000000000);
        decode(encoded).should.be.eql(1000000000000);
    });

    it('should encode and decode number 9999999999999', () => {

        const encoded = encode(9999999999999);
        decode(encoded).should.be.eql(9999999999999);
    });

});
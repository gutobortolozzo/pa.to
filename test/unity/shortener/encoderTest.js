require('should');

const encode = require('../../../src/shortener/encode');

describe('Shortener encoder', () => {

    it('should encode number 10', () => encode(10).should.be.eql('u'));

    it('should encode number 100', () => encode(100).should.be.eql('mP'));

    it('should encode number 1000', () => encode(1000).should.be.eql('?h'));

    it('should encode number 10000', () => encode(10000).should.be.eql('m1h'));

    it('should encode number 14550', () => encode(14550).should.be.eql('Fqy'));

    it('should encode number 10586', () => encode(10586).should.be.eql('FBF'));

    it('should encode number 100000', () => encode(100000).should.be.eql('WJh'));

    it('should encode number 1000000', () => encode(1000000).should.be.eql('Fwhh'));

    it('should encode number 2142982', () => encode(2142982).should.be.eql('L2+C'));

    it('should encode number 10000000', () => encode(10000000).should.be.eql('R9Vh'));

    it('should encode number 100000000', () => encode(100000000).should.be.eql('B-1Ah'));

    it('should encode number 1000000000', () => encode(1000000000).should.be.eql('Yd?Xh'));

    it('should encode number 10000000000', () => encode(10000000000).should.be.eql('Lfe=Mh'));

    it('should encode number 100000000000', () => encode(100000000000).should.be.eql('-Zy+5h'));

    it('should encode number 1000000000000', () => encode(1000000000000).should.be.eql('efqtqIh'));

    it('should encode number 1000000000000', () => encode(99999999999999).should.be.eql('vb9O0MOt'));

});
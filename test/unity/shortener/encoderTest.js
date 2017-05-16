require('should');

const encode = require('../../../src/shortener/encode');

describe('Shortener encoder', () => {

    it('should encode number 10', () => encode(10).should.be.eql('u'));

    it('should encode number 100', () => encode(100).should.be.eql('mM'));

    it('should encode number 1000', () => encode(1000).should.be.eql('?f'));

    it('should encode number 10000', () => encode(10000).should.be.eql('m_:'));

    it('should encode number 14550', () => encode(14550).should.be.eql('F4,'));

    it('should encode number 10586', () => encode(10586).should.be.eql('msl'));

    it('should encode number 100000', () => encode(100000).should.be.eql('HE9'));

    it('should encode number 1000000', () => encode(1000000).should.be.eql('FSvh'));

    it('should encode number 2142982', () => encode(2142982).should.be.eql('$tmu'));

    it('should encode number 10000000', () => encode(10000000).should.be.eql('lOlU'));

    it('should encode number 100000000', () => encode(100000000).should.be.eql('FQqm7'));

    it('should encode number 1000000000', () => encode(1000000000).should.be.eql('gaFx2'));

    it('should encode number 10000000000', () => encode(10000000000).should.be.eql('BT2STP'));

    it('should encode number 100000000000', () => encode(100000000000).should.be.eql('4potgZ'));

    it('should encode number 1000000000000', () => encode(1000000000000).should.be.eql('Lxo$kh='));

    it('should encode number 1000000000000', () => encode(99999999999999).should.be.eql('y~T*o-:d'));

});
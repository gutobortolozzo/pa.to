require('should');

const link = require('../../../src/link/link');

describe('Links', () => {

    it('should validate google.com', () => {
        link.isValidLink('google.com').should.be.ok();
    });

    it('should validate admin.getlucy.co/login', () => {
        link.isValidLink('admin.getlucy.co/login#').should.be.ok();
    });

    it('should validate pa.to', () => {
        link.isValidLink('http://www.pa.to').should.be.ok();
    });

    it('should validate http://www.google.com', () => {
        link.isValidLink('http://www.google.com').should.be.ok();
    });

    it('should validate https://www.google.com', () => {
        link.isValidLink('https://www.google.com').should.be.ok();
    });

    it('should validate http://www.clipartbest.com/cliparts/9Tz/6RB/9Tz6RBexc.png', () => {
        link.isValidLink('http://www.clipartbest.com/cliparts/9Tz/6RB/9Tz6RBexc.png').should.be.ok();
    });

    it('should validate https://www.google.com/search?site=&tbm=isch&source=hp&biw=1676&bih=953&q=duck+duck&oq=duck+duck&gs_l=img.3..0l3j0i30k1l5j0i10i30k1j0i5i30k1.2348.3337.0.3611.10.10.0.0.0.0.122.860.6j3.9.0....0...1.1.64.img..1.9.857.0..0i10k1.VU8q-XaTveA#imgrc=AZbuX_rNJ74zuM:', () => {
        link.isValidLink('https://www.google.com/search?site=&tbm=isch&source=hp&biw=1676&bih=953&q=duck+duck&oq=duck+duck&gs_l=img.3..0l3j0i30k1l5j0i10i30k1j0i5i30k1.2348.3337.0.3611.10.10.0.0.0.0.122.860.6j3.9.0....0...1.1.64.img..1.9.857.0..0i10k1.VU8q-XaTveA#imgrc=AZbuX_rNJ74zuM:').should.be.ok();
    });

    it('should validate ftp://ftp.funet.fi/pub/standards/RFC/rfc959.txt', () => {
        link.isValidLink('ftp://ftp.funet.fi/pub/standards/RFC/rfc959.txt').should.be.ok();
    });

    it('should validate ftp://user@host:port', () => {
        link.isValidLink('ftp://user@host:port').should.be.ok();
    });

    it('should validate ftp://qualquer43_12@host.com:3011/home/coisas', () => {
        link.isValidLink('ftp://qualquer43_12@host.com:3011/home/coisas').should.be.ok();
    });

    it('should validate magnet:?xt=urn:btih:2fe3bc23e98e39d7426bd9bab89e0f1bcaa27016&dn=Alok%2C+Bruno+Martini%2C+Zeeba+-+Hear+Me+Now+%5BVBR%3D0%5D.mp3&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Fzer0day.ch%3A1337&tr=udp%3A%2F%2Fopen.demonii.com%3A1337&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Fexodus.desync.com%3A6969', () => {
        link.isValidLink('magnet:?xt=urn:btih:2fe3bc23e98e39d7426bd9bab89e0f1bcaa27016&dn=Alok%2C+Bruno+Martini%2C+Zeeba+-+Hear+Me+Now+%5BVBR%3D0%5D.mp3&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Fzer0day.ch%3A1337&tr=udp%3A%2F%2Fopen.demonii.com%3A1337&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Fexodus.desync.com%3A6969').should.be.ok();
    });

    it('should validate api.getlucy.co/v1/brand/10/good', () => {
        link.isValidLink('api.getlucy.co/v1/brand/10/good').should.be.ok();
    });

    it('should validate https://admin.getlucy.co/v1/feed/10&page=3', () => {
        link.isValidLink('https://admin.getlucy.co/v1/feed/10&page=3').should.be.ok();
    });

    it('should validate magnet:?xt=urn:btih:562097a776bfe32d8349519b79a6ef740d9d42f9&dn=Ana+Carolina+e+Seu+Jorge+-+Ao+Vivo&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Fzer0day.ch%3A1337&tr=udp%3A%2F%2Fopen.demonii.com%3A1337&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Fexodus.desync.com%3A6969', () => {
        link.isValidLink('magnet:?xt=urn:btih:562097a776bfe32d8349519b79a6ef740d9d42f9&dn=Ana+Carolina+e+Seu+Jorge+-+Ao+Vivo&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Fzer0day.ch%3A1337&tr=udp%3A%2F%2Fopen.demonii.com%3A1337&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Fexodus.desync.com%3A6969').should.be.ok();
    });

    it('should invalidate empty', () => {
        link.isValidLink().should.be.not.ok();
    });

});

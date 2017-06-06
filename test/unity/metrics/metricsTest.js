require('should');
const UserAgent = require('express-useragent').UserAgent;
const access = require('../../../src/metrics/access');

describe('Metrics', () => {

    it('should identify curl', () => {

        const userAgent = new UserAgent().parse('curl/7.51.0');

        const response = access.userAgent(userAgent);

        response.isMobile.should.be.eql(false);
        response.isDesktop.should.be.eql(false);
        response.isBot.should.be.eql(true);

        response.browser.should.be.eql('curl');
        response.version.should.be.eql('7.51.0');
        response.platform.should.be.eql('Curl');
    });

    it('should identify Chrome macos', () => {

        const userAgent = new UserAgent().parse('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36');

        const response = access.userAgent(userAgent);

        response.isMobile.should.be.eql(false);
        response.isDesktop.should.be.eql(true);
        response.isBot.should.be.eql(false);

        response.browser.should.be.eql('Chrome');
        response.version.should.be.eql('58.0.3029.110');
        response.platform.should.be.eql('Apple Mac');
    });

    it('should identify Firefox macos', () => {

        const userAgent = new UserAgent().parse('Mozilla/5.0 (Macintosh; Intel Mac OS X 10.12; rv:53.0) Gecko/20100101 Firefox/53.0');

        const response = access.userAgent(userAgent);

        response.isMobile.should.be.eql(false);
        response.isDesktop.should.be.eql(true);
        response.isBot.should.be.eql(false);

        response.browser.should.be.eql('Firefox');
        response.version.should.be.eql('53.0');
        response.platform.should.be.eql('Apple Mac');
    });

    it('should identify Edge Windows', () => {

        const userAgent = new UserAgent().parse('Mozilla/5.0 (Windows NT 10.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36 Edge/12.10136');

        const response = access.userAgent(userAgent);

        response.isMobile.should.be.eql(false);
        response.isDesktop.should.be.eql(true);
        response.isBot.should.be.eql(false);

        response.browser.should.be.eql('Edge');
        response.version.should.be.eql('12.10136');
        response.platform.should.be.eql('Microsoft Windows');
    });

    it('should random pa.to bot', () => {

        const userAgent = new UserAgent().parse('pa.to/9.023.1');

        const response = access.userAgent(userAgent);

        response.isMobile.should.be.eql(false);
        response.isDesktop.should.be.eql(false);
        response.isBot.should.be.eql(true);

        response.browser.should.be.eql('pa.to');
        response.version.should.be.eql('9.023.1');
        response.platform.should.be.eql('unknown');
    });
});

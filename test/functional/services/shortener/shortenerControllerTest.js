require('should');
const db = require('../../../../models');
const ResponseMock = require('../response');
const transactionUtil = require('../../transactionUtils');
const shortenerController = require('../../../../src/services/shortener/shortenerController');

describe('Shortener controller', () => {

    it('should shorten https://www.pa.to', async () => {

        const request = {
            body : {
                url : "https://www.pa.to"
            }
        };

        const response = new ResponseMock();

        await shortenerController['/shortener'].handler(request, response);

        response.statusCode.should.be.eql(200);
        response.content.key.should.be.ok();
        response.content.ttl.should.be.ok();
        response.content.url.should.containEql('http://pa.to/');
    });

    it('should not shorten www.pa.to', async () => {

        const request = {
            body : {
                url : "www.pa.to"
            }
        };

        const response = new ResponseMock();

        await shortenerController['/shortener'].handler(request, response);

        response.statusCode.should.be.eql(400);
        response.content.error.should.be.eql("invalid URL");
    });

    transactionUtil.transactionalTestHooks();
});
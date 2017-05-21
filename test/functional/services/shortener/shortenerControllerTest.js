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
        response.content.should.be.ok();
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
        response.content.should.be.ok();
    });

    transactionUtil.transactionalTestHooks();
});
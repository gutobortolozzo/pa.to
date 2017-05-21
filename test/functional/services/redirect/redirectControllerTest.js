require('should');
const ResponseMock = require('../response');
const transactionUtil = require('../../transactionUtils');
const fixture = require('./redirectControllerFixture.json');
const redirectController = require('../../../../src/services/redirect/redirectController');

describe('Redirect controller', () => {

    it('should redirect to pa.to', async () => {

        const request = {
            params : {
                key : "$AA"
            }
        };

        const response = await redirectController['/:key'].handler(request, new ResponseMock());

        response.statusCode.should.be.eql(302);
        response.content.should.be.eql('pa.to');
    });

    it('should redirect to https://pa.to', async () => {

        const request = {
            params : {
                key : "mTP"
            }
        };

        const response = await redirectController['/:key'].handler(request, new ResponseMock());

        response.statusCode.should.be.eql(302);
        response.content.should.be.eql('https://www.pa.to');
    });

    it('should redirect to unexistent hash', async () => {

        const request = {
            params : {
                key : "a"
            }
        };

        const response = await redirectController['/:key'].handler(request, new ResponseMock());

        response.statusCode.should.be.eql(400);
        response.content.error.should.be.eql('key not found');
    });

    transactionUtil.transactionalTestHooks(fixture);
});
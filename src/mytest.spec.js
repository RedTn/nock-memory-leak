const nock = require('nock');

describe('nock test', () => {
    afterAll(() => {
        nock.cleanAll();
        nock.restore();
    });

    it('true', () => {
        expect(true).toBe(true);
    });
});
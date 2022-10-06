const fileB = require('./file-b');

describe('file-B', () => {
    it('defines B', () => {
        expect(fileB.B).toBeDefined();
    });

    it('doB returns B', () => {
        expect(fileB.doB()).toEqual('B');
    });
});
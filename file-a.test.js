const fileA = require('./file-a');
const fileB = require('./file-b');

describe('file-a', () => {
    beforeEach(() => {
        console.log(fileB.B);
    });

    it('defines A', () => {
        expect(fileA.A).toBeDefined();
    });
});
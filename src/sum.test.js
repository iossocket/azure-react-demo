import {sum} from './sum';

describe('test sum function', function () {
    it('should return 3 when add 1 and 2', function () {
        expect(sum(1, 2)).toBe(3);
    });
});

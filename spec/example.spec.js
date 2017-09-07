var Example = require('../lib/example');

describe("Example suite", function() {
    it("trueAnd true should return true", function() {
        expect(Example.trueAnd(true)).toEqual(true);
    });

    it("trueAnd false should return false", function() {
        expect(Example.trueAnd(false)).toEqual(true);
    });
});

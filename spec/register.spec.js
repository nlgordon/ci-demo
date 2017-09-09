var Register = require('../lib/register');

describe("Register functionality", function() {
  it("display displays 0 at start", function(){
    expect((new Register()).display()).toEqual("0.00");
  })
});

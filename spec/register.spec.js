var Register = require('../lib/register');

describe("Register functionality", function() {
  it("display displays 0 at start", function(){
    expect((new Register()).display()).toEqual("0.00");
  })
  it("Adding 0 should not change total", function() {
      var register = new Register();
      register.addAmount(0);
      expect(register.display()).toEqual("0.00");
  });
});

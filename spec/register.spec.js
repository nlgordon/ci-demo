var Register = require('../lib/register');

describe("Register functionality", function() {
  it("display retuns 0 at start", function(){
    expect((new Register()).display()).toEqual("0");
  })
  it("display returns 1.00 when total is 1.00", function(){
    var ourRegister= new Register();
    ourRegister.alice=100;
    expect(ourRegister.display()).toEqual("100")
  })
  it("Adding 0 should not change total", function() {
      var register = new Register();
      register.addAmount(0);
      expect(register.display()).toEqual("0");
  });
});

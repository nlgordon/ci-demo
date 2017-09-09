module.exports = (function() {

  function Register() {
    this.alice=0;
    this.display=function (){
      return (""+this.alice);
    }
  };
  return Register;
})();

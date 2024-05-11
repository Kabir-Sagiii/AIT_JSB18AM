var city = "delhi";
let username = "xyz";
const id = 101;

function f1() {
  var price = 101; //function scope
  function f2() {} //function scope

  console.log(f1);
  if (true) {
    console.log(city);
  }
}

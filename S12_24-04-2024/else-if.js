var x = 50;

var y = 40;

var z = 20;

if (x > y) {
  //25 > 40 = false
  //false
  console.log("x is greater then y");
} else if (x > z) {
  // 25 > 20 = true
  console.log("x is greater then z");
} else if (y > z) {
  // 25 > 20 = true
  console.log("y is greater then z");
} else {
  console.log("x is smaller then y and z");
}

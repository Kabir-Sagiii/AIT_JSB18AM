//Generator function
function* f1() {
  console.log("Hello, First Line");
  console.log("Hello, Second Line");
  console.log("Hello, Third Line");
  yield 100;
  console.log("Hello, 4 Line");
  console.log("Hello, 5 Line");
  console.log("Hello, 6 Line");
  yield 500;
}
var generatorObject = f1();

var obj = generatorObject.next();
console.log(obj);

var obj2 = generatorObject.return();
console.log(obj2);

var obj1 = generatorObject.next();
console.log(obj1);

var obj1 = generatorObject.next();
console.log(obj1);

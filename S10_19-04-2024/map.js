var arr = [10, 20, 30, 40, 50, 60]; // * 100 = []

var newArray = arr.map(function (element, index) {
  var product = element * 100;
  return product;
});

console.log(arr);

console.log(newArray);

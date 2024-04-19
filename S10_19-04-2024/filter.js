var arr = [10, 20, 30, 40, 50, 60];

var newFilteredArray = arr.filter(function (element, index) {
  return element < 20;
});

console.log(newFilteredArray);

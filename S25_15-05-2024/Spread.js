var obj1 = {
  name: "sagar",
  city: "delhi",
  gender: "male",
};

var obj2 = {
  ...obj1,
  id: 101,
  pin: 6789876,
  city: "Mumbai",
};

// console.log(obj1);
// console.log(obj2);

var arr1 = [10, 20, 30, 40];

var arr2 = ["sagar", ...arr1];

console.log(arr1);
console.log(arr2);

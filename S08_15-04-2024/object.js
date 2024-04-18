//In How many ways we can create a object
//1 . Literal Notation
//2. Constructor Concept

var obj = {
  name: "Raj Verma",
  id: 101,
  address: {
    city: "Delhi",
    pincode: 787898,
  },
};

// console.log(obj);

console.log(obj.name);
console.log(obj.address.city);
console.log(obj["address"]["city"]);

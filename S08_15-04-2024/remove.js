var emp = {
  id: 10101,
  productName: "xyz",
  price: 5698,
};
console.log(emp);

//Delete
delete emp.id;
delete emp.price;
delete emp["productName"];

console.log(emp);

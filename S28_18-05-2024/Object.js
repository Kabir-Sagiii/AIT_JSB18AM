var json = {
  name: "sagar",
  city: "delhi",
};

var obj1 = JSON.stringify(json);

console.log(obj1);
console.log(typeof obj1);

console.log(JSON.parse(obj1));

console.log(json);
console.log(typeof json);
// console.log(json.city);

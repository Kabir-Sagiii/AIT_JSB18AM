var obj = {
  name: "Raj Verma",
  id: 101,
};
console.log(obj);

//new Property
obj.gender = "male";
obj.email = "raj@gmail.com";
obj.phone = 98888888;
// obj["city"] = "Mumbai";
obj.address = {
  city: "delhi",
};

obj.address.pincode = 9999;
obj["address"]["country"] = "India";

console.log(obj);
console.log(obj["address"]["country"]);

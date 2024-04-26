var obj1 = {
  username: "Rahul sharma",
  gender: "male",
  city: "Delhi",
};
//  obj1.username
//   obj1['username']

for (let key in obj1) {
  console.log(key, ":", obj1[key]); //obj1.key it is invalid
}

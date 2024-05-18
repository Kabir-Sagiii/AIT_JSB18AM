var user = {
  name: "sagar",
  id: 101,
  gender: "male",
  city: "delhi",
};

function printDetails() {
  let { city, name } = user;

  console.log(name);
  console.log(city);
  console.log(name, "is from", city);
}
// printDetails();

function printCity({ city, gender }) {
  console.log(city, gender);
}

printCity(user);

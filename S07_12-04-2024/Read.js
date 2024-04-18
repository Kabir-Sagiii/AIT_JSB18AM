var user = {
  id: 101,
  name: "Raj",
  gender: "male",
};

var nameValue = user.name;
console.log(nameValue);

var genderValue = user["gender"];
console.log(genderValue);

var emp = {
  empName: "Sonal",
  address: {
    city: {
      cityname: "delhi",
      citycode: 10001,
    },
    state: "MH",
  },
};

var empCity = emp.address.city.citycode;
console.log(empCity);

//How to access citycode value using square brackets Notation ?

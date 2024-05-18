class Users {
  id;
  name;
  gender;
  static city;

  constructor() {
    this.id = 101;
    this.name = "Riya";
    this.gender = "female";
    Users.city = "Delhi";
  }

  changeName(newName) {
    this.name = newName;
    // this.display();
  }

  static changeCity(newCity) {
    Users.city = newCity;

    // this.name = "Rohan"; Invalid
    // this.city = newCity; Valid
  }

  display() {
    console.log(this.id, this.name, this.gender, Users.city);
  }
}

var user1 = new Users();

var user2 = new Users();

user1.display();
user2.display();
console.log("---------------");
user1.changeName("Rohan");

user1.display();
user2.display();

Users.changeCity("Mumbai");

user1.display();
user2.display();
console.log("---------------");

// user1.display();
// Users.changeCity("Pune");
// user1.display();

// user1.gender = "male";

// Users.city = "Mumbai";
// user1.display();

// display() // Invalid

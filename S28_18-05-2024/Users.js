class Users {
  id;
  name;
  gender;

  constructor() {
    this.id = 101;
    this.name = "Riya";
    this.gender = "female";
  }
  changeName(newName) {
    this.name = newName;
    this.display();
  }

  display() {
    console.log(this.id, this.name, this.gender);
  }
}

var user1 = new Users();

user1.display();
user1.gender = "male";

// display() // Invalid

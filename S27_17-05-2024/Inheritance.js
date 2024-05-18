class A {
  id;
  username;

  constructor() {
    this.id = 401;
    this.username = "raj verma";
  }

  display() {
    console.log(this.id, this.username);
  }

  changeName(newname) {
    this.username = newname;
  }
}

class B extends A {
  city;
  gender;

  constructor() {
    super(); // first line in the constructor
    this.city = "mumbai";
    this.gender = "male";
  }

  display() {
    //different logic
    console.log(this.city, this.gender, this.id, this.username);
  }

  print() {
    //child display()
    this.display();

    //parent display()
    super.display();
  }
}

var b1 = new B();
var a1 = new A();

b1.print();

// b1.display(); // Child

// b1.changeName("rohan");
// b1.display();

// a1.changeName("Ashwini");

class Product {
  pId = 101;
  pName = "vivo A27 Pro";
  price = 40000;

  display() {
    console.log(this.pId, this.pName, this.price);
  }

  changePrice(newPrice) {
    this.price = newPrice;
    this.display();
  }

  changeName(newName) {
    this.pName = newName;
    this.display();
  }
}

var product1 = new Product();

var product2 = new Product();

// product1 =
//{pid:"",pname:"",price:"",display:function(){}}

// product1.display();
// console.log(product1.price);
// console.log(product1.rating); //insertion operation //accessing

product1.price = 80000;

product1.display();
product2.display();

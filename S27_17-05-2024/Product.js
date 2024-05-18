class Product {
  id;
  productName;
  price;
  rating;

  constructor(id, name, price, rating) {
    this.id = id;
    this.productName = name;
    this.price = price;
    this.rating = rating;
  }

  display() {
    console.log(this.id, this.productName, this.price, this.rating);
  }
}

var p1 = new Product("101", "Samsung galaxy", 75000, 4.7);
p1.display();

var p2 = new Product("501", "Vivo A32", 50000, 3.9);
p2.display();

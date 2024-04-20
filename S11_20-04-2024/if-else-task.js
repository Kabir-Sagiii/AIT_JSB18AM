var productData = {
  pName: "Iphone 15",
  price: 150000,
  inStock: "outofstock",
};

//WAF to print the given product is available or it is out of stock
function productAvalability() {
  if (productData.inStock == "instock") {
    console.log("Avaliable");
  } else {
    console.log("Out of Stock");
  }
}

productAvalability();

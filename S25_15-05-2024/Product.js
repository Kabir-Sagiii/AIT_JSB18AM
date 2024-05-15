var productName = "Samsung Galaxy ultra";

var price = 1000;

function changePrice(newPrice) {
  price = newPrice;
  console.log(price);
}

export default { changePrice, price, productName };

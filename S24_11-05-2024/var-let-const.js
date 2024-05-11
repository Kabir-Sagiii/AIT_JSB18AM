var city = "Delhi"; // Global
let username = "xyz"; //Global
const id = 101; // Global

function myScope() {
  var price = 100; // Function Scope
  let pName = "abc product"; //  Blocke Scope

  if (true) {
    var rating = 4.5; //function Scope
    let gender = "male"; //Block Scope
    empName = "Siddharatha"; // Global
  }
  console.log(rating);
  //   console.log(gender); //Invalid
  if (true) {
    let category = "something";
    console.log(rating);
    // console.log(gender) Invalid
  }
}
// if (true) {
//   console.log(rating);   Invalid
// }

myScope();

// console.log(price);  Invalid

console.log(empName);

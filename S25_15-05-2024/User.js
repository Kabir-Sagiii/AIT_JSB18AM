// export var username = "Raj"; //module scope

// export var city = "Delhi";

// export function printUserFullName() {
//   console.log(username, "Reddy");
// }

var username = "Raj"; //module scope

var city = "Delhi";

function printUserFullName() {
  console.log(username, "Reddy");
}

function f1() {
  console.log("f1 is called");
}

export { city, printUserFullName, username };

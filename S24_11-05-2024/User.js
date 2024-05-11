var userName = "Riya Reddy"; // Global Scope
console.log(module);

function newUser() {
  //Global Scope
  console.log("newUser is created");
}

module.exports = {
  userName, // Module Scope
  newUser,
};

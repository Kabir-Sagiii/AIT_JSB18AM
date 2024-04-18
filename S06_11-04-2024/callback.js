function f1(x) {
  x();
}

function f2() {
  console.log("f2 is called");
}

f1(f2);

f1(function () {
  console.log("Anonymous function is called");
});

f1(() => {
  console.log("Arrow function is called");
});

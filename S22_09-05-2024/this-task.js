var obj1 = {
  c: 100,
};

var obj2 = {
  c: 500,
};

var obj3 = {
  c: 1000,
};

function add(a, b) {
  var result;
  result = a + b + this.c; //10 + 10 + 100
  console.log(result);
}

// add(10, 10); // obj1  // 120

// add(20, 20); // obj2  // 540

// add(30, 30); //obj3   //1060

add.call(obj1, 10, 10); //120

add.call(obj2, 20, 20); //540

add.call(obj3, 20, 20); //1040

add.apply(obj2, [50, 30]); //580

// var x = add.bind(obj3);
// x(100, 100); //1200

// var x = add.bind(obj3, 200, 200);
// x(); //1400

// add.bind(obj2, 10, 50)(); //560

add.bind(obj2)(20, 50); //570

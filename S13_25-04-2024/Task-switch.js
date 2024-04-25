function calculator(operator, operand1, operand2) {
  var result;
  switch (operator) {
    case "+":
      result = operand1 + operand2;
      break;
    case "-":
      result = operand1 - operand2;
      break;
    case "*":
      result = operand1 * operand2;
      break;
    case "/":
      result = operand1 / operand2;
      break;
    default:
      result = "InValid Operator";
  }

  console.log(result);
}

calculator("+", 50, 50);

calculator("-", 50, 50);

calculator("*", 50, 50);

calculator(".", 50, 50);

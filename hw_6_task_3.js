function makeSumFunction(num1) {
  return function(num2) {
    return num1 + num2;
  }
}

const sum5 = makeSumFunction(5);
let result = sum5(3);
console.log(result);

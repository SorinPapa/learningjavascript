//function definition/declaration

function AddValues(num1, num2) {
  return num1 + num2;
}

const firstValue = AddValues(3, 4);
const secondValue = AddValues(10, 11);

//function expression
const add = function (num1, num2) {
  return num1 + num2;
};
const thirdValue = add(5, 6);
const values = [firstValue, secondValue, thirdValue, add(5, 2)];
console.log(values);

// challenge 1

const calculateTotal = function (subTotal, tax) {
  return subTotal + tax;
};
console.log(calculateTotal(5, 2));

// challenge 2
const order1 = calculateTotal(100, 10);
const order2 = calculateTotal(3, 5);
const order3 = calculateTotal(7, 3);

console.log(order1,order2,order3)

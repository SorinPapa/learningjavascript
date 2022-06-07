// Functions-declare, invoke
// const bob = "Bob";
// const susy = "Susy";
// const anusca = "Anusca";

// function greet(name,second) {
//   console.log(second)
//   console.log("Hello there, " + name);
// }

// // greet Bob
// greet("Bob");

// // greet Anna
// greet("Anna");

// // greet Susy
// greet("Susy");
// greet(anusca, "Sorin")

// Ex. vreau sa calculez suprafa peretelui in cm . 1_inch=2.54_cm

function calculate(value) {
  return value * 2.54; // 1 inch = 2.54cm
}

const height = calculate(100);
const width = calculate(10);

const dimensions = [width, height];
console.log(dimensions);

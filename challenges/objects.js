const person = {
  name: "Sorin",
  surname: "Sorinescu",
  age: 39,
  petOwner: false,
  friends: ["Andrei", "Andreea", "Matei", "Maria"],
  greeting: function () {
    console.log("Hello, my name is John!");
  },
};

console.log(person.friends[2], person.friends[3]);
person.greeting();

// challenge
console.log(" ");
console.log("Challenge:");
const car = {
  make: "Dodge",
  model: "Challenger",
  year: 1970,
  colors: ["black", "red"],
  hybrid: false,
  drive: function () {
    console.log("driving...");
  },
  stop() {
    console.log('stopped!!!');
  },
};

console.log(car.make);
console.log(car.colors[0]);
car.drive();
car.stop();
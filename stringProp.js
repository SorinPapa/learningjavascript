// let text = "Peter Jordan";
// const person = {
//   name: "peter", //property
//   greeting() {
//     console.log("Hey, I'm Peter!"); // method
//   },
// };

// console.log(person);
// console.log(person.name);
// person.greeting();

let text = " Sorin Papa";
let result = text.length;
console.log(result);
console.log(text.length);
console.log();

console.log(text);
console.log(text.toLocaleLowerCase());
console.log(text.toUpperCase());
console.log(text.charAt(0));
console.log(text.charAt(text.length - 1));
console.log(text.indexOf("a"));
console.log(text.trim());
console.log(text.startsWith(" Sorin"));
console.log(text.trim().toLocaleLowerCase().startsWith("so"));
console.log(text.includes("or"));
console.log(text.slice(-3));

// templeta literals( cu versiunea ES 6)
const name = "John";
const age = 25;
const sentence = "hey, it's " + name + " and he is " + age + "years old.";
const value = `hei, my name is ${name} and i'm ${age} old, and i'm doing great !`;
console.log(value);
console.log(sentence);

// string challenge :
function fullNAme(firstName, lastName) {
  const fullName = `${firstName} ${lastName}`;
  return fullName;
}

console.log(fullNAme("sorin", "papa").toUpperCase());

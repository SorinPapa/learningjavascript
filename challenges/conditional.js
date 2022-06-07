// if (2 > 3) {
//   console.log("Hello IF!");
// } else {
//   console.log("Hello Else");
// }

// const dice = 7;
// if (dice === 1) {
//   console.log("you got one");
// }

// if (dice < 1 || dice > 6) {
//   console.log("you did not roll the dice");
// }

const zar = 4;
switch (zar) {
  case 1:
    console.log("You got one");
    break;
  case 2:
    console.log("You got two");
    break;
  case 3:
    console.log("You got three");
    break;
  case 4:
    console.log("You got four");
    break;
  case 5:
    console.log("You got five");
    break;
  case 6:
    console.log("You got six");
    break;
  default:
    console.log("You did not roll the dice!");
}

// challenge
const person1 = {
  name: "susan",
  age: 25,
  status: "resident",
};

const person2 = {
  name: "bob",
  age: 17,
  status: "tourist",
};

if (person1.age >= 18 && person1.status === "resident") {
  console.log(person1.name + " can vote!");
} else {
  console.log(person1.name + " can't vote");
}

if( person2.age >=18 && person2.status === 'resident'){
  console.log(person2.name + ' can vote!');
}else {
  console.log(person2.name+ ' can\'t vote!');
}
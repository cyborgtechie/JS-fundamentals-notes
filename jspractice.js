//VARIABLES AND DATA TYPES 

// let example with 'string'
// strings are used to reprrsent text
let mentor = 'Joshua';
console.log(mentor);

//var example
var name = 'Maria';
console.log(name);

// const example
const hairColor = 'Brown';
console.log(hairColor);


let state;
state = 'NJ';
console.log(state);


// let greeting = "say Hi";
//   if (true) {
//     let greeting = "say Hello instead";
//     console.log(greeting);//"say Hello instead"
//   }
//   console.log(greeting);//"say Hi"

//Boolean
let userName = true;
 if (!userName) { //inverts true statement and makes it false
   redirectToLoginScreen(); //will redirect user if userName is wrong or "false"
 }

 //null example >> used for absence of value
 let nullExample = null;
  console.log(nullExample);

// Function example
var personName = "Maria"

function sayHello(personName) {
    const greeting = 'Hey' + personName;
    console.log(greeting);
};


//object example
let animal = {
  dog: 'bark',
  cat: 'meow',
  cow: 'moo'
};

  let sound = animal.dog; // uses dot notaton to call out dog sound only
  console.log(sound);


// array example
const myDogs= ['Mickey', 'Kitu']; //elements are arranged starting from 0
console.log(myDogs[1]); //prints second element in the array 

// // Key Terms

// Function
    //functions should have a clear name & have a single responsibility
    function alertHellWorld() { //example of a function
      alert('Hello World'); //main block of function, tells the function what to do
    }
    alertHelloWorld; //this calls the function above and displays alert that says Hello World

// Argument
    //a value that gets passed to the function when its called
    alert("Hello Word"); //Text displayed inside () is the argument u want to make for alert

// Parameter
    //variable that holds place on an argument when the function is defined
    //same as argument
    function exampleOfParameters(parameter1, parameter2) {
      
    };

// Determinate
    //a function's results should always be the same no matter how many times it's called


// Call signature
    //comes after function name is defined >> ()
    // holds parameters or arguments
    function alertHelloWorld () { //call signature, has no parameters

    }

// example of a function with parameter in the call signature
  function hello(name) {
    return 'Hello ' + name + '!';
  }
  console.log(hello('Maria'));


// function expression
  function myName(name1, name2) {
    console.log("myName");
  }

// function declaration
function myName() {
    console.log("myName");
  }

//arrow function
  const add = (num1, num2) => {
  console.log('Adding', num1, num2);
  return num1 + num2;
};

const sayHello = () => {
    console.log('hello world');
}
// sayHello();


const add = ( a, b) => {
    let result = a + b;
    return result;

}
console.log(add(4,8));

//
const multiply = (a, b) =>  a * b;  // we use directly when only one time return value.

// console.log(multiply(5, 8));


// 2 arguments keywords

function addNumber() {
    console.log(arguments);
}

addNumber(12, 33, 44, 55, 33)  // same code written in  arrow functions 

//
const addNumbers = () => {
    console.log(arguments);
}
addNumbers( 22, 33, 44, 44, );  // we can not find arguments in arrow functions 

// spreadd operators

const addNumberss = (...nums) => { // to use spreadd operators to get results
    console.log(nums);
}

addNumberss( 22, 333, 44, 44, 45) 






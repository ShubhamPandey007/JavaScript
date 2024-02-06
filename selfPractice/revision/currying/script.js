// what is most use of curring in javascript

function add (a, b, c) {
   return a + b + c;
}
console.log(add(2, 4, 5,));  //This is normal function which is add three numbers;

// with arrow function 

const add1 = (a) => (b) => (c) => a + b + c;
console.log(add1(2)(4)(3)); // 9 


// This is called currying, to add three numbers, call function and return the another function .
function addNumber (a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        };
    };
}

console.log(addNumber(2)(4)(4));

//

function sendAutoEmail ( to) {
    return function (subject) {
        return function (body) {
            console.log(`Sending Email to ${to} with subject ${subject}: ${body}`);
        };
    };
}

let step1 = sendAutoEmail("shubham@gmal.com");
let step2 = step1("New Order confirmation");

step2("Hey Shubham, here is something for you!")


// hmae ye tino kam tabhi kiye jab tino kw tino argument available the, step1 ne function curry ka use kiya aur function ko call kiya , dusare developer ne step1 ka use karke apna step kiya, aur last vale step3 ne call kiya 

//
const sendtoEmail = (to) => (subject) => (body) => `Sending Email to ${to} with subject ${subject}: ${body}`;

let step3 = sendAutoEmail("shubham@gmal.com");
let step4 = step1("New Order confirmation");

step4("Hey Shubham, here is something for you! This is arrow function.")

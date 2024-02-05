// composition me ham esa function banate hai jo hare sabhi funciton ko compose kare;

function add (a, b) {
    return a + b;
}

function square (val) {
    return val * val;
}

// const addResult = add(2, 4);
// console.log(square(addResult));

function addTwoandSquare (a, b) {
    return square(add(a, b));
}
console.log(addTwoandSquare(3, 5));

/////////////////////////////////////////////////////////

// koe bhi two fun ko compose kar pa raha hu using this composition;

function add1 (a, b) {
    return a + b;
}
function square1 (val) {
    return val * val;

}
function multiply (a, b) {
    return a * b;
}

// function composeTwoFunction( fn1, fn2,) {
//     return function (a, b) {
//         return fn2(fn1(a, b));
//     };
// }

const c2f = (fn1, fn2) => (a, b) => fn2(fn1(a, b));
// const composeTwoFunction = (multiply, square);
const task = c2f(multiply, square1);
console.log(task(3,4));

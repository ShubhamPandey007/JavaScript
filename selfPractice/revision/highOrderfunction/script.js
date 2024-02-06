// High order function and callback

// High order function => A function that takes function as an argument
// jab ek function, ek function ko hi argument ke rup me accept karta hai to usee hi hight order function kahte hai.

function add (a, b, cb) {   // jo ye add hai na ek high order function hai because ye ek function "cb" ko as a argument accepte kar raha hai
    let result = a + b;   // jo function ek function ko as a argument accept kar sake use ham high order function kahte hai.
    cb(result);
}

add(2, 5, function (val) {
    console.log(val);
})
add(400, 10, (res) => console.log(res)); // this is call back function, => bacilly jis function ko call kiya jata hai use ham bolte hai call back function.


//forEach => forEach function array ke ek-ek element ko leta hai, aur function me as a agrument pass kar deta hai, aur us argument ka ham kuchh kar sakte hai jaise ki-> print karo jo marji so karo.

const students = ["Rahul",  "Shyam", "kundan",]

function print(n) {
    console.log(n);
}

students.forEach(print);

//forEach ek high order function jo function ko argument ke rup me accept karta hai.

const person = ["Anil", "rakesh", "gabbar", "Mannu"]

person.forEach((val) => console.log(val))
person.forEach((val) => console.log(val + "Pandey"))

// .map function => .map ek new array return karta hai, but 'forEach' new array return nahi karta
person.map((val) => console.log(val));


// new  => array ke number ko double karna hai

const number = [1, 2, 3, 4, 5, 6]

number.forEach((num) => console.log(num * 2))


// new array return karna  hai

const numbers = [1, 2, 3, 4, 5, 7]

let newArr = []
numbers.forEach((num) => newArr.push(num * 2))

console.log(newArr)


// use return 

const numberN = [ 1, 2, 3, 4, 5, 6 ]

function double(n) {
    return n * 2;
}                                          //This is basic diff .map vs forEach 
// let newArray = numberN.map(double);     // This is return value 
let newArray = numberN.forEach(double);  // forEach will not return the value ,
console.log(newArray)



// find => array ke andar element ko find karta hai
const number = [1, 2, 3, 4, 6, 8]

let ans = number.find((num) => num === 4);
console.log(ans)


//findIndex => value na return karke index number return karta hai

 const numbers = [1, 2, 3, 4, 5, 6, 6, 7, 9]

 let res = numbers.findIndex((num) => num === 6);
 console.log(res);


 //filter => just supose mujhe array me se even no ko return karna hai

 const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 
 const result = values.filter((num) => num % 2 == 0);

 console.log(result);


 //slice => ek start index leta aur ek last index leta hai, but last index ko vo include nahi karta hai, aur ek sub array retun karta hai
 const num = [1, 3, 4, 6, 6, 7, 8, 8]

 const newnum = num.slice(1, 5)
 console.log(newnum);


 // splice => array me se value ko remove karta hai, aur bad me usi ko return kar deta hai

 const num1 = [1, 3, 4, 5, 6, 7, 8, 8, 9, 4]

let res1 = num1.splice(3, 5)
console.log(res1);
console.log(num1);


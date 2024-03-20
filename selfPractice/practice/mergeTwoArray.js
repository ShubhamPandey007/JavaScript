let data = [3, 5,6,7,8]
let data2 = [4,8,9,10]
// const prompt = require('prompt-sync')();
// const data = prompt("Enter your array of values: ");
// const data2 = prompt("Enter your array of values: ")
let data3 = [];

for( let i= 0; i<data.length; i++){
    data3[data.length+i] = data2[i];
}
console.log(data3);


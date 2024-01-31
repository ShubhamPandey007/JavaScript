//Array => When we store multiple values in a one variable

const student = ["Raj", "keshv", "Manohar"]
student[0] = "shubham" // change the value inside the array with the help of index no

student.push ("Omkar");


console.log(student)
console.log(student.length);
console.log(student[1]);
console.log(student.indexOf("keshv")) //return "1" means value usme exist karti hai agar "-1" aata hai to matlab value usme exist nahi karti


// 
const person = ["Raghav", "Kunal", "Arnav", "shubham"]

for ( let i = 0; i < person.length; i++) {
    console.log(person[i])
}

// jab ek jayada condition ho to else if ka use karte hai vot bhi if aur else ke beech me.

const age = 70;

if(age >= 80) {
    console.log("yes, your are an adult");
}
else if (age >= 18) {
    console.log("Yes, you can vote")
}
else {
    console.log("No, you can not vote")
}


// ternary operatror-- jab hamare pass exactly true or false condition hai to ham ternary operatror ka use kar sakte hai , keval ek hi condition hone par use kar sakte hai , ek se jayada hote par ham else if ka use karenge

const ages = 90;

// ages >= 18 ? console.log("yes") : console.log("No")
let result = ages >= 18 ? "yes" : "No";
console.log(result)

// normal function ke andar jav ham "this " ko use karte hai to vo function ke ander hi work karta hai , jase ki yaha  "this" obj ko refer kar raha hai , but "arrow function " ke case me global window ko accept karta hai, 

const obj = {
    value: 20, 
    myFunction: function () {
        console.log("value is  " + this.value);
        },
};

obj.myFunction();
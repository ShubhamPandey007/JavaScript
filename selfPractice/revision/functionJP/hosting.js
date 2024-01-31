sayHello();  // normal function me ham pahle function ko call kar sakte hai, aur bad me function ko define kar kar sakte hai, 

function sayHello() {
    console.log("heyy shubham");
}

// but arrow function me phale function ko enlsization karna padata hai then ham usko call kar sakte hai, arrow function me pahle function ko call nahi kar sakte.


sayHelloS();  // ReferenceError:  cannot access "sayHelloS" before initialization

const sayHelloS = () => {
    console.log('Hello');
}


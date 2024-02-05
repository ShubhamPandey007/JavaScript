 // closure is gives access to an outer function scope from an inner function

function main () {
    const name = "Shubham Pandey";

    function sayMyName () { 
        console.log(name);
    }
    sayMyName();
}
main();

//

function myMain (name) {
    function sayName () {
        console.log(name);
    }

    return sayName;
}
let consoleShubham = myMain ("shubham");
consoleShubham();
consoleShubham();

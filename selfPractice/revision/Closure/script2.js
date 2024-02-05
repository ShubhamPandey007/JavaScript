const myName = document.getElementById("myName");
const btn = document.getElementById("myButton");

function makeTextSizer (size) {

    function changeSize () {
        myName.style.fontSize = `${size}px`;
    }
    return changeSize;
    
}

const size12 = makeTextSizer(12);
const size52 = makeTextSizer(52);
const size5 = makeTextSizer(5);

btn.addEventListener('click', size52)


// counter and increment with clouser

function makeCounter ( ) {
    let count = 1;

    function increment () {
        console.log(count++);
    }
    return increment;
}

const counter1 = makeCounter();
counter1();
counter1();
counter1();



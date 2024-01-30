//switch -- ka use ham case ho select karne ke liye karte hai, like jab opction select karne ki condition ho

const option = 2;

switch(option) {
    case 1:console.log("Namaste");
    break;
    case 2:console.log("Hello")
    break;  // break es liye lagte hai ki agar condition true ho rahi hai to eske aage jave ki jarurat nahi hai
    case 3: console.log("Ranjhana");
    break;
    default: console.log("Invalid option") // jab koe bhi condition match na ho to default ko select karega.
}
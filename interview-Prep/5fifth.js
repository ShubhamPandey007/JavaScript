var fulname = "shubham pandey";

var obj = {
    fullname: "Hacked Full Name",

    prop: {
        fullname: "Inside Prop",
        getFullname: function() {
            return this.fullname;
        },
    },

    getFullname: function () {
        return this.fullname;
    },

    getFullnameV2: () => this.fullname, //This is what happenes in arrow function which refers to the window object or the global object, and here there is no window object with fullname hence undefined is being printed.

    getFullnameV3: (function () {
        // return this.fullname;
        return "shubham";
    })(),
};

console.log(obj.prop.getFullname());
console.log(obj.getFullname());
console.log(obj.getFullnameV2());
console.log(obj.getFullnameV3 ); 
// console.log(obj.getFullnameV3())  //iife is a property we can't call themselves.
// function demo(){
//     console.log("hello");
// }
// demo();
// demo();
// demo();
// // with parameters and arguments
// function add1(a,b){
//     console.log(a+b);
// }
// add1(5,6);
// add1(7,8)
// add1(3,4)
// add1(5,6)
// add1(10,30)

// function Addtocart(){
//     alert("product will added to cart successfully");
//     document.body.style.background="red";
// }

//function with out parameters

// function demo(){
//     console.log("without parameters");
// }
// demo();

//function with parameters

function userdetails(name, age,city){
    console.log(name);
    console.log(age);
    console.log(city);

}
userdetails("yeswanth",20,"hyderabad");

//anonymus function

// function(){
//     console.log("anonymus function");
// }()

//function expresion
let x=function(){
  console.log("function expresion is executing");
};
x();


//IIFE function
(function(){
    console.log("IIFE");
  })();


//arrow function
// function demo(){
//     console.log("hello");
// }
// demo();

let n=_=>console.log("arrow function");
n();
let c=a=>console.log(a);
c(5);
let v=(a,b)=>console.log(a+b);
v(5,6);

let d=_=>console.log("hi");
console.log("hello");
console.log("bye");
d();








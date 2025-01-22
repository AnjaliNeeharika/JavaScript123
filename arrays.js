let userData={
    name: "sam",
    age:25,
    city : "hyderabad"

};
console.log(userData.name , typeof(userData));
 
let x=JSON.stringify(userData);
console.log(x, typeof(x));

let y= JSON.parse(x);
console.log(y);
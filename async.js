// console.log(10);
// console.log(20);

// setTimeout(()=>{
//     console.log(30);
// })
// console.log(40);
// console.log(50);


//promise

// let p1=new Promise(()=>{});
// console.log(p1);


// let p2=new Promise((resolve, reject)=>{
//     resolve("success");
// });
// //console.log(p2);
// p2.then((res)=>{
//     console.log(res);
// }).catch(err=>console.log(err))
// .finally(()=>console.log("final"))


// let p3=new Promise((resolve, reject)=>{
//     reject("failure");
// });
// //console.log(p3);
// p3
// .then((res)=>console.log(res))
// .catch(err=>console.log(err))
// .finally(()=>console.log("final"))



//API fetching

function fetchusers(){
   let response= fetch("https://jsonplaceholder.typicode.com/users");
   //console.log(x);
   response.then(res=>{
    //console.log(res)
    //console.log(res.json());
    return res.json().then(data=>{
        console.log(data);
    })
   })
   .catch(err=>console.log(err))
}
fetchusers();


// function fetchusers(){
//     let response= fetch("https://jsonplaceholder.typicode.com/albums");
//     //console.log(x);
//     response.then(res=>{
//      //console.log(res)
//      //console.log(res.json());
//      return res.json().then(data=>{
//          console.log(data);
//      })
//     })
//     .catch(err=>console.log(err))
//  }
//  fetchusers();



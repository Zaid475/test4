
// // answer 1:
// // The different datatypes available in js Array are:

// // String
// // Number
// // Boolean
// // undefined
// // BigInt 
// // null


// // answer2:
// // the difference between let,const and var are:

// // var can be reassigned and redeclared and has global scope,supports hoisting
// // let can be reassigned but cannot be redeclared and has block scope,does not support hoisting
// // const cannot be reassigned and cannot be redeclared and it also has block scope,does not support hoisting

// // answer 3:
// // the difference between == and === operator is:
// // == checks only the data which is stored in the variable 
// // === checks both the data as well as the datatype of the data stored in the variable:
// // example of == :
// // 2=="2"---this will return true as the data is same
// // example of ===:
// // 2==="3"---this will return false as the data and the datatype both are different

// // answer 4:
// // the prototypal inheritance is a mechanism in which the child function can inherit the the prototypes of the parent function 


// // answer 6:
// // the difference between null and undefined is:

// // undefined will occur if a variable is only declared and does not have any data assigned to it example of undefined
// // example of undefined:
// // var a;  only variable a is declared and does not have any value assigned to it
// // console.log(a); this will return undefined as a does not have any value assigned


// // whereas in null a variable is declared and assigned will null
// // for example:
// // var b=null;
// // console.log(b);
// // this will return null when the value of b is console.logged();

// // answer 7:
// // the this keyword is used in the context of object and is used to refer to the object
// // for example:
// // function(){
// // const a={name:"zaid"};
// // console.log(this.name);    
// // }
// // in this the keyword "this" is written in place of the object name to access the value and will return the value of the key
  

// // answer 9:
// // with the help of promise we can decide that whether the code passed should be accepted or rejected
// it has three states:pending,resolve,reject
// // this can be undestood with the help of example:

// const abc=new Promise((resolve,reject=>{

//     setTimeout(()=>{
//         resolve(console.log("zaid"));

//     },2000)

// }))


// if we want to resolve we will use .then

// abc.then((resolve=>{
//     console.log("resolve");

// }))

// the same can be done for reject but using .catch to catch the error

// answer 10:
// the difference between sync and async is:


// in synchronous the compiler executes the code simultaneously and does not wait for the function if it is time consuming
// example:
// console.log("z");
// setTimeout(()=>{
// console.log("x")
// },2000);
// console.log("a")

// int this z and a will be printed first and later x will be printed


// in async the compiler waits for the timeexecuting function to be completed and then proceeds further

// ans 11:
// the concept of hoisting only works for var:
// example:
// var a;
// console.log(a);
// a=10

// this will return the output as 10 even if the value is assigned after printing the variable


// ans 12:

// the arrow function are similar to traditional functions and have the syntax as:
// const arrow=()=>{

// }

// arrow();to call the function

// ans 14
// try and catch can be used to handle the errors

// example:
// try{
//     console.log(zaid);
// }

// catch(error){
//     console.log(error,"error")

// }


// this will print the error as zaid is not defined since a variable name zaid is not declared;

// ans 13:

// eventloop comprises of 3 things i.e:
// call stack

// web api
// call back queue


// the code starts from the call stack and if there is a time consuming function present it moves to the web api where
// it is stored temporarily until it is completed and once it is completed it moves to the callback queue and then 
// finally moves to the call stack where it gets printed

// example:
// function new2(){
//     console.log("zaid");
// }


// setInterval(new2,2000);
// here since setinterval is a time consuming func it will move the the web api where it will be stored temporarily
// and then after its completion it moves to the callback queue from there it ultimtely moves back to call stack where it is printed









// answer 15:

// modules are single function or collection of related functions

// DSA

// const products=[
//     {name:"Laptop",category:"Electronics",price:1000},
//     {name:"Shirt",category:"Clothing",price:50},
//     {name:"Phone",category:"Electronics",price:500},
//     {name:"Shoes",category:"Clothing",price:80}
// ]


// function dsa1(products,cat){
// var p=products.filter((prod=>{
//       return  prod.category==cat;


//     }))
//     console.log(p)
//     var z=p.map(str=>{
//         console.log(`${str.name},${str.price}`)

//     })

// }

// dsa1(products,"Electronics")


// 4
// const inventory=[
//     {name:"Laptop",quantity:5,price:1000},
//     {name:"Shirt",quantity:0,price:50},
//     {name:"Phone",quantity:10,price:500},
//     {name:"Shoes",quantity:3,price:80}
    

// ];
// function dsa4(inventory){
//     var totalvalue=0;
//     inventory.forEach(prod => {
//         if(prod.quantity>0){
//             totalvalue=totalvalue+(prod.quantity*prod.price)
//         }

        
//     });
//     console.log(totalvalue);
// }

// dsa4(inventory);


// 6
// const employees=[
//     {name:"John",department:"Engineering",salary:1000},
//     {name:"Jane",department:"Marketing",salary:1500},
//     {name:"Jim",department:"Engineering",salary:500},
//     {name:"Jack",department:"HR",salary:800}
    

// ];


// function dsa6(employees){
//     var newarray=[];
//     var spamt=999;
//     employees.forEach(emp=>{
//         if(emp.salary>spamt){
//             newarray.push(emp.name);

//         }

//     })
// console.log(newarray);

// }
// dsa6(employees);





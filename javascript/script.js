console.log("Hello world")
// //reinitialize and redeclare
// var a;
// a=10;
// var a;
// a=20;
// //reinitialize
// let b=10;
// //let b;
// b=99;
// //canot redeclare or reinitialize
// const c=22;
// console.log(a);
// console.log(b);
// console.log(c);
// var num=10;
// var str="yash";
// var bool=true;
// var un;
// var nu=null;
// var big=488748387439n;
// var symbol=Symbol('li');

// console.log(typeof num);
// console.log(typeof str);
// console.log(typeof bool);
// console.log(typeof un);
// console.log(typeof nu);
// console.log(typeof big);
// console.log(typeof symbol);

// var arr=[1,2,3,4,5]
// console.log(typeof arr);
// console.log(arr);

// var obj={
//     name:"yash",
//     dept:"DS"
// }
// console.log(obj);
// console.log(typeof obj);

// var a=5;
// const r=(a%2==0)? '${a} is even':'${a} is odd';
// console.log(r);

// var a=80;
// const res=(a>90 && a<=100)?'A grade':(a>=80&&a<=90)?'B grade':(a>70&&a<80)?'c grade':'D grade';
// console.log(res)

// switch case

// var day=6;
// switch(day){
//     case 1:{
//         console.log("Monday");
//         break;
//     }
//     case 2:{
//         console.log("tuesday");
//         break;
//     }
//     case 3:{
//         console.log("wday");
//         break;
//     }
//     case 4:{
//         console.log("thday");
//         break;
//     }
//     case 5:{
//         console.log("friday");
//         break;
//     }
//     case 6:{
//         console.log("setday");
//         break;
//     }

//     case 7:{
//         console.log("sunday");
//         break;
//     }
//     default :{
//         console.log("invalid");
//     }
// }

// var a=0;
// do{
//     console.log("ex of do while");
// }while(a!=0);

//normal function

// function add(a,b){
    
//     console.log(a+b);
// }
// add(22,33);

//arrow function

// var add = ()=>{
    
//     console.log("I am arrow function");
// }
// add();

// with parameter
// var add = (a=0,b=0)=>{
    
//     console.log(a+b);
// }
// add(11,22);

// with return type

// var add=(a,b)=>{
//     return a+b;
// }
// console.log(add(11,22))

// call back function
// var add=(a,b,d)=>{
//     d(a+b);
// }
// var res=(r)=>{
//     console.log(r);
// }

// add(10,20,res);
// Example 2

// var add=(a,b,d)=>{
//     d(a+b);
// }

// add(10,20,(r)=>{
//     console.log(r);
// });

// var arr=[1,2,3];
// var arr1=[...arr,4,5,6];
// console.log(arr);
// console.log(arr1);
// //destructuring operator
// var [m1,m2,m3,m4,m5]=[98,97,95,88,99];
// console.log(m1);
// console.log(m2);
// console.log(m3);
// console.log(m4);
// console.log(m5);

// var {name,age,dept,contact}={
//     name:"yash",
//     age:24,
//     dept:["ds","cs"],
//     contact:{
//         mobile:8328521717,
//         email:'uday@gmail.com'
//     }
// }
// console.log(name);
// console.log(age);
// console.log(dept);
// console.log(contact);

// for..in
// var arr=[10,20,30,40];
// for(let i in arr){
//     console.log(i,arr[i]);
// }
// var arr=[10,20,30,40];
// for(let i in arr){
//     console.log(i,arr[i]);
// }
// var obj={
//     name:"tvc",
//     age:20,
//     isActive:true
// }
// for(let key in obj){
//     console.log(key,obj[key]);
// }
//for..of
// var arr=[10,20,30,40];
// for(let val of arr){
//     console.log(val);
// }
// //for each
// arr.forEach((val,index)=>{
//     console.log(val,index)
// })
// var arr=[1,2,3,4,5];
// //map
// var double=arr.map((val)=>(val*2));
// console.log(double);
// //filter
// var even=arr.filter((val)=>(val%2===0));
// console.log(even);
// //reducer
// var total=arr.reduce((sum,val)=>(sum+val),0);
// console.log(total);

//hosting

// console.log(a);
// var a;
// //function hosting
// add();
// function add(){
//     console.log(10+20);
// }

//scope 

//global
// var a=20;
// if(true){
//     var b=10;//block scope
// }
// console.log(a);
// console.log(b);

//let
// let a=10;
// if(true){
//     let b=20;
// }
// console.log(a);
// console.log(b)

// const
// const a=10;
// if(true){
//     const b=20;
// }
// console.log(a);
// console.log(b);
// document.writeln()

// variables
// data types
// operators



// let,const,var

// let a = 44
// const b = 44
// var c= 78
// document.writeln('hellow')



// 212321, number,integer
// "sarim", string
// 22.32 ,float
// boolean , true , false
//  null


// logical operators  AND NOT OR
// comparison operators < > != =< => == ===
// airthematic operators + - / *


// console.log()
// console.log("hello world")


//  let Ispaid = false
//  if(!Ispaid == true){
//  document.writeln("you are getting premium version!")
//  }

// else{
//     document.writeln("you arent getting premium version")
// }

// !true == false

//  agar Ispaid true ha

// !
// agar ispaid true nh ha


// let Iseven = 5
// if(Iseven%2==0){
//     alert("the number is even")
// }

// else {
//     alert("the number is odd")
// }



// objects
// arrays
// functions
// loops



// const user1 = {
//  name:"test123",
//  email:"test@123.com",
//  pasword:"123"
// }

// // json
// // javascript object notation


// console.log(user1.pasword)

// // "string" data type
// const country = ["pakistan","india","china" ]
// console.log(country[2])



// function Add(name ){
//     console.log("hello", name)
// }

// Add("sarim")
// Add("abdullah")
// Add("ali")
// Add("ahmed")

// hello 0
// i + 1 = 1
// 1 + 1 =


// i++
// incremental operator
//  i +1 == i++
// 1<3
// i+1=2
// 2 +1 =3
// 3<=3

// for(let i = 1; i<9; i++ ){
//     document.writeln("hello ", i  , "<br>")
// }

// while loop
// do while loop





let count = 0
let counter = document.querySelector(".count")
let btn = document.querySelector(".btn")
let btn2 = document.querySelector(".btn2")
let body = document.querySelector(".main")

function Incerase(){
    count++
    counter.innerText = count
}
function Decerase(){
    if(count == 0){
        return
    }    
    count--
    counter.innerText = count
}
function Reset(){
    count = 0
    counter.innerText = count
}
function Darkmode(){
    body.style.backgroundColor= "black"
    counter.style.backgroundColor= "royalblue"

}
function Lightmode(){
    body.style.backgroundColor= "white"
    counter.style.backgroundColor= "orange"

}
    
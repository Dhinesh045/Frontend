//  strict keyword  is using to follow the instructions properly don't follow the instructions output is error

"use strict"
let word="dhinesh"
console.log(word)

// if we add the value middle of the string using this type

let input="frontend"
let Value=`this is  ${input} programming`
console.log(Value)

// promise class
// Is ES6 module

let i=5
let usingPromise= new Promise((Solved,unSolved)=> {
    if(i==5){
        Solved ("condition is correct")
    }
    else{
        unSolved ("incorrect")
    }
})
let outPut=usingPromise
console.log(outPut)

let i1=5
let usingPRomise1= new Promise((Solved,unSolved)=> {
    if(i==5){
        Solved ("condition always is correct")
    }
    else{
        unSolved ("incorrect")
    }
})

// using Asychronus (ES6)


async function Async(){
    try{
        let res1= await usingPRomise1
        console.log(res1)
    }
    catch(error){
        console.log(error)
    }
}
Async()



//ParseInt convert string to number 

console.log("------------------using parseInt")

console.log(parseInt("7")+5,"----------using parseInt")

console.log(typeof [3,4,5,6],"----->type of")

setTimeout(() => {
    console.log("hello")
},5000)

setInterval(() => {
console.log("Hii")},2000)
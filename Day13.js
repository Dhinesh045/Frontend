let arr1=[3,3,4,5,6,7,8,9]

// using set keyword main advanatage is does not allow duplicate value

let arrToSet= new Set(arr1)

// has method is used to if value is present or not

let usingHas=arrToSet.has(4)
console.log(usingHas)

console.log(arrToSet,"---->set")
console.log(Array.from(arrToSet),"----setToArray")

// Date methods

let dateMethod= new Date()
console.log(dateMethod,"----->original date")
dateMethod.setMonth(8,18)
console.log(dateMethod,"----->modify date")

// class and Constructor

class person{
    name= "dhinesh kumar"
    ID=45
}

let userClass= new person
  console.log(userClass.name,"----->class")


//   Constructor

class mumbai{
    name= "dhinesh kumar"
    ID=45
    constructor(a){
        this.name=a
    }
}

let userMumbai= new mumbai("update value")
  console.log(userMumbai.name,"---->constructor")


  const n=10
  try{
  n=34
  console.log(n)
  } catch(y){
    console.log(y)
  }

  console.log("dhinesh")


//   float 
// precison is used to total count
// fixed is sued to count after the point

let y = 23.4738
console.log(y.toPrecision(5),"---->precision")
console.log(y.toFixed(2),"----> fixed")
console.log(y+5)

// used defined function

function arithmeticOperator(a,b) {
    if(a== "add"){
        b=b+5
    }
   else {
    b=b-5

    }
    return b
}
console.log("add")
console.log(arithmeticOperator("add",10,))

console.log("sub")
console.log(arithmeticOperator("sub",4,))

// IIFE Immediately Invoked Function Expression
// anonymous is we dont use class name or function just declrre empty bracket in the below code

console.log("IIFE")

let anonymous=(() =>{
    console.log("hiii")
})

()

// Arrow function is same as function but we need use arrow keyword 
// if we call arrow function using variabla name

let arrowFunction=() =>{
    console.log("Call Arrow Function")
}

arrowFunction()

// Closures /Higher Order Function

function Higher(){
    return function(){
        console.log("Closures Higher order Function","-----> higher order")
    }
}

Higher()()

// Hosting
console.log(j)
var j="value"
console.log(j)
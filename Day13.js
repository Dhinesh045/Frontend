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
  } catch(e){
    console.log(e)
  }

  console.log("dhinesh")
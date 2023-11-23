let arr=[3,1,100,4,9]
arr.sort(function(a,b) {
return a-b
})
console.log(arr)

// iteration

// foreach loop

// foreach loop is to print the values its not possible change the value  just loop the value

let arr1=[4,5,66,9,45]
let forEachEx=arr1.forEach((e) => {
    console.log(e,"----> foreachloop")
})

// map concept is change the value use return method but not affect the original value

let mapEx=arr1.map((e,i) => {
    console.log(e,"----> value")
    console.log(i,"----->index")
return e+=5
})
console.log(mapEx,"----> map concept")
console.log(arr1,"----> original array")


// filter function is used to give condition to apply all the value which value is apllicable for the condition that alue is print in output
// [3,5,6,7,8]---->input
// return e>5----->condition
// output [6,7,8]

let filterEx=arr1.filter((e) => {
    return e>5
})
console.log(filterEx,"---->filter function")


// find function is same as filter  but if contion is satisfiy in first condtion is leave the condition print the first value

let findEx=arr1.find((i,o) => {
    return i>5
})
console.log(findEx,"----> find Function")


// some function is atleast satisfy a one contion in the value is print "true" otherwise print "false"

let someEx=arr1.some((e,i) => {
    return e>5
})
console.log(someEx,"---->some function")


// every function is must satisfy all the condition if its failed print "false"

let everyEx=arr1.every((d,k) => {
    return d>5
})
console.log(everyEx,"----> every function")


// reduce function is used to assign the arithmetic operations of all array values 
// arr=[2,3,4] input
// return e+i
// add all array values --> 9

// "e" is default value is 0 and "i" is index value if add value to default value and the value move into "e"

let reduceEx=arr1.reduce((e,i) => {
    return e*i
})
console.log(reduceEx,"---->reduce function")




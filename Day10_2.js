let arr=[2,4,3,8,6]
console.log(arr,"----> originalvalue")
// push keyword is used to add value in suffix and unshift keyword is used to add value in prefix

arr.push(20)
arr.unshift(10,54,45)
console.log(arr,"----> push and unshift")

// pop keyword is used to delete value in suffix and shift keyword is used to delete value in prefix

arr.pop()
arr.shift()

console.log(arr,"-----> pop and shift")

// finding length of the value

console.log(arr.length,"---->find length")

// array to string

console.log(arr.toString(),"----> convert to string")

// spread operator using to merge all arrays used three dots every values  in starting

let arr5=[5,9,4,6]


console.log([arr5,["dhinesh",4,5,2],["say","my","name"]],"--->arrays")


let arrmerge=[...arr5,...["dhinesh",4,5,2],...["say","my","name"]]

console.log(arrmerge,"----> Merge arrays")

let arr6=[5,9,4,6,1]
console.log(arr6,"--->array")
arr6.sort()
console.log(arr6,"--->array sort")

// splice keyword is used to add the value particular place 

// we need three parameter to add the value
// first parameter is where you add the value give the index value
// second parameter is if you want delete after the given index value dont delete any value give "0"
// third parameter what value to add give the value

arr6.splice(1,0,"new","DK")

console.log(arr6,"---> add value using splice")

arr6.splice(1,2)

console.log(arr6,"---> delete value using splice")

// using slice method to what value we want to print the output give index 

console.log(arr6.slice(3,5),"--->using slice")

// using includes keyword output is true or false 
// if we need know this value is present is present or not

console.log(arr6.includes(5))

// join keyword is used to change the (,) to another speacial character

console.log(arr6.join("^"),"---> join keyword")

// reverse keyword is used to reverse the value

console.log(arr6.reverse(),"---> using reverse")






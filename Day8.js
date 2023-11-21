let name="dhinesh"
console.log(name)
console.log("update",name)



let obj={
    course: "javscript",
    day: "2"
}
console.log("key value",obj)
console.log("using object",obj.course)

// operator

console.log("Arithmetic",10+4)
console.log("Arithmetic",10-4)
console.log("Arithmetic",10*4)
console.log("Arithmetic",10/4)
console.log("Arithmetic",10%4)
let val=100==100 && 10!=5
console.log("logical",val)
console.log("logical",10>15)
let num=40
10>4 ? num=num+1 : num=20
console.log("ternary",num)

// Forloop

for( let i=0;i<=5;i++){
console.log("forloop","DK",i)
}

// whileloop
let arr=["dk1","dk2","dk3"]
let j=0;
while(j<arr.length){
    console.log("whileloop",arr[j]," ",j)
    j++
}
num1=4
if(num1>10){
    console.log("condition true")
}
else{
    console.log("condition failed")
}

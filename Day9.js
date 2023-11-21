switch ("no") {
    case "monday":
        console.log("its Monday")
        break;
    case "tuesday":
        console.log("its Tuesday")
        break;
    default:
        console.log("invalid", "--> using switch")
        break;
}
// for of loop

let arr1 = ["dhinesh", 45, false, "dk"]
for (let i of arr1) {
    console.log(i, " ---->    for of loop")
}

// do while

let j = 0;
do {
    console.log("Hi", "----> Do while loop")
    j++

} while (j > 40)

// object in loop

let obj = {
    dk: "dhinesh kumar",
    atm: "Automated teller machine"
}
obj["ns"] = "never stop"


console.log(obj)
for (let f in obj) {
    console.log(f, "---> key")
    console.log(obj[f], "---> value")
}

// arr empty
let arr2 = ["dk1", "dk2", "dk3"]
arr2[5] = "dk5"
console.log(arr2)

// inbuilt method
let str="say my name"
console.log(str)
let spli=str.split(" ")
console.log(spli,"---> strToArray")
for(let i=0;i<spli.length;i++){
    console.log(i,"---> countArrayLength")
}

let user2="Dhinesh Kumar"
console.log(user2.toUpperCase(),"---> uppercase")
console.log(user2.toLowerCase(), "---> lowercase")
console.log(user2.charAt(3),"---> charAt")

 //if given sequence is present in the value the result is true if not present result is false

console.log(user2.includes("Dh"),"---> includes")    
console.log(user2.includes("fu"),"---> includes")

// slice method if given atleast one value to start the slice if given "4" the print start the index of 4 and we given two values start and end lie "4 and 6" they index of "4 to 6"

console.log(user2.slice(3,9),"--->slice")
console.log(user2.slice(3),"--->slice")
console.log(user2.slice(-5,-1),"--->slice negative")

// substring method does not accept negative value only postive value

console.log(user2.substring(4,11),"---> substring")

// substr method this method is first value is greater and we give second value is smaller lie "5,2" the output is print 2 values after the 5 index.

console.log(user2.substr(5,2),"---substr")

// padstart method is used to add the lement before the value like the value is dhinesh is we use to padstart add the value before "dd" the ouput is "dddhinesh"
// we need to given number greaterthan value length

let pad="dhinesh"
console.log(pad.padStart(8,"dw"),"--->padStart")

// padend method is used uesd to add value after the given value
console.log(pad.padEnd(10,"dw"),"--->padEnd")

// trime keyword used to remove space in the value

let Trimm="    jonsnow    "
console.log(Trimm,"--->before trim")
console.log(Trimm.trim(),"--->after trim")

// repeat method to repeat the value if we give how many times

console.log(Trimm.repeat(5),"--->repeat method")

// Startwith keyword is used to the value is present or not if they value is presnt result is true they not present result is false

let stat="professors"
console.log(stat.startsWith("pro"),"--->startwith")

// indexof keyword is used to find the value of the index if we given "e" find value of index like "e is 4th index"

console.log(stat.indexOf("s"),"--->indexOf")

// last indexof is used to find the value of the index they search is revearse

console.log(stat.lastIndexOf("s"),"--->lastIndexOf")
// let arr1=["dhinesh","kumar","ECE"]
// console.log(arr1)

// console.log("reverse a word")

// for( i=arr1.length-1;i>=0;i--){
//     console.log(arr1[i])
// }



// console.log(splitMethod.reverse())

// for(i=splitMethod.length-1;i>=0;i--){
   
// }
// let originalStr = "Hello";
// let reversedStr = "";
// let str="dhinesh"
// for ( i = 0; i < originalStr.length; i++) {
//    let reversedStr = originalStr.charAt(i) + reversedStr;
//   }
// console.log(reversedStr)

// res=""

// for(i=0;i<4;i++){
//   for(j=0;j<5;j++){
//   if(i==0 && j<4)
//   res+="*"
// }

// }
// console.log(res)


// print 7 pattern


let Task1 = "";
for (let i = 0; i < 4; i++) {
  
  for (let j = 0; j < 7; j++) {
  
    if (i == 0 || j == 6) {
      Task1 += "*"; 
     }
    else {
      Task1 += " "; 
    }
  }
  Task1 += "\n";
}
console.log("using loops for both rows and columns:\n");
console.log(Task1);


// Reverse a character

let str = "this is apple";
let reverseStr= "";
for ( i = str.length - 1; i >= 0; i--) {
  reverseStr += str[i]; 
}
console.log(reverseStr, "\n"); 

// reverse a word

let str1="Iam Dhinesh Kumar"
let usingSplit=str1.split(" ");
let revWord= "";

for(i=usingSplit.length-1;i>=0;i--){
  revWord += usingSplit[i]+ " ";
}
console.log(revWord, "\n")

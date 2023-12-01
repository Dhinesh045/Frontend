// logic questions

// A3B4C2
// 15:15:00
// AAABBBBCC

// let Value="a3b4c2"
// for(i=0;i<Value.length;i++){
//     // console.log(Value.charAt(i))
//     if(i==0 ){
//         let rep=  Value.charAt(0)
//        let rep1=rep.repeat(3);
//        console.log(rep1)
    
//         }
//      if(i==2 ){
//             let rep=  Value.charAt(2)
//            let rep2=rep.repeat(4);
//            console.log(rep2)
        
//             }
//            else if(i==4 ){
//                 let rep=  Value.charAt(4)
//                let rep3=rep.repeat(2);
//                console.log(rep3)
            
//                 }
       
// }


// let val="a4b5c6"

// for(i=0;i<val.length;i++){
//     if(isNaN(val.charAt(i))){
//        let val1= val.charAt(i)
//        console.log(val1.repeat(2))
   
  
// }
// else{
//     console.log("error")
// }

// }

let str = "j5n2b2";
let output = "";

// Loop through the string in steps of 2 characters
for (let i = 0; i < str.length; i++) {
  // Extract the character at the current index 'i'
  let char = str[i];
  // Parse the next character as an integer to determine the count
  let count = parseInt(str[i+1]);

  //console.log(`Current character: ${char}, Current count: ${count}`);

  // Check if the count parsed is a valid number
  if (!isNaN(count)) {
    // Append 'char' repeated 'count' times to the 'output' string
    output += char.repeat(count);
  }
}
console.log("Output:", output);
let inputString1 = "CCBBBDDDDEEEEEFFFFFFFFF";
console.log("\nInput:", inputString1);

// Split the input string into an array of characters
let chars = inputString1.split("");

// Get unique characters by converting the array to a Set and then back to an array
let uniqueChars = Array.from(new Set(chars));
let output1 = "";

// Loop through each unique character
uniqueChars.forEach((char) => {
  // Count the occurrences of the current character in the original array
  let count = chars.filter((c) => c === char).length;

  // If the count is greater than 1, append the character and its count to the output
  if (count > 1) {
    output1 += char + count;
  }

  // console.log(`Current character: ${char}, Count: ${count}, Output: ${output1}`);
});

// let Task = "";

// // Loop through rows (4 rows)
// for (let i = 0; i < 4; i++) {
//   if (i === 0) {
//     Task += "***\n"; // Adds "**\n" to the Task string when i is 0 (first iteration)
//   } else {
//     Task += "      *\n"; // Adds "       *\n" to the Task string for other iterations (i > 0)
//   }
// }

// console.log("Using loop only rows:\n");
// console.log(Task);

// let Task1 = "";
// for (let i = 0; i < 4; i++) {
//   // Loop through columns (7 columns)
//   for (let j = 0; j < 7; j++) {
//     // Check conditions for printing '*' at border positions
//     if (i === 0 || j === 6) {
//       Task1 += "*"; // Add '' if it's at the border
//     } else {
//       Task1 += " "; // Add space if it's within the border
//     }
//   }
//   Task1 += "\n"; // Move to the next line after completing each row
// }
// console.log("using loops for both rows and columns:\n");
// console.log(Task1);

console.log("Reversing a String:-");

let str = "this is apple";
let reversedStr = "";
// console.log(str.length);

// Loop through the word from the end to the beginning
for (let i = str.length - 1; i >= 0; i--) {
  reversedStr += str[i]; // Append each character in reverse order
  // console.log(str[i], "", +i);
}
console.log(reversedStr, "\n"); // Print the reversed word

console.log("Reversing Words in a Sentence:-");
let word = "this is apple";
let newWords = str.split(" "); // Split the sentence into an array of words
let reversedWord = "";

for (let i = newWords.length - 1; i >= 0; i--) {
  reversedWord += newWords[i] + " "; // Append each word in reverse order
}
console.log(reversedWord, "\n"); // Print the reversed sentence without any extra spaces

console.log("Reversing Characters in Each Word of a Sentence:-");
let sentence = "This is apple";
let words = sentence.split(" "); // Split the sentence into an array of words
let reversedSentence = "";

for (let i = 0; i < words.length; i++) {
  let word = words[i];
  let reversedWord = "";

  for (let j = word.length - 1; j >= 0; j--) {
    reversedWord += word[j]; // Reverse the characters of each word
  }

  reversedSentence += reversedWord + " "; // Add the reversed word to the new sentence
}
console.log(reversedSentence.trim(), "\n"); // Print the sentence with reversed words

console.log("Removing Duplicate Words from a Sentence:-");
let str2 = "I'm a teacher and teacher";
let splitWords = str2.split(" "); // Split the sentence into an array of words

let uniqueWords = splitWords.filter((word) => word !== "teacher"); // Filtering out "teacher" words

let uniqueSentence = uniqueWords.join(" "); // Joining the unique words into a sentence
console.log(uniqueSentence); // Output the sentence with the "teacher" words removed
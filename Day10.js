str="iam dhinesh"

// replace the word

console.log(str.replace("dhinesh","jonsnow"),"----> replace")

// search keyword using to find the index number of the value

console.log(str.search("a"),"---->search")

// using regular expression meaning of global search to avoid case sensitive 

console.log(str.search(/D/i),"---->regular expression")

// using match keyword same as search but output is given more details using "g" in the console search globally where all are presnt "E" in the value to show in the output

console.log(str.match(/I/i),"----> using match")
console.log(str.match(/I/ig),"---->global search using match")

// matchAll same as match but output is object type is not given proper output

console.log(str.matchAll("i"))

// so we need to chsange from mathcAll to array

let convertToArray=str.matchAll("i")


console.log(Array.from(convertToArray)[1][0],"---->two dimanesional array")


                  // let nam=Array.from(convertToArray)
                         // console.log(nam[1][0])
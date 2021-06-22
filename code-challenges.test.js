// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

const { indexOf } = require("lodash")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function

// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// a) Create a test with an expect statement using the variables provided.
describe("coverter", () =>{
    var secretCodeWord1 = "Lackadaisical"
    // Expected output: "L4ck4d41s1c4l"
    var secretCodeWord2 = "Gobbledygook"
    // Expected output: "G0bbl3dyg00k"
    var secretCodeWord3 = "Eccentric"
    // Expected output: "3cc3ntr1c"
    it("return coverte 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.", () =>{
        expect(coverter(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
        expect(coverter(secretCodeWord2)).toEqual("Gobbledygook")
        expect(coverter(secretCodeWord3)).toEqual("Eccentric")
    })
})
// var secretCodeWord1 = "Lackadaisical"
// const coverter = (string) =>{
//     return string.includes("a")  === 4 || string.includes("A") === 4
// }
// console.log(coverter(secretCodeWord1))

// I need to create a function called coverter
// Input: a string that will convert some letters into numbers
// Parameter(string)
// Returns some a string of letters into numbers
// I need to itirate through my string 
// Make my string into array using .split('') method
// I can itirate through it and check 
//If the letter I am looking for then covert into the number that is asked for to be changed 
// after looping through the array, I am trying to say everytime you see a, change it equal to 4
// Make my string into array using .split('') method 
var secretCodeWord1 = "Lackadaisical"
const coverter =(string) =>{
    let splited = string.split('')
     //["L", "a", "c", "k", "a", "d", "a", "i", "s", "i", "c", "a", "l"]
     return splited.map(value =>{
         if(value === "a" || value === "A"){
            value = 4
         }
         if(value === "e"){
            value = 3
         }
         if(value === "i"){
            value = 1
         }
         if(value === "o"){
            value = 0
         }
         return value
     })
}
console.log(coverter(secretCodeWord1))


const coverter =(string) =>{
    let splited = string.split('')
    //["L", "a", "c", "k", "a", "d", "a", "i", "s", "i", "c", "a", "l"]
    for(let i =0; i<string.length; i++){
        if(string[i] === "a"){
           return  4
        }
        newArray.push(string[i])
    }
    return newArray
} 
console.log(coverter(secretCodeWord1))
// var secretCodeWord1 = "Lackadaisical"
// Make my string into array using .split('') method 
// when I am done I must use the .join() to put my string back together 
const coverter =(string) =>{
    let newArray = []
    let splited = string.split('')
    //["L", "a", "c", "k", "a", "d", "a", "i", "s", "i", "c", "a", "l"]
    for(let i =0; i<string.length; i++){
        if(string[i] === "a"){
           return  4
        }
        return newArray.push(string[i])
    }
    return newArray
} 
console.log(coverter(secretCodeWord1))

//maybe .match method
var secretCodeWord1 = "Lackadaisical"
const coverter = (string) =>{
    
    let numsAndLetters;

    if(string === "a") {
        numsAndLetters = string.replace(/a/g, 4)
    }
    return numsAndLetters
}
console.log(coverter(secretCodeWord1))



var secretCodeWord3 = "Eccentric"
const coverter = (string) =>{
    
    let numsAndLetters;

    if(string === "a") {
     string.replace(/a/g, 4)
    }
    if(string === "e" || string === "E" ) {
        string.replace(/e/g, 3)
    }
    if(string === "i") {
    string.replace(/i/g, 1)
    }
    if(string === "o") {
    string.replace(/o/g, 0)
    }
return 
}

// b) Create the function that makes the test pass.
//When I test this, I am getting back the same strings my if statments are not working I am missing something
var secretCodeWord1 = "Lackadaisical"
var secretCodeWord2 = "Gobbledygook"
var secretCodeWord3 = "Eccentric"
const coverter = (string) =>{

    if(string === "a") {
     string.replace(/a/g, 4)
    }
    if(string === "e" || string === "E" ) {
        string.replace(/e/g, 3)
    }
    if(string === "i") {
    string.replace(/i/g, 1)
    }
    if(string === "o") {
    string.replace(/o/g, 0)
    }
return string
}
console.log(coverter(secretCodeWord1))
console.log(coverter(secretCodeWord2))
console.log(coverter(secretCodeWord3))


var secretCodeWord1 = "Lackadaisical"




var secretCodeWord1 = "Lackadaisical"
// Make my string into array using .split('') method 
// const coverter =(string) =>{
//     let newArray = []
//     let splited = string.split('')
//     //["L", "a", "c", "k", "a", "d", "a", "i", "s", "i", "c", "a", "l"]
//     for(let i =0; i<string.length; i++){
//         if(string[i] === "a"){
//            return  4
//         }
//         newArray.push(string[i])
//     }
//     return newArray
// } 
// console.log(coverter(secretCodeWord1))


//this worked but now I have to change evry a
// var secretCodeWord1 = "Lackadaisical"
//a is my search value and 4 is what I want to replcae it with
//  secretCodeWord1.replace("a", 4)
// "L4ckadaisical"


//THIS WORKED 
// var secretCodeWord1 = "Lackadaisical"
// secretCodeWord1.replace(/a/g, 4)
//Here I used regulare expretion and the /a/g the g in the end stands for globale 
//"L4ck4d4isic4l" 


// --------------------2) Create a function that takes in an array and returns all the words that contain the letter a.

// a) Create a test with an expect statement using the variable provided.

//create a function called loookForA
//Input: Takes in  an (array)
//output:returns all the words that contain the letter a.
//I first need to 

fdescribe("loookForA", () =>{
    var arrayOfWords1 = ["Apple", "Banana", "Plum", "Cherry", "Kiwi"]
// Expected output: ["Apple", "Banana"]
var arrayOfWords2 = ["Mango", "Orange", "Apricot", "Blueberry", "Peach"]
// Expected output: ["Mango", "Banana", "Peach"]
    it("return all the words that contain the letter a", () =>{
        expect(loookForA(arrayOfWords1)).toEqual(["Apple", "Banana"])
        expect(loookForA(arrayOfWords2)).toEqual(["Mango", "Orange", "Apricot", "Peach"])
    })
})
// create a function called loookForA 
//Input: (array)
//Output: array only words that the letter a 
//First use the filter method to itirate through the array 
//If the words in my array contain the letter "a" or "A"
//Then return the words

// b) Create the function that makes the test pass.
var arrayOfWords2 = ["Mango", "Orange", "Apricot", "Blueberry", "Peach"]
const loookForA = (array) =>{
    return array.filter(value => value.includes("a") || value.includes("A"))
}


console.log(loookForA(arrayOfWords2))


//(5) ["Apple", "Banana", "Plum", "Cherry", "Kiwi"]
// (5) [Array(5), Array(6), Array(4), Array(6), Array(4)]
// (5) [Array(5), Array(6), Array(4), Array(6), Array(4)]
// 0: (5) [["A", "p", "p", "l", "e"]
// 1: (6) ["B", "a", "n", "a", "n", "a"]
// 2: (4) ["P", "l", "u", "m"]
// 3: (6) ["C", "h", "e", "r", "r", "y"]
// 4: (4) ["K", "i", "w", "i"]]
// length: 5










// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

// a) Create a test with an expect statement using the variable provided.
// create a function called fullHouse
//takes in parameter (array of nums)
//I need to check if what my array has 2 and 3 same values
// if so then I need to they I need to log true and if not they I need to log false
// I will use the .filter method because I will be returning an array 

describe("fullHouse", () =>{
    var hand1 = [5, 5, 5, 3, 3]
    // Expected output: true
    var hand2 = [5, 5, 3, 3, 4]
    // Expected output: false
    var hand3 = [5, 5, 5, 5, 4]
    // Expected output: false
    it("return remove the first array and then shufflel", () =>{
        expect(fullHouse(hand1)).toEqual(true)
        expect(fullHouse(hand2)).toEqual(false)
        expect(fullHouse(hand3)).toEqual(false)
    })
})
var hand1 = [5, 5, 5, 3, 3]
const fullHouse = (array) =>{
  let sameArray = []
  for(let i = 0; array.length; 1++){
      if(array[i] == 5 && array[i] ==2){
        
      }
  }
  return 
}

console.log(fullHouse(hand1))

// b) Create the function that makes the test pass.
const fullHouse = (array) =>{
    return array.filter(value =>{

    })
}



//   var hand1 = [5, 5, 5, 3, 3]
//   function fullHouse(array, value) {
//       return array.reduce((n, x) => n + (x === value), 0);
//     }


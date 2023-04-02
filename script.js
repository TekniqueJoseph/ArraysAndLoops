let btn = document.querySelector('#btn');
btn.addEventListener('click', function () {
    let click = document.createElement('h3')
    let letters = document.createTextNode('when the emcees came...');
    click.appendChild(letters);
    click.classList.add('animate__animated', 'animate__rubberBand');
    document.querySelector('#pop').appendChild(click)
}, { once: true })

// map method - creates a new array from calling a function for every array element. does not execute the function for empty elements. does not change the original array
// Syntax - array.map(function(currentValue, index, arr), thisValue)
// // String Array
// const wu = ['rza', 'gza', 'odb', 'dec', 'ugod', 'meth', 'ghost', 'master killer', 'rae', 'cappadonna'];
// // map method iterates through the wu array and returns each string from the array wu into new array members
// const members = wu.map(cru =>{
//     return cru
// })
// console.log(members)

// // map method iterates through the wu array and returns the length of each string into array nameLength 
// const nameLength = wu.map(name => {
//     return name.length;
// })
// console.log(nameLength)

// // map method iterates through the wu array and returns each sting with it's index. The results are stored into array memaberId. Template strings is used to display the resulting strings
// const memberId = wu.map ((cruName, index) =>{
//   return `${cruName}'s index is ${index}`
// })
// console.log(memberId)

// // map method iterates through wiz array and multiplies each number by 2. the reults are stored in new array arrayMultiplied
// const wiz = [1,2,3,4,5];
// const arrayMultiplied = wiz.map(num => {
//     return `Element ${num} multiplied by 2 = ${num*2}`
//  })
//  console.log(arrayMultiplied)

//  map method iterates through wiz array and multiplies each value by total which is initialzed with a value of 1 and changes with each iteration to the result of its current total being multiplied by the next num in the array. The wiz array does not change. The multiplication results are stored in the variable total
// const wiz = [1,2,3,4,5];
// let total = 1;
// const add = wiz.map((val) =>{
//     console.log(`${val} * ${total} =`)
//     total = total * val
//     console.log(`New total is ${total}`)
//       return total
// })
// console.log(`The value returned is: ${total}`)

// const scores = [[1, 2], [3, 4], [5, 6]];
// console.log('scores array',scores)
// // map method iterates through array scores and returns array1
// const array1 = scores.map((subArrays) => {
//     return subArrays;
// }) 
// console.log('array1 array',array1)

// // the code below makes use of the map method twice. in the first use, map iterates through scores and stores the sub arrays into into inividual arrays named nestedArrays
// // in the second use, the map method creates new arrays, iterates through them, and each value is multiplied by 2. The results of all this are stored in new array2
// const array2 = scores.map((nestedArrays, index) => {
//     console.log('first map',nestedArrays, index)
//     return nestedArrays.map((nums, indi) => {
//         console.log('second map',nestedArrays, indi)
//         // console.log(nestedArrays)
//         // console.log(`Element ${nums} array's index is ${index}. It's indi is ${indi}.`)
//         return nums *2
//     })
// })
// console.log('array2',array2)

// // the code below shows how the concat method can beused to combine two arrays
// const arr1 = [1,2,3];
// const arr2 = [4,5,6];
// console.log('arr1',arr1); // [1,2,3]
// console.log('arr2',arr2); // [4,5,6]
// // // // Merge arrays using concat
// const merged = arr1.concat(arr2);
// console.log('merged arr1 & arr2',merged); // [1,2,3,4,5,6]
// // the code below maps through the combined arrays and mulyiplies each element by 5
// const combined = (arr1.concat(arr2).map(num => {
//     return `Value ${num} * 5 = ${num * 5}`
// }))
// console.log('combined',combined)

// string array
// let firstNames = ["super", "spider", "ant", "iron"]
// let lastName = "man";
// // the code below maps through array firstNames and returns the values with variable lastName concated to it
// const fullname = firstNames.map((full) =>{
//     return full+lastName 
// })
// console.log(fullname)

// numbers array
// let numbers = [3.7, 4.9, 6.2]
// the code below maps throgh the numbers array and uses the round method to round the numbers
// let rounded = numbers.map((nums) => {
//     return Math.round(nums) 
// })
// console.log(rounded)
// super heros array
// let frontNane = ["wonder", "super", "spider", "ant", "iron", "method"]
// let male = "man"
// let female = "woman"
// // // the code below maps through the frontName array and adds the appropriate gender variable to the front name value
// // // The ternary operator ? is basically a shortcut for a traditional if...else statement, with the condition and value if true or false
// let wholeName = frontNane.map((frontNane, index) => {
//     return (index === 0) ?  frontNane + female : frontNane + male;
// })
// console.log(wholeName)

// // the code below maps through the wholename array created above, and with trmplate strings, returns the value and it's index  
// const newName = wholeName.map((theName, index) =>{
//     return `${theName} is at index # ${index}`
// })
// console.log(newName)

// filter method - The filter() method creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.
// Syntax - array.filter(function(currentValue, index, arr), thisValue)
// const wuTang = ['rza', 'gza', 'odb', 'dec', 'U God', 'meth', 'ghost', 'master killer', 'rae', 'cappadonna'];
// // in the code below the filter method iterates abd calls the function for every iteration and filters out the elements that pass the test of the method
// const results = wuTang.filter((chars) => {
//     return chars.length > 4
// })
// console.log(results)

// // in the code below the filter method iterates abd calls the function for every iteration and filters out the elements that pass the test of the function
// const ages = [32, 33, 16, 40];
// const ageCheck = ages.filter((age) => {
//       return age >= 18
// })
// console.log(ageCheck)

// // in the code below the filter method iterates abd calls the function for every iteration and filters out the elements that pass the test of the function
// const creatures = [
//   {name: "Shark", habitat: "Ocean"},
//   {name: "Whale", habitat: "Ocean"},
//   {name: "Lion", habitat: "Savanna"},
//   {name: "Monkey", habitat: "Jungle"}
// ];
// const aquaticCreatures =  creatures.filter(function(creature) {
//   return creature.habitat === "Ocean";
// });
// console.log(aquaticCreatures);

// const livingCreatures = creatures.filter((animal) => {
//      return animal.habitat === 'Savanna' || animal.habitat === 'Jungle';
// })
// console.log(livingCreatures);


// let numeral = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// // // in the code below the filter method iterates abd calls the function for every iteration and filters out the elements that pass the test of the function
// let evenNumeral = numeral.filter((even) =>{
//   return (even % 2 === 0) ? even : false;
// })
// console.log(evenNumeral)


// // ****Reduce Array - reduce method iterates through reduceNums array and multiplies each array value(curr), by accu whos's initial value is 1. The reduce method does not return an array. It simply returns a value
// and does not effect the original array
// Syntax - array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
// const reduceNums = [1,2,3,4,5]
// let reduce = reduceNums.reduce((accu,curr) => {
//     return accu * curr
// },1)
// console.log('reduce', reduce)

// const topSix = [
//   { name: "Nigeria", position: "1st", points: 43 },
//   { name: "England", position: "2nd", points: 37 },
//   { name: "USA", position: "3rd", points: 35 },
//   { name: "South Africa", position: "4th", points: 30 },
//   { name: "Brazil", position: "5th", points: 27 },
//   { name: "Korea", position: "6th", points: 23 }
// ]
// const totalPoints = topSix.reduce((acc, currTeam) => acc + currTeam.points, 0);
// console.log('team points total',totalPoints)

// const doublePoints = topSix.reduce((acc, currTeam) =>{
//     return acc + currTeam.points * 2
// },0)
// console.log('team points doubled',doublePoints)

// sort - The sort() method sorts the elements of an array in place and returns the reference to the same array, now sorted. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.
// Stntax - array.sort(compareFunction)
// const months = ['March', 'Jan', 'Feb', 'Dec'];
// const sortedMonths = () =>{
//     return months.sort()
// }
// console.log(sortedMonths())

// const reversdMonths = () =>{
//     return months.reverse()
// }
// console.log(reversdMonths())

// const array1 = [0, 1, 2, 3, 10, 20, 30 ];
// const sortedNums = () => {
//     return array1.sort()
// }
// console.log('pure sort function',sortedNums())

// let numbers = [0, 1, 2, 3, 10, 20, 30 ];
// console.log('original numbers array altered by sort function', numbers.sort())

// const sortNums2 = numbers.sort((a,b) =>{
//     return a-b
// })
// console.log('sortNums2',sortNums2)
// console.log('original numbers array after sortNums2', numbers)


// let numbers2 = [0, 1, 2, 3, 10, 20, 30 ];
// const mapNum = numbers2.map((nums) =>{
//         numbers2.sort((a,b) =>{
//             return a-b
//         })
//     return nums
// })
// console.log('original numbers2 array sorted by string',numbers2.sort())
// console.log('new mapNum array sorted by number',mapNum)
// console.log('original numbers2 array sorted by string',numbers2.sort())

// let reverseNums = [0, 1, 2, 3, 10, 20, 30 ];
// const revNums2 = reverseNums.sort((a,b) =>{
//     return b-a
// })
// console.log(reverseNums)

// let newReverseNums = [0, 1, 2, 3, 10, 20, 30 ];
// const reverseNums2 = () => {
//     return newReverseNums.reverse()
// }
// console.log(reverseNums2())

// every -  The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
// Syntax - array.every(function(currentValue, index, arr), thisValue)
// const digits = [1, 30, 39, 29, 10, 13];

// const evaluate = digits.every((nums) => {
//     return nums < 30
// })
// console.log(evaluate)

// const people = ['pos', 'mase', 'dave'];

// const length = people.every((name) => {
//     return name.length > 2
// })
// console.log(length)

// const char = people.every((letter) => {
//     return letter.includes('e')
// })
// console.log(char)

// some - The some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array.
// Syntax - array.some(function(value, index, arr), this)
// const digit2 = [1, 2, 3, 4, 5];
// const check = digit2.some((nums) => {
//     return nums % 2 === 0
// })
// console.log(check)

// const crew = ['phipe', 'tip', 'shaheed', 'jarobee']
// const letters = crew.some((lets) => {
//     return lets.length === 4
// })
// console.log(letters)

// const chars = crew.some((letts) => {
//     return letts.includes('p')
// })
// console.log(chars)

// // // ***flat flat map********
// const position = [[1, 2], [3, 4], [5, 6]];
// const seed = position.flatMap((num) => {
//     return num.flat() 
// })
// console.log('position array',position)
// console.log(`flattened position array in new seed array`,seed)


// forEach - The forEach() method executes a provided function once for each array element.
// Syntax - array.forEach(function(currentValue, index, arr), thisValue)

// const moz = ['x', 'y', 'z'];
// moz.forEach((element =>{
//     console.log(element)
// }))

// const alph = ['a', 'b', 'c'];
// const newAlph = alph.map(element => {
//     alph.forEach((ele) =>{
//         return ele
//     })
//     return element
// })
// console.log(newAlph)

// for...of - The for...of statement executes a loop that operates on a sequence of values sourced from an iterable object. Iterable objects include instances of built-ins such as Array, String, TypedArray, Map, Set, NodeList (and other DOM collections), as well as the arguments object, generators produced by generator functions, and user-defined iterables.
// Syntax- for (variable of iterable) {
  // code block to be executed
// }

// const animal = ['lion', 'falcon', 'elephant']
// for (const element of animal) {
//     console.log(element);
//   }

// const gems = ['amethyst', 'adventurine', 'howlite']
// const newGems = gems.map((ele) =>{
//     for (const element of gems){
//         return ele
//     }
// })
// console.log(newGems)
// *******Objects*******
const amp = {
    brand: 'QSC',
    modelName: 'RMX 2450a',
    watts: [2400, 3000],
    mode: 'bridge',
    purpose()
    {
        console.log(`The ${this.modelName} with ${this.watts[0]} watts will rock the house.`);
    },
}
console.log(amp.purpose())

// this - In an object method, this refers to the object. - “This” keyword refers to an object that is executing the current piece of code. It references the object that is executing the current function. If the function being referenced is a regular function, “this” references the global object. 

// object Values - The Object.values() static method returns an array of a given object's own enumerable string-keyed property values.
// Syntax - Object.values(obj)
const ampArray = Object.values(amp)
console.log(ampArray)

// object keys - The Object.keys() static method returns an array of a given object's own enumerable string-keyed property names.
// Syntax - Object.keys(object)
const ampDetailsArray = Object.keys(amp)
console.log(ampDetailsArray);


// *****object entries*****

const ampSpecs = Object.entries(amp)
console.log(ampSpecs)

// ******constructor
// ******deconstructor
// spread operator
// clases
// class ChildClass extends ParentClass { /* … */ }
// super
// then()
// Pomises (resolve reject catch timeout setTimeout)// state
// A JavaScript Promise object can be:
    // Pending
    // Fulfilled
    // Rejected
// fetch
// async await
// JSON.stringify()
// ******React
// jsx
// functional component
// class componet
// props
// state
// useState

// ****TOPICS TO EXPLORE
// callback functions
// currying
// shallow copy vs deep copy --- value vs reference
// a = 25
// b = a //copies value, not address
// console.log(a)
// console.log(b)
// a = 45
// console.log(a)
// console.log(b)
//  let counter = 0;

//  function incrementCounter(){
//     counter = counter + 1; 
//     renderState()
//  }

//  function renderState(){
//     console.log(counter);
//  }

//  setInterval( function () {
//     incrementCounter()
//  }, 1000)

// Create Greet.js (use import React from 'react')-> export from Greet.js -> import in App.js->  include in App component using self closing tag <Greet/>
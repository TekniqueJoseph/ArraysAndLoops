// // **********map methods***********
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

// // map method iterates through wiz array and multiplies each number by 2. the reults are stored in array math
const wiz = [1,2,3,4,5];
// const math = wiz.map(num => {
//     return `num*2 = ${num*2}`
//  })
//  console.log(math)

//  map method iterates through wiz array and multiplies each value by total which is initialzed with a value of 1 and changes with each iteration to the result of its current total being multiplied by the next num in the array. The wiz array does not change. The multiplication results are stored in the variable total
// let total = 1;
// const add = wiz.map((val) =>{
//     total = total * val
//       return total
// })
// console.log(`The value returned is: ${total}`)

// const scores = [[1, 2], [3, 4], [5, 6]];
// console.log('scores array',scores)
// // map method iterates through array scores and returns array1
// const array1 = scores.map((subArrays) => {
//     return subArrays;
// }) 
// console.log('array1',array1)

// // the code below makes use of the map method twice. the first use iterates through array2 and returns and stores the sub arrays
// // the map metod iterates through the nested arrays and each value is multiplied by 2
// const array2 = scores.map((nestedArrays, index) => {
//     return nestedArrays.map((nums, indi) => {
//       console.log(`Element ${nums} array's index is ${index}. It's indi is ${indi}.`)
//         return nums *2
//     })
// })
// console.log('array2',array2)

// // the code below shows hot the concat method can beused to combine two arrays
const arr1 = [1,2,3];
const arr2 = [4,5,6];
console.log(arr1); // [1,2,3]
console.log(arr2); // [4,5,6]
// // Merge arrays
const merged = arr1.concat(arr2);
console.log('merged',merged); // [1,2,3,4,5,6]
// the code below maps through the combined arrays and mu
const combined = (arr1.concat(arr2).map(num => {
    return `Value times 5 = ${num * 5}`
}))
console.log('combined',combined)

// // string array
// let firstNames = ["super", "spider", "ant", "iron"]
// let lastName = "man";
// // the code below maps through array firstNames and returns the values with variable lastNae concated to it
// const fullname = firstNames.map((full) =>{
//     return full+lastName;
// })
// console.log(fullname)

// // numbers array
// let numbers = [3.7, 4.9, 6.2]
// // the code below maps throgh the numbers array and uses the round method to round the numbers
// let rounded = numbers.map((nums) => {
//     return Math.round(nums)
// })
// console.log(rounded)
// // super heros array
// let frontNane = ["wonder", "super", "spider", "ant", "iron", "method"]
// let male = "man"
// let female = "woman"
// // the code below maps through the frontName array and adds the appropriate gender variable to the front name value
// // The ternary operator ? is basically a shortcut for a traditional if...else statement, with the condition and value if true or false
// let wholeName = frontNane.map((frontNane, index) => {
//     return (index == 0) ?  frontNane + female : frontNane + male;
// })
// console.log(wholeName)

// // the code below maps through the wholename array created above, and with trmplate strings, returns the value and it's index  
// const newName = wholeName.map((theName, index) =>{
//     return `${theName} is at index # ${index}`
// })

// console.log(newName)

// // ******filter method - The filter() method creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.******
// const wuTang = ['rza', 'gza', 'odb', 'dec', 'ugod', 'meth', 'ghost', 'master killer', 'rae', 'cappadonna'];
// // in the code below the filter method iterates abd calls the function for every iteration and filters out the elements that pass the test of the function
// const results = wuTang.filter((chars) => {
//     return chars.length > 3
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

// // in the code below the filter method iterates abd calls the function for every iteration and filters out the elements that pass the test of the function
// let numeral = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // // in the code below the filter method iterates abd calls the function for every iteration and filters out the elements that pass the test of the function
// let evenNumeral = numeral.filter((even) =>{
//   return (even % 2 === 0) ? even : false;
// })
// console.log(evenNumeral)


// // ****Reduce Array********
// // reduce method iterates through reduceNums array and multiplies each array value(curr), by accu whos's initial value is 1. The reduce method does not return an array. It simply returns a value
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
// console.log(totalPoints)

// // *******sort*************
// // *******every************
// // *******some*************
// // ***flat flat map********
// const position = [[1, 2], [3, 4], [5, 6]];
// const seed = position.flatMap((num) => {
//     return num.flat() 
// })
// console.log('flat',seed)


// *******forEach**********
// *******for of***********

// *****object keys********
// const object1 = {
//     a: 'somestring',
//     b: 42,
//     c: false
//   };
//   console.log(Object.keys(object1));

// *****object Values******
// *****object entries*****
// then()
// Pomises (resolve reject catch timeout setTimeout)
// A JavaScript Promise object can be:
// Pending
// Fulfilled
// Rejected

// clases
// class ChildClass extends ParentClass { /* … */ }
// super
// shallow copy
// spread operator

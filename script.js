// **********map methods***********
// String Array
const wu = ['rza', 'gza', 'odb', 'dec', 'ugod', 'meth', 'ghost', 'master killer', 'rae', 'cappadonna'];
// map method iterates through the wu array and returns each string from the array wu into new array members
const members = wu.map(cru =>{
    return cru
})
console.log(members)

// map method iterates through the wu array and returns the length of each string into array nameLength 
const nameLength = wu.map(name => {
    return name.length;
})
console.log(nameLength)

// map method iterates through the wu array and returns each sting with it's index. The results are stored into array memaber Id. Template strings is used to display the resulting strings
const memberId = wu.map ((cruName,index) =>{
  return `${cruName}'s index is ${index}`
})
console.log(memberId)

// map method iterates through wiz array and multiplies each number by 2. the reults are stored in array math
const wiz = [1,2,3,4,5];

const math = wiz.map(num => {
    return num *2
 })
 console.log(math)

//  map method iterates through wiz array and multiplies each value by total which is initialzed with a value of 1. The wiz array does not change. The multiplication results are stored in the variable total
let total = 1;
const add = wiz.map((val) =>{
    total = total * val
  return total
})
console.log(`The value returned is: ${total}`)

// const scores = [[1, 2], [3, 4], [5, 6]];

// const array1 = scores.map((subArrays) => {
//     return subArrays;
// }) 
// console.log(array1)

// const array2 = scores.map((nestedArrays) => {
//     return nestedArrays.map((nums) => {
//         return nums * 2
//     })
// })

// console.log(array2)

// const arr1 = [1,2,3];
// const arr2 = [4,5,6];

// // Merge arrays
// // const merged = arr1.concat(arr2);

// // console.log(merged); // [1,2,3,4,5,6]
// console.log(arr1); // [1,2,3]
// console.log(arr2); // [4,5,6]

// const combined = (arr1.concat(arr2).map(num => {
//     return num * 5 + ' Hello'
// }))

// console.log('combined',combined)

// let firstNames = ["super", "spider", "ant", "iron"]
// let lastName = "man";

// const fullname = firstNames.map((full) =>{
//     return full+lastName;
// })

// console.log(fullname)

// let numbers = [3.7, 4.9, 6.2]

// let rounded = numbers.map((nums) => {
//     return Math.round(nums)
// })
// console.log(rounded)

// let frontNane = ["wonder", "super", "spider", "ant", "iron", "method"]
// let male = "man"
// let female = "woman"

// let wholeName = frontNane.map((frontNane, index) => {
//     return (index == 0) ?  frontNane + female : frontNane + male;
// })

// console.log(wholeName)
   
// const newName = wholeName.map((theName, index) =>{
//     return `${theName} is at index # ${index}`
// })

// console.log(newName)

// **********map***********
// ******Filter Array******
// ****Reduce Array********
// reduce method iterates through reduceNums array and multiplies each array value(curr), by accu whos's initial value is 1. The reduce method does not return an array. It simply returns a value

// const reduceNums = [1,2,3,4,5]
// let reduce = reduceNums.reduce((accu,curr) => {
//     return accu * curr
// },1)
// console.log('reduce', reduce)

// *******sort*************
// *******every************
// *******some*************
// ***flat flat map********


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

// Pomises (then catch timeout setTimeout)
// extends
// clases
// class ChildClass extends ParentClass { /* … */ }

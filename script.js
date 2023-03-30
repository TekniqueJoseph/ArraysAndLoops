// String Array
const wu = ['rza', 'gza', 'odb', 'dec', 'ugod', 'meth', 'ghost', 'master killer', 'rae', 'cappadonna'];
// map method iterates through the wu array and returns each string from the array wu into new array members
const members = wu.map (cru =>{
    console.log(cru)
})

// map mathod iterates through the wu array and returns the length of each string into array nameLength 
const nameLength = wu.map(name => {
    return name.length;
})
console.log(nameLength)

// map method iterates through the wu array and returns each sting with the index of the coresonding string into array mamaber Id
const memberId = wu.map ((cru,index) =>{
    console.log(cru,index)
})

// map method iterates through wiz array multiplies each number ny 2. the reults are stored in array math
const wiz = [1,2,3,4,5,6,7,8,9];

const math = wiz.map(num => {
    console.log(num * 2)
 })

//  map method iterates through wiz array and multiplies each value by let total which is initialzed with a value of 1
let total = 1;
const add = wiz.map((val) =>{
    total = total * val
  return val
})
console.log('regula', total)

// reduce method iterates through wiz array and multiplies each array value(curr), by accu whs's initial value is 1
let reduce = wiz.reduce((accu,curr) => {
    return accu * curr
},1)
console.log('reduce',reduce)

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

// ******Filter Array******
// *******Reduce Array*****
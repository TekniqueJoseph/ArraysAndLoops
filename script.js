const wu = ['rza', 'gza', 'odb', 'dec', 'ugod', 'meth', 'ghost', 'master killer', 'rae'];

const members = wu.map (cru =>{
    console.log(cru)
})

const nameLength = wu.map(sel => {
    return sel.length;
})
console.log(nameLength)


const memberId = wu.map ((cru,index) =>{
    console.log(cru,index)
})

const wiz = [1,2,3,4,5,6,7,8,9];

const math = wiz.map(num => {
    console.log(num * 2)
 })

let total = 1;
const add = wiz.map((val) =>{
    total = total * val
  return val
})
console.log(total)

const scores = [[1, 2], [3, 4], [5, 6]];

const array1 = scores.map((subArrays) => {
    return subArrays;
}) 
console.log(array1)

const array2 = scores.map((nestedArrays) => {
    return nestedArrays.map((nums) => {
        return nums * 2
    })
})

console.log(array2)

const arr1 = [1,2,3];
const arr2 = [4,5,6];

// Merge arrays
// const merged = arr1.concat(arr2);

// console.log(merged); // [1,2,3,4,5,6]
console.log(arr1); // [1,2,3]
console.log(arr2); // [4,5,6]

const combined = (arr1.concat(arr2).map(num => {
    return num * 5 + ' Hello'
}))

console.log('combined',combined)

let firstNames = ["super", "spider", "ant", "iron"]
let lastName = "man";

const fullname = firstNames.map((full) =>{
    return full+lastName;
})

console.log(fullname)

let numbers = [3.7, 4.9, 6.2]

let rounded = numbers.map((nums) => {
    return Math.round(nums)
})
console.log(rounded)

let frontNane = ["wonder", "super", "spider", "ant", "iron"]
let male = "man"
let female = "woman"

let wholeName = frontNane.map((frontNane, index) => {
    return (index == 0) ?  frontNane + female : frontNane + male;
})

console.log(wholeName)
   
const newName = wholeName.map((theName, index) =>{
    return `${theName} is at index # ${index}`
})

console.log(newName)
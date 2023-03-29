// const wu = ['rza', 'gza', 'odb', 'dec', 'ugod', 'meth', 'ghost', 'master killer', 'rae'];

// const members = wu.map (cru =>{
//     console.log(cru)
// })

// const nameLength = wu.map(sel => {
//     return sel.length;
// })
// console.log(nameLength)


// const memberId = wu.map ((cru,index) =>{
//     console.log(cru,index)
// })

// const wiz = [1,2,3,4,5,6,7,8,9];

// const math = wiz.map(num => {
//     console.log(num * 2)
//  })

// let total = 1;
// const add = wiz.map((val) =>{
//     total = total * val
//   return val
// })
// console.log(total)

const scores = [[1, 2], [3, 4], [5, 6]];

const array1 = scores.map((subArray1) => {
    return subArray1;
}) 
console.log(array1)

const array2 = scores.map((nestedArray) => {
    return nestedArray.map((nums) => {
        return nums * 2
    })
})

console.log(array2)

// scores.map(function(subarray) {
//   return subarray.map(function(number) {
//     return number * 3;
//   })
// })
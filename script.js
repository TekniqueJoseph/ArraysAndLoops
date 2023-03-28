const wu = ['rza', 'gza', 'odb', 'dec', 'ugod', 'meth', 'ghost', 'master killer', 'rae'];

const wiz = [1,2,3,4,5,6,7,8,9];

const members = wu.map (cru =>{
    console.log(cru)
})

const math = wiz.map(num => {
   console.log(num * 2)
})

const nameLength = wu.map(sel => {
    return sel.length;
})
console.log(nameLength)

const memberId = wu.map ((cru,index) =>{
    console.log(cru,index)
})

let total = 1;
const add = wiz.map((val) =>{
    total = total * val
  return val
})
console.log(total)
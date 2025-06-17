const arr = [];
const obj = {}
for(let i = 0; i<500000; i++){
   const o ={
    id      : i,
    value   : i,
   }
   arr.push(o);
   obj[i] = o;
}

// find item form array contains object
let id = 49999;
console.time('array')

const arrObj = arr.find(item => item.id === id);
arrObj.value = 445;
const index = arr.indexOf(arrObj);
arr.splice(index,1);
console.log("index = " , index);

console.timeEnd('array');

console.time('obj');
obj[id].value = 445;
delete obj[id];
console.timeEnd('obj');



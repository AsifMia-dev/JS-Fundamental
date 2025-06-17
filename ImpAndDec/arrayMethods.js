const arr = [1,2,6,34,6,7,7,8,1,6,4,3];


// // psuh element at the end of array
// arr.push(6);
// console.log(arr);


// // remove and grap element at the end of the array
// let delElement = arr.pop()
// console.log("Last element : ", delElement);
// console.log(arr);


// // grab and delete element from the begining of array
// let grapFirst = arr.shift();
// console.log(" First elemet : ", grapFirst);
// console.log(arr);



// // Add element at the begining of the array
// arr.unshift(30);
// console.log(arr);

//slice array and make copy of the array
// let copyArray = arr.slice(2,-2);
// console.log(copyArray);
// console.log(arr);

// let index = arr.indexOf(6);
// let lastIndex = arr.lastIndexOf(6)
// console.log(lastIndex);
// console.log(index);

delete arr[9];
console.log(arr[9]);


//remove the empty item from the array
function remove (arr,index){
    return arr.slice(0,index).concat(arr.slice(index+1))
}
const index = arr.findIndex( value => value === undefined);
const newArray = remove(arr,index);
console.log("New arry ",newArray);

//do the same work by filter it will change the original array 

const a = arr.filter( value => value!==undefined);
console.log(a);


let x = 10; 
let y = 5;

let bol = x > 10 ? x : y;

console.log(bol);











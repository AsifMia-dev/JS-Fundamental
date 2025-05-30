const arr = [
    { id : 1, value : 10},
    { id : 2, value : 20},
    { id : 3, value : 30},
    { id : 4, value : 40},
    { id : 5, value : 50},
    { id : 6, value : 60},

];

// Change value using findIndex method , we will get index 
const index = arr.findIndex( (obj) => obj.id === 4);
arr[index].value = 400;
console.log(index);

// Change value using find method , it returns the  object 

const obj = arr.find( obj => obj.id === 3);
console.log(obj);
obj.value = 300;

console.log(arr);

// filter the array using filter method
const filteredArray = arr.filter( obj => obj.value !== 50);
console.log(filteredArray);





// for(let i = 0; i < arr.length; i++){
//     console.log(` id => ${arr[i].id} value => ${arr[i].value} \n`);
//     // console.log(" id = ", arr[i].id, '\n');
// }

// for(let obj in arr){
//     console.log(obj.id);

// }
// const arr2 = [1,2,3,4,5,6];
// arr2.forEach((value) =>{
//     console.log(value.id);
// });

//  const arr3 = arr2;
//  arr3[0] = 5;
//  arr3.push("Asif");
//  console.log(arr2);

// arr.forEach( (_,index) =>{
//     // if(arr[index]=== 3){
//     //     arr[index].value = 300;
//     // }
//     console.log(arr[index].value);
// });

// console.log(arr);

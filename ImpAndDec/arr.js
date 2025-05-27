const arr = [1,2,3,null,false, 4,5,' test ', 5];

// for(let i = 0; i<arr.length; i++){
//     for(let j = i; j<arr.length-1; j++){
//         if(!arr[i] || arr[i] !== 'number'){
//             arr [j] = arr[j+1];
//             arr[j+1] = undefined;
//         }
//     }
// } 
const fileteredArray = arr.filter( value => typeof value === 'number');
console.log(fileteredArray);

function ternary(){
    let x = 10 , y = 20;
    return x > y ? x : 1;
}
console.log(ternary());



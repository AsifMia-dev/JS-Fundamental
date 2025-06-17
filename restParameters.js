// function max(x,...numbers){
//     let result = -Infinity;

//     console.log(x);
    
//     for(let number of numbers){
//         if(number>result){
//             result = number;
//         }
//     }
//     return result;
// }
// let numbers = [2,3,4,5,6,1,45]

// console.log(max(5,...numbers));

let word = ["never", "fully"];

word = ["will",...word,"understand"];
console.log(word);

let cooordinates = { x : 10, y : 20};
console.log({...cooordinates,y:5});


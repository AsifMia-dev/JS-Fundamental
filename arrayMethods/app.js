// const numbers = [1, 2, 3,4,'flase', 5];

/**
 * Map -> same length as the original array
 * filter -> with filtered item 
 * Reduce -> No one knows what will be rturned (only coder know ) -> may be number , String , bol ,function , array , object 
 * in reduce we can return any thing we have control over it 
 * 
*/

// const sum = numbers.reduce((sum,cur) => {
//     if(cur){
//         sum += cur;
//     }
//     return sum;
// });
// console.log(sum)

// const num = numbers.reduce((acc,cur) => {
//         acc.push(cur+1);
//         console.log(" acc : ",acc, "Current :",cur);
//         console.log(typeof acc,typeof cur);
//         return acc;
//     },[]);

//     console.log('\n',num);


// convert the full array into string by ruduce 

// const str = numbers.reduce((acc,cur,index) => {
//     if(cur){
//        acc +=  cur.toString() + index < numbers.length-1 ? ", " : '';
//     }
//     return acc;
// },'');

// console.log(str);
// console.log(typeof str);

const arr = [];

for(let i = 0; i < 500000000; i++){
    arr.push(i);
}

console.time('not-optimized');
arr.filter(item => item%2 ===0).map(item => item*2);
console.timeEnd(not-optimized);
console.timeEnd('not-optimized');


console.time('Optimized');
arr.reduce((acc,cur) =>{
    if(cur%2 ===0 ){
        cur *= 2;
    }
    return acc;
},[])


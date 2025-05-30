// const minus = (v1,v2) => {
//     if(v2 === undefined) return -v1;
//     else return v1-v2;
// }

// console.log(minus(10,5));

function roundTo(n, step = 1) {
 let remainder = n % step;
 return n- remainder + (remainder < step / 2 ? 0 : step);
 };

 console.log(roundTo(4.5));
           console.log(roundTo(4.5, 2));
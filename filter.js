const numbers = [1,2,3,4,5,6,7,7,8,false,'asif'];

const even = numbers.filter( item => item % 2 === 0);
const odd = numbers.filter( item => item % 2 !== 0);
const notNumber = numbers.filter( item => item !== Number);
const OnlyNumber = numbers.filter( item => item === Number);

console.log(" Even number = ",even);
console.log(" Odd number = ",odd);
console.log(" Not number = ",notNumber);
console.log(" Only Number = ",OnlyNumber);
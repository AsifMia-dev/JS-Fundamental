const roundTo = (n , step) => {
    let remainder = n % step;
    return n - remainder + (remainder < step/2 ? 0 : step); 
};

console.log(roundTo(7 , 15));

const squre = v => v * v;
console.log(squre(12));

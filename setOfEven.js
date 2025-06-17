function even(num){
    const C = [];
    for(let i = 1 ; i <= num; i++){
        if(i % 2 !== 0 ){
           C.push(i);
        }
    }
    return C;
}

const C = even(150);
console.log(C);
let x = 10;
if(true){
    let y = 20; //local to block
    var z = 30; //global variable
}

console.log(z);
console.log(x);
//console.log(y); // throws an error

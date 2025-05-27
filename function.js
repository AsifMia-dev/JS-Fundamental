// function greet(name){
//     console.log(name, typeof(name));
//     name = Number(name);
//     console.log(name , typeof(name));
// }

// greet("Asif");

const greet = function (name){
    console.log(name);
    // name = NaN;
    name = Number(name);
    return name;
}
const name = greet("07586723");
console.log(name);
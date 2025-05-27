const fruits = ["Apple","Banana","Mango"];

const names = ['Rabita','Tahira','Arispha','Muag'];

const personalInfo = {
    'name':"Asif",
    'age': 25,
    'distric': "Sherpur"
};

for(let key in personalInfo){
    console.log(key , " => ", personalInfo[key]);
}

for(let info of personalInfo){
    console.log(info);
}




// for(let fruit in fruits){
//     console.log(fruits[fruit]);
// }

// for (let name of names){
//     console.log(name);
// }
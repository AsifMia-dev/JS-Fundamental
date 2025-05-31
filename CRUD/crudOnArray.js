const studnets = [
    {
        id      : 'ee57yt2984g',
        name    : 'Asif Mia',
        email   : 'asifmia.dev26@gmail.com',
    },
    {
        id      : 'ee57yt2845et',
        name    : 'Adnatul Raisa ',
        email   : 'raisa.21@gmail.com',
    },
    {
        id      : 'ee57yt296wa',
        name    : 'Tahira Taskin',
        email   : 'moawa.23@gmail.com',
    }
];

// push -> O(1)
studnets.push(
    {
        id      : 'ee57yt296wasa2',
        name    : 'Mouaz Ahmmed',
        email   : 'moawajaj.23@gmail.com',
    }
);

// console.log(studnets);


// Cahnge property where id = 'ee57yt2984g'
const idToUpdate = 'ee57yt2984g';

const updatedProperty = {
    name : "Jayed Asif",
}

// find object and then update usign propertys 
let  toUpdatedObj = studnets.find( obj => obj.id === 'ee57yt2845et');

//speard
toUpdatedObj = {
    ...toUpdatedObj, //this line reassign the element as reamined before 
    ...updatedProperty, // this line change the value as needed.
}


// Delete Elements
const index = studnets.findIndex( obj => obj.id === idToUpdate);

studnets.splice(index,1,' id = '+index); 
// studnets.splice(index,2);
console.log(studnets);
// console.log(studnets[1]);
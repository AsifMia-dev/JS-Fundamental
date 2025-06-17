const studnets = {
    ee57yt2984g: {
    id: 'ee57yt2984g',
    name: 'Asif Mia',
    email: 'asifmia.dev26@gmail.com'
  },
  ee57yt2845et: {
    id: 'ee57yt2845et',
    name: 'Adnatul Raisa ',
    email: 'raisa.21@gmail.com'
  },
  ee57yt296wa: {
    id: 'ee57yt296wa',
    name: 'Tahira Taskin',
    email: 'moawa.23@gmail.com'
  }
};

//Add new student 
const newStudent = {
    id      : 'kfG2322FGnbwf',
    name    : 'Azahar Ali',
    gmail   : 'azahrali@gmail.com'
}

studnets.kfG2322FGnbwf = newStudent;
studnets['newProperty'] = 'new data Added';

// Lets work basis on this id , and operate crud operation 
const idToUpdate = 'ee57yt2984g';
const updatedData ={
    name: 'Asif hasan',
}

studnets[idToUpdate] = {...studnets[idToUpdate],...updatedData}

// delete data from id of ee57yt296wa

const d = 'ee57yt296wa'
delete studnets[d];



 console.log(studnets);
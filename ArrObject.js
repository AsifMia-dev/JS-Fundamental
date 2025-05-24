const student1 = {
    firstName : 'Asif',
    lastName : 'Mia',
    email : 'asifmia.dev26@gmail.com',
    phone : +8801793310238,
};

const student2 = {
    firstName : 'Afsana',
    lastName  : 'Mimi',
    email     : 'afsanmimi@gmail.com',
    phone     : +8801991274532,
};

const student3 = {
    firstName : 'Azmina Akter',
    lastName  : 'Akhi',
    email     : 'akhi@example.bd',
    phone     : +8801757212246,
};

const students = [student1,student2,student3];


function printInfo(){

    for(let i = 0 ; i<students.length; i++){
        console.log('Name : '+students[i].firstName +' '+ students[i].lastName );
        console.log('Email : '+ students[i].email + '\n');

        if(students[i].email === 'asifmia.dev26@gmail.com'){
            sendEmail(students[i].email);
        }
       
    }

}

function sendEmail(email){
    console.log('Sending email to ',email + '\n');
}
printInfo();

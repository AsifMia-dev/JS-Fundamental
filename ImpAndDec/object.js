const microphone = {
    brand : ' Fifine ',
    indicator : true, 
    price : 8000, 
    color : 'Black',
    startRecording() {
        console.log(' Reconrding started ');
    },
    stopRecording : () =>{
        console.log('recording stoped');
    },
};

//constructor function

const testObj = new Object();
testObj.name = 'Test object ';
testObj.time = new Date();
console.log(testObj);

console.log('My microphone = ' + microphone);

let x = 100;
x = toString(x);
console.log(typeof x);

microphone.work = ' works differenly';

console.log(microphone);

//freeze objects 
Object.freeze(microphone);

microphone.newProperty = ' add newproperty';
console.log(microphone);

//get key and values
console.log(Object.keys(microphone));
console.log(Object.values(microphone));
// keys and values function return array of key and value
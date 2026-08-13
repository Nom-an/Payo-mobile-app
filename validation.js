//string

const number = '23';
if(typeof number === 'number'){
    console.log('value is a number');
}
else{
    console.log('value is not a number ');
}

//number 

const num = 12;
if(typeof num === 'number'){
    console.log('value is a number ');
}
else{
    console.log('value is not a number');
}


const numbers = [1,2,3,4,5];


console.log(typeof numbers);

console.log(Array.isArray(numbers));

const student = {
    name: 'noman',
    location: 'Dhaka',
}

console.log(typeof student);
console.log( student.name);

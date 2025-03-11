//Spread opertor

//expanding arrays 
const numbers = [1,2,3,4,5];
console.log(...numbers);

//copying arrays
const original = [6,7,8,9,10];
const copy = [...original];
console.log(copy);

//merging arrays
const part1 = ['PushpaTheRise','Devara1'];
const part2 = ['PushpaTheRule','Devara2'];

const combined = [...part1,...part2];
console.log(combined);

//passing arguments to functions
function sum(x,y,z){
    return x+y+z;
}

const numberss = [1,2,3];
console.log(sum(...numberss));

//copying and merging objects
const per1 = {
    name : 'Rahman',
    age : 23
}
const per2 = {
    role : 'developer',
    company : 'npci'
}

const fulldetails = {...per1,...per2};
console.log(fulldetails);

//spreading in strings 
const vowels = 'aeiou';
const Vowels = [...vowels];
console.log(Vowels);

//REST operator
function creditCardCaller ({name="User",salary,...notNeededDetails}){
    if(salary>25000){
        return `Hi ${name} you are eligible for credit card`;
    }else{
        return `Sorry ${name}, your application got rejected !`;
    }
}

const details = {
    name : 'Rahman',
    age : 24,
    sex : 'Male',
    role : 'Associate Software Developer',
    salary : 27566,
    phone  : '6300481313'
}

console.log(creditCardCaller(details));

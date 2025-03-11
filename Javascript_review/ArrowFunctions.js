//const functionName = (arg1,arg2) => expression

//simple arrow function
const addTwoNumbers = (a,b) => a+b;
console.log(addTwoNumbers(5,6));

//same above action can be performed using regular function like below
function addTwoNums(a,b){
    return a+b;
}
console.log(addTwoNumbers(4,9));

//No parameters
const greetUser = () => console.log('Hell user');
greetUser();

//Single Parameter
const greetUserWithName=(name) => console.log(`Hello ${name}, Welcome to Mumbai city`);
greetUserWithName('Rahman');

//multiple parameters
const greetUserWithCityName=(name,city)=>console.log(`Hola ${name}, Welcome to ${city} !`);
greetUserWithCityName('Rahman','Pune')

//multi line functions
const addNumberss = (a,b) =>{
    const sum = a+b;
    return sum;
}
console.log('Answer : ',addNumberss(10,50));
 


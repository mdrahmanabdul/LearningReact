const arr = [1,2,3,4,5];

//we can unpack like this and also we can skip the variables
const [a,b,c,,e] = arr;

console.log(a);
console.log(b);
console.log(c);
console.log(e);

//without use of extra variable we can swap like this
let [first,second,...restElements] = arr;
console.log(restElements);
console.log(first,second);
[first,second] = [second,first];
console.log(first,second);



//destructuring in objects
const family = {father : 'Ranbir',
                mother : 'Alia',
                daughter:'Raha',
                grandFather : 'Shashi Kapoor',
                grandMother : 'SomeXHeroine'    
            };

//using of rest operator in objects
const {father,mother,...rest} = family;
console.log(father);
console.log(mother);
console.log(rest);

//what if we want to change the variable name
// variableNameInObject : newVariableName
const {father:husband,mother:wife} = family;
console.log(husband,wife);


//nested destructing
const person = {
    name : 'RanbirKapoor',
    age : 39,
    address : {
        city : 'Mumbai',
        zipcode : 505211,
        street : 'Juhu Mumbai'
    }
}

const {name, address:{street, zipcode:pincode}} = person;
console.log(name);
// console.log(address);
console.log(street);
console.log(pincode);


//default values in objects
const user = {
    // userName : 'Rahman',
    age : 23,
    sex : 'Male'
}

//As we have commented the userName, it will take the default values as Guest
const {userName = 'Guest', age=10 } = user;
console.log(`Hello ${userName}! welcome to our website, your age is ${age}`);


//Nested Array Destructuring
const pairs = [['sai','mahi'],['sai','tanvi'],['sai','rithika'],['sai','priyal']];
const [[bf,gf],[],[bf3,gf3]] = pairs;
console.log(bf,gf);
console.log(bf3,gf3);

 

//functional parameter destructuring

function printHero({name,movie}){
    console.log('You came to watch ',movie,' movie of ',name);
}



const userDetails = {
    // name : 'Hrithik',
    movie : 'Fighter'
};

printHero(userDetails);

//destructuring with loops
const herosAndHits = [
    {
        heroName : 'Ranbir',
        hit : 'Animal'
    },
    {
        heroName : 'Mahesh Babu',
        hit : 'Srimanthudu'
    },
    {
        heroName : 'Sharukh',
        hit : 'DDLJ'
    }
];

for(const {heroName="*****",hit} of herosAndHits){
    console.log('Hero : ',heroName,' Hit : ',hit);
}


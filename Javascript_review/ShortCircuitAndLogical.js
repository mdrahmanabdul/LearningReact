//LOGICAL AND
// if the first operand is false, then it is returned
// otherwiser second operand is returned

const userLogginIn = false;
console.log(userLogginIn && 'Welcome user');

//LOGICAL OR
// if the first operand is true, then it is returned
// otherwise the second operand is returned

console.log( 0 || 'Hello');
console.log(null || 'world');
console.log('JS' || 100);

// Nullish Coalescing
//same like LOGICAL OR but only stops 0 and undefined
// if null and undefined are fist operands then second operands will be printed
// other like 0,"",false,NaN will return first operand only
console.log(null ?? 'Hello');

//Optional chaining
const user = {
    name : 'Rahman',
    age : 23,
    address :{
        city : 'Khammam',
        street : 'Khanapuram Haveli'
    }
}

// console.log(user.contact.email); //-> will give error as contact is not present  
console.log(user?.contact?.email); // will noot give error

//With optional chaining, JavaScript stops evaluating if a property is undefined or null instead of throwing an error.

// Using Optional Chaining with Arrays
// Optional chaining prevents errors when accessing elements inside an array.

const users = [{ name: "Alice" }, { name: "Bob" }];

console.log(users[1]?.name); // ✅ Output: Bob
console.log(users[5]?.name); // ✅ Output: undefined (No error)

//Optional chaining for functions
const user1 = {
    name : 'Rahman',
    greet(){
        console.log(`Hi from ${this.name}`);
        
    }
}

user1.greet?.();
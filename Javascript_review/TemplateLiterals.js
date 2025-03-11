//Template literals are the string literals that allow :
// 1. Multi-line strings
// 2. String interpolation
// 3. Expression evaluation
// 4. Tagged templates

// They use backticks(`) instead of (') and (")

// 1. String interpolation

const firstName = 'Rahman';
const city = 'Mumbai';
const greetMessage = `Hi ${firstName}, Welcome to ${city} city :)`;

console.log(greetMessage);

//Multiline strings
const multiLineGreeting = `Hola, 
Welcome ${firstName},
to the ${city} city`;

console.log(multiLineGreeting);

//Tagged template literals
function tagExample(strings, name, age) {
    
    /*How It Works:
When you use a template literal with a function (tagExample), JavaScript splits the string into parts (before and after placeholders like ${name} and ${age}).
The function receives an array of string parts (assigned to strings).
The remaining arguments are the values of the interpolated expressions (name and age). */
    console.log(strings[0]);
    console.log(strings[1]);
    console.log(strings[2]);
    
    
    
    return `${strings[0]}${name}${strings[1]}${age}${strings[2]}`;
}

const name = "Rahman";
const age = 24;

console.log(tagExample`My name is ${name} and I am ${age} years old.`);

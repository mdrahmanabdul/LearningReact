// Simulating a pizza order (Promise example)
const orderPizza = new Promise((resolve, reject) => {
    let pizzaReady = true;

    setTimeout(() => {
        if (pizzaReady) {
            resolve("Pizza is ready!");
        } else {
            reject("Pizza not ready");
        }
    }, 3000);
});

orderPizza
    .then(() => {
        console.log("Delivered pizza!");
    })
    .catch(() => {
        console.log("Not delivered!");
    })
    .finally(() => {
        console.log("Settled!");
    });

//Real world example...
//Fetching data from API using fetch (Promise use case)
function fetchTodoData(){
    return fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log('error getting data ',error))
    .finally(console.log('fufilled the promise of getting the data !'));
}
fetchTodoData();

//Using Async await instead of fetch
//Why?
/*
1. Cleaner and more readable code. (better than .then() and .catch())
2. Avoids callback hell
3. Easier to debug
*/

async function fetchData(){
    try {
        let response  = await fetch('https://jsonplaceholder.typicode.com/comments');
        let data = await response.json(); //it returns a promise so, we have to await it
        console.log(data);
    } catch (error) {
        console.error('Error fetching data from api !');
        
    }
}
fetchData();
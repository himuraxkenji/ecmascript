// arrays destructuring

let fruits = ['Apple', 'Banana']
let [a, b] = fruits
console.log(a, fruits[1]);


// Object destructuring

let user = {username: 'Himura', age: 28}
let {username, age} = user
console.log(username, user.age);


// spread operator

let person = { name: 'himura', age: 28}
let country = "MX"

let data = {...person, country}


// rest
function sum(num, ...values){
    console.log(values)
    console.log(num + values[0])
    return num + values[0]
}

sum(1,2,3,4,5)
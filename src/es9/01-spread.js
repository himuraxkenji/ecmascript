const user = {username: "himura", age: 28, country: 'CO'}
const {username, ...values} = user

console.log(values);
console.log(username);
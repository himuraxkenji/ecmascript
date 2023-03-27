// Constructor function objects
function Car(items){
    this.items = items
    this.getItems = function(){ 
        return `total: ${this.items}`
    }

}


const car = new Car(2)


console.log(car.getItems())

// New ES6

class User {

    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    // metodos
    greeting() {
        return 'Hello';
    }

    // getter
    get uName() {
        return this.name 
    }

    set uName(name) {
        this.name = name
    }
}

const newUser = new User();
newUser.uName = 'Himura'
console.log(newUser.greeting())
console.log(newUser.uName)

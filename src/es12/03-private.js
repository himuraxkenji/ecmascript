class User {

    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    #speak() {
        return 'Hello'
    }

    // metodos
    greeting() {
        return 'Hello';
    }

    // getter
    get #uName() {
        return this.name 
    }

    set #uName(name) {
        this.name = name
    }
}
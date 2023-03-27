function newUser(name, age, country) {
    var name = name || 'Himura'
    var age = age || 27
    var country = country || country

    console.log(name, age, country)
}

newUser()
newUser('David', 15, 'CO')


function newAdmin(name = 'Himura', age = 32, country = 'CO'){
    console.log(name, age, country)
}

newAdmin()
newAdmin('David', 15, 'CO')
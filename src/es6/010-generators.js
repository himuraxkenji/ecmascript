function* iterate(array) {

    for(let value of array){
        yield value
    }
}


const it = iterate(['Himura', 'Kenji', 'Amateratsu', 'Hen', 'Yin'])

console.log(it.next().value)
console.log(it.next().value)
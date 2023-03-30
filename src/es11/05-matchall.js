const regex = /\b(Apple)+\b/g;

const fruits = 'Apple, Bananana, Apple, wiki, orange, etc'

for (const match of fruits.matchAll(regex)){
    console.log(match)
}
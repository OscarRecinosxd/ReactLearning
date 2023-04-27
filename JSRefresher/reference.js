const person = {
    name : "Oscar"
}

const secondPerson = person
console.log(secondPerson)
person.name = "Agustin"
console.log(secondPerson);

const person2 = {
    name : "Manuel"
}

const secondPerson2 = {...person2}
console.log(secondPerson2)
person.name = "Changin name perosn2"
console.log(secondPerson2);
/* 
//variáveis e tipos de dados
// declaração or declaration
var name

//assignment or atribuição de valores
name = "Mike"

//que tipo de dados foi colocado na variável
console.log(typeof name)

// agrupamento de decalrações
let age, isHuman

age = 18
isHuman = true

//multiplos argumentos na funcao
//console.log(name, age, isHuman)

// escrita de texto + variáveis
//console.log('O ' + name + ' tem ' + age + ' anos')

//interpolando valores com template literals or template strings ``
console.log(`o ${name} tem ${age} anos`)
------------------------------------------------------------------------

//Object
const person = {
    name: 'Lorenzo',
    age: 19,
    weight: 88.6,
    isAdmin: true
}
console.log(`O ${person.name} tem ${person.age} anos`)

//Array
const animals = [
    'Lion',
    'Monkey',
    { //objeto dentro de um array
        name: 'Cat',
        age: 3
    }
]

//acessar valores dentro do Array
console.log(animals[2].name)

*/

// 1. Declare uma variável de nome weight
let weight

// 2. Que tipo de dado é a variável acima?
console.log(typeof weight)

//3. Declare uma variavel e atribua valores para cada um dos dados
let name = "Lorenzo"
let age = 19
let stars = 4.5
let isSubscribed = true

//4.
let student = {
    name: "Lorenzo",
    age: 19,
    weight: 71.5,
    isSubscribed: true
}
// console.log(`O ${student.name} tem ${student.age} anos e pesa ${student.weight}`)

//5.
let students = []

//6.
students = [
    student
]


const john = {
    name: "John",
    age: 23,
    weight: 82.6,
    isSubscribed: false
}

students[1] = john
console.log(students)
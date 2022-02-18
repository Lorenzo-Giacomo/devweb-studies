/*
//function expression or function anonymous

let total = 0
//parâmetros (parameters) só funcionam dentro da função
const sum = function(number1, number2) {
    let total = number1 + number2 //palavra chave sempre
    // todo função retorna algo
    return total
}

let number1 = 34
let number2 = 25
//sum(number1, number2) //arguments de uma função executada

console.log(`o número 1 é ${number1}`)
console.log(`o número 2 é ${number2}`)
console.log(`a soma é ${sum(number1, number2)}`)
console.log(total)


//Função é um liquidificador

function fazerSuco(fruta1, fruta2) {
    return 'suco de:'fruta1 + fruta2
}

//eu coloco coisas dentro dela e ela me dará coisas transformadas
const copo = fazerSuco('banana', 'maçã')
console.log(copo)

// function scope
let subject

function createThink() {
    subject = 'study'
    return subject
}

//toda função que não é definida retorna undefined
console.log(subject)
console.log(createThink())
console.log(subject)

// fucntion hoisting= iniciar uma função debaixo dos panos independente da ordem

sayMyName()

//quando colocamos const ou var antes de function dá erro pois não considera como uma função
function sayMyName () {
    console.log('Mayk')
}

// arrow function | Geralmente para uma const
const sayMyName = (name) => {
    console.log(name)
}
sayMyName("Lorenzo")


//callback function | passa uma função como parâmetro para uma função

function sayMyName(name) {
    console.log('antes de executar a funcao callback')

    name()

    console.log('depois de executar a callback')
}

sayMyName(
    () => {
        console.log('estou em uma callback')
    }
)


Function()constructor
    expressão new
    cria um novo objeto
    this keyword

Funções construtoras são utilizadas para criar novos objetos e geralmente tem a sua primeira letra maiúscula, todos com as mesmas características que são criadas na função, usando a palavra reservada this para se referir ao objeto sendo criado, por exemplo:

function Person(name) {
	this.name = name
	this.walk() = function() {
		return this.name + "está andando")
	}
}
const mayk = new Person("Mayk")
const joao = new Person("João")
*/

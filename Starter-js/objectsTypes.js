/*
# Prototype | é uma série de funcionalidades e atributos que já existem nativamente em diversos tipos de dados, que são lidados como objetos.

*prototype-based language
*prototype chain
*__proto__

# Type conversion (typecasting) vs Type coersion
Alteração de um tipo de dado para outro tipo

console.log('9' + 5) // transforma o tipo inteiro para tipo string
console.log(Number('9') + 5)

# Manipulando Strings e Números
- Transformar strings em número e número em String

let string = "123"
Number(string)
let number = 321
String(number)

- Contar quantos caracteres tem uma palavra e quantos digítos tem um número

let word = "Paralelepido"
console.log(word.length)
let number = 1234
console.log(String(number).length)

- Transformar um numero com 2 casas decimais e trocar ponto por vírgula
//quando uma função é atrelada a um objeto é chamada de método

let number = 546546.984984
console.log(number.toFixed(2).replace(".", ",")) //É possível adicionar mais métodos

- Transformar letras minúsculas em maiúsculas. Faça o contrário disso 
também.

let word = "Programar é muito bacana!"
console.log(word.toUpperCase())

- Separe um texto que contem espaço, em um novo array onde cada texto é uma posição do array. Depois disso, transforme o array em um texto e onde eram espaços, coloque _

let phrase = "Eu quero viver o Amor!"
let myArray = phrase.split(" ") //separa e transforma em um array
let phraseWithUnderscore = myArray.join("_") //justa os elementos de array e os transforma em string
console.log(myArray)
console.log(phraseWithUnderscore)

- Verificar, encontrar se o texto contém a palavra Amor

let phrase = "Eu quero viver o Amor!"
console.log(phrase.includes("Amor")) //retorna um valor booleano

- Criar Array com construtor

let myArray = new Array('a', 'b', 'c')
console.log(myArray)

- Contar elementos de um Array | pode-se usar o .length

console.log([
    "a",
    {type:"array"},
    function() {return "alo"}
][2]()) //seleciona o elemento 2 do array e () executa a função

- Transformar uma cadeia de caracteres em elementos de um array

let word = "manipulação"
console.log(Array.from(word)) // cada um dos caracteres vira um elemento do array

- Mais manipulação de arrays

// adicionar um item no fim
techs.push("nodejs")

// adicionar no começo
techs.unshift("sql")

// remover no fim
techs.pop()

// remover no começo
techs.shift()

// pegar somente alguns elementos do array, não causa modificação no array somente visual
console.log(techs.slice(1, 3)) // indicar a posição de início que deseja ser retirada e a posição final do array, até onde vai

// remover 1 ou mais itens em qualquer posição do array
techs.splice(1, 2) // indica qual indice começa a retirada e quantos elementos deseja tirar

// econtrar a posição de um elemento no array



#
*/

let techs = ["html", "css", "js"]

techs.push("nodejs")
techs.unshift("sql")
//techs.pop()
//techs.shift()
//console.log(techs.slice(1, 3)) 
//techs.splice(1)

let index = techs.indexOf('css')
techs.splice(index, 1)

console.log(techs)


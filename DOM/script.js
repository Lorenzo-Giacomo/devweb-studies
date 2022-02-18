/*
## Selecionando Elementos

// getElementById()
const element = document.getElementById("blog-title")
console.log(element)

//getElementByClassName() consegue selecionar diversos elementos que recebem a mesma classe

const element = document.getElementsByClassName("one")
console.log(element)

//getElementByTagName()
const element = document.getElementsByTagName('meta')
console.log(element)

// querySelector() pega o primeiro seletor que achar, seja tag, class etc como se fosse em css. Classe: . e id #

const element = document.querySelector('src')
console.log('element')

// querySelectorAll() trás todos os seletores, uma coleção entre nós
const elements = document.querySelectorAll('.one')

// em um html colection feito por o getElementsByClassName não é possível fazer um forEach
elements.forEach(el => console.log(el))


//Qual usar? Cada um retorna tipos diferentes de dados, adaptar pra cada necessidade.


getElementsById (element)
getElementsByClassName (HTML Collection)
getElementsByTagName (HTML Collection)
querrySelector (element)
querySelectorAll (Node List)

--------------------------------------

## Manipulando Conteúdos

// textContent - é possível atualizar valores de texto do elemento

const element = document.querrySelector('h1')

element.textContent += " Olá Devs"

console.log(element.textContent)

// innerText troca o texto interno do elemento html

const element = document.querySelector('h1')
element.innerText = " Olá Devs"

// innerHTML permite adicionar 
elementos de customização html

const element = document.querySelector('h1')
element.innerHTML = "Olá Devs! <small>!!!</small>"

// value | permite alterar o valor do input da maneira que quiser ou então se já estiver um value verificar qual é o valor

const element = document.querySelector('input')
console.log(element.value)
element.value = "outro valor"

## Atributos 

// getAttribute() pegar o atributo
//  setAtrribute() adcionar algo ao atributo
// removeAttribute() remover algo ao atributo

const header = document.querySelector('header')
header.setAttribute('id', 'header')

const headerID = document.querySelector('#header')

console.log(headerID.getAttribute('class'))

header.removeAttribute('id')
header.setAttribute('class', 'bg header')

-------------------------------------

## Manipulando estilos e classes para

// Alterando estilos .style | adciona uma propriedade css pelo .style 
const element = document.querySelector('body')
element.style.backgroundColor = 'red'

// classList adicionar lista de estilos baseadas nas pre definições de alguma tag, etc etc

const element = document.querySelector('body')

element.classList.add('active', 'green')
console.log(element.classList)
element.classList.remove('active')
element.classList.toggle('active') //se não tiver ele adiciona, se tiver ele remove. como removemos o active na linha 99, ele adicionou. Caso tivessemos, ele removeria o active.

--------------------------------------

## Navegando pelos elementos

// parentNode: pega o nó pai na hierarquia completo| parentElement

const body = document.querySelector('body')

console.log(body.parentNode)

// .childNodes pega todos os filhos do elemento em nodeList e leva em conta os epaços vazios| .children  é um html collection e elimina os espaços vazios

const el = document.querySelector('body')

console.log(el.childNodes)
console.log(el.children)


// .firstChild pega o primeiro elemento filho e detalha as características levando em consideração o espaço vazio | .firstElementChild  não leva em consideração o espaço vazio, pega o primeiro elemento de fato

const el = document.querySelector('body')

console.log(el.firstChild)
console.log(el.firstElementChild)

// lastChild lastElementChild pegam os ultimos elementos filhos baseados em contar espaços ou não 

const el = document.querySelector('body')

console.log(el.lastChild)
console.log(el.lastElementChild)

// nextSibling nextElementSibling pegam o próximo elemento seguindo o padrão: sem element ele considera os espaços(texto) e com ele pega de fato os elementos

const el = document.querySelector('header')
console.log(el.nextSibling)
console.log(el.nextElementSibling)

// previousSibling  previousElementSibling

const el = document.querySelector('body script')

console.log(el.previousSibling)
console.log(el.previousElementSibling)

---------------------------------------------

## Criando e adicionando elementos 

// createElement | cria um elemento que não está escrito no código html
const div = document.createElement('div')
div.innerText="Olá devs"

// append prepend | adiciona um elemento depois ou antes
const body = document.createElement('body')
body.append(div)

// adicionando elementos
const div = document.createElement('div')
div.innerText="Olá devs"

// insertBefore | insere elementos antes de certo elemento

const body = document.createElement('body')
const header = body.querySelector('header')
body.insertBefore(div, header.nextSibling)

-----------------------------------------------

## Eventos | on dentro de uma tag significa que o evento será disparado. Existem muitos mas dependem dos elementos aplicados para funcionar. Quando disparar o evento uma função irá rodar

// onclick="print()" | toda vez que clicar no elemento irá printar
function print() {
    console.log("print")
}

// Eventos de teclado

const input = document.querySelector('input')

input.onkeyup = function() { //dispara a função quando tocar no teclado
    console.log("rode1")
}

// addEventListener() adicionar o evento/função quando acontecer o evento indicado
const h1 = document.querySelector('h1');

h1.addEventListener("mouseover", print)

fucntion.print() {
    console.log("print")
}

// outra maneira de adicionar um evento é pegar o nome do elemento.evento = function

// dividir o código em addEventListener permite executar múltiplas funções sem atribuir o valor da anterior
const h1 = document.querySelector('h1');

h1.addEventListener('click', print)

function print() {
    console.log("print")
}

h1.addEventListener('click', function() {
    console.log("outro momento")
})


// argumento da função event | permite pegar informações específicas sobre nosso evento 

const input = document.querySelector('input')

input.onkeydown = function(event) {
    console.log(event.currentTarget.value)
}


*/


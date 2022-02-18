/* 
VARIAVEIS

Nomes simbólicos, identificadores para atribuir algum valor
3 palavras reservadas para criação de variáveis:
    var | Permite atualização de valor 
    const | Não permite atribuiçãoo de novo valor
    let

var clima = "Quente"
console.log(clima)

O JS é uma linguagem fracamente tipada e dinâmica
Variáveis não precisam ter um tipo previamente definido
Podemos mudar o conteúdo da variável (menos const)

let clima = ""
clima= true
console.log(typeof clima)
------------------------------------------------------------------------

#Scope
Escopo determina a visibilidade de alguma variável no JS

#Block statement
vamos iniciar um bloco
{
aqui dentro é um bloco e posso colocar qualquer código
} aqui fechamos o bloco

O bloco também criará um novo escopo. Chamamos de `block-scoped`

#var
o var é global e poderá funcionar fora de um escopo de bloco e também local( o que existe dentro do escopo {})

hoisting (faz debaixo dos panos a atribuição global mesmo q a variavel esteja dentro de um escopo)

console.log('> existe x antes do bloco?', x)
{
    var x = 0
}
console.log('> existe x depois do bloco?', x)

#let e const
const e let são locais e só funcionam no escopo onde foi criada, não funcionam no escopo global

Atualiza o let dentro do escopo
let y= 1
console.log('> existe x antes do bloco?', y)
{
    y = 0
    console.log('> existe y', y)
}
console.log('> existe x depois do bloco?', y)
------------------------------------------------------------------------
*/
/* 
# Expressões e Operadores

-Expressions : Qualquer linha de código que resolva alguma coisa no JS. O ponto e vírgula ; é facultativo, a não ser na função autoexecutável:
let number = 1;

(function () {
    console.log('alo')
}) ()

-Operators
    Binary | dois valores entre o operador (x + y)
    Unary | (typeof number) um valor 
        * typeof, delete(procura uma propriedade dentro do objeto e a deleta: delete person.age)

    Ternary | console.log(false ? 'alo': 'nada')

# new - criar um novo objeto
let name = new String('Lorenzo')

# Operadores Aritiméticos

multiplicação * (2*3)
divisão / (12/3)
soma + (34+67)
subtração - (50-25)

resto da divisão % (o que sobra depois de dividir)
let remainder
remainder = 11 % 3

incremento ++ (adiciona mais um valor antes ou depois)
let increment = 0
console.log(++increment++)

decremento -- (diminui um valor antes ou depois)
let decrement = 0
console.log(--decrement--)

exponencial ** (3**2)

# Grouping operator () ideia de ordem de precedência de cálculos

# Operadores de comparação | Irá comparar valores e retornar um boolean como resposta à comparação

== igual a 
!= diferente de

compara valores e tipos
=== estritamente igual a 
!== estritamente diferente de

> maior que
>= maior igual a
< menor que
<= menor igual a

# Operadores de atribuição (Assignment)

assignment
x=1
addiion assignment
x+=2
subtraction assignment
x-=1
multiplication assignment
x*=2
division assignment
x/=2
remainder, exponetiation
x%2, x**=2

# Operadores lógicos (logical operators)
- 2 valores booleanos, quando verificados, resultará em verdadeiro ou falso

AND && | os dois argumentos precisam ser true

OR || : um precisa ser true para dar true, false quando os dois dão false

NOT ! : tudo o que for true vira false e vice e versa

# Operador Condicional (Ternário)
Dependendo da condição, nós receberemos valores diferentes

Condição então valor 1 se não valor 2
condition ? value1 : value2
se a condição for sempre verdadeira escreva isso se não escreva isso

let pao = true
let queijo = true
const niceBreakfast = (pao || queijo ? 'Café top' : 'Café ruim')
console.log(niceBreakfast)

# Operador de String (string operator)

comparison
console.log('a'=='a')

concatenation
let alpha='alpha'
alpha+='bet'
console.log(alpha)

# FALSY : Quando um valor é considerado false em contextos onde um booleano é obrigatório (condicionais e loops )

false, 0, -0, "", null, undefined, NaN

# TRUTHY: Quando um valor é considerado true em contextos onde um booleano é obrigatório (condicionais e loops )

true, {}, [], 1, 3.23, "0", "false", -1, Infinity, -Infinity

# Operator precedence (Precedência de operadores)

grouping    ()
negação e incremento    ! ++ --
multiplicação e divisão     * /
adição e subtração       + - 
relacional      < <= > >=
igualdade       == != === !==
AND     &&
OR      ||
condicional     ?:
assignment (atribuição)     = += -= *=

*/


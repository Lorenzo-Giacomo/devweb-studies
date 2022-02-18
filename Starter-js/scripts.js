/*
# Control FLow (Condicionais e Controle de fluxo)

# if ... else
let temperature = 38    
let highTemperature = temperature >= 37.5
let mediumTemperature = temperature < 37.5 && temperature >= 37

if(highTemperature) {
    console.log("Febre alta")
} else if(mediumTemperature) {
    console.log('Febre moderada')
} else {
    console.log("Saudável")
}

# switch : Similar ao if else

function calculate(number1, operator, number2) {
    let result = 0;

    switch (operator) {
        case '+':
            result = number1 + number2
            break
        case '-':
            result = number1 - number2 
            break
        case '*':
            result = number1 * number2
            break
        case '/':
            result = number1 / number2 
            break
        default:
            console.log('não implementado')
            break
    }

    return result
}

console.log(calculate(4, '%', 8))

# throw | Se faço um throw sem try e catch a aplicação para
function sayMyname(name ='') {
    if (name === '') {
        throw new Error("Nome é necessário") //interrompe a aplicação
    }
    console.log('depois do erro')
}

# try...catch | Captura os erros da aplicação, não interrompe o fluxo, perceber falhas.
try {
    sayMyname()
} catch(e) {
    console.log(e)
}

console.log('após o try/catch')


# Estrutras de repetição

# For
for(inicialização de uma variável; condição de continuação para o loop; expressão final)

break - para a execução do loop
continue - pula a execução do momento

for(let i = 10; i > 0; i--) {
    if(i === 50) {
        break
    }
    console.log(i)
}

# While | Usar quando não saber o momento da parada. Repete o que está dentro do código enquanto a condição não for atingida

let i = 0;
while(i<10) {
    console.log(i)
    i++;
}

# For...of | Cria um loop a partir de uma variável previamente

//pega cada elemento dentro do array e printa.  
let name="Lorenzo"
let names=['João', 'Paulo', 'Pedro']

for(let name of names) {
    console.log(name)
}

# For...in | Cria um loop a partir das propriedades de um objeto
let person = {
    name: 'Lorenzo',
    age: 19,
    weight: 71.6
}

for(let property in person) {
    console.log(property)
    console.log(person[property])
}

# DESAFIOS #

# Crie um algoritmo que transforme as notas do sistema numérico para sistema de notas em caracteres tipo A B C


//NOTAS
function getScore(score) {

    let scoreA = score > score >= 90 && score <=100
    let scoreB = score >= 80 && score <= 89
    let scoreC = score >= 70 && score <= 79
    let scoreD = score >= 60 && score <= 69
    let scoreF = score < 60 && score >= 0
    
    let scoreFinal;
    
    if (scoreA) {
        scoreFinal = "A"
    } else if (scoreB) {
        scoreFinal = "B"
    } else if (scoreC) {
        scoreFinal = "C"
    } else if (scoreD) {
        scoreFinal = "D"
    } else if (scoreF) {
        scoreFinal = "F"
    }  else {
        scoreFinal = "Nota inválida"
    }    
    return scoreFinal
}
// console.log(getScore(60))

---------------------------------------------------------------------------

# Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
    * receitas: [] 
    * despesas: []
Agora, crie uma função que irá calcular o total de receitas e 
despesas e irá mostrar uma mensagem se a família está com 
saldo positivo ou negativo, seguido do valor do saldo.


//BALANÇOS
let family = {
    incomes: [1208, 2040, 310, 400],
    expenses: [320.4, 524.4, 1000, 450]
}

function sum(array) { //pega cada valor dentro do array e realiza a soma
    let total = 0;

    for(let value of array) {
        total += value
    }
    return total
}

function calculateBalance() {
    //especifica o array dentro do objeto 
    const calculateIncomes = sum(family.incomes) 
    const calculateExpenses = sum(family.expenses)

    const total = calculateIncomes - calculateExpenses

    const itsOk = total >= 0 

    let balanceText = "negativo"

    if(itsOk) {
        balanceText = "positivo"
    }

   // console.log(`Seu saldo é ${balanceText}: R$${total.toFixed(2)}`)
}
// calculateBalance()

---------------------------------------------------------------------------

# Crie uma função que receba uma string em celsius ou fahrenheit
e faça a transformação de uma unidade para outra 
    C = (F - 32) * 5/9 
    F = C * 9/5 + 32


// transformTemperatures()

// transformDegree('50f')
function transformDegree(degree) {
    const celsiusExists = degree.toUpperCase().includes('C')
    const fahrenheitExists = degree.toUpperCase().includes('F')

    if(!celsiusExists && !fahrenheitExists) {  //capturar erros
        throw new Error('Grau não identificado')
    }

    // fluxo ideal, F -> C
    let updatedDegree = Number(degree.toUpperCase().replace("F", ""));
    let formula = (fahrenheit) => (fahrenheit - 32) * 5/9
    let degreeSign = 'C'

    // fluxo alternativo, C -> F
    if(celsiusExists) {
        updatedDegree = Number(degree.toUpperCase().replace("C", ""));
        formula = celsius => celsius * 9/5 + 32
        degreeSign = 'F'
    }

    return formula(updatedDegree) + degreeSign
}

try {
    console.log(transformDegree('50F'))
    // transformDegree('50Z') fornecer dados que darão erros para capturá-los
} catch (error) {
    console.log(error)
}


*/


const booksByCategory = [
    { 
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            },
        ],
    },
    { 
        category: "Inteligência Emocional",
        books: [
            {
                title: "Você é Insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade – Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            },
        ],
    },
];

const totalCategories = booksByCategory.length
console.log(totalCategories)


for(let category of booksByCategory) {
    console.log(`Total de livros da categoria: ${category.category}`)
    console.log(category.books.length)
}

function countAuthors () {
    let authors = [];

    for(let category of booksByCategory) {
        for(let book of category.books) {
            if(authors.indexOf(book.author) == -1) {
                authors.push(book.author)
            }
        }
    }

    console.log("Total de autores:", authors.length)
}

countAuthors();

function booksOfAuthor(author) {
    let books = [];

    for(let category of booksByCategory) {
        for(let book of category.books) {
            if(book.author == author) {
                books.push(book.title)
            }
        }
    }

    console.log(`Livros do autor ${author}: ${books.join(", ")}`) //join trasforma array em string

}

booksOfAuthor('Augusto Cury')
    
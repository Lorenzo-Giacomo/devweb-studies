function Pessoa(nome, telefone, endereco, estado) {

    this.nome = nome
    this.telefone = telefone
    this.endereco = endereco
    this.estado = estado

    this.getPrimeiroNome = () => {
        let primeiroNome =  this.nome.split(" ");
        console.log(primeiroNome)
        return primeiroNome[0]
    }
    // this.getTelefone = ()
    
}

const objHTML =  [
    {
        nome: "Matheus de Souza"
    },
    {
        nome: "Lorenzo Giacomo"
    },
    {
        nome: "Lorenzo Giacomo"
    },
    {
        nome: "Lorenzo Giacomo"
    },
    {
        nome: "Lorenzo Giacomo"
    },
    {
        nome: "Lorenzo Giacomo"
    },
    {
        nome: "Lorenzo Giacomo"
    },
    {
        nome: "Lorenzo Giacomo"
    },
    {
        nome: "Lorenzo Giacomo"
    },
    {
        nome: "Lorenzo Giacomo"
    },
    {
        nome: "Lorenzo Giacomo"
    },
    {
        nome: "Lorenzo Giacomo"
    },
    {
        nome: "Lorenzo Giacomo"
    },
    { 
        nome: "Lorenzo Giacomo"
    }
]

let lstPessoas = []

objHTML.forEach(pessoa => {
    lstPessoas.push(new Pessoa(pessoa.nome, "", "", ""))
});

lstDesordenada = [4,6,7,2,3,4,5,1]
lstPessoas.sort()
lstPessoas.forEach(pessoa => {

    console.log(pessoa.getPrimeiroNome())
});

// let pessoa = new Pessoa(objHTML[0].nome, "27988744666", "Barro Branco", "ES")
// let pessoa2 = new Pessoa(objHTML[1].nome, "27988744666", "Barro Branco", "ES") 
// console.log(pessoa.nome)
// console.log(pessoa.getPrimeiroNome())
// console.log('---------------------------------------')
// console.log(pessoa2.nome)
// console.log(pessoa2.getPrimeiroNome())
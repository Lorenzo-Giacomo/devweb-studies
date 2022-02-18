// pega informações do processo. Lista de argumentos
// console.log(process.argv) // traz uma lista de argumentos que estão rodando no node

const firstName = process.argv[2] 
const lastName = process.argv[3]

console.log(`Seu nome é ${firstName} ${lastName}`)

// existem flags executáveis dentro do terminal como por exemplo: process --name "Mayk Brito" --greeting "Tudo bem com você?"
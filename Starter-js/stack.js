//Passo 1: Modelando
class Stack {
    constructor() {
      this.data = [] //cria um array vazio para adicionar valores
      this.top = -1
    }
  push(value) {
    this.top++
    this.data[this.top] = value //o topo recebe o valor que se encontra, no caso o último
    return this.data
  }
    
  pop() {
    if (this.top <0) return undefined
    const poppedTop = this.data[this.top]
    delete this.data[this.top] //deletar o valor do topo
    this.top--
    return poppedTop
  }
  
  peek() {
    return this.top >= 0 ? this.data[this.top] : undefined
  }
} 
//Passo 2: Utilizando
const stack = new Stack()
//adicionar dados
stack.push('learning')
stack.push('data')
console.log(stack.push('structures'))
// remover
stack.pop()
stack.peek()
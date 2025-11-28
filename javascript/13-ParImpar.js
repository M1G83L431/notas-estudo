// Pegar o exercico no GitHub e colocar aqui
// 13. Peça um número inteiro e diga
// se ele é par ou ímpar.
// (Dica): se o numero dividido por 2
// tiver resto

// Entrada
// sempre colocaremos variáveis...dos tipos:
// const - algo fixo
// let - não fixo
// var - erro
// pedir info para o usuário usando prompt
// explicar dentro do prompt do que se trata a solicitação
const num = Number(prompt ('Digite um numero: '))

// Processamento
// normalmente vem um calculo aqui
// pode tambem se usada variavel aqui
// fazer uma divisão e pegar o resto
const resto = num % 2

// Saída
// mostra o resultado com alert()
if(resto == 0){
    alert("O numero informado é par")
} else {
    alert('O numero informado é impar')
}
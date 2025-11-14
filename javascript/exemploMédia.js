// entrada - variáveis
// media aritmetica de 3 notas, e menor 3 horrível
// menor que 7 dá para melhorar, maior 7 gênio
const nota1 = prompt("Digite a primeira nota")
const nota2 = prompt("Digite a segunda nota")
const nota3 = Number(prompt("Digite a terceira nota"))

//Processamento
const soma = Number(nota1) + Number(nota2) + nota3
const media = soma / 3

// media menor que 3
//media menor que 7
// media maior que 7
if(media < 3) {
    alert("Média é insuficiente: " + media + " - Horrível")
} else if (media < 7) {
    alert("Média é insuficiente: " + media + " - Dá para melhorar")
} else {
    alert("Média é suficiente: " + media + " - Parabéns")
}
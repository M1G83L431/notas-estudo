let a = Number(prompt("Digite o primeiro número:"));
let b = Number(prompt("Digite o segundo número:"));

if (a > b) {
    alert ("O maior é: o primeiro número", a);
} else if (b > a) {
    alert ("O maior é: o segundo número", b);
} else {
    alert ("São iguais")
}
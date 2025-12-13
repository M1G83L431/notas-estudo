let permitida = Number(prompt("Velocidade permitida na via:"));
let motorista = Number(prompt("Velocidade permitida na via:"));

let limite20 = permitida * 1.20;

if (motorista <= limite20) {
    console.log("Multa: R$ 102,00");
} else {
    console.log("Multa: R$ 500,00");
}
let cpf = Number(prompt("Digite seu CPF (somente números):"));
let dependentes = Number(prompt("Digite o número de dependentes:"));
let renda = Number(prompt("Digite sua renda mensal:"));

const salarioMinimo = 1412;

// Desconto por dependentes
let desconto = dependentes * (0.05 * salarioMinimo);

// Renda após desconto
let rendaLiquida = renda - desconto;

// Determinar a alíquota
let aliquota;

if (rendaLiquida <= 2 * salarioMinimo) {
    aliquota = 0;
} else if (rendaLiquida <= 3 * salarioMinimo) {
    aliquota = 0.05;
} else if (rendaLiquida <= 5 * salarioMinimo) {
    aliquota = 0.10;
} else if (rendaLiquida > 7 * salarioMinimo) {
    aliquota = 0.20;
} else {
    aliquota = 0;
}

// Calcular imposto
let imposto = rendaLiquida * aliquota;

// Mostrar resultado
alert("CPF: " + cpf +
      "\nRenda Bruta: R$ " + renda.toFixed(2) +
      "\nDesconto por dependentes: R$ " + desconto.toFixed(2) +
      "\nRenda Líquida: R$ " + rendaLiquida.toFixed(2) +
      "\nAlíquota aplicada: " + (aliquota * 100) + "%" +
      "\nImposto devido: R$ " + imposto.toFixed(2)
);

function calcularSoma() {
  const INDICE = 13;
  let SOMA = 0;
  let K = 0;

  while (K < INDICE) {
    K += 1;
    SOMA += K;
  }

  document.getElementById(
    "somaResultado"
  ).innerText = `Resultado da SOMA: ${SOMA}`;
}

function verificarFibonacci() {
  const num = Number.parseInt(document.getElementById("numeroFibonacci").value);
  let a = 0;
  let b = 1;

  while (b < num) {
    const temp = a;
    a = b;
    b = temp + b;
  }

  const resultado =
    b === num || num === 0
      ? `O número ${num} pertence à sequência de Fibonacci.`
      : `O número ${num} NÃO pertence à sequência de Fibonacci.`;
  document.getElementById("fibonacciResultado").innerText = resultado;
}

function analisarFaturamento() {
  const faturamentoDiario = [0, 100, 200, 0, 300, 400, 0, 0, 150, 50, 0, 250];
  const faturamento = faturamentoDiario.filter((dia) => dia > 0);

  const menorValor = Math.min(...faturamento);
  const maiorValor = Math.max(...faturamento);
  const mediaMensal =
    faturamento.reduce((acc, dia) => acc + dia, 0) / faturamento.length;
  const diasAcimaMedia = faturamento.filter((dia) => dia > mediaMensal).length;

  document.getElementById("faturamentoResultado").innerText =
    `Menor valor: R$${menorValor.toFixed(2)}\n` +
    `Maior valor: R$${maiorValor.toFixed(2)}\n` +
    `Dias acima da média: ${diasAcimaMedia}`;
}

function calcularPercentual() {
  const faturamentoEstados = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53,
  };

  const total = Object.values(faturamentoEstados).reduce(
    (acc, valor) => acc + valor,
    0
  );
  let resultado = "";
  for (estado in faturamentoEstados) {
    const percentual = (faturamentoEstados[estado] / total) * 100;
    resultado += `${estado}: ${percentual.toFixed(2)}%\n`;
  }

  document.getElementById("percentualResultado").innerText = resultado;
}

function inverterString() {
  const str = document.getElementById("inputString").value;
  let invertida = "";
  for (let i = str.length - 1; i >= 0; i--) {
    invertida += str[i];
  }
  document.getElementById(
    "stringResultado"
  ).innerText = `String invertida: ${invertida}`;
}

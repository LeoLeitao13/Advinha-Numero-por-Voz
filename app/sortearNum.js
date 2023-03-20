const menorValor = 10;
const maiorValor = 100;
const numeroSecreto = gerarNumAleatorio();

function gerarNumAleatorio() {
  return parseInt(Math.random() * maiorValor + 1);
}

const elementoMenorValor = document.getElementById("menor-valor");
elementoMenorValor.innerHTML = menorValor;

const elementoMaiorValor = document.getElementById("maior-valor");
elementoMaiorValor.innerHTML = maiorValor;

console.log(numeroSecreto);

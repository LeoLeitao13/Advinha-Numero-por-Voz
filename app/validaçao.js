function verificaChute(chute) {
  const numero = +chute;

  if (chuteForInvalido(numero)) {
    elementoChute.innerHTML += "<div>Valor inválido</div>";
  }
  if (numeroMaiorOuMenor(numero)) {
    elementoChute.innerHTML += `<div>Valor inválido: o número secreto precisa estar entre ${menorValor} e ${maiorValor}</div>`;
  }

  if (numero === numeroSecreto) {
    document.body.innerHTML = `
        <h2 class="titulo">Você Acertou!!!!!</h2>
        <h3 class="subtitulo">O número secreto era ${numeroSecreto}</h3>
        <button id='restart' class="restart">Restart</button>
    `;
  } else if (numero > numeroSecreto) {
    elementoChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-arrow-down"></i></div>
    `;
  } else {
    elementoChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-arrow-up"></i></div>
    `;
  }
}
function chuteForInvalido(numero) {
  return Number.isNaN(numero);
}

function numeroMaiorOuMenor(numero) {
  return numero > maiorValor || numero < menorValor;
}

document.body.addEventListener("click", (e) => {
  if (e.target.id == "restart") {
    window.location.reload();
  }
});

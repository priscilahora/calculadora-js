function somar() {
  const numero1 = parseFloat(document.getElementById("numero1Soma").value);
  const numero2 = parseFloat(document.getElementById("numero2Soma").value);
 
  const soma = numero1 + numero2;
  document.getElementById("resultadoSoma").innerHTML = soma;
}

function subtrair() {
  const numero1 = parseFloat(document.getElementById("numero1Sub").value);
  const numero2 = parseFloat(document.getElementById("numero2Sub").value);

  const subtracao = numero1 - numero2;
  document.getElementById("resultadoSub").innerHTML = subtracao;
}

function multiplicar() {
  const numero1 = parseFloat(document.getElementById("numero1Mult").value);
  const numero2 = parseFloat(document.getElementById("numero2Mult").value);

  const produto = numero1 * numero2;
  document.getElementById("resultadoMult").innerHTML = produto;
}

function dividir() {
  const numero1 = parseFloat(document.getElementById("numero1Div").value);
  const numero2 = parseFloat(document.getElementById("numero2Div").value);

  const divisao = numero1/numero2;
  document.getElementById("resultadoDiv").innerHTML = divisao;
}

function calcularMedia() {
  const nota1 = parseFloat(document.getElementById("nota1").value);
  const nota2 = parseFloat(document.getElementById("nota2").value);
  const nota3 = parseFloat(document.getElementById("nota3").value);
  const nota4 = parseFloat(document.getElementById("nota4").value);

  const mediaDasNotas = (nota1 + nota2 + nota3 + nota4)/4;

  switch (true) {
    case (mediaDasNotas === 0):
        mensagem = ("Infelizmente você zerou a prova.")
        break;
    case (mediaDasNotas > 0 && mediaDasNotas < 3.1):
        mensagem = (`Caramba, deu ruim, você obteve media ${mediaDasNotas}! Estude mais e tente novamente`)
        break;
    case (mediaDasNotas >= 3.1 && mediaDasNotas <= 5.9):
        mensagem = (`Você obteve media ${mediaDasNotas}! Falta pouco para a média.`)
        break;
    case (mediaDasNotas >= 6 && mediaDasNotas <= 7):
        mensagem = (`Você está dentro da média com ${mediaDasNotas}!`)
        break;
    case (mediaDasNotas >= 7.1 && mediaDasNotas <= 9.9):
        mensagem = (`Notão! Sua média é ${mediaDasNotas}`)
        break;
    case (mediaDasNotas === 10):
        mensagem = (`Parabéns! Sua média é 10`)
        break;
  }

  document.getElementById("situacaoAluno").innerHTML = mensagem; }
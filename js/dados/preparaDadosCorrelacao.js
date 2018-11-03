function preparaDadosCorrelacao(direita, esquerda, radio)
{
  const variaveis = {
    dependente: [],
    independente: []
  };
  let lado;
  for (let i = 0; i < radio.length; i++) {
    if (radio[i].checked) {
      lado = radio[i].id;
    }
  }

  if (!lado) {
    return '1';
  }

  for (let i = 0; i < direita.length; i++) {
    if (lado == 'direita') {
      variaveis['dependente'].push(parseInt(direita[i].value));
      variaveis['independente'].push(parseInt(esquerda[i].value));
    } else {
      variaveis['dependente'].push(parseInt(esquerda[i].value));
      variaveis['independente'].push(parseInt(direita[i].value));
    }
  }
  return variaveis;
}

exports.init = preparaDadosCorrelacao;

function preparaDadosCorrelacao(dependente, independente)
{
  const variaveis = {
    dependente: [],
    independente: []
  };
  for (var i = 0; i < dependente.length; i++) {
    variaveis['dependente'].push(parseInt(dependente[i].value));
    variaveis['independente'].push(parseInt(independente[i].value));
  }
   return variaveis;
}

exports.init = preparaDadosCorrelacao;

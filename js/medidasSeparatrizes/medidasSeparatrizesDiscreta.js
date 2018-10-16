function medidasSeparatrizesDiscreta(dados, parte, medida) {
  const posicao = Math.round((dados.length * parte) / medida);
  if (posicao == 0) {
    return dados[posicao];
  }
  return dados[posicao - 1];
}

exports.init = medidasSeparatrizesDiscreta;

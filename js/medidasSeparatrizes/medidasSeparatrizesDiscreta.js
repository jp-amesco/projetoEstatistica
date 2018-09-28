function medidasSeparatrizesDiscreta(dados, parte, medida) {
  if (medida == 'quartil') {
    const posicao = Math.round((dados.length * parte) / 4);
    return dados[posicao - 1];
  }

  if (medida == 'quintil') {
    const posicao = Math.round((dados.length * parte) / 5);
    return dados[posicao - 1];
  }

  if (medida == 'decil') {
    const posicao = Math.round((dados.length * parte) / 10);
    return dados[posicao - 1];
  }

  if (medida == 'percentil') {
    const posicao = Math.round((dados.length * parte) / 100);
    return dados[posicao - 1];
  }
}

exports.init = medidasSeparatrizesDiscreta;

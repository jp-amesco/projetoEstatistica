function medianaQuantitativaDiscreta (dados) {
  let i = 0;
  if (dados.length % 2 == 0) {
    i = dados.length / 2 - 1;
    if(dados[i] != dados[i + 1]){
      return (dados[i] + dados[i + 1]) / 2;
    }
    return dados[i];
  }
  i = Math.round(dados.length / 2 - 1);
  return dados[i];
}

exports.init = medianaQuantitativaDiscreta;

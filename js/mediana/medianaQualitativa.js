function medianaQualitativa (dados) {
  let i = 0;
  let aux = [];
  if (dados.length % 2 == 0) {
    i = dados.length / 2 - 1;
    if(dados[i] != dados[i + 1]){
      aux.push(dados[i])
      aux.push(dados[i + 1])
      return aux;
    }
    return dados[i];
  }
  i = Math.round(dados.length / 2 - 1);
  return dados[i];
}

exports.init = medianaQualitativa;

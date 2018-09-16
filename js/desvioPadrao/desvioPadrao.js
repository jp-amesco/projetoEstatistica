function desvioPadrao (dados, media, tipoDados) {
  const frequencia = dados[0];
  const variaveis = dados[1];
  let desvio = 0;
  let aux = 0;
  let totFi = 0;

  for (let i = 0; i < variaveis.length; i++) {
    desvio += Math.pow(variaveis[i] - media, 2) * frequencia[i];
    totFi += frequencia[i];
  }

  if (tipoDados == 'população') {
    aux++;
  }

  desvio = Math.sqrt(desvio / (totFi - aux));

  return desvio.toFixed(2);
}

exports.init = desvioPadrao;

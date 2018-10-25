function desvioPadraoContinua (dados, media, tipoDados, array, classes) {
  const aux = [];
  const frequencia = [];
  const mediasClasses = [];
  let aux2 = 0;
  let totFi = 0;
  let desvio = 0;

  for (let i = 0; i < array.quantClasse; i++) {
    mediasClasses[i] = ((dados[0] + array.intervalo * i) + dados[0] + array.intervalo * (i + 1)) / 2;
    frequencia[i] = classes['classe' + (i + 1)].length;
    totFi += frequencia[i];
  }

  for (let i = 0; i < mediasClasses.length; i++) {
    desvio += Math.pow(mediasClasses[i] - media, 2) * frequencia[i];
  }

  if (tipoDados == 'SENSO') {
    aux2++;
  }

  desvio = Math.sqrt(desvio / (totFi - aux2));

  return desvio.toFixed(2);
}

exports.init = desvioPadraoContinua;

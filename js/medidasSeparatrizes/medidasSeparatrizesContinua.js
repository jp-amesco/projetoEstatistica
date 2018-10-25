function medidasSeparatrizesContinua (dados, array, facs, parte, medida, classes) {
  const posicao = (dados.length * parte) / medida;
  const todosIntervalos = [];
  const frequencia = [];
  let facAnt;
  let posicaoArredondada = Math.round(posicao);
  let classePesquisada;

  if (posicao - posicaoArredondada < 0) {
    posicaoArredondada--;
  }

  for (let i = 0; i < Object.keys(classes).length; i++) {
    if (classes['classe' + (i+1)].indexOf(dados[posicaoArredondada]) > -1) {
      classePesquisada = i + 1;
    }
  }

  for (let i = 0; i < array.quantClasse; i++) {
    todosIntervalos[i] = dados[0] + array.intervalo * i;
    frequencia[i] = classes['classe' + (i + 1)].length;
  }
  if (classePesquisada == 1) {
    facAnt = 0;
  }else {
    facAnt = facs[classePesquisada - 2];
  }

  return  todosIntervalos[classePesquisada - 1] + ((posicao - facAnt) / frequencia[classePesquisada - 1]) * array.intervalo

}

exports.init = medidasSeparatrizesContinua;

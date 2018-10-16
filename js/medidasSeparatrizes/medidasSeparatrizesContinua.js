function medidasSeparatrizesContinua (dados, array, facs, parte, medida) {
  let posicao = 0;
  if (medida == 'quartil') {
    posicao = (dados.length * parte) / 4;
  }else if (medida == 'quintil') {
    posicao = (dados.length * parte) / 5;
  }else if (medida == 'decil') {
    posicao = (dados.length * parte) / 10;
  }else if (medida == 'percentil') {
    posicao = (dados.length * parte) / 100;
  }

  const posicaoArredondada = Math.round(posicao);
  const todosIntervalos = [];
  const frequencia = [];
  const classes = [];
  let classePesquisada = 0;
  let facAnterior = 0;
  let vetDados = [];
  let cont = 1;

  for (let i = 0; i < dados.length; i++) {
    if (dados[i] < dados[0] + array.intervalo * cont) {
      vetDados.push(dados[i]);
    }else{
      classes['classe' + cont] = vetDados;
      vetDados = [dados[i]];
      cont++;
    }
  }
  classes['classe' + cont] = vetDados;

  for (let i = 0; i < cont; i++) {
    if (classes['classe' + (i+1)].indexOf(dados[posicaoArredondada]) > -1) {
      classePesquisada = i;
    }
  }

  if (classePesquisada > 0) {
    facAnterior = facs[classePesquisada - 1];
  }

  for (let i = 0; i < array.quantClasse; i++) {
    todosIntervalos[i] = dados[0] + array.intervalo * i;
    frequencia[i] = classes['classe' + (i + 1)].length;
  }
  return Math.round(
    todosIntervalos[classePesquisada] + ((posicao - facAnterior) / frequencia[classePesquisada]) * array.intervalo
    );

}

exports.init = medidasSeparatrizesContinua;

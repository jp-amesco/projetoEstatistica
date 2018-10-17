const intervalo = require('../intervaloClasse.js');
const calculaFacContinua = require('../calculaFacContinua.js');

function medidasSeparatrizesContinua (dados, array, facs, parte, medida) {
  const posicao = (dados.length * parte) / medida;
  const todosIntervalos = [];
  const frequencia = [];
  const classes = [];
  let facAnt;
  let posicaoArredondada = Math.round(posicao);
  let classePesquisada;
  let vetDados = [];
  let cont = 1;

  if (posicao - posicaoArredondada < 0) {
    posicaoArredondada--;
  }

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

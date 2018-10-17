function medianaContinua(dados, facs, array) {
  const posicao = dados.length / 2;
  const valorPosicao = dados[Math.round(posicao)];
  const classes = {};
  const classeMediana = [];
  let menorClasseMediana;
  let facAnt;
  let fiClasseMediana;
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
  for (let i = 0; i < array.quantClasse; i++) {
    if (classes['classe' + (i + 1)].indexOf(valorPosicao) != -1) {
      menorClasseMediana = dados[0] + array.intervalo * i;
      if (i == 0) {
        facAnt = 0;
      }else{
        facAnt = facs[i - 1];
      }
      fiClasseMediana = classes['classe' + (i + 1)].length;
      break;
    }
  }
  const medianaContinua = menorClasseMediana + ((posicao - facAnt) / fiClasseMediana) * array.intervalo;
  return medianaContinua;
}
exports.init = medianaContinua;

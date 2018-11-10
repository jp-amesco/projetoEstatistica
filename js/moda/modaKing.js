function modaKing (dados, array, classes) {
  let todosIntervalos = [];
  let classePesquisada;
  let fi = [];
  let fiAnt;
  let resultModaKing;

  for (let i = 0; i < Object.keys(classes).length; i++) {
    if (classes['classe' + (i+1)].indexOf(dados[i]) > -1) {
      classePesquisada = i + 1;
    }
  }

  for (let i = 0; i < array.quantClasse; i++) {
    todosIntervalos[i] = dados[0] + array.intervalo * i;
    fi[i] = classes['classe' + (i + 1)].length;
  }

  if (fi[classePesquisada - 2] == null) {
    fiAnt = 0;
  }else {
    fiAnt = fi[classePesquisada - 2];
  }

  resultModaKing = todosIntervalos[classePesquisada - 1] + (fi[classePesquisada] /
    (fiAnt + fi[classePesquisada])) * array.intervalo;

  return resultModaKing.toFixed(2);
}

exports.init = modaKing;

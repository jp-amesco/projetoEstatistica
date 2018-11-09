function modaCzuber (dados, array, classes) {
  let lengthClasse = classes.classe1.length;
  let todosIntervalos = [];
  let classeModal = 1;
  let fi = [];
  let classePesquisada;
  let fiAnt;
  let resultModaCzuber;

  for (let i = 0; i < Object.keys(classes).length; i++) {
    if (classes['classe' + (i+1)].indexOf(dados[i]) > -1) {
      classePesquisada = i + 1;
    }
  }

  for (let i = 0; i < array.quantClasse; i++) {
    todosIntervalos[i] = dados[0] + array.intervalo * i;
    fi[i] = classes['classe' + (i + 1)].length;
    if (classes['classe' + (i + 1)].length > lengthClasse) {
      classeModal = i + 1;
      lengthClasse = classes['classe' + (i + 1)].length;
    }
  }

  if (fi[classePesquisada - 2] == null) {
    fiAnt = 0;
  }else {
    fiAnt = fi[classePesquisada - 2];
  }

  resultModaCzuber = todosIntervalos[classePesquisada-1] + ((fi[classeModal - 1] - fiAnt) /
    ((fi[classeModal - 1] - fiAnt) + (fi[classeModal - 1] - fi[classePesquisada]))) + array.intervalo;

  return resultModaCzuber.toFixed(2)
}

exports.init = modaCzuber;

function inversamenteDiretamente(dados){
  let varDependente = [];
  let varIndependente = [];
  let dependente = dados.dependente.slice();
  let independente = dados.independente.slice();

  while(dependente.length > 0 ){
    let aux = dependente[0];
    let indice = 0;
    for (let i = 0; i < dependente.length; i++) {
      if (aux > dependente[i]) {
        aux = dependente[i];
        indice = i;
      }
    }
    varDependente.push(dependente[indice]);
    varIndependente.push(independente[indice]);
    dependente.splice(indice, 1);
    independente.splice(indice, 1);
  }
  let medidaIndependente = 0;
  for (let i = 0; i < varIndependente.length - 1; i++) {
    if (varIndependente[i] < varIndependente[i + 1]) {
      medidaIndependente++;
    } else if(varIndependente[i] > varIndependente[i + 1])   {
      medidaIndependente--;
    } else {
      continue;
    }
  }
  dados.dependente = varDependente;
  dados.independente = varIndependente;

  if (medidaIndependente < 0) {
    dados['relacaoVariavel'] = 'inversamente'
    return dados;
  }
  dados['relacaoVariavel'] = 'diretamente'
  return dados;
}

exports.init = inversamenteDiretamente;

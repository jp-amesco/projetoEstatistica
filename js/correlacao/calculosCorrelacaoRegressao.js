function calculosCorrelacaoRegressao(dependente,independente) {
  let totdependente = 0;
  let totindependente = 0;
  let totMult = 0;
  let quad_dependente = 0;
  let quad_independente = 0;
  let result;

  for (let i = 0; i < independente.length; i++) {
    totindependente += independente[i];
    totdependente += dependente[i];
    totMult += independente[i] * dependente[i];
    quad_independente += independente[i] * independente[i];
    quad_dependente += dependente[i] * dependente[i];
  }
  return result = {
    dependente: dependente,
    independente: independente,
    totindependente: totindependente,
    totdependente: totdependente,
    totMult: totMult,
    quad_independente: quad_independente,
    quad_dependente: quad_dependente
  }
}

exports.init = calculosCorrelacaoRegressao;

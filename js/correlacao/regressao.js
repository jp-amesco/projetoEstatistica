function regressao(dependente, independente, totdependente, totindependente, totMult, quad_dependente, quad_independente) {
  const a = (((independente.length * totMult) - (totindependente * totdependente)) /
  ((independente.length * quad_independente) - (totindependente ** 2))).toFixed(2);
  const mediaDependente = totdependente / dependente.length;
  const mediaIndependente = totindependente / independente.length;
  const b = mediaDependente - (a * mediaIndependente).toFixed(2);
  let result = 0;
  let procuraVar = '';
  let valorVar;

  procuraVar = ''; //dependente ou independente

  if (procuraVar == 'dependente') {
    valorVar = 0; //dado ja verificado, e como inteiro
    result = (a * valorVar) + b;
    return result;
  }
  valorVar = 0; //dado ja verificado, e como inteiro
  result = (-valorVar + b) / a;
  return -result.toFixed(2);

}
exports.init = regressao;

function regressao(calculos) {
  const a = (((calculos.independente.length * calculos.totMult) - (calculos.totindependente * calculos.totdependente)) /
  ((calculos.independente.length * calculos.quad_independente) - (calculos.totindependente ** 2))).toFixed(2);
  const mediaDependente = calculos.totdependente / calculos.dependente.length;
  const mediaIndependente = calculos.totindependente / calculos.independente.length;
  const b = mediaDependente - (a * mediaIndependente).toFixed(2);
  let result = 0;
  let procuraVar = '';
  let valorVar = 0;

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

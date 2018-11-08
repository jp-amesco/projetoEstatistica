function regressao(calculos, procuraVar, valorVar) {
  const a = (((calculos.independente.length * calculos.totMult) - (calculos.totindependente * calculos.totdependente)) /
  ((calculos.independente.length * calculos.quad_independente) - (calculos.totindependente ** 2))).toFixed(2);
  const mediaDependente = calculos.totdependente / calculos.dependente.length;
  const mediaIndependente = calculos.totindependente / calculos.independente.length;
  const b = mediaDependente - (a * mediaIndependente).toFixed(2);
  valorVar = parseInt(valorVar);
  let result = 0;

  if (procuraVar == 'Independente') {
    result = (a * valorVar) + b;
    return Math.round(result);
  }
  result = (-valorVar + b) / a;
  return -result.toFixed(2);

}
exports.init = regressao;

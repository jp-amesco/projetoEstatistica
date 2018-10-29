function correlacao (calculos) {
  const result = (((calculos.independente.length * calculos.totMult) - calculos.totdependente * calculos.totindependente) /
    Math.sqrt(((calculos.independente.length * calculos.quad_dependente) - calculos.totdependente ** 2) * ((calculos.independente.length * calculos.quad_independente) - calculos.totindependente ** 2)));
  console.log(result);
  return result.toFixed(2) * 100;
}

exports.init = correlacao;

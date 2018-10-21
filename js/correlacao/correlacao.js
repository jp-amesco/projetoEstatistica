function correlacao (dependente,independente) {
  let totdependente = 0;
  let totindependente = 0;
  let totMult = 0;
  let quad_dependente = 0;
  let quad_independente = 0;
  let result = 0;

  for (let i = 0; i < independente.length; i++) {
    totindependente += independente[i];
    totdependente += dependente[i];
    totMult += independente[i] * dependente[i];
    quad_independente += independente[i] * independente[i];
    quad_dependente += dependente[i] * dependente[i];
  }

  result = (((independente.length * totMult) - totdependente * totindependente) /
    Math.sqrt(((independente.length * quad_dependente) - totdependente ** 2) * ((independente.length * quad_independente) - totindependente ** 2)));

  return result.toFixed(2) * 100;
}

exports.init = correlacao;

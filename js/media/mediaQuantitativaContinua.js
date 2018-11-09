function mediaQuantitativaContinua (dados, array) {
  const mediasClasses = [];
  const classes = {};
  let vetDados = [];
  let cont = 1;
  let resultMediaQuantitativaContinua;
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
  let soma = 0;
  for (let i = 1; i <= array.quantClasse; i++) {
    mediasClasses.push(((dados[0] + array.intervalo * (i - 1) + dados[0] + array.intervalo * i) / 2) * classes['classe' + i].length);
    soma += mediasClasses[i-1];
  }

  resultMediaQuantitativaContinua = soma / dados.length;
  return resultMediaQuantitativaContinua.toFixed(2);
}
exports.init = mediaQuantitativaContinua;

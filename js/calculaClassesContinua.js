function calculaClasseContinua (dados, array) {
  let cont = 1;
  let vetDados = [];
  const classes = {};

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
  return classes;
}
exports.init = calculaClasseContinua;

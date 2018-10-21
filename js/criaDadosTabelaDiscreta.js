const colFrequenciaPercent = ['fr %'];
const colFac = ['Fac'];
const colFacPercent = ['Fac %'];

function criaDadosTabelaDiscreta(fi) {
  let arrayPrincipal = [];
  const colDados = fi[1].slice();
  colDados.unshift('xi');
  const colFrequencia = fi[0].slice();
  colFrequencia.unshift('fi');
  somaVetor(colFrequencia);
  arrayPrincipal = [colDados, colFrequencia, colFrequenciaPercent, colFac, colFacPercent];
  return arrayPrincipal;
}

function somaVetor(vetor) {
  let soma = 0;

  for (let i = 1; i < vetor.length; i++) {
    soma += vetor[i];
    colFac.push(soma);
  }

  for (let i = 1; i < vetor.length; i++) {
    colFrequenciaPercent.push(parseFloat(vetor[i] / soma * 100).toFixed(2) + '%');
    colFacPercent.push(parseFloat(colFac[i] / soma * 100).toFixed(2) + '%');
  }
}
exports.init = criaDadosTabelaDiscreta;

function moda(frequencia){
  const frequenciaDados = frequencia[0];
  const dados = frequencia[1];
  let maior = frequenciaDados[0];
  let moda;
  for(let i = 0; i < frequenciaDados.length; i++){
    if (frequenciaDados[i] > maior) {
      maior = frequenciaDados[i];
      moda = dados[i];
    }
  }
  return moda;
}
exports.init = moda;

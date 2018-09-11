function moda(frequencia){
  const frequenciaDados = frequencia[0];
  const dados = frequencia[1];
  const moda = [];
  let maior = frequenciaDados[0];
  let aux = 0;
  for(let i = 0; i < frequenciaDados.length; i++){
    if (frequenciaDados[i] >= maior) {
      aux = maior;
      maior = frequenciaDados[i];
      for(let j = 0; j < moda.length; j++){
        if (aux < maior) {
          moda.pop();
        }
      }
      moda.push(dados[i]);
    }
  }
  return moda;
}
exports.init = moda;

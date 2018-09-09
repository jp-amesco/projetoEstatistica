function calculaFac(dados, array){
  const facs = [];
  let vet = []
  let cont = 1;
  for (let i = 0; i < dados.length; i++) {
    if (dados[i] < dados[0] + array.intervalo * cont) {
      vet.push(dados[i])
    }else{
      if (facs.length == 0) {
        facs[0] = vet.length
      }else{
        facs[cont - 1] = vet.length + facs[cont - 2]
      }
      cont++;
      vet = [dados[i]];
    }
  }
  facs[cont - 1] = vet.length + facs[cont - 2];
  return facs;
}

exports.init = calculaFac;

function mediaQuantitativaContinua () {
  let aux = 0;
  for (let i = 0; i < dados.length; i++) {
    aux += dados[i];
  }
  return aux/dados.length;
}

exports.init = mediaQuantitativaContinua;

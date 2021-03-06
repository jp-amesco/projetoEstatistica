function modaQuantitativaContinua(dados, array){
  const classes = {};
  let vetDados = [];
  let cont = 1;
  let classeModal;
  let lengthClasse;
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
  classeModal = 1;
  lengthClasse = classes.classe1.length
  for (let i = 1; i < array.quantClasse; i++) {
    if (classes['classe' + (i + 1)].length > lengthClasse) {
      classeModal = i + 1;
      lengthClasse = classes['classe' + (i + 1)].length;
    }
  }
  const mediaClasseModal = ((dados[0] + array.intervalo * (classeModal - 1)) + (dados[0] + array.intervalo * (classeModal))) / 2;
  return mediaClasseModal;
}

exports.init = modaQuantitativaContinua;

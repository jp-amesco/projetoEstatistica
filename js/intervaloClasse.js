function intervaloClasse(){
  const dados = [
    47, 50, 55, 58, 61, 61, 61, 65, 65, 65, 66, 66, 67, 67, 68,
    68, 69, 71, 71, 71, 72, 72, 73, 76, 78, 80, 82, 90, 98, 100
  ];
  let dif = dados[dados.length - 1] - dados[0] + 1;
  const raiz = Math.sqrt(dif);
  let aux = 0;
  let intervalo = 0;
  let quantClasse;
  const array = {};
  do{
    if (dif % (Math.round(raiz) - 1) == 0) {
      intervalo = dif / (Math.round(raiz) - 1);
      quantClasse = dif / intervalo;
      aux++;
    }else if(dif % Math.round(raiz) == 0){
      intervalo = dif / Math.round(raiz);
      quantClasse = dif / intervalo;
      aux++;
    }else if(dif % (Math.round(raiz) + 1) == 0){
      intervalo = dif / (Math.round(raiz) + 1);
      quantClasse = dif / intervalo;
      aux++;
    }
    dif++;
  }while(aux == 0)
  array.intervalo = intervalo;
  array.quantClasse = quantClasse;
  console.log(array);
  return array;
}

exports.init = intervaloClasse;

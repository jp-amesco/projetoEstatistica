function intervaloClasse(dados){
  let dif = dados[dados.length - 1] - dados[0] + 1;
  let aux = 0;
  let intervalo = 0;
  let quantClasse;
  const raiz = Math.sqrt(dif);
  const array = {};
  do{
    if ((dif % (Math.round(raiz) - 1)) == 0) {
      intervalo = dif / (Math.round(raiz) - 1);
      quantClasse = dif / intervalo;
      aux++;
    }else if((dif % Math.round(raiz)) == 0){
      intervalo = dif / Math.round(raiz);
      quantClasse = dif / intervalo;
      aux++;
    }else if((dif % (Math.round(raiz) + 1)) == 0){
      intervalo = dif / (Math.round(raiz) + 1);
      quantClasse = dif / intervalo;
      aux++;
    }
    dif++;
  }while(aux == 0)
  array.intervalo = intervalo;
  array.quantClasse = quantClasse;
  return array;
}

exports.init = intervaloClasse;

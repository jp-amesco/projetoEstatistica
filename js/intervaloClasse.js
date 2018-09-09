function intervaloClasse(dados){
  const dif = dados[dados.length - 1] - dados[0] + 1;
  console.log(dif);
  /*const raiz = Math.sqrt(dif);
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
  return array;*/
}

exports.init = intervaloClasse;

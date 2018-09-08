function intervaloClasse(dados){
  let dif = dados[dados.length - 1] - dados[0] + 1;
  const raiz = Math.sqrt(dif);
  let aux = 0;
  let intervalo = 0;
  do{
    if (dif % (Math.round(raiz) - 1) == 0) {
      intervalo = dif / (Math.round(raiz) - 1);
      aux++;
    }else if(dif % Math.round(raiz) == 0){
      intervalo = dif / Math.round(raiz);
      aux++;
    }else if(dif % (Math.round(raiz) + 1) == 0){
      intervalo = dif / (Math.round(raiz) + 1);
      aux++;
    }
    dif++;
  }while(aux == 0)
  return intervalo;
}

exports.init = intervaloClasse;

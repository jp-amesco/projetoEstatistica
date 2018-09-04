function identificaVariavel(dados){
  const vetCont = [];
  if (typeof(dados[0]) == 'string') {
    return 'qualitativa';
  }

  for(let i = 0; i < dados.length; i++){
    if (vetCont.indexOf(dados[i]) == -1) {
      vetCont.push(dados[i]);
    }
  }
  if (vetCont.length < 7) {
    return 'discreta';
  }

  if (vetCont.length >= 7 && vetCont.length <= 10) {
    return 'pergunta'
  }

  return 'continua';
}

exports.init = identificaVariavel

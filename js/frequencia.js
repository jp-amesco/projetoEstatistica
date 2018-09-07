function frequencia(dados) {
  const quantDados = [];
  const arrayCont = [];
  const arrayTodosDados = [];
  let cont = 0;
  for (let i = 0; i < dados.length; i++) {
    if(quantDados.indexOf(dados[i]) == -1){
      quantDados.push(dados[i]);
    }
  }
  for (let i = 0; i < quantDados.length; i++) {
    for (let j = 0; j < dados.length; j++) {
      if(quantDados[i] == dados[j]){
        cont++;
      }
    }
    arrayCont.push(cont);
    cont = 0;
  }
  arrayTodosDados.push(arrayCont, quantDados);
  return arrayTodosDados;
}
exports.init = frequencia;

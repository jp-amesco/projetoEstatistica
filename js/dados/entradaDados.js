function recebeDados(dados = null)
{
  let string = 0;
  let number = 0;
  if (dados == null || dados.length <= 1) {
    return 'Quantidade de dados insuficiente para os cálculos';
  }
  const newDados = dados.split(',').map(function(item){
    return item.trim();
  });

  for (let i = 0; i < newDados.length; i++) {
  	if (isNaN(newDados[i])) {
  		string++;
  	}
  	if (!isNaN(newDados[i])) {
  		number++;
    newDados[i] = parseFloat(newDados[i]);
  	}
  }
  if(string > 0 && number > 0){
  	return 'Dados inválidos';
  }
  return newDados;
}

exports.init = recebeDados;

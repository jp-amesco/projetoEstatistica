function recebeDados(dados = null)
{
  let string = 0;
  let number = 0;
  if (dados == null || dados.length == 0) {
  	return 'Insira algum dado';
  }

  for (let i = 0; i < dados.length; i++) {
  	if (isNaN(dados[i])) {
  		string++;
  	}
  	if (!isNaN(dados[i])) {
  		number++;
  	}
  }
  if(string > 0 && number > 0){
  	return 'Dados inválidos';
  }

  const array = Array.from(dados);
  return array;
}

exports.init = recebeDados;
//variavel que recebe a função para teste
const modaQualitativa = require('../../js/moda/modaQualitativa');
const frequencia = require('../../js/frequencia.js')

it('Espera-se que a função calcule a moda recebendo a variavel qualitativa (MODA_QUALITATIVA)', function(){
  dados = [
  		 'EF', 'EF', 'EF', 'EM', 'EM',
  		 'EM', 'EM', 'EM', 'EM', 'EM',
  		 'EM', 'ES', 'ES', 'ES', 'ES',
  		 'ES', 'ES', 'PG', 'PG', 'PG'
  ];
  frequenciaDados = frequencia.init(dados);
  resposta = 'EM';
	array = modaQualitativa.init(frequenciaDados);
	expect(array).toBe(resposta);
});

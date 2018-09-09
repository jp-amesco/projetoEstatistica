//variavel que recebe a função para teste
const modaQualitativa = require('../../js/moda/modaQualitativa');
const frequencia = require('../../js/frequencia.js')
const equivalente = require('../comparaVetor.js');

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

it('Espera-se que a função calcule a moda recebendo a variavel qualitativa se tiver mais que uma resposta(MODA_QUALITATIVA)', function(){
  dados = [
       'EF', 'EF', 'EF', 'EM', 'EM',
       'EM', 'EM', 'EM', 'EM', 'EM',
       'ES', 'ES', 'ES', 'ES', 'ES',
       'ES', 'ES', 'PG', 'PG', 'PG'
  ];
  frequenciaDados = frequencia.init(dados);
  resposta = ['EM', 'ES'];
  response = modaQualitativa.init(dados);
  responseEqui = equivalente.init(response, resposta);
  expect(responseEqui).toBe(true);
});

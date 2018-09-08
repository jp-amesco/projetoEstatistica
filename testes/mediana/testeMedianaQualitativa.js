const medianaQualitativa = require('../../js/media/medianaQualitativa.js');
const equivalente = require('../comparaVetor.js');

it('espera-se que a função retorne a mediana da variavel qualitativa (MEDIANA_QUALITATIVA)', function(){
  dados = [
       'EF', 'EF', 'EF', 'EM', 'EM',
       'EM', 'EM', 'EM', 'EM', 'EM',
       'EM', 'ES', 'ES', 'ES', 'ES',
       'ES', 'ES', 'PG', 'PG', 'PG'
  ];
  response = medianaQualitativa.init(dados);
  expect(response).toBe('EM');
});

it('espera-se que a função retorne a mediana da variavel qualitativa se tiver dois resultados(MEDIANA_QUALITATIVA)', function(){
  dados = [
       'EF', 'EF', 'EF', 'EM', 'EM',
       'EM', 'EM', 'EM', 'EM', 'EM',
       'ES', 'ES', 'ES', 'ES', 'ES',
       'ES', 'ES', 'PG', 'PG', 'PG'
  ];
  resposta = ['EM', 'ES'];
  response = medianaQualitativa.init(dados);
  responseEqui = equivalente.init(response, resposta);
  expect(responseEqui).toBe(true);
});

it('espera-se que a função retorne a mediana da variavel qualitativa se a quantidade de dados forem impar(MEDIANA_QUALITATIVA)', function(){
  dados = [
       'EF', 'EF', 'EF', 'EM', 'EM',
       'EM', 'EM', 'EM', 'EM', 'EM',
       'ES', 'ES', 'ES', 'ES', 'ES',
       'ES', 'ES', 'PG', 'PG'
  ];
  response = medianaQualitativa.init(dados);
  expect(response).toBe('EM');
});

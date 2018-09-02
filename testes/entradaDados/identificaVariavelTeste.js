const identificaVariavel = require('../../js/dados/identificaVariavel.js');

it('espera-se que a função retorne qualitativa caso os dados sejam todos string (IDENTIFICA_VARIAVEL)', function(){
  dados = ['V', 'F', 'V', 'F', 'V', 'F', 'V', 'F', 'V', 'F'];
  response = identificaVariavel.init(dados);
  expect(response).toBe('qualitativa');
});

it('espera-se que a função retorne quantitaiva discreta de os dados forem números com pouca variedade (IDENTIFICA_VARIAVEL)', function(){
  dados = [1, 2, 3, 1, 2, 6, 7, 9, 1, 2, 1, 2, 2, 2];
  reponse = identificaVariavel.init(dados);
  expect(response).toBe('discreta');
});

it('espera-se que a função retorne quantitaiva continua se os dados forem números com muita variedade (IDENTIFICA_VARIAVEL)', function(){
  dados = [1, 2, 3, 1, 2, 5, 6, 12, 10, 23, 11, 98, 23, 87];
  response = identificaVariavel.init(dados);
  expect(response).toBe('continua');
});



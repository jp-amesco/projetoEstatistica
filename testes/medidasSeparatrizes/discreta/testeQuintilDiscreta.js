const quintil = require('../../../js/medidasSeparatrizes/medidasSeparatrizesDiscreta.js');

it('Espera-se que a função calcule e retorne o quintil 1 da variavel discreta, (QUINTIL_DISCRETA)', function(){
  dados = [2, 2, 2, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 7, 7, 7, 7, 7, 7, 10, 10];
  parte = 1;
  medida = 5;
  response = quintil.init(dados, parte, medida);
  expect(response).toBe(4);
});

it('Espera-se que a função calcule e retorne o quintil 2 da variavel discreta, (QUINTIL_DISCRETA)', function(){
  dados = [2, 2, 2, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 7, 7, 7, 7, 7, 7, 10, 10];
  parte = 2;
  medida = 5;
  response = quintil.init(dados, parte, medida);
  expect(response).toBe(5);
});

it('Espera-se que a função calcule e retorne o quintil 3 da variavel discreta, (QUINTIL_DISCRETA)', function(){
  dados = [2, 2, 2, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 7, 7, 7, 7, 7, 7, 10, 10];
  parte = 3;
  medida = 5;
  response = quintil.init(dados, parte, medida);
  expect(response).toBe(5);
});

it('Espera-se que a função calcule e retorne o quintil 4 da variavel discreta, (QUINTIL_DISCRETA)', function(){
  dados = [2, 2, 2, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 7, 7, 7, 7, 7, 7, 10, 10];
  parte = 4;
  medida = 5;
  response = quintil.init(dados, parte, medida);
  expect(response).toBe(7);
});



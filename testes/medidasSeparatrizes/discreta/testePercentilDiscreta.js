const percentil = require('../../../js/medidasSeparatrizes/medidasSeparatrizesDiscreta.js');

it('Espera-se que a função calcule e retorne o percentil 8 da variavel discreta, (PERCENTIL_DISCRETA)', function(){
  dados = [2, 2, 2, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 7, 7, 7, 7, 7, 7, 10, 10];
  parte = 8;
  medida = 100;
  response = percentil.init(dados, parte, medida);
  expect(response).toBe(2);
});

it('Espera-se que a função calcule e retorne o percentil 23 da variavel discreta, (PERCENTIL_DISCRETA)', function(){
  dados = [2, 2, 2, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 7, 7, 7, 7, 7, 7, 10, 10];
  parte = 23;
  medida = 100;
  response = percentil.init(dados, parte, medida);
  expect(response).toBe(4);
});

it('Espera-se que a função calcule e retorne o percentil 52 da variavel discreta, (PERCENTIL_DISCRETA)', function(){
  dados = [2, 2, 2, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 7, 7, 7, 7, 7, 7, 10, 10];
  parte = 52;
  medida = 100;
  response = percentil.init(dados, parte, medida);
  expect(response).toBe(5);
});

it('Espera-se que a função calcule e retorne o percentil 79 da variavel discreta, (PERCENTIL_DISCRETA)', function(){
  dados = [2, 2, 2, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 7, 7, 7, 7, 7, 7, 10, 10];
  parte = 79;
  medida = 100;
  response = percentil.init(dados, parte, medida);
  expect(response).toBe(7);
});

it('Espera-se que a função calcule e retorne o percentil 95 da variavel discreta, (PERCENTIL_DISCRETA)', function(){
  dados = [2, 2, 2, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 7, 7, 7, 7, 7, 7, 10, 10];
  parte = 95;
  medida = 100;
  response = percentil.init(dados, parte, medida);
  expect(response).toBe(10);
});




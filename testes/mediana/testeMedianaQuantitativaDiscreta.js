const medianaQuantitativaDiscreta = require('../../js/mediana/medianaQuantitativaDiscreta.js');

it('espera-se que a função retorne a mediana da variavel quantitativa discreta (MEDIANA_DISCRETA)', function(){
  dados = [
    2, 2, 2, 4, 4, 4, 4, 4, 5, 5, 5, 5,
    5, 5, 5, 5, 7, 7, 7, 7, 7, 7, 10, 10
  ];
  response = medianaQuantitativaDiscreta.init(dados);
  expect(response).toBe(5);
});

it('espera-se que a função retorne a mediana da variavel quantitativa discreta se tiver duas posições com valor diferente (MEDIANA_DISCRETA)', function(){
  dados = [
    2, 2, 2, 4, 4, 4, 4, 4, 5, 5, 5, 5,
    7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 10, 10
  ];
  response = medianaQuantitativaDiscreta.init(dados);
  expect(response).toBe(6);
});

it('espera-se que a função retorne a mediana da variavel quantitativa discreta se a quantidade de elementos for impar (MEDIANA_DISCRETA)', function(){
  dados = [
    2, 2, 2, 4, 4, 4, 4, 4, 5, 5, 5, 5,
    7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 10
  ];
  response = medianaQuantitativaDiscreta.init(dados);
  expect(response).toBe(5);
});

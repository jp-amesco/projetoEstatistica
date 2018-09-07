const modaQuantitativaDiscreta = require('../../js/media/mediaQuantitativaDiscreta.js');

it('espera-se que a função retorne a media da variavel quantitativa discreta (MEDIA_DISCRETA)', function(){
  dados = [3, 3.5, 3.5, 4, 4, 4, 5, 5, 5, 5.5];
  response = modaQuantitativaDiscreta.init(dados);
  expect(response).toBe(4.25);
});

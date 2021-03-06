const mediaQuantitativaContinua = require('../../js/media/mediaQuantitativaContinua.js');
const array = require('../../js/intervaloClasse.js');

it('espera-se que a função retorne a media da variavel quantitativa continua (MEDIA_ CONTINUA)', function(){
  dados = [
    47, 50, 55, 58, 61, 61, 61, 65, 65, 65, 66, 66, 67, 67, 68,
    68, 69, 71, 71, 71, 72, 72, 73, 76, 78, 80, 82, 90, 98, 100
  ];
  intervalo = array.init(dados);
  response = mediaQuantitativaContinua.init(dados, intervalo);
  expect(response).toBe(70.1);
});

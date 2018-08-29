//variavel que recebe a função para teste
const modaQualitativa = require('../../js/moda/modaQualitativa');

it('Espera-se que a função calcule a moda recebendo a variavel qualitativa', function(){
    dados = [
    		 'EF', 'EF', 'EF', 'EM', 'EM',
    		 'EM', 'EM', 'EM', 'EM', 'EM', 
    		 'EM', 'ES', 'ES', 'ES', 'ES', 
    		 'ES', 'ES', 'PG', 'PG', 'PG'
    ];
    resposta = 'EM';
	array = modaQualitativa.init(dados);
	expect(array).toBe(resposta);    
});

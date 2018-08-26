//variavel que recebe a função a ser testada
const entradaDados = require('../../js/dados/entradaDados.js');

//mensagem que aparecerá no console em caso de erro
it('espera-se que a função retorne um array', function(){
	//dados enviados para testar a função
	dados = [1, 2, 4, 5]
	//recebe a resposta da função
	array = entradaDados.init(dados);
	//retorno da função, espera-se true
	expect(array).toBe(true);
});

//mensagem que aparecerá no console em caso de erro
it('espera-se que a função retorne false caso os dados recebidos seja nulo', function(){
	//recebe a resposta da função
	array = entradaDados.init();
	//retorno da função, espera-se true
	expect(array).toBe(false);
});

//mensagem que aparecerá no console em caso de erro
it('espera-se que a função retorne false caso os dados recebidos seja inválidos', function(){
	//dados enviados para testar a função
	dados = ['A', 1, 5, '2', 125];
	//recebe a resposta da função
	array = entradaDados.init(dados);
	//retorno da função, espera-se true
	expect(array).toBe(false);
});
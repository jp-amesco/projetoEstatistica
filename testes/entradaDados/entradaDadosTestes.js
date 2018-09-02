//variavel que recebe a função a ser testada
const entradaDados = require('../../js/dados/entradaDados.js');
const equivalente = require('../comparaVetor.js');

//mensagem que aparecerá no console em caso de erro
it('espera-se que a função retorne um array', function(){
	//dados enviados para testar a função
	dados = '1, 2, 4, 5';
	//recebe a resposta da função
	response = entradaDados.init(dados);
	//retorno da função, espera-se true
	expect(typeof(response)).toBe('object');
});

//mensagem que aparecerá no console em caso de erro
it('espera-se que a função retorne mensagem caso os dados recebidos seja nulo', function(){
	//recebe a resposta da função
	response = entradaDados.init();
	//retorno da função, espera-se true
	expect(response).toBe('Quantidade de dados insuficiente para os cálculos');
});

//mensagem que aparecerá no console em caso de erro
it('espera-se que a função retorne mesagem de erro caso os dados recebidos seja inválidos', function(){
	//dados enviados para testar a função
	dados = 'A, 1, 5, 2, 125';
	//recebe a resposta da função
	response = entradaDados.init(dados);
	//retorno da função, espera-se true
	expect(response).toBe('Dados inválidos');
});

it('espera-se que a função separe por virgula os dados informado pelo usuario', function(){
	dados = "12,4,5,3,1,2";
	arrayResponse = [12, 4, 5, 3, 1, 2]
	response = entradaDados.init(dados);
	responseEqui = equivalente.init(arrayResponse, response);
	expect(responseEqui).toBe(true);
});

it('espera-se que a função retorne mensagem de erro caso o usuario forneça apenas um dado para os cálculos', function(){
	dados = '1';
	response = entradaDados.init(dados);
	expect(response).toBe('Quantidade de dados insuficiente para os cálculos');
});

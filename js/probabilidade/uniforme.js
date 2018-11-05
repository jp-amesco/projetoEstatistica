//result = probabilidade | media | desvio padrao | coeficiente de variação
function uniforme(a,b,tipo,ponto,ponto2 == null){
	let intervalo = 0;
	let probabilidade = 0;
	let result = [];
	switch(tipo){
		case 'menor':
			intervalo = ponto - a;
			break;
		case 'maior':
			intervalo = b - ponto;
			break;
		case 'entre':
			intervalo = ponto2 - ponto;
	}

	probabilidade = ((1 / (b-a)) * intervalo) * 100;

	result.push(probabilidade.toFixed(2));
	result.push(media(a,b));
	result.push(desvio_padrao(a,b));
	result.push(coeficiente_variacao(a,b));

	return result;
}

function media(a,b){
	let media = (b+a) / 2;
	return media.toFixed(2);
}

function desvioPadrao(a,b){
	let desvio = Math.sqrt(Math.pow((b-a), 2)/12);
	return desvio.toFixed(2);
}

function coeficienteVariacao(a,b){
	let desvio = desvio_padrao(a,b);
	let media = media(a,b);
	let coef = ((desvio / media)*100);
	return coef.toFixed(2);
}
//result = probabilidade | media | desvio padrao | coeficiente de variação
function uniforme(a,b,tipo,ponto,ponto2 = null){
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
	result.push(desvioPadrao(a,b));
	result.push(coeficienteVariacao(a,b));

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
	let desvio = desvioPadrao(a,b);
	let med = media(a,b);
	let coef = ((desvio / med)*100);
	return coef.toFixed(2);
}

exports.init = uniforme;

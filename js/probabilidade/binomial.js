//result = probabilidade | media | desvio padrao
function binomial(n,p,q,k_min,k_max){
  let final = 0;
  let result = [];
  let analise_combinatoria =0;
  for(let i = k_min; i <= k_max; i++){
    analise_combinatoria = combinatoria(n,i);
    final += (analise_combinatoria * Math.pow(p,i) * Math.pow(q,(n-i))) * 100;
	}
	result.push(final.toFixed(2));
	result.push(media(n,p).toFixed(2));
	result.push(desvioPadrao(n,p,q).toFixed(2));
	return result;
}

function combinatoria(x,y){
	let numerador = x;
	let denominador_1 = y;
	let denominador_2 = x - y;
	let denominador = 0;
	if(y == 0 || y == x){
		return 1;
	}else if(y == 1){
		return x;
	}else{
		for(let i = (x-1); i>0; i--){
			numerador = numerador * i;
		}

		for(let i = (y-1); i>0;i--){
			denominador_1 = denominador_1 * i;
		}

		for(let i = ((x-y)-1); i>0;i--){
			denominador_2 = denominador_2 * i;
		}

		denominador = denominador_1 * denominador_2

		return numerador / denominador;
	}

}

function media(n,p){
	return (n * p);
}

function desvioPadrao(n,p,q){
	return Math.sqrt((n*p*q));
}

exports.init = binomial;

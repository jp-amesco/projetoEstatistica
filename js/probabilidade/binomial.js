function probab(n,p,q,k_min,k_max){
	let final = 0;
	let analise_combinatoria =0;
	for(let i = k_min; i <= k_max; i++){
		analise_combinatoria = combinatoria(n,k);
		final += analise_combinatoria * Math.pow(p,k) * Math.pow(q,(n-k));
	}
	return final;
}

function combinatoria(x,y){
	let numerador = x;
	let denominador_1 = y;
	let denominador_2 = x - y;
	let denominador = 0;
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
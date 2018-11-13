function regressao(calculos, procuraVar, valorVar, type=null) {
  const a = (((calculos.independente.length * calculos.totMult) - (calculos.totindependente * calculos.totdependente)) /
  ((calculos.independente.length * calculos.quad_independente) - (calculos.totindependente ** 2))).toFixed(2);
  const mediaDependente = calculos.totdependente / calculos.dependente.length;
  const mediaIndependente = calculos.totindependente / calculos.independente.length;
  const b = mediaDependente - (a * mediaIndependente).toFixed(2);
  valorVar = parseInt(valorVar);
  let result = 0;

  //return example = [a,b,X,Y]
  if(type == 'formula'){
    let ret = [];
    ret.push(a);
    ret.push(b);
    if (procuraVar == 'Independente'){
      result = (a * valorVar) + b;
      ret.push(valorVar.toFixed(2));
      ret.push(result.toFixed(2));
    }else{
      result = (-valorVar + b) / a;
      ret.push(-result.toFixed(2));
      ret.push(valorVar.toFixed(2));
    }
    return ret;
    console.log(ret);
  }

  if (procuraVar == 'Independente') {
    result = (a * valorVar) + b;
    return Math.round(result);
  }
  result = (-valorVar + b) / a;
  return -result.toFixed(2);

}
exports.init = regressao;

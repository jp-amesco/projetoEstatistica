const classes = require('./calculaClassesContinua.js');
const intervalo = require('./intervaloClasse.js');

function criaDadosTaelaContinua (classes, arrayIntervalo, dados) {
  const arrayPrincipal = [];
  const numerosClasses = ['Classe'];
  const intervaloClasse = ['xi']
  const fiClasse = ['fi'];
  const fiPercenual = ['fr %'];
  const fac = ['fac'];
  const facPercentual = ['fac %'];
  let prop;
  let cont = 1;
  let primeiroElementoClasse = classes.classe1[0];
  let ultimoElementoClasse;
  let aux;
  let auxFacs = 0;

  for(prop in classes){
    numerosClasses.push(cont);

    ultimoElementoClasse = classes.classe1[0] + arrayIntervalo.intervalo * cont
    aux = primeiroElementoClasse + '   ------|   ' + ultimoElementoClasse;
    primeiroElementoClasse = ultimoElementoClasse;
    intervaloClasse.push(aux);

    fiClasse.push(classes[prop].length);

    fiPercenual.push((classes[prop].length * 100 / dados.length).toFixed(2) + '%');

    fac.push(fiClasse[cont] + auxFacs);
    auxFacs = fac[cont]

    facPercentual.push((fac[cont] * 100 / dados.length).toFixed(2) + '%');

    cont++;
  }
  arrayPrincipal.push(numerosClasses, intervaloClasse, fiClasse, fiPercenual, fac, facPercentual);
  return arrayPrincipal;
}
exports.init = criaDadosTaelaContinua;


function colocaValor(moda, media, mediana, desvioPadrao, coeficiente) {
  let paragrafo;
  let text;
  const linhaValores = document.querySelectorAll('.title-valores');
  for (let i = 0; i < linhaValores.length; i++) {
    switch(linhaValores[i].id) {
      case 'moda':
        //const modaParagrafo = document.querySelector('#modaParagrafo');
        //if (modaParagrafo) {
          //linhaValores[i].removeChild(modaParagrafo);
        //}
        paragrafo = document.createElement('p');
        text = document.createTextNode(moda);
        paragrafo.appendChild(text);
        paragrafo.id = 'modaParagrafo'
        break;

      case 'media':
        paragrafo = document.createElement('p');
        text = document.createTextNode(media);
        paragrafo.appendChild(text);
        paragrafo.id = 'mediaParagrafo'
        break;

      case 'mediana':
        paragrafo = document.createElement('p');
        text = document.createTextNode(mediana);
        paragrafo.appendChild(text);
        paragrafo.id = 'medianaParagrafo'
        break;

      case 'desvioPadrao':
        paragrafo = document.createElement('p');
        text = document.createTextNode(desvioPadrao);
        paragrafo.appendChild(text);
        paragrafo.id = 'desvioParagrafo'
        break;

      case 'coeficiente':
        paragrafo = document.createElement('p');
        text = document.createTextNode(coeficiente.toFixed(2));
        paragrafo.appendChild(text);
        paragrafo.id = 'coeficienteParagrafo';
    }
    linhaValores[i].appendChild(paragrafo);
  }
}

exports.init = colocaValor;

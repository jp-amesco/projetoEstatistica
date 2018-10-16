function colocaValor(moda, media, mediana) {
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
        //const mediaParagrafo = document.querySelector('#mediaParagrafo');
        //if (mediaParagrafo) {
          //linhaValores[i].removeChild(mediaParagrafo);
        //}
        paragrafo = document.createElement('p');
        text = document.createTextNode(media);
        paragrafo.appendChild(text);
        paragrafo.id = 'mediaParagrafo'
        break;

      case 'mediana':
        //const medianaParagrafo = document.querySelector('#medianaParagrafo');
        //if (medianaParagrafo) {
          //linhaValores[i].removeChild(medianaParagrafo);
        //}
        paragrafo = document.createElement('p');
        text = document.createTextNode(mediana);
        paragrafo.appendChild(text);
        paragrafo.id = 'medianaParagrafo'
        break;

      case 'desvioPadrao':
        //const desvioParagrafo = document.querySelector('#desvioParagrafo');
        //if (desvioParagrafo) {
          //linhaValores[i].removeChild(desvioParagrafo);
        //}
        paragrafo = document.createElement('p');
        text = document.createTextNode('a');
        paragrafo.appendChild(text);
        paragrafo.id = 'desvioParagrafo'
        break;
    }
    linhaValores[i].appendChild(paragrafo);
  }
}

exports.init = colocaValor;

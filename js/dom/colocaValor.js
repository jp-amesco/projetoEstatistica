function colocaValor(moda, media, mediana, desvioPadrao, coeficiente) {
  let paragrafoCoeficiente;
  let paragrafoModa;
  let paragrafoDesvio;
  let paragrafoMedia;
  let paragrafoMediana;
  console.log(media);
  paragrafoModa = document.querySelector('#modaDiscretaParagrafo');
  paragrafoModa.innerHTML = moda;
  paragrafoMedia = document.querySelector('#mediaDiscretaParagrafo');
  paragrafoMedia.innerHTML = parseFloat(media).toFixed(2);
  paragrafoMediana = document.querySelector('#medianaDiscretaParagrafo');
  paragrafoMediana.innerHTML = mediana;
  paragrafoDesvio = document.querySelector('#desvioDiscretaParagrafo');
  paragrafoDesvio.innerHTML = desvioPadrao;
  paragrafoCoeficiente = document.querySelector('#coeficienteDiscretaParagrafo');
  paragrafoCoeficiente.innerHTML = coeficiente.toFixed(2);
}

exports.init = colocaValor;

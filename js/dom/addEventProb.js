const normal = require('../probabilidade/normal.js');
const uniforme = require('../probabilidade/uniforme.js');

function addEventProb(allCheckBox){
  let teste;
  let select = document.querySelector('#selectProb');
  for (var i = 0; i < allCheckBox.length; i++) {
    allCheckBox[i].addEventListener('change', function(e){
      e.preventDefault;
      if (select.value == 'Distribuição Normal' || select.value == 'Distribuição Uniforme') {
        if (this.id == 'maiorCheck' && e.target.checked) {
          document.querySelector('.maiorque').classList.remove('d-none');
          document.querySelector('.btnProb').classList.remove('d-none');
          document.querySelector('#entreCheck').setAttribute('disabled', 'disabled')
        }else if (this.id == 'maiorCheck' && !e.target.checked) {
          document.querySelector('#entreCheck').removeAttribute('disabled', 'disabled')
          document.querySelector('.maiorque').classList.add('d-none');
          document.querySelector('#maior').value = '';
        }else if (this.id == 'menorCheck' && e.target.checked) {
          document.querySelector('.menorque').classList.remove('d-none');
          document.querySelector('.btnProb').classList.remove('d-none');
          document.querySelector('#entreCheck').setAttribute('disabled', 'disabled')
        }else if (this.id == 'menorCheck' && !e.target.checked) {
          document.querySelector('#entreCheck').removeAttribute('disabled', 'disabled')
          document.querySelector('.menorque').classList.add('d-none');
          document.querySelector('#menor').value = '';
        }else if (this.id == 'entreCheck' && e.target.checked) {
          document.querySelector('.entre').classList.remove('d-none');
          document.querySelector('.btnProb').classList.remove('d-none');
          document.querySelector('#maiorCheck').setAttribute('disabled', 'disabled')
          document.querySelector('#menorCheck').setAttribute('disabled', 'disabled')
        }else {
          document.querySelector('#maiorCheck').removeAttribute('disabled', 'disabled')
          document.querySelector('#menorCheck').removeAttribute('disabled', 'disabled')
          document.querySelector('.entre').classList.add('d-none');
          document.querySelector('#entre').value = '';
        }
      } else {

      }
    });
  }

  document.querySelector('#btnProb').addEventListener('click', function(e){
    e.preventDefault;
    let response;
    const valorPonto = [];
    const tipo = [];
    const valorPontoKey = [];
    let tipoEnviar;
    const valueInput = document.querySelectorAll('.input-dados-prob');
    for (let i = 0; i < valueInput.length; i++) {
      if (!valueInput[i].value == '') {
        tipo.push(valueInput[i].id);
        tipoEnviar = valueInput[i].id;
        valorPontoKey[valueInput[i].id] = parseFloat(valueInput[i].value);
        valorPonto.push(parseFloat(valueInput[i].value));
      }
    }
    const valorPontoOrganizado = valorPonto.sort(sortNumber);
    const ponto1 = valorPontoOrganizado[0];
    const ponto2 = valorPontoOrganizado[1] ? valorPontoOrganizado[1] : null;
    tipoEnviar = (tipo.indexOf('entre2') < 0) ? tipoEnviar : 'entre';
    if (valorPontoKey['maior'] < valorPontoKey['menor']) {
      tipoEnviar = 'entre';
    }

    if (select.value == 'Distribuição Normal') {
      const media = parseFloat(document.querySelector('.mediaProb').value);
      const desvioPadrao = parseFloat(document.querySelector('.desvioProb').value);
      response = normal.init(media, desvioPadrao, tipoEnviar, ponto1, ponto2);
    }else if (select.value == 'Distribuição Uniforme') {
      const a = parseFloat(document.querySelector('#pontomin').value);
      const b = parseFloat(document.querySelector('#pontomax').value);
      response = uniforme.init(a, b, tipoEnviar, ponto1 , ponto2);
      document.querySelector('#mediaUniforme').innerHTML = response[1];
      document.querySelector('#desvioUniforme').innerHTML = response[2];
      document.querySelector('#coeficienteUniforme').innerHTML = response[3] + '%';
      response = response[0];
    }
    document.querySelector('#resultadoProb').innerHTML = response + '%';



  });

  document.querySelector('#selectProb').addEventListener('change', function(e){
    e.preventDefault;
    if (this.value == 'Distribuição Normal') {
      document.querySelector('.mediaDesvio').classList.remove('d-none');
      document.querySelector('.maiorMenorEntre').classList.remove('d-none');
      document.querySelector('#resultadoProb').innerHTML = '';
      document.querySelector('.checkboxProb').classList.remove('d-none');
      document.querySelector('.uniforme').classList.add('d-none');
    }else if(this.value == 'Distribuição Uniforme'){
      document.querySelector('.mediaDesvio').classList.add('d-none');
      document.querySelector('.uniforme').classList.remove('d-none');
      document.querySelector('.checkboxProb').classList.remove('d-none');
      document.querySelector('.maiorMenorEntre').classList.remove('d-none');
      document.querySelector('#resultadoProb').innerHTML = '';
    }else{
      document.querySelector('.checkboxProb').classList.add('d-none');
      document.querySelector('.maiorMenorEntre').classList.add('d-none');
      document.querySelector('#resultadoProb').innerHTML = '';
      document.querySelector('.uniforme').classList.add('d-none');
      document.querySelector('.mediaDesvio').classList.add('d-none');
    }
  });
}

function sortNumber(a,b) {
    return a - b;
}
exports.init = addEventProb;

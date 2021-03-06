const normal = require('../probabilidade/normal.js');
const uniforme = require('../probabilidade/uniforme.js');
const binomial = require('../probabilidade/binomial.js');

function addEventProb(allCheckBox){
  let teste;
  let select = document.querySelector('#selectProb');
  for (var i = 0; i < allCheckBox.length; i++) {
    allCheckBox[i].addEventListener('change', function(e){
      e.preventDefault;
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
      }else if (this.id == 'entreCheck' && !e.target.checked) {
        document.querySelector('#maiorCheck').removeAttribute('disabled', 'disabled')
        document.querySelector('#menorCheck').removeAttribute('disabled', 'disabled')
        document.querySelector('.entre').classList.add('d-none');
        document.querySelector('#entre').value = '';
      }else if (this.id == 'exatamenteCheck' && e.target.checked) {
        document.querySelector('#menorCheck').setAttribute('disabled', 'disabled')
        document.querySelector('#maiorCheck').setAttribute('disabled', 'disabled')
        document.querySelector('.btnProb').classList.remove('d-none');
        document.querySelector('.exatamente').classList.remove('d-none');
        document.querySelector('#entreCheck').setAttribute('disabled', 'disabled')
      } else {
        document.querySelector('.btnProb').classList.add('d-none');
        document.querySelector('.exatamente').classList.add('d-none');
        document.querySelector('#menorCheck').removeAttribute('disabled', 'disabled')
        document.querySelector('#maiorCheck').removeAttribute('disabled', 'disabled')
        document.querySelector('#entreCheck').removeAttribute('disabled', 'disabled')
        document.querySelector('#exatamente').value = '';
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
    let ponto1 = valorPontoOrganizado[0];
    let ponto2 = valorPontoOrganizado[1] ? valorPontoOrganizado[1] : null;
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
    } else {
      const n = parseFloat(document.querySelector('#teste').value)
      const fracasso = parseFloat(document.querySelector('#tot').value);
      const sucesso = parseFloat(document.querySelector('#parte').value);
      const exatamente = parseFloat(document.querySelector('#exatamente').value);
      const tot = sucesso + fracasso;
      const sucessoPercent = (sucesso / tot).toFixed(2);
      const fracassoPercent = (fracasso  / tot).toFixed(2);
      if (tipoEnviar == 'menor') {
        ponto2 = ponto1 - 1;
        ponto1 = 0;
      } else if (tipoEnviar == 'maior') {
        ponto2 = n;
        ponto1 = ponto1 + 1;
      } else if (tipoEnviar == 'exatamente') {
        ponto1 = exatamente;
        ponto2 = exatamente;
      }
      response = binomial.init(n, sucessoPercent, fracassoPercent, ponto1, ponto2);
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
      document.querySelector('.div-desvio').classList.add('d-none');
      document.querySelector('.div-media').classList.add('d-none');
      document.querySelector('.div-coeficiente').classList.add('d-none');
      document.querySelector('.binomial').classList.add('d-none');
      document.querySelector('.uniforme').classList.add('d-none');
      document.querySelector('#divExatamente').classList.add('d-none');
    }else if(this.value == 'Distribuição Uniforme'){
      document.querySelector('.mediaDesvio').classList.add('d-none');
      document.querySelector('.uniforme').classList.remove('d-none');
      document.querySelector('.checkboxProb').classList.remove('d-none');
      document.querySelector('.maiorMenorEntre').classList.remove('d-none');
      document.querySelector('.div-media').classList.remove('d-none');
      document.querySelector('.div-desvio').classList.remove('d-none');
      document.querySelector('.div-coeficiente').classList.remove('d-none');
      document.querySelector('.binomial').classList.add('d-none');
      document.querySelector('#resultadoProb').innerHTML = '';
      document.querySelector('#divExatamente').classList.add('d-none');
    }else{
     document.querySelector('.mediaDesvio').classList.add('d-none');
      document.querySelector('.uniforme').classList.add('d-none');
      document.querySelector('.checkboxProb').classList.remove('d-none');
      document.querySelector('.maiorMenorEntre').classList.remove('d-none');
      document.querySelector('#resultadoProb').innerHTML = '';
      document.querySelector('.div-media').classList.add('d-none');
      document.querySelector('.div-desvio').classList.add('d-none');
      document.querySelector('.div-coeficiente').classList.add('d-none');
      document.querySelector('.binomial').classList.remove('d-none');
      document.querySelector('#divExatamente').classList.remove('d-none');
    }
  });
}

function sortNumber(a,b) {
    return a - b;
}
exports.init = addEventProb;

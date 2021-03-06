const addCampo = require('./addCampo.js');
const removeCampo = require('./removeCampo.js');
const preparaDadosCorrelacao = require('../dados/preparaDadosCorrelacao.js');
const calculosCorrelacaoRegressao = require('../correlacao/calculosCorrelacaoRegressao.js');
const correlacao = require('../correlacao/correlacao.js');
const criaGraficoDispersao = require('../dom/criaGraficoDispersao.js');
const lerArquivoCorrelacao = require('../dados/lerArquivoCorrelacao.js');
const regressao = require('../correlacao/regressao.js');
const inversamenteDiretamente = require('../dados/inversamenteDiretamente.js');

function btnscorrelacao() {
  const btnAddRemove = document.querySelectorAll('.btnCorrelacao');
  for (var i = 0; i < btnAddRemove.length; i++) {
    btnAddRemove[i].addEventListener('click', function(e){
      e.preventDefault;
      if(this.id == 'add'){
        addCampo.init();
      } else if(this.id == 'remove'){
        removeCampo.init();
      } else {
        let dadosPreparados;
        const direita = document.querySelectorAll('.direita');
        const esquerda = document.querySelectorAll('.esquerda');
        const radio = document.getElementsByName('variavel');
        const select = document.querySelector('#select-variavel').value;
        const inputNewDado = parseInt(document.querySelector('#dadosRegressao').value);
        document.querySelector('#div-regressao').classList.remove('d-none');
        dadosPreparados = preparaDadosCorrelacao.init(direita, esquerda, radio);
        dadosPreparados = inversamenteDiretamente.init(dadosPreparados);
        const calculos = calculosCorrelacaoRegressao.init(dadosPreparados.dependente, dadosPreparados.independente);
        const resultCorrelacao = correlacao.init(calculos);
        const formulaRegressao = regressao.init(calculos,select,inputNewDado,'formula');
        document.querySelector('#resultCorrelacao').innerHTML = resultCorrelacao + '%';
        if(select=='Independente'){
          document.querySelector('#formulaRegressao').innerHTML = "Y = " + formulaRegressao[0] + " * " + formulaRegressao[2] + " + " + formulaRegressao[1] + '(x=' + formulaRegressao[2] + ')';
        }else{
          document.querySelector('#formulaRegressao').innerHTML = formulaRegressao[3] + " = " + formulaRegressao[0] + " * X + " + formulaRegressao[1] + '(x=' + formulaRegressao[3] + ')';
        }
        criaGraficoDispersao.init(dadosPreparados, calculos, this.id, regressao, select, inputNewDado, dadosPreparados.relacaoVariavel);
      }
    });
  }

  document.querySelector('#arquivoCorrelacao').addEventListener('change', function(e){
    e.preventDefault;
    lerArquivoCorrelacao.init(this)
  });
}

exports.init = btnscorrelacao;

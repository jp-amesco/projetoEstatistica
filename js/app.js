const entradaDados = require('./dados/entradaDados.js');
const importarDadosManual = require('./dados/importarDadosManual.js');
const importaDadosArquivo = require('./dados/importaDadosArquivo.js');
const reinsercaoDados = require('./dados/reinsercaoDados.js');
const frequencia = require('./frequencia.js');
const intervalo = require('./intervaloClasse.js');
const calculaFacContinua = require('./calculaFacContinua.js');
const identificaVariavel = require('./dados/identificaVariavel.js');
const modaQualitativa = require('./moda/modaQualitativa.js');
const modaQuantitativaDiscreta = require('./moda/modaQuantitativaDiscreta.js');
const modaQuantitativaContinua = require('./moda/modaQuantitativaContinua.js');
const mediaQuantitativaDiscreta = require('./media/mediaQuantitativaDiscreta.js');
const mediaQuantitativaContinua = require('./media/mediaQuantitativaContinua.js');
const medianaQuantitativaDiscreta = require('./mediana/medianaQuantitativaDiscreta.js');
const medianaQuantitativaContinua = require('./mediana/medianaQuantitativaContinua.js');
const medidasSeparatrizesDiscreta = require('./medidasSeparatrizes/medidasSeparatrizesDiscreta.js');
const medianaQualitativa = require('./mediana/medianaQualitativa.js');
const organizacaoDados = require('./dados/organizacaoDados.js');
const desvioPadraoDiscreta = require('./desvioPadrao/desvioPadrao.js');
const desvioPadraoContinua = require('./desvioPadrao/desvioPadraoContinua.js');
const medidasSeparatrizesContinua = require('./medidasSeparatrizes/medidasSeparatrizesContinua.js');
const mensagemErro = require('./erros/mensagemErroValidacaoDados.js');
const criaTabela = require('./dom/criaTabela.js');
const criaGrafico = require('./dom/criaGrafico.js');
const colocaValor = require('./dom/colocaValor.js');
const criaDadosTabelaDiscreta = require('./criaDadosTabelaDiscreta.js');
const criaDadosTabelaContinua = require('./criaDadosTabelaContinua.js');
const manipulaMedidasSeparatrizes = require('./dom/manipulaMedidasSeparatrizes.js');
const correlacao = require('./correlacao/correlacao.js');
const regressao = require('./correlacao/regressao.js');
const calculaClassesContinua = require('./calculaClassesContinua.js');

const btnManual = document.querySelector('#manual');//BTN ----ONCLICK
const inputArquivo = document.querySelector('#arquivo'); //INPUT ---- CHANGE
const inputDados = document.querySelector('#dados');//INPUT -----DIGITA DADOS
const reinserirDados = document.querySelector('.reinserirDados'); //DIV
const btnImport = document.querySelector('.buttons-import'); //DIV
const todosTiposPesquisa = document.querySelector('#todos_tipos_pesquisa'); //DIV

console.log(todosTiposPesquisa);
inputArquivo.addEventListener('change', function(e){
  e.preventDefault;
  importaDadosArquivo.init(this, inputDados);
});


btnManual.addEventListener('click', function(e) {
  e.preventDefault;
  importarDadosManual.init();
});

reinserirDados.addEventListener('click', function(e) {
  e.preventDefault;
  reinsercaoDados.init();
});

const tiposPesquisa = document.querySelectorAll('.pesquisa');
for (let i = 0; i < tiposPesquisa.length; i++) {
  tiposPesquisa[i].addEventListener('click', function(event){
    event.preventDefault();
    const tipoDados = this.id;
    //chama a função para verificar se os dados são validos,
    //se forem validos e numeros, converte para int
    let dados = entradaDados.init(inputDados.value);
    let variavel;
    //verifica se a resposta foi algum erro
    if (dados == 1 || dados == 2) {
      //chama a função que cria o erro na tela
      mensagemErro.init(dados);
    }else{
      //chama a função para identificar qual é a variavel
      variavel = identificaVariavel.init(dados);
      //chama a função de frequencia
      dados = organizacaoDados.init(dados);
      const fi = frequencia.init(dados);
      let moda;
      let media;
      let mediana;
      let quartil;
      let quintil;
      let decil;
      let percentil;
      let facs;
      let dadosTabela;
      let desvioPadrao;
      const arrayIntervalo = intervalo.init(dados);
      const classes = calculaClassesContinua.init(dados, arrayIntervalo);
      //verifica qual resposta da função que identifica a variavel
      if (variavel == 'pergunta') {
        //se for pergunta, chama a função para gera uma pergunta ao usuario,
        //pedindo que ele informe qual a variavel será usada
        //variavel = geraModalPergunta.init();
      }
      if (variavel == 'qualitativa') {
        //se a variavel for moda, chama os calculos respectivos a essa variavel,
        //enviando a frequancia como parametro
        moda = modaQualitativa.init(fi);
        mediana = medianaQualitativa.init(dados);
      }else if(variavel == 'discreta') {
        moda = modaQuantitativaDiscreta.init(fi);
        media = mediaQuantitativaDiscreta.init(dados);
        mediana = medianaQuantitativaDiscreta.init(dados);
        desvioPadrao = desvioPadraoDiscreta.init(fi, media, tipoDados);
        dadosTabela = criaDadosTabelaDiscreta.init(fi);
        criaTabela.init(dadosTabela, variavel);
      }else if(variavel == 'continua'){
        facs = calculaFacContinua.init(dados, arrayIntervalo);
        moda = modaQuantitativaContinua.init(dados, arrayIntervalo);
        media = mediaQuantitativaContinua.init(dados, arrayIntervalo);
        mediana = medianaQuantitativaContinua.init(dados, facs, arrayIntervalo);
        desvioPadrao = desvioPadraoContinua.init(dados, media, tipoDados, arrayIntervalo, classes);
        dadosTabela = criaDadosTabelaContinua.init(classes, arrayIntervalo, dados);
        criaTabela.init(dadosTabela, variavel);
      }
      let lastActive;
      criaGrafico.init(variavel, fi);
      colocaValor.init(moda, media, mediana, desvioPadrao);
      const slider = document.querySelectorAll('.slider');
      const output = document.querySelectorAll('.output');
      const result = document.querySelectorAll('.result');
      manipulaMedidasSeparatrizes.init(slider, result, dados, output);
      document.querySelector('#menu-tabs').classList.remove('d-none');
      document.querySelector('#valores').classList.remove('d-none');
      lastActive = 'tabela';
      const tabs = document.querySelectorAll('.nav-link');
      for (let i = 0; i < tabs.length; i++) {
        tabs[i].addEventListener('click', function(event){
          event.preventDefault;
          this.classList.add('active');
          document.querySelector('#' + this.id).classList.add('active');
          document.querySelector('#' + lastActive).classList.remove('active');
          document.querySelector('.' + lastActive).classList.add('d-none');
          document.querySelector('.' + this.id).classList.remove('d-none');
          lastActive = this.id;
        });
      }
    }
  });
}


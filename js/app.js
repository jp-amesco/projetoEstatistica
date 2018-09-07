const recebeDados = require('./dados/entradaDados.js');
const identificaVariavel = require('./dados/identificaVariavel.js');
//const mensagemErro = require('./erros/mensagemErroValidacaoDados.js');


document.querySelector('.btn').addEventListener('click', function(){
  const  inputDados = document.querySelector('#dados').value;

  const respostaValidadeDados = recebeDados.init(inputDados);
  let variavel;
  if (respostaValidadeDados == 1 || respostaValidadeDados == 2) {
    //mensagemErro.init(respostaValidadeDados);
  }else{
    //variavel = identificaVariavel.init(respostaValidadeDados);
  }
  respostaValidadeDados.sort();
  if (variavel == 'pergunta') {
    //variavel = geraModalPergunta.init();
  }

  if (variavel == 'qualitativa') {
    /*moda = modaQualitativa.init(respostaValidadeDados);
    mediana = medianaQualitativa.init(respostaValidadeDados);*/
  }else if(variavel == 'discreta') {
    /*moda = modaDiscreta.init(respostaValidadeDados);
    media = mediaDiscreta.init(respostaValidadeDados);
    mediana = medianaDiscreta.init(respostaValidadeDados);*/
  }else if(variavel == 'continua'){
    /*moda = modaDiscreta.init(respostaValidadeDados);
    media = mediaDiscreta.init(respostaValidadeDados);
    mediana = medianaDiscreta.init(respostaValidadeDados);*/
  }
});

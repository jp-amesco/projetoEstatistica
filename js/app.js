const recebeDados = require('./dados/entradaDados.js');

document.querySelector('.btn').addEventListener('click', function(){
  const  inputDados = document.querySelector('#dados').value;
  const response = recebeDados.init(inputDados);
});

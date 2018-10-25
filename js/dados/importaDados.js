function lerArquivo(arquivo, inputDados) {
  const reader = new FileReader();
  reader.onload = (function(reader)
  {
    console.log(inputDados);
    inputDados.value = inputDados.value = reader.target.result;
  });
  reader.readAsText(arquivo.files[0]);
}

exports.init = lerArquivo;

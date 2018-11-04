function addCampo() {
  const clone = document.getElementById('origem').cloneNode(true);
  const destino = document.getElementById('destino');
  destino.appendChild(clone);
}

exports.init = addCampo;

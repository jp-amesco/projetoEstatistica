function modaPearson (medianaContinua, resultMediaQuantitativaContinua) {
  let resultModaPearson = (3 * medianaContinua) - (2 * resultMediaQuantitativaContinua);

  return resultModaPearson.toFixed(2);
}

exports.init = modaPearson;

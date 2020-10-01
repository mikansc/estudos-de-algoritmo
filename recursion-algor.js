// Recebe um startNum e um endNum
// Deve retornar um [] de numeros
// [startNum, ... , endNum]
// Se os numeros forem iguais, [startNum] ou [endNum]

function rangeOfNumbers(startNum, endNum) {
  if (startNum === endNum) {
    return [startNum];
  }
  return rangeOfNumbers(startNum, endNum - 1).concat(endNum);
}
//Outra forma de escrever a mesma func

function rangeOfNumbers(startNum, endNum) {
  return startNum === endNum
    ? [startNum]
    : rangeOfNumbers(startNum, endNum - 1).concat(endNum);
}

// ===================================================================================== //
// ===================================================================================== //

// Fatorial (factorialize)
// Dado um numero num, retorna o produto de
// todos os números positivos menores ou iguais a num.
// Se num for 0, retorna 1.

function factorialize(num) {
  if (num === 0) return 1;
  if (num === 1) return num;
  return num * factorialize(num - 1);
}

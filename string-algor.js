// Contar, dentro de uma string, quantas vezes determinado
// caractere da RegEx aparece nesta string e retorna um Array
// com a quantidade de cada regra.
// Neste exemplo, retorna um array com [ nCharUpperCase, nCharLowerCase, nCharNumber, nCharSpecial ]
const solve = (str) =>
  [/[A-Z]/, /[a-z]/, /\d/, /[\W]/].map((rgx) => str.split(rgx).length - 1);

// ===================================================================================== //
// ===================================================================================== //

// Reverse string
// Transforma em array, usa o reverse, volta pra string.

const reverse = (str) => str.split('').reverse().join('');

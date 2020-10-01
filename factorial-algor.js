// Algoritmo fatorial
// A fatorial de um núemero é igual a multiplicação
// de todos seus antecessores maiores que zero e incluindo o numero.
// Ex.:
// 5! => 5 x 4 x 3 x 2 x 1 = 120
//
// 4!:
// F <- 1
// m <- 4
// enquanto m > 0 faca
// F <- F x m
// m <- m - 1
//
// 1 enquanto 4 > 0 faca
// F = 1 x 4 = 4
// m = 4 - 1 = 3
//
// 2 enquanto 3 > 0 faca
// F = 4 x 3 = 12
// m = 3 - 1 = 2
//
// 3 enquanto 2 > 0 faca
// F = 12 x 2 = 24
// m = 2 - 1 = 1
//
// 4 enquanto 1 > 0 faca
// F = 24 x 1 = 24
// m = 1 - 1 = 0
//
// 5 enquanto 0 > 0 faca
// fim algoritimo

// Usando loop "while"
function factorial(number) {
  let f = 1;
  let m = number;
  while (m > 0) {
    f = f * m;
    m = m - 1;
  }
  console.log(f);
}

// Usando recursão

function recursiveFactorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * recursiveFactorial(n - 1);
}

// n -> 4
// if -> 4 === 0? não
// return 4 * (função(4-1))
// // if --> 3 === 0? não
// // return 3 * (funcao(3-1))
// // // if --> 2 === 0? não
// // // return 2 * (função(2-1))
// // // // if --> 1 === 0? não
// // // // return 1 * (função(1-1))
// // // // // if --> 0 === 0? sim
// // // // // return 1
// // // // return 1 * 1 = 1
// // // return 2 * 1 = 2
// // return 3 * 2 = 6
// return 4 * 6 = 24
// fim.

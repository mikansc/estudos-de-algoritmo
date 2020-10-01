// Comparison function
// array de exemplo: [1,2,3,4,5]

let defaultCompare = (a, b) => (a > b ? 1 : a < b ? -1 : 0);

// =============================================== //
// Opção imperativa da busca **
// ...............................................//

let binarySearchWithLoops = (array, element, compare = defaultCompare) => {
  let left = 0; // índice do primeiro elemento da array
  let right = array.length - 1; // pega o índice do último elemento da array

  while (left <= right) {
    let middle = Math.floor((right + left) / 2); //pega o elemento do meio (ex.: 0 + 5 = 5... 5/2 = 2,5 ... Math.floor(2,5) = 2)

    // usar a função de comparação com o elemento em relação ao middle index do array
    switch (compare(element, array[middle])) {
      case -1: {
        // se o valor do elemento é menor que o meio do array,
        // o índice do último elemento passa a ser o meio do array
        // (excluindo o número do meio do array, que já foi comparado)
        // e a função passa a procurar na metade esquerda do array
        right = middle - 1;
        break;
      }
      case 1: {
        // se o valor do elemento for maior que o meio do array,
        // o valor do primeiro índice da array passa a ser o meio do array
        // (excluindo o elemento do meio, que não precisa ser comaprado mais)
        // e a função passa a procurar na metade direita do array
        left = middle + 1;
        break;
      }
      default: {
        // esta função vai retornar quando/se o elemento for igual ao valor do meio
        // do array.
        return middle;
      }
    }
  }
  // retorna -1 se o array não tiver nenhum elemento
  // ou se o elemento a ser buscado não estiver no array.
  return -1;
};

// =============================================== //
// Opção recursiva da busca **
// A opção recursiva chama a função dentro dela mesma.
// ...............................................//

let binarySearchWithRecursion = (
  array,
  element,
  compare = defaultCompare,
  left = 0,
  right = array.length - 1
) => {
  // Verifica se já foi encontrado o elemento ou se chegou ao fim a análise.
  // Assim, a função não entra em loop eterno.
  if (left > right) -1;

  // encontra o elemento do meio
  const middle = Math.floor((right + left) / 2);
  // executa a função de comparação e arquiva em uma variavel
  const comparison = compare(element, array[middle]);

  // Retorna:
  // A variável comparison retornou -1? (ou seja, elemento (ex. 1) < meio da array(ex. 2,5 com math.floor, ou seja, 2) na primeira passada)
  // = SIM -> executa a funlão de recursão de novo, mas analisa só a metade esquerda. O último elemento passa a ser 2.
  // E executa tudo de novo até que o middle seja o elemento.
  // Nota: em cada iteração, somente uma das recursões será executada, a depender se o elemento procurado está antes ou depois do meio da array.
  return comparison === -1
    ? binarySearchWithRecursion(array, element, compare, left, middle - 1)
    : comparison === 1
    ? binarySearchWithRecursion(array, element, compare, middle + 1, right)
    : middle;
};

// =============================================== //
// Opção recursiva com tail recursion **
// ...............................................//

let binarySearchWithTailRecursion = (
  array,
  element,
  compare = defaultCompare,
  left = 0,
  right = array.length - 1
) => {
  // Verifica se já foi encontrado o elemento ou se chegou ao fim a análise.
  // Assim, a função não entra em loop eterno.
  if (left > right) -1;

  // encontra o elemento do meio
  const middle = Math.floor((right + left) / 2);
  // executa a função de comparação e arquiva em uma variavel
  const comparison = compare(element, array[middle]);
  // comparison vai ser igual a 0 quando o elemento for igual ao array[middle] - elemento foi encontrado.
  if (comparison === 0) middle;

  // Cria um array que será enviado como argumento left e right da função recursiva.
  // Essa array contém os limites da busca, definindo o elemeneto inicial ou final com base
  // na função de comparação.
  const newBounds =
    comparison === -1 ? [left, middle - 1] : [middle + 1, rigth];

  //Executa a função recursiva dando um spread na array newBounds, que vai determinar
  // os novos valores left e right a cada vez que a função for chamada,
  // até que o comparison retorne 0 (ou seja, até que o elemento seja encontrado)
  return binarySearchWithTailRecursion(array, element, compare, ...newBounds);
};

// =============================================== //
// Opção Array Splitting **
// Também é uma forma recursiva de busca, com a
// quebra da array original em arrays menores a cada
// iteração da função.
// ...............................................//

let binarySearchWithArraySplitting = (
  array,
  element,
  compare = defaultCompare
) => {
  // Verifica se já foi encontrado o elemento ou se chegou ao fim a análise.
  // Assim, a função não entra em loop eterno.
  // Desta vez, como a array mudou, não temos mais left e right. Usamos a
  // length da array, que vai cortar (slice) até chegar a 0 (resultado da operação)
  if (array.length === 0) -1;

  // usa o array.length da array e divide por 2 pra encontrar o meio
  const middle = Math.floor(array.length / 2);
  // executa a função de comparação e arquiva em uma variavel
  const comparison = compare(element, array[middle]);

  // comparison vai ser igual a 0 quando o elemento for igual ao array[middle] - elemento foi encontrado.
  if (comparison === 0) middle;

  // Cria as variáveis left e right e captura elas do ternary op que vai
  // verificar se o pedaço da array vai ser o esquerdo ou o direito,
  // determinando os limites left e rigth com base na comparison.
  const [left, right] =
    comparison === -1 ? [0, middle - 1] : [middle + 1, array.length];

  // Executa a função recursiva e salva o resultado numa variável. A array original
  // é querada nos limites passados pelas variáveis left e right.
  // Desta forma, a nova array passa a ser uma das metades da array anterior.
  // O valor retornado é o index da array passada como argumento, que não vai bater com a
  // array original da primeira execução. Este problema é endereçado a seguir...
  const subIndex = binarySearchWithArraySplitting(
    array.slice(left, right),
    element,
    compare
  );

  // Se o valor retornado na subIndex for -1 (significa que o elemento não foi encontrado),
  // precisamos retornar -1 no resultado final. Caso contrário,
  // retornamos o novo valor do primeiro índice na array analisada (left) + o subIndex.
  // Este será o resultado da função.
  return subIndex === -1 ? -1 : subIndex;
};

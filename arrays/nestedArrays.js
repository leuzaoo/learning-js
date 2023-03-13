// Arrays aninhados

// Anteriormente, mencionamos que os arrays podem armazenar outros arrays. Quando uma matriz contém outra matriz,
// ela é conhecida como matriz aninhada . Analise o exemplo abaixo:

const nestedArr = [[1], [2, 3]];

// Para acessar os arrays aninhados, podemos usar a notação de colchetes com o valor do índice, assim como fizemos
// para acessar qualquer outro elemento:

console.log(nestedArr[1]); // Output: [2, 3]

// Repare que nestedArr[1] vai pegar o elemento no índice 1 que é o array [2, 3]. Então, se quisermos acessar os elementos
// dentro da matriz aninhada, podemos encadear ou adicionar mais notação de colchetes com valores de índice.

console.log(nestedArr[1][0]); // Output: 2

// Vamos fazer um array aninhado! Crie uma variável numberClusters. Atribua como seu valor uma matriz com três
// elementos de matriz.

// O primeiro elemento da matriz deve conter os elementos 1 e 2 nessa ordem.
// O segundo elemento da matriz deve conter os elementos 3 e 4 nessa ordem.
// O terceiro elemento da matriz deve conter os elementos 5 e 6 nessa ordem.

const numberClusters = [
  [1, 2],
  [3, 4],
  [5, 6],
];

// Incrível, você fez um array aninhado! Agora declare uma variável nomeada target usando a palavra-chave const e atribua
// para acessar o elemento 6 dentro de numberClusters.

const target = numberClusters[2][1];
console.log(target); // prints: 6

// Mais métodos de matriz
// Existem muito mais métodos de matriz do que apenas .push()e .pop(). Você pode ler sobre esses métodos de
// array na entrada Docs para JavaScript Arrays .

// .pop()e .push() altera o array no qual eles são chamados. No entanto, há momentos em que não queremos alterar
// a matriz original e podemos usar métodos de matriz não mutantes. Certifique-se de verificar os documentos para
// entender o comportamento do método que você está usando.

// Alguns métodos de arrays disponíveis para desenvolvedores de JavaScript incluem: .join(), .slice(), .splice(),
// .shift(), .unshift(), e .concat() entre muitos outros. O uso desses métodos integrados facilita a realização de
// algumas tarefas comuns ao trabalhar com arrays.

// Abaixo, exploraremos alguns métodos que ainda não aprendemos.

// Use o método .shift() para remover o primeiro item da matriz groceryList.

const groceryList = [
  "orange juice",
  "bananas",
  "coffee beans",
  "brown rice",
  "pasta",
  "coconut oil",
  "plantains",
];

groceryList.shift();
console.log(groceryList); // prints [ 'bananas','coffee beans','brown rice','pasta','coconut oil','plantains' ]

// use o método .unshift() para adicionar 'popcorn' ao início de sua lista de compras.

groceryList.unshift("popcorn"); // prints [ 'popcorn', 'bananas','coffee beans','brown rice','pasta','coconut oil','plantains' ]
console.log(groceryList);

// Você está com pressa, então decide pedir a um amigo para ajudá-lo com suas compras. Você quer que ele pegue:
// 'bananas', 'coffee beans'e 'brown rice'.

// No código que você adicionou na etapa 2, use .slice() para fornecer a seu amigo uma lista dessas três coisas.

console.log(groceryList.slice(1, 4)); // prints [ 'bananas', 'coffee beans', 'brown rice' ]

const groceryItems = [
  "orange juice",
  "bananas",
  "coffee beans",
  "brown rice",
  "pasta",
  "coconut oil",
  "plantains",
];

const pastaIndex = groceryItems.indexOf("pasta");
console.log(pastaIndex); // prints: 4

// .indexOf()retorna o primeiro elemento que corresponde ao valor do argumento passado. Se não houver um elemento
// cujo valor corresponda ao do argumento, -1 é retornado.

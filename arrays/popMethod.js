// O método .pop()
// Outro método de array, .pop(), remove o último item de um array.

const newItemTracker = ["item 0", "item 1", "item 2"];

const removed = newItemTracker.pop();

console.log(newItemTracker); // Output: [ 'item 0', 'item 1' ]
console.log(removed); // Output: item 2

// No exemplo acima, chamando  o .pop() a array newItemTracker remove o item 2 do final.
// .pop() não aceita nenhum argumento, simplesmente remove o último elemento de newItemTracker.
// .pop() retorna o valor do último elemento. No exemplo, armazenamos o valor retornado em uma variável removed
// para ser utilizada posteriormente.
// .pop()é um método que altera o array inicial.

// Use o método .pop() para remover o último elemento de chores.

const chores = [
  "wash dishes",
  "do laundry",
  "take out trash",
  "cook dinner",
  "mop floor",
];

chores.pop();
console.log(chores);

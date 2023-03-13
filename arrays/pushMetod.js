// O método .push()

// Vamos aprender sobre alguns métodos JavaScript integrados que facilitam o trabalho com arrays. Esses
// métodos são chamados especificamente em arrays para tornar tarefas comuns, como adicionar e remover elementos,
// mais simples.

// Um método, .push(), nos permite adicionar itens ao final de um array. Aqui está um exemplo de como isso é usado:

const itemTracker = ["item 0", "item 1", "item 2"];

itemTracker.push("item 3", "item 4");

console.log(itemTracker); // Output: ['item 0', 'item 1', 'item 2', 'item 3', 'item 4'];

// Então, como .push() funciona?

// Acessamos o método push usando a notação de ponto, conectando pusha itemTrackercom um ponto.
// Então nós chamamos isso como uma função. Isso porque .push() é uma função que o JavaScript nos permite usar
// diretamente em um array.

// .push() pode receber um único argumento ou vários argumentos separados por vírgulas. Neste caso, estamos adicionando
// dois elementos: 'item 3' e 'item 4' a itemTracker.

// Observe que .push() muda itemTracker. Você também pode referir .push() como um método de matriz destrutivo,
// pois altera a matriz inicial.

// Adicione dois elementos a array chores usando .push().

const chores = ["wash dishes", "do laundry", "take out trash"];

chores.push("one element", "two element");
console.log(chores);

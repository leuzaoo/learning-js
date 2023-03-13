// Arrays
// Organizar e armazenar dados é um conceito fundamental da programação.

// Uma maneira de organizar os dados na vida real é fazendo listas. Vamos fazer um aqui:

// New Year's Resolutions:

// 1. Keep a journal
// 2. Take a falconry class
// 3. Learn to juggle

// Vamos agora escrever esta lista em JavaScript, como um array :

let newYearsResolutions = [
  "Keep a journal",
  "Take a falconry class",
  "Learn to juggle",
];

// Arrays são a maneira do JavaScript criar listas. Arrays podem armazenar quaisquer tipos de dados
// (incluindo strings, números e booleanos). Assim como as listas, os arrays são ordenados, o que
// significa que cada item tem uma posição numerada.

// Aqui está uma matriz dos conceitos que abordaremos:

let concepts = ["creating arrays", "array structures", "array manipulation"];

// Uma maneira de criar um array é usar um literal de array . Um literal de matriz cria uma matriz colocando
// itens entre colchetes []. Lembre-se do exercício anterior, arrays podem armazenar qualquer tipo de dados —
// podemos ter um array que contém todos os mesmos tipos de dados ou um array que contém diferentes tipos de dados.

// Vamos dar uma olhada mais de perto na sintaxe no exemplo de array:

// A matriz é representada pelos colchetes [] e o conteúdo dentro dela.
// Cada item de conteúdo dentro de uma matriz é chamado de elemento.
// Existem três elementos diferentes dentro da matriz.
// Cada elemento dentro da matriz é um tipo de dados diferente.
// Também podemos salvar um array em uma variável. Você deve ter notado que fizemos isso no exercício anterior:

newYearsResolutions = [
  "Keep a journal",
  "Take a falconry class",
  "Learn to juggle",
];

// Vamos praticar criando nosso próprio array.

const hobbies = ["play videogames", "study", "stay with my girlfriend"];

// Acessando Elementos

// Cada elemento em um array tem uma posição numerada conhecida como seu índice . Podemos acessar itens individuais
// usando seu índice, que é semelhante a referenciar um item em uma lista com base na posição do item.

// Arrays em JavaScript são indexados por zero , o que significa que as posições começam a contar 0em vez de 1. Portanto,
// o primeiro item em uma matriz estará na posição 0. Vejamos como poderíamos acessar um elemento em um array:

let cities = ["New York", "Beijing", "Nairobi"];

// New York = index 0 - Beijing = index 1 - Nairobi = index 2

cities[0]; // está chamando a cidade de New York

// No trecho de código acima:

// cities é uma matriz que tem três elementos.
// Estamos usando a notação de colchetes [] com o índice após o nome do array para acessar o elemento.
// cities[0] acessará o elemento no índice 0 na matriz cities.

// Você também pode acessar caracteres individuais em uma string usando a notação de colchetes e o índice.
// Por exemplo, você pode escrever:

const hello = "Hello World";
console.log(hello[6]); // Output: W

// Elementos individuais em arrays também podem ser armazenados em variáveis.

// Crie uma variável nomeada listIteme defina-a igual ao primeiro item na famousSayingsmatriz usando a
// notação de colchetes ( []).

const famousSayings = [
  "Fortune favors the brave.", // index 0
  "A joke is a very serious thing.", // index 1
  "Where there is love there is life.", // index 2
];

const listItem = famousSayings[0];

console.log(listItem); // prints "Fortune favors the brave."

console.log(famousSayings[2]); // prints - "Where there is love there is life."

// Tente registrar o item no índice [3]de famousSayings no console. O que é registrado no console?

undefined; // é exibido no console undefined, pois não há o index 3 na array famousSayings

// Atualizar elementos

// No exercício anterior, você aprendeu como acessar elementos dentro de um array ou string usando um índice.
// Depois de ter acesso a um elemento em uma matriz, você pode atualizar seu valor.

let seasons = ["Winter", "Spring", "Summer", "Fall"];

seasons[3] = "Autumn";
console.log(seasons); // Output: ['Winter', 'Spring', 'Summer', 'Autumn']

// No exemplo acima, a array seasons continha os nomes das quatro estações.

// No entanto, decidimos que preferíamos dizer 'Autumn'em vez de 'Fall'.

// A linha seasons[3] = 'Autumn'; diz ao nosso programa para alterar o item no índice 3 do array seasons para ser
// 'Autumn' em vez do que já está lá.

// Altere o segundo elemento da matriz groceryList para 'avocados'.

let groceryList = ["bread", "tomatoes", "milk"];

groceryList[1] = "avocados";

// Abaixo das duas matrizes existentes, reatribua o elemento no índice 0 de condiments para 'Mayo'.

// Registre a matriz atualizada, condiments, no console.

let condiments = ["Ketchup", "Mustard", "Soy Sauce", "Sriracha"];

const utensils = ["Fork", "Knife", "Chopsticks", "Spork"];

condiments[0] = "Mayo";
console.log(condiments); // prints: [ 'Mayo', 'Mustard', 'Soy Sauce', 'Sriracha' ]

// Reatribua condiments para ser uma nova matriz que contém uma única string['Mayo']

condiments = ["Mayo"];
console.log(condiments); // prints [ 'Mayo' ]

// Observe que você pode reatribuir elementos em uma matriz e reatribuir uma nova matriz inteira
// a uma variável declarada usando a palavra-chave let.

// reatribua o último item da utensils matriz a 'Spoon'.

utensils[3] = "Spoon";
console.log(utensils); // prints [ 'Fork', 'Knife', 'Chopsticks', 'Spoon' ]

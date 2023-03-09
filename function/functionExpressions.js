// Também podemos usar o valor de retorno de uma função dentro de outra função. Essas funções sendo
// chamadas dentro de outra função geralmente são chamadas de expressão de função. Como cada função
// está realizando uma tarefa específica, torna nosso código mais fácil de ler e depurar, se necessário.
// palavra-chave function Em uma expressão de função, o nome da função geralmente é omitido. Uma função sem
// nome é chamada de função anônima. Uma expressão de função geralmente é armazenada em uma variável para se referir a ela.

// Para declarar uma expressão de função:

// Declare uma variável para fazer com que o nome da variável seja o nome ou identificador de sua função. Desde o lançamento
// do ES6, é prática comum usar const como palavra-chave para declarar a variável.

// Atribua como valor dessa variável uma função anônima criada usando a palavra-chave function seguida de um conjunto de parênteses
// com possíveis parâmetros. Em seguida, um conjunto de chaves que contém o corpo da função.

// Para invocar uma expressão de função, escreva o nome da variável na qual a função é armazenada, seguido de parênteses envolvendo
// todos os argumentos que estão sendo passados ​​para a função.

variableName(argument1, argument2);

// Ao contrário das declarações de função, as expressões de função não são suspensas, portanto, não podem ser chamadas antes de serem definidas.

const plantNeedsWater = function (day) {
  if (day === "Wednesday") {
    return true;
  } else {
    return false;
  }
};

console.log(plantNeedsWater("Wednesday")); // true

console.log(plantNeedsWater("Tuesday")); // false

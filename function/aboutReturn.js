// Quando uma função é chamada, o computador executa o código da função e avalia o resultado da
// chamada da função. Por padrão, esse valor resultante é undefined.

function rectangleArea(width, height) {
  let area = width * height;
}
console.log(rectangleArea(5, 7)); // Prints undefined

// No exemplo de código, definimos nossa função para calcular o areade um parâmetro widthe height. Então
// rectangleArea()é invocado com os argumentos 5e 7. Mas quando fomos imprimir os resultados, obtivemos undefined.
// Escrevemos nossa função errado? Não! Na verdade, a função funcionou bem e o computador calculou a área como 35,
// mas não a capturamos. Então, como podemos fazer isso? Com a palavra-chave return!

// Para passar de volta informações da chamada de função, usamos uma instrução de retorno . Para criar uma instrução de retorno,
// usamos a palavra-chave return seguida do valor que desejamos retornar. Como vimos acima, se o valor for omitido, undefined é retornado.

// Quando uma return instrução é usada no corpo de uma função, a execução da função é interrompida e o código que a segue não será executado.
// Veja o exemplo abaixo:

function rectangleArea(width, height) {
  if (width < 0 || height < 0) {
    return "You need positive integers to calculate area!";
  }
  return width * height;
}

// Se um argumento para width ou height for menor que 0, rectangleArea()retornará 'You need positive integers to calculate area!'. A segunda
// instrução de retorno width * height não será executada.

// Abaixo será a forma correta de escrever a função e chamá-la com o return.

function monitorCount(rows, columns) {
  return rows * columns;
}

const numOfMonitors = monitorCount(5, 4);

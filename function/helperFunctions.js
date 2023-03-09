// Funções Auxiliares
// Também podemos usar o valor de retorno de uma função dentro de outra função. Essas funções sendo chamadas
// dentro de outra função geralmente são chamadas de funções auxiliares . Como cada função está realizando uma
// tarefa específica, torna nosso código mais fácil de ler e depurar, se necessário.

// Se quiséssemos definir uma função que converta a temperatura de Celsius para Fahrenheit, poderíamos escrever
// duas funções como:

function multiplyByNineFifths(number) {
  return number * (9 / 5);
}

function getFahrenheit(celsius) {
  return multiplyByNineFifths(celsius) + 32;
}

getFahrenheit(15); // Returns 59

// getFahrenheit() é chamado e 15 é passado como um argumento.

// O bloco de código dentro de getFahrenheit() chama multiplyByNineFifths() e passa 15 como um argumento.

// multiplyByNineFifths() recebe o argumento de 15 para o parâmetro number.

// O bloco de código dentro da multiplyByNineFifths() é multiplicado 15 por (9/5), que é avaliado como 27.

// 27 é retornado para a chamada de função em getFahrenheit().

// getFahrenheit() continua a executar. Acrescenta 32 a 27, que é avaliado como 59.

// Finalmente, 59 é retornado para a chamada de função getFahrenheit(15).

// Podemos usar funções para separar pequenos pedaços de lógica ou tarefas e, em seguida, usá-los quando necessário.
// Escrever funções auxiliares pode ajudar a pegar tarefas grandes e difíceis e dividi-las em tarefas menores e mais gerenciáveis.

function monitorCount(rows, columns) {
  return rows * columns;
}

function costOfMonitors(rows, columns) {
  return monitorCount(rows, columns) * 200;
}

const totalCost = costOfMonitors(5, 4);

console.log(totalCost);

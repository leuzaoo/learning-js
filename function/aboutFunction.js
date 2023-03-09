/* Uma declaração de função consiste em:

A palavra-chave `function`.
O `nome` da função ou seu `identificador`, seguido de parênteses.
Um corpo de função ou o bloco de instruções necessárias para executar uma tarefa específica, entre as chaves da função, { }. */

function getReminder() {
  console.log("Water the plants.");
}

function greetInSpanish() {
  console.log("Buenas Tardes.");
}

function sayThanks() {
  console.log("Thank you for your purchase! We appreciate your business.");
}

sayThanks();
sayThanks();
sayThanks();

// =================================================================================================================================================

function sayThanks(name) {
  console.log(
    "Thank you for your purchase " + name + "! We appreciate your business."
  );
}

sayThanks("Cole");


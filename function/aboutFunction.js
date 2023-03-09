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

// Dê uma olhada no trecho de código abaixo que usa um parâmetro padrão:

function greeting(name = "stranger") {
  console.log(`Hello, ${name}!`);
}

greeting("Nick"); // Output: Hello, Nick!
greeting(); // Output: Hello, stranger!

/* No exemplo acima, usamos o =operador para atribuir ao parâmetro nameum valor padrão de 'stranger'. Isso é útil caso desejemos incluir uma 
    saudação padrão não personalizada!
    
    Quando o código chama, greeting('Nick')o valor do argumento é passado e, 'Nick', substituirá o parâmetro padrão de 'stranger'logar 'Hello, Nick!'no console.
    
    Quando não há um argumento passado para greeting(), o valor padrão de 'stranger'é usado e 'Hello, stranger!'registrado no console. */

// =================================================================================================================================================

/* A função makeShoppingList()cria uma lista de compras com base nos itens que são passados ​​para a função como argumentos.

    Imagine que você sempre compra leite, pão e ovos toda vez que vai às compras. Para facilitar a criação de uma lista de compras, vamos atribuir valores 
    padrão aos parâmetros em makeShoppingList().

    Altere os parâmetros makeShoppingList()para os parâmetros padrão:

    Atribua 'leite' como o valor padrão de item1.
    Atribua 'bread' como o valor padrão de item2.
    Atribua 'ovos' como o valor padrão de item3. */

function makeShoppingList(item1 = "milk", item2 = "bread", item3 = "eggs") {
  console.log(`Remember to buy ${item1}`);
  console.log(`Remember to buy ${item2}`);
  console.log(`Remember to buy ${item3}`);
}

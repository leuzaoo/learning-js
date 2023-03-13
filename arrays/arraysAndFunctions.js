// Arrays e Funções
// Ao longo da lição, examinamos os arrays sendo mutáveis ​​ou não mutáveis. Bem, o que acontece se tentarmos alterar
// um array dentro de uma função? A matriz mantém a alteração após a chamada da função ou tem escopo dentro da função?

// Dê uma olhada no exemplo a seguir, onde chamamos .push() e um array dentro de uma função. Lembre-se, o método .push()
// muda, ou altera, uma matriz:

const flowers = ["peony", "daffodil", "marigold"];

function addFlower(arr) {
  arr.push("lily");
}

addFlower(flowers);

console.log(flowers); // Output: ['peony', 'daffodil', 'marigold', 'lily']

// Vamos repassar o que aconteceu no exemplo:

// A array flowers tem 3 elementos.
// A função addFlower() tem um parâmetro de 'arr' e usamos .push() para adicionar um elemento 'lily' em 'arr'.
// Chamamos addFlower() com um argumento flowers que executará o código dentro de addFlower.
// Verificamos o valor de flowers e agora contem o elemento 'lily'!

// A matriz foi mutada!

// Portanto, quando você passa um array para uma função, se o array sofrer mutação dentro da função, essa alteração
// também será mantida fora da função. Você também pode ver esse conceito explicado como passagem por referência,
// pois o que estamos realmente passando para a função é uma referência ao local onde a variável de memória está
// armazenada e alterando a memória.

// Existe um array concept. Há também uma função changeArr que atribuirá o elemento no índice 3 da array a 'MUTATED'.
// A função changeArr foi chamada com um argumento de concept.

// Abaixo da chamada de função, registre concept no console para verificar se essa reatribuição alterou o array.

const concept = ["arrays", "can", "be", "mutated"];

function changeArr(arr) {
  arr[3] = "MUTATED";
}

changeArr(concept);

function removeElement(newArr) {
  newArr.pop();
}

console.log(concept); // prints: [ 'arrays', 'can', 'be', 'MUTATED' ]

removeElement(concept); // prints: [ 'arrays', 'can', 'be' ]

// Vamos verificar novamente o que acontece se alterarmos um array usando um método embutido dentro de uma função.
// Sob a console.log()instrução, defina outra função nomeada removeElementque receba um parâmetro de newArr.
// Dentro do corpo da função, .pop()chame newArr. /* voltar para cima, no escopo da funcao */

// Chame removeElement()com um argumento de concept. /* voltar para o escopo abaixo da funcao */

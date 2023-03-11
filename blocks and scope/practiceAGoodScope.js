// Pratique um bom escopo
// Dados os desafios com variáveis ​​globais e poluição de escopo, devemos seguir as práticas recomendadas para definir o
// escopo de nossas variáveis ​​o mais estritamente possível usando o escopo de bloco.

// O escopo rígido de suas variáveis ​​melhorará muito seu código de várias maneiras:

// Isso tornará seu código mais legível, pois os blocos organizarão seu código em seções discretas.
// Isso torna seu código mais compreensível, pois esclarece quais variáveis ​​estão associadas a diferentes partes do
// programa, em vez de ter que acompanhá-las linha após linha!
// É mais fácil manter seu código, já que seu código será modular.
// Isso economizará memória em seu código porque deixará de existir após o término da execução do bloco.
// Aqui está outro exemplo de como usar o escopo do bloco, conforme definido dentro de um bloco if:

const logSkyColor = () => {
  const dusk = true;
  let color = "blue";
  if (dusk) {
    let color = "pink";
    console.log(color); // Prints "pink"
  }
  console.log(color); // Prints "blue"
};

console.log(color); // throws a ReferenceError

// Aqui, você notará:

// Criamos uma variável dusk dentro da função logSkyColor().
// Após a instrução if, definimos um novo bloco de código com as { } chaves. Aqui atribuímos um novo valor à variável color
// se a afirmação if for verdadeira.
// Dentro do bloco if, a variável color contém o valor 'pink', mas fora do bloco if, no corpo da função, a variável color
// contém o valor 'blue'.
// Embora usemos escopo de bloco, ainda poluímos nosso namespace reutilizando o mesmo nome de variável duas vezes. Uma
// prática melhor seria renomear a variável dentro do bloco.
// O escopo do bloco é uma ferramenta poderosa em JavaScript, pois permite definir variáveis ​​com precisão e não poluir o
// namespace global. Se uma variável não precisa existir fora de um bloco — não deveria!

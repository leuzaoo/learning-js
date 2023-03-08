/* A palavra-chave "switch" inicia a instrução e é seguida por ( content ), que contém o 
valor que cada uma "case" irá comparar. No exemplo, o valor ou expressão da 
instrução "switch" é 'groceryItem'. */

/* Dentro do bloco, { ... }existem vários "cases". A "case" palavra-chave verifica se a expressão 
corresponde ao valor especificado que vem depois dela. O valor após o primeiro case é 'tomato'. 
Se o valor de groceryItemequaled 'tomato', isso "case" seria executado console.log('content') */

/* 
A breakpalavra-chave diz ao computador para sair do bloco e não executar mais nenhum código ou 
verificar quaisquer outros casos dentro do bloco de código. Observação: sem breakpalavras-chave, 
o primeiro caso correspondente será executado, mas também todos os casos subsequentes, independentemente 
de haver ou não correspondência, incluindo o padrão. Esse comportamento é diferente das instruções 
condicionais if/ elseque executam apenas um bloco de código.

No final de cada "switch" declaração, há uma "default" declaração. Se nenhum dos cases for verdadeiro, 
o código na "default" instrução será executado.

*/

let athleteFinalPosition = 'first place';

switch (athleteFinalPosition){
  case 'first place': console.log('You get the gold medal!');
  break;

  case 'second place': console.log('You get the silver medal!');
   break;

  case 'third place': console.log('You get the bronze medal!');
   break;

   default: 
   console.log('No medal awarded.')
   break;
}
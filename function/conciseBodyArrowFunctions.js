// Funções de seta de corpo conciso:

// O JavaScript também fornece várias maneiras de refatorar a sintaxe da função de seta . A forma mais condensada
// da função é conhecida como corpo conciso. Vamos explorar algumas dessas técnicas abaixo:

// As funções que usam apenas um único parâmetro não precisam que esse parâmetro seja colocado entre parênteses. No entanto,
// se uma função tiver zero ou vários parâmetros, os parênteses serão necessários.

// Zero parameters

const functionName1 = () => {};

// One parameter

const functionName2 = (paramOne = {});

// Two or more parameter

const functionName3 = (param1, param2) => {};

// Um corpo de função composto por um bloco de linha única não precisa de chaves. Sem as chaves, o que quer que a linha avalie
// será retornado automaticamente. O conteúdo do bloco deve seguir imediatamente a seta => e a palavra-chave return pode ser removida.
// Isso é conhecido como retorno implícito .

// single-line block

const sumNumbers1 = (number) => number + number;

// multi-line block

const sumNumbers2 = (number) => {
  const sum = number + number;
  return sum; // estado de retorno
};

// Então, se tivermos uma função:

const squareNum1 = (num) => {
  return num * num;
};

// Podemos refatorar a função para:

const squareNum2 = (num) => num * num;

// Observe as seguintes mudanças:

// Os parênteses ao redor 'num' foram removidos, pois possui um único parâmetro.
// As chaves { } foram removidas, pois a função consiste em um bloco de linha única.
// A palavra-chave return foi removida, pois a função consiste em um bloco de linha única.

// after:
const plantNeedsWater = (day) => {
  return day === "Wednesday" ? true : false;
};

// before:
const plantNeedsWater = day => day === "Wednesday" ? true : false;

// erro no nome da const, pois repete o mesmo nome para duas constantes, na programação, isto é errado.

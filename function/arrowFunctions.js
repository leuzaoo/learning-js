// Funções de seta

// O ES6 introduziu a sintaxe de função de seta, uma maneira mais curta de escrever funções usando
// a () => notação especial de “seta gorda”.

// As funções de seta eliminam a necessidade de digitar a palavra-chave function toda vez que você
// precisa criar uma função. Em vez disso, você primeiro inclui os parâmetros dentro de ( ) e, em seguida,
// adiciona uma seta => que aponta para o corpo da função cercado por { }:

const rectangleArea = (width, height) => {
  let area = width * height;
  return area;
};

const plantNeedsWater = (day) => {
  if (day === "Wednesday") {
    return true;
  } else {
    return false;
  }
};

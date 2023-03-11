// Blocos e Escopo

// Antes de falarmos mais sobre escopo, primeiro precisamos falar sobre blocos.

// Já vimos blocos usados ​​antes em funções e instruções if. Um bloco é o código encontrado dentro de um
// conjunto de chaves { }. Os blocos nos ajudam a agrupar uma ou mais instruções e servem como um marcador
// estrutural importante para o nosso código.

// Um bloco de código pode ser uma função, assim:

const logSkyColor = () => {
  let color = "blue";
  console.log(color); // blue
};

// Observe que o corpo da função é, na verdade, um bloco de código.

// Observe o bloco em uma instrução if:

if (dusk) {
  let color = "pink";
  console.log(color); // pink
}

// ============================================================================================================

const city = "New York City";

function logCitySkyline() {
  let skyscraper = "Empire State Building";
  return "The stars over the " + skyscraper + " in " + city;
}

console.log(logCitySkyline());

// ============================================================================================================

// Âmbito global

// Escopo é o contexto no qual nossas variáveis ​​são declaradas. Pensamos no escopo em relação aos blocos porque
// as variáveis ​​podem existir fora ou dentro desses blocos.

// No escopo global, as variáveis ​​são declaradas fora dos blocos. Essas variáveis ​​são chamadas de variáveis ​​globais.
// Como as variáveis ​​globais não estão vinculadas a um bloco, elas podem ser acessadas por qualquer código no programa,
// incluindo código em blocos.

// Vejamos um exemplo de escopo global:

const color = "blue"; // const inserida no escopo global

const returnSkyColor = () => {
  return color; // blue
};

console.log(returnSkyColor()); // blue

// ============================================================================================================

const satellite = "The Moon"; // const inserida no escopo global
const galaxy = "The Milky Way"; // const inserida no escopo global
const stars = "North Star"; // const inserida no escopo global

function callMyNightSky() {
  return "Night Sky: " + satellite + ", " + stars + ", and " + galaxy; // const chamadas para dentro de um bloco
}

console.log(callMyNightSky());

// ============================================================================================================

// Escopo do bloco
// O próximo contexto que abordaremos é o escopo do bloco. Quando uma variável é definida dentro de um bloco, ela
// só é acessível ao código entre chaves { }. Dizemos que a variável tem escopo de bloco porque ela só é acessível para
// as linhas de código dentro desse bloco.

// Variáveis ​​que são declaradas com escopo de bloco são conhecidas como 'variáveis ​​locais' porque só estão disponíveis
// para o código que faz parte do mesmo bloco.

// O escopo do bloco funciona assim:

const skyColor = () => {
  let color = "blue";
  console.log(color); // Prints "blue"
};

skyColor(); // Prints "blue"
console.log(color); // throws a ReferenceError

// Definimos uma função skyColor().
// Dentro da função, a variável color só está disponível entre as chaves da função.
// Se tentarmos logar a mesma variável fora da função, ela lançará um ReferenceError.

// ============================================================================================================

function logVisibleLightWaves() {
  const lightWaves = "Moonlight";

  console.log(lightWaves);
}
logVisibleLightWaves(); // aqui a função será chamada normalmente
console.log(lightWaves); // aqui dará a ReferenceError pois lightWaves só pode ser chamada dentro da função

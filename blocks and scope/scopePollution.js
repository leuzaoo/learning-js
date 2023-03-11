// Escopo Poluição
// Pode parecer uma ótima ideia sempre tornar suas variáveis ​​acessíveis, mas ter muitas variáveis ​​globais pode causar
// problemas em um programa.

// Quando você declara variáveis ​​globais, elas vão para o namespace global . O namespace global permite que as variáveis
// ​​sejam acessíveis de qualquer lugar no programa. Essas variáveis ​​permanecem lá até que o programa termine, o que
// significa que nosso namespace global pode ser preenchido rapidamente.

// A poluição de escopo ocorre quando temos muitas variáveis ​​globais existentes no namespace global ou quando
// reutilizamos variáveis ​​em diferentes escopos. A poluição do escopo dificulta o acompanhamento de nossas diferentes
// variáveis ​​e nos prepara para possíveis acidentes. Por exemplo, variáveis ​​com escopo global podem colidir com outras
// variáveis ​​com escopo mais local, causando um comportamento inesperado em nosso código.

// Vejamos um exemplo de poluição de escopo na prática para sabermos como evitá-la:

let num = 50;

const logNum = () => {
  num = 100; // Take note of this line of code
  console.log(num);
};

logNum(); // Prints 100
console.log(num); // Prints 100

// Você notará:

// Temos uma variável num.
// Dentro do corpo da função de logNum(), queremos declarar uma nova variável, mas esquecemos de usar a
// palavra-chave let.
// Quando ligamos logNum(), numé reatribuído para 100.
// A reatribuição interna logNum()afeta a variável global num.
// Mesmo que a reatribuição seja permitida e não recebamos um erro, se decidirmos usar nummais tarde, usaremos
// sem saber o novo valor de num.
// Embora seja importante saber o que é escopo global, é uma prática recomendada não definir variáveis ​​no escopo global.

// ============================================================================================================

const satellite = "The Moon";
const galaxy = "The Milky Way";
let stars = "North Star";

const callMyNightSky = () => {
  stars = "Sirius"; // aqui 'stars' passa a ser 'Sirius' e deixa de ser 'North Star' (linha 41)
  return "Night Sky: " + satellite + ", " + stars + ", " + galaxy;
};

console.log(callMyNightSky());
console.log(stars);

/* Neste projeto vamos construir uma Bola Oito Mágica usando fluxo de controle em JavaScript.

O usuário poderá inserir uma pergunta, então nosso programa produzirá uma fortuna aleatória. */

const userName = "Leonardo";
const userQuestion = "I can eat a food?";
const randomNumber = Math.floor(Math.random() * 8);
let eightBall = "";

userName === "Leonardo"
  ? console.log(`Hello, ${userName}!`)
  : console.log(`Hello!`);

switch (randomNumber) {
  case 0:
    console.log("It is certain");
    break;
  case 1:
    console.log("It is decidedly so");
    break;
  case 2:
    console.log("Reply hazy try again");
    break;
  case 3:
    console.log("Cannot predict now");
    break;
  case 4:
    console.log("Do not count on it");
    break;
  case 5:
    console.log("My sources say no");
    break;
  case 6:
    console.log("Outlook not so good");
    break;
  case 7:
    console.log("Signs point to yes");
    break;
  default:
    console.log("Do whatever you want!");
}

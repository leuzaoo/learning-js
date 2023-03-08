/* Você foi contratado para escrever um programa que registrará os corredores para a corrida e lhes dará instruções no dia da corrida. 
Existem corredores adultos (maiores de 18 anos) e corredores juvenis (menores de 18 anos). Eles podem se registrar cedo ou tarde. Os 
corredores recebem um número de corrida e hora de início com base em sua idade e registro.

Número da corrida:

Os primeiros adultos recebem um número de corrida igual ou superior a 1000.

Todos os outros recebem um número abaixo de 1000.

Hora de início:

Os inscritos adultos correm às 9h30 ou 11h.

Os primeiros adultos correm às 9h30.

Os adultos atrasados ​​correm às 11h.

Os inscritos juvenis correm às 12h30 (independentemente da inscrição).
*/

// =========================================================================================================================================


let raceNumber = Math.floor(Math.random() * 1000);
const registeredEarly = false;
const age = 19;

if (age >= 19 && !registeredEarly) {
  raceNumber += 1000;
}

if (age >= 18 && !registeredEarly) {
  console.log(`The runner number ${raceNumber} will run at 9h30pm!`)
} else if (age >= 19 && registeredEarly) {
  console.log(`The runner number ${raceNumber} will run at 11h00pm`)
} else if (age < 18) {
  console.log(`The runner number ${raceNumber} will run at 12h30pm`)
}



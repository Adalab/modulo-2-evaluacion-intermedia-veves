'use strict';

const number = document.querySelector(".js_guess_number");
const randomNumber= getRandomNumber(100);
const tryIt= document.querySelector(".try");
const clue= document.querySelector(".clue");
const counter= document.querySelector(".counter");

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
    }

console.log("El número generado aleatoriamente es "+ randomNumber);

function compareNumbers(){
    const guessNumber=  number.value;
  if (guessNumber < 1 || guessNumber >= 100) {
    clue.innerHTML='El número debe estar entre 1 y 100';
  } else if (guessNumber === randomNumber) {
    clue.innerHTML='Has ganado campeona!!!';
  } else if (guessNumber > randomNumber) {
    clue.innerHTML='Demasiado alto';
  } else if (guessNumber < randomNumber) {
    clue.innerHTML='Demasiado bajo';
  }
}
function counterFunction(){
    counter.innerHTML= `${parseInt(counter.innerHTML) +1}`;

}
function handleButton(){
    compareNumbers()
    counterFunction()
}

tryIt.addEventListener('click', handleButton);

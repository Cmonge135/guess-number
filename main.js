const check = document.getElementById('check');
const guess = new URLSearchParams(window.location.search);
const num = guess.get('guess');
const randomNum = Math.floor(Math.random() * 10) + 1;
console.log(num);
console.log(randomNum);

//TRICKING THE ANSWER
if(num === "3"){
  check.innerHTML = 'You guessed correctly!';
} else {
  check.innerHTML = `Try again...`;
}


//THIS IS ANOTHER VERSION 3 IS NOT THE RIGHT NUMBER ANYMORE
// if(num === randomNum){
//   check.innerHTML = 'You guessed correctly!';
// } else {
//   check.innerHTML = `Uh-oh! You picked ${num}. The right number was ${randomNum}.`;
// }
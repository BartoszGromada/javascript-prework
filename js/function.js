let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

function getMoveName(randomNumber) {
  if (randomNumber == 1) {
    return 'kamień';
  } else if (randomNumber == 2) {
	return 'papier';
  } else if (randomNumber == 3) {
	return 'nożyczki';
  } else {
  	return 'nieznany ruch';
  }
}

let computerMove = getMoveName(randomNumber);

/* if(randomNumber == 1){
  computerMove = 'kamień';
} else if (randomNumber == 2) {
	computerMove ='papier';
} else if (randomNumber == 3) {
	computerMove ='nożyczki';
} */

printMessage('Mój ruch to: ' + computerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMoveName(randomNumber);

/* if(playerInput == 1){
  playerMove = 'kamień';2
} else if (playerInput == 2){
	playerMove = 'papier';
} else if (playerInput == 3){
	playerMove = 'nożyczki';
} */

printMessage('Twój ruch to: ' + playerMove);

function displayResult(argComputerMove,argPlayerMove) {
  if (argComputerMove == kamień) && (argPlayerMove == papier) {
  	return 'Ty wygrywasz';
} else if (argComputerMove == kamień) && (argPlayerMove == nożyczki) {
	return 'Komputer wygrywa';
} else if (argComputerMove == kamień) && (argPlayerMove == kamień){
	return 'Remis!';
} else if (argComputerMove == kamień) && (argPlayerMove == nieznany ruch) {
	return 'brak/błędna wartość';
} else if (argComputerMove == papier) && (argPlayerMove == papier) {
	return 'Remis!';
} else if (argComputerMove == papier) && (argPlayerMove == nożyczki) {
	return 'Ty wygrywasz';
} else if (argComputerMove == papier) && (argPlayerMove == kamień){
	return 'Komputer wygrywa';
} else if (argComputerMove == papier) && (argPlayerMove == nieznany ruch) {
	return 'brak/błędna wartość';
} else if (argComputerMove == nożyczki) && (argPlayerMove == papier) {
	return 'Komputer wygrywa';
} else if (argComputerMove == nożyczki) && (argPlayerMove == nożyczki) {
	return 'Remis !';
} else if (argComputerMove == nożyczki) && (argPlayerMove == kamień) {
	return 'Ty wygrywasz';
} else if (argComputerMove == nożyczki) && (argPlayerMove == nieznany ruch) {
	return 'brak/błędna wartość';
}
  }

let result = displayResult(argComputerMove,argPlayerMove);

printMessage('Wynik to: ' + result);
function playGame(playerInput) {

clearMessages();

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);


function getMoveName(randomNumber, playerInput) {
	if (randomNumber == 1) {
		return 'kamień';
}	if (randomNumber == 2) {
		return 'papier';
}	if (randomNumber == 3) {
		return 'nożyczki';
}
};

let argComputerMove = getMoveName(randomNumber);

/* if (randomNumber == 1) {
	computerMove = 'kamień';
}	if (randomNumber == 2) {
	computerMove = 'papier';
}	if (randomNumber == 3) {
	computerMove = 'nożyczki';
 */

console.log('Wylosowana przez komputer wartość to: ' + argComputerMove);

printMessage('Mój wybór to: ' + argComputerMove);

/* let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.'); */

console.log('Gracz wpisał: ' + playerInput);

let argPlayerMove = getMoveName(playerInput);

/* if (playerInput == '1') {
    PlayerMove = 'kamień';
}   if (playerInput == '2') {
	PlayerMove = 'papier';
}	if (playerInput == '3') {
	PlayerMove = 'nożyczki';
}; */

console.log('Wybrana przez użytkownika wartość to: ' + argPlayerMove);

printMessage('Twój wybór to: ' + argPlayerMove);

function displayResult(argComputerMove, argPlayerMove) {
	if (argComputerMove == 'kamień' && argPlayerMove == 'papier') {
		return 'Przeżyłeś!';
} 	if (argComputerMove == 'kamień' && argPlayerMove == 'nożyczki') {
		return 'Jesteś zdany na moją łaskę!';
} 	if (argComputerMove == 'kamień' && argPlayerMove == 'kamień') {
		return 'Lets play again!';
} 	if (argComputerMove == 'kamień' && argPlayerMove == 'nieznany ruch') {
		return 'brak/błędna wartość!';
} 	if (argComputerMove == 'papier' && argPlayerMove == 'papier') {
		return 'Lets play again';
} 	if (argComputerMove == 'papier' && argPlayerMove == 'nożyczki') {
		return 'Przeżyłeś!';
} 	if (argComputerMove == 'papier' && argPlayerMove == 'kamień') {
		return 'Jesteś zdany na moją łaskę!';
} 	if (argComputerMove == 'papier' && argPlayerMove == 'nieznany ruch') {
		return 'brak/błędna wartość!';
}	if (argComputerMove == 'nożyczki' && argPlayerMove == 'papier') {
		return 'Jesteś zdany na moją łaskę!';
} 	if (argComputerMove == 'nożyczki' && argPlayerMove == 'nożyczki') {
		return 'Lets play again';
} 	if (argComputerMove == 'nożyczki' && argPlayerMove == 'kamień') {
		return 'Przeżyłeś!';
} 	if (argComputerMove == 'nożyczki' && argPlayerMove == 'nieznany ruch') {
		return 'brak/błędna wartość!';
}
};

const result = displayResult(argComputerMove,argPlayerMove);

console.log('Wynik: ' + result);

printMessage(displayResult(argComputerMove,argPlayerMove));

let A = 0;
let B = 0;

if (result == 'Jesteś zdany na moją łaskę!') {
	A = A + 1;
}	if (result == 'Przeżyłeś!') {
	B = B + 1;
}

let ResultA = A;

console.log('Wynik: ' + A + '-' + B);

let sumResult = ('Wynik:' + A + '-' + B);

clearResult();

printResult(sumResult);

};

document.getElementById('play-rock').addEventListener('click', function(){
  playGame(1);
});

document.getElementById('play-paper').addEventListener('click', function(){
  playGame(2);
});

document.getElementById('play-scissors').addEventListener('click', function(){
  playGame(3);
});
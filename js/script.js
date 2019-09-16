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

printMessage('Mój ruch to: ' + argComputerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

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

printMessage('Twój ruch to: ' + argPlayerMove);

function displayResult(argComputerMove, argPlayerMove) {
	if (argComputerMove === 'kamień' && argPlayerMove === 'papier') {
		return 'Ty wygrywasz!';
} 	if (argComputerMove == 'kamień' && argPlayerMove == 'nożyczki') {
		return 'Komputer wygrywa!';
} 	if (argComputerMove == 'kamień' && argPlayerMove == 'kamień') {
		return 'Remis!';
} 	if (argComputerMove == 'kamień' && argPlayerMove == 'nieznany ruch') {
		return 'brak/błędna wartość!';
} 	if (argComputerMove == 'papier' && argPlayerMove == 'papier') {
		return 'Remis!';
} 	if (argComputerMove == 'papier' && argPlayerMove == 'nożyczki') {
		return 'Ty wygrywasz!';
} 	if (argComputerMove == 'papier' && argPlayerMove == 'kamień') {
		return 'Komputer wygrywa';
} 	if (argComputerMove == 'papier' && argPlayerMove == 'nieznany ruch') {
		return 'brak/błędna wartość!';
}	if (argComputerMove == 'nożyczki' && argPlayerMove == 'papier') {
		return 'Komputer wygrywa!';
} 	if (argComputerMove == 'nożyczki' && argPlayerMove == 'nożyczki') {
		return 'Remis!';
} 	if (argComputerMove == 'nożyczki' && argPlayerMove == 'kamień') {
		return 'Ty wygrywasz!';
} 	if (argComputerMove == 'nożyczki' && argPlayerMove == 'nieznany ruch') {
		return 'brak/błędna wartość!';
}
};

const result = displayResult(argComputerMove,argPlayerMove);

console.log('Wynik: ' + result);

printMessage(displayResult(argComputerMove,argPlayerMove));

'use strict';

let resultA = 0;
let resultB = 0;

function playGame(playerInput) {

	const randomNumber = Math.floor(Math.random() * 3 + 1),
		ComputerMove = getMoveName(randomNumber),
		PlayerMove = getMoveName(playerInput),
		result = displayResult(ComputerMove,PlayerMove);

	clearMessages();

	function getMoveName(moveNumber) {
		if (moveNumber === 1) {
			return 'kamień';
		}	
		if (moveNumber === 2) {
			return 'papier';
		}	
		if (moveNumber === 3) {
			return 'nożyczki';
		}	
		return ('nieznany ruch')
	}

	printMessage('Mój wybór to: ' + ComputerMove);

	printMessage('Twój wybór to: ' + PlayerMove);

	function displayResult(argComputerMove, argPlayerMove) {
		if ((argComputerMove === 'kamień' && argPlayerMove === 'papier') || 
			(argComputerMove === 'papier' && argPlayerMove === 'nożyczki') || 
			(argComputerMove === 'nożyczki' && argPlayerMove === 'kamień')) {
				return 'Przeżyłeś!';
		} 	
		if ((argComputerMove === 'kamień' && argPlayerMove === 'nożyczki') || 
			(argComputerMove === 'nożyczki' && argPlayerMove === 'papier') || 
			(argComputerMove === 'papier' && argPlayerMove === 'kamień')) {
				return 'Jesteś zdany na moją łaskę!';
		} 	
		if ((argComputerMove == 'kamień' && argPlayerMove == 'kamień') || 
			(argComputerMove == 'papier' && argPlayerMove == 'papier') || 
			(argComputerMove == 'nożyczki' && argPlayerMove == 'nożyczki')) {
				return 'Lets play again!';
		} 	
		if ((argComputerMove == 'kamień' && argPlayerMove == 'nieznany ruch') || 
			(argComputerMove == 'papier' && argPlayerMove == 'nieznany ruch') || 
			(argComputerMove == 'nożyczki' && argPlayerMove == 'nieznany ruch')) {
				return 'brak/błędna wartość!';
		}
	}

	printMessage(displayResult(ComputerMove,PlayerMove));
}

document.getElementById('play-rock').addEventListener('click', function(){
  	playGame(1);
});

document.getElementById('play-paper').addEventListener('click', function(){
	playGame(2);
});

document.getElementById('play-scissors').addEventListener('click', function(){
	playGame(3);
});

console.log(playGame(3));

function finnalyResult(fResult) {
	if (fResult === 'Przeżyłeś!') {
		return resultA += 1;
	}
	if (fResult === 'Jesteś zdany na moją łaskę!') {
		return	resultB += 1;
	}
	printResult ('Wynik to: ' + resultA + ' - ' + resultB);
}

finnalyResult(playGame());


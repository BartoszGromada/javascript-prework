function playGame(playerInput) {

	clearMessages();

	const randomNumber = Math.floor(Math.random() * 3 + 1);

	const argComputerMove = getMoveName(randomNumber);

	const argPlayerMove = getMoveName(playerInput);

	const result = displayResult(argComputerMove,argPlayerMove);

	function getMoveName() {
		if (randomNumber === 1) {
			return 'kamień';
		}	
		if (randomNumber === 2) {
			return 'papier';
		}	
		if (randomNumber === 3) {
			return 'nożyczki';
		}	
		return ('nieznany ruch')
	}

	printMessage('Mój wybór to: ' + argComputerMove);

	printMessage('Twój wybór to: ' + argPlayerMove);

	function displayResult() {
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

	printMessage(displayResult(argComputerMove,argPlayerMove));
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
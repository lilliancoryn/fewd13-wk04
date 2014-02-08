var playerScore = 0;
var botScore = 0;

document.getElementById('rock').onclick = throwRock;
document.getElementById('paper').onclick = throwPaper;
document.getElementById('scissors').onclick = throwScissors;

function throwRock() {
	console.log('rock thrown');
	playGame('rock');
}

function throwPaper() {
	console.log('paper thrown');
	playGame('paper');
}

function throwScissors(){
	console.log('scissors thrown');
	playGame('scissors');
}

function playGame(playerThrow) {
	console.log('play game');
	botThrow = getRobotsThrow();
	getGameOutcome(playerThrow,botThrow);
}

function getRobotsThrow() {
	console.log('robot throw');
	var botThrowNumber = Math.floor(Math.random() * 3);
	console.log('botThrowNumber', botThrowNumber);
	if (botThrowNumber === 0) {
		return 'rock';
	} else if (botThrowNumber === 1) {
		return 'paper';
	} else if (botThrowNumber === 2) {
		return 'scissors';
	}
}

function getGameOutcome(playerThrow, botThrow) {
	console.log('player throw', playerThrow);
	console.log('robot throw', botThrow);
	if (playerThrow === botThrow) {
		updateScore('tie');
	} else if (playerThrow === 'rock' && botThrow === 'paper') {
		updateScore('lose');
	} else if (playerThrow === 'rock' && botThrow === 'scissors') {
		updateScore('win');
	} else if (playerThrow === 'paper' && botThrow === 'scissors') {
		updateScore('lose');
	} else if (playerThrow === 'paper' && botThrow === 'rock') {
		updateScore('win');
	} else if (playerThrow === 'scissors' && botThrow === 'paper') {
		updateScore('win');
	} else if (playerThrow === 'scissors' && botThrow === 'rock') {
		updateScore('lose');
	}

}

function updateScore(outcome) {
	console.log('outcome', outcome);

	if (outcome === 'win') {
		playerScore = playerScore + 1;
	} else if (outcome === 'lose') {
		botScore = botScore + 1;
	}

	document.getElementById('humanScore').innerHTML = playerScore;
	document.getElementById('computerScore').innerHTML = botScore;
	updateTeaser(outcome);
}

function updateTeaser(outcome) {

	if (outcome === 'win') {
		document.getElementById('status').innerHTML = 'You win :)';
	} else if (outcome === 'lose') {
		document.getElementById('status').innerHTML = 'You lose :(';
	} else {
		document.getElementById('status').innerHTML = 'Tie :|';
	}

}






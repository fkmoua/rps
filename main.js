var playerUser = function(move) {
	var move = prompt("Please pick 'rock', 'paper', or 'scissors'.")
	console.log("User has chosen " + move);
	return move;
}

var playerComputer = function(move) {   /* playerComputer is a function that takes in argument of computerMove.*/
	var move = function(randomNum) { 	/*computerMove takes in a function of a randomNum*/
		var randomNum = Math.random();				/*randomNum is choose by .random method*/
		
		if (randomNum <= 0.33) {
			return "rock";
		} 

		else if (randomNum <= 0.66) {
			return "paper";
		}

		else {
			return "scissors";
		}
	}; 			/*end of computerMove*/
	console.log("Computer has chosen " + move());
	return move();
}; // end of computerUser



var pickWinner = function(playerMove,computerMove) {
	var playerMove = playerUser();
	var computerMove = playerComputer();
	console.log(playerMove,computerMove);
}

pickWinner()




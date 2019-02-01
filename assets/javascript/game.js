var wins = 0;
var losses = 0;
var blueRupee = 0;
var greenRupee = 0;
var redRupee = 0;
var yellowRupee = 0;
var userScore = 0;
var comScore = 0;

function startGame (event) {
	userScore = 0;
	comScore = Math.floor(Math.random() * 81) + 19;
	blueRupee = Math.floor(Math.random() * 12) + 1;
	greenRupee = Math.floor(Math.random() * 12) + 1;
	redRupee = Math.floor(Math.random() * 12) + 1;
	yellowRupee = Math.floor(Math.random() * 12) + 1;

	$(document).ready(function() {
		$("#userscore").text(userScore);
		$("#computerscore").text(comScore);
		$("#wins").text(wins);
		$("#losses").text(losses);
	});
}

function checkWin (event) {
	if (userScore === comScore) {
		alert("You win!");
		wins++;
		$("#wins").text(wins);
		startGame();
	} else if (userScore > comScore) {
			alert("You lose!")
			losses++;
			$("#losses").text(losses);
			startGame();
	};
};

startGame();
	
$(document).ready(function() {
	$("#greenrupee").on("click", function() {
		$(document).ready(function() {
		userScore = userScore + greenRupee;
		console.log(userScore);
		$("#userscore").text(userScore);
		checkWin();
		});
	});
});

$(document).ready(function() {
	$("#bluerupee").on("click", function() {
		$(document).ready(function() {
		userScore = userScore + blueRupee;
		console.log(userScore);
		$("#userscore").text(userScore);
		checkWin();
		});
	});
});

$(document).ready(function() {
	$("#redrupee").on("click", function() {
		$(document).ready(function() {
		userScore = userScore + redRupee;
		console.log(userScore);
		$("#userscore").text(userScore);
		checkWin();
		});
	});
});

$(document).ready(function() {
	$("#yellowrupee").on("click", function() {
		$(document).ready(function() {
		userScore = userScore + yellowRupee;
		console.log(userScore);
		$("#userscore").text(userScore);
		checkWin();
		});
	});
});
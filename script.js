//****** Extra Generate Random Number *************
var num;
var guess;

function randomNum(){
	guess = prompt("Enter a number between 1 and 10:");
	guess = parseInt(guess, 10);
	num = Math.floor((Math.random() * 10) + 1);
	if(guess === NaN){
		randomNum();
	}
	else if(guess === num){
		//console.log(num);
		console.log("Good Work");
	}
	else{
		//console.log(num);
		console.log("Not a match");
		randomNum();
	}
}

randomNum();

//****** Extra Generate Random Number *************

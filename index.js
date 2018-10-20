//FIRST FUNCTION takeANumber
var deliCounter = [];

function takeANumber(deliCounter, name) {
	deliCounter.push(name);
	return "Welcome, " + name + ". You are number " + deliCounter.length + " in line.";  
}

console.log(takeANumber(deliCounter, "Ada"));
console.log(takeANumber(deliCounter, "Joe"));

//SECOND FUNCTION nowServing
function nowServing(deliCounter) {
	if (deliCounter.length === 0) {
		return "There is nobody waiting to be served!";	
	}
	else {
		return "Currently serving " + deliCounter.shift() + ".";
	}
}

//THIRD FUNCTION currentLine
function currentLine(deliCounter) {
	var str = "The line is Currently: "
	if(deliCounter.length !== 0) {
		for(var i = 0; i < deliCounter.length; i++) {
			str = str + (i + 1) + ". " + deliCounter[i] + ", ";
			if(deliCounter.length == i - 1 ) {
				str = str + (i + 1) + ". " + deliCounter[i];
			}
		}
		return str;
	}
	else if (deliCounter.length === 0){
		return "The line is currently empty."
	}
}

console.log(currentLine(deliCounter));
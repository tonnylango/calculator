$(document).ready(function(){
	var question = "0"; //should hold the question displayed
	var answer = "0";//hold the answer displayed
	var number = "0"; //hold the number being typed
	var operator; //holds latest operator

	//define function to update the display
	function updateDisplay(){
		let output = `${question}\n${answer}`;
		$(".display").text(output); //update the display
	}

	updateDisplay();

	/*
	//if you click a number button, update question
	$(".number").click(function(){
		let typedDigit = $(this).text();
		question = (question == "0") ? typedDigit : `${question}${typedDigit}`;
		updateDisplay(); //update the display
	});*/

	$(".button").click(function(){
		let typedDigit = $(this).text()
		if ($.isNumeric(typedDigit)){
			question = (question == "0") ? typedDigit : `${question}${typedDigit}`;
			number = (number == "0") ? typedDigit : `${number}${typedDigit}`
		}
		else if (typedDigit == "." && !number.includes(".")){
			question = `${question}${typedDigit}`;
			number = number + typedDigit;
		}
		else if (typedDigit == "<="){ //deleting
			question = question.slice(0, -1);
			if (question.length == 0){
				question = "0"
			}
		}

		updateDisplay(); //update the display


	})

	$(".clear").click(function(){
		question = answer = number = "0";
		updateDisplay();
	});
	
});
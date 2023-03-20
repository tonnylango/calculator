$(document).ready(function(){
	var question = "0"; //should hold the question displayed
	var answer = "0";//hold the answer displayed
	const operators = ["/", "x", "+", "-"]; 
	const operators_regex = new RegExp("[" + operators.join("") + "]", "g"); //create a regular expression

	//define function to update the display
	function updateDisplay(){
		let output = `${question}\n${answer}`;
		$(".display").text(output); //update the display
	}

	//Call the updateDisplay() function on page load
	updateDisplay();

	$(".button").click(function(){
		let typedDigit = $(this).text()
		if ($.isNumeric(typedDigit)){
			question = (question == "0") ? typedDigit : `${question}${typedDigit}`;
		}
		else if (typedDigit == "."){
			var numbers = question.split(operators_regex)
			question = (operators.includes(question[question.length - 1]) || question[question.length - 1] == "." || numbers[numbers.length - 1].includes(".")) ? question : `${question}${typedDigit}`;
		}

		else if (typedDigit == "<="){ //deleting
			question = (question.slice(0, -1).length === 0) ? "0" : question.slice(0, -1);
		}

		else if (typedDigit == "/" || typedDigit == "x"){ 
			question = (operators.includes(question[question.length - 1]) || question[question.length - 1] == ".") ? question : `${question}${typedDigit}`;
		}

		else if (typedDigit == "+" || typedDigit == "-") {
			question = (question[question.length - 1] != ".") ? `${question}${typedDigit}` : question;
		}

		else if (typedDigit == "CE"){
			question = answer  = "0";
		}

		updateDisplay(); //update the display

	})
	
});
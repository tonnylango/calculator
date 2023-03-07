$(document).ready(function(){
	var question = 0; //should hold the question displayed
	var answer = 0;//hold the answer displayed

	//define function to update the display
	function updateDisplay(){
		let output = `${question}\n${answer}`;
		$(".display").text(output); //update the display
	}

	updateDisplay();

	//if you click a number button, update question
	$(".number").click(function(){
		let typedDigit = $(this).text();
		question = (question == "0") ? typedDigit : `${question}${typedDigit}`;
		updateDisplay(); //update the display
	});

	$(".clear").click(function(){
		question = 0;
		answer = 0;
		updateDisplay();
	});
	
});
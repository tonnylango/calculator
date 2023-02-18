var question = 0; //should hold the question displayed
var answer = 0;//hold the answer displayed


$(document).ready(function(){
	//define function to update the display
	function updateDisplay(){
		let output = '${question}\n${answer}';
		$(".display").text(output); //update the display
	}

	//if you click a number button, update question
	$(".button").click(function(){
		let typedDigit = $(this).text();
		alert('you pressed ${typedDigit}');
		/*let typedDigit = $(this).text();
		question = (question == "0") ? typedDigit : '${question}${typedDigit}';
		$(".display").text(question)*/
		//$("#display").updateDisplay(); //update the display
	});
	
});
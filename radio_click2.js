// radio_click2.js
// An example of the use of the click event with radio buttons,
// registering the event handler by assignment to the button
// attributes
// The event handler for a radio button collection
/*This function alerts the user what color shirt they picked on the order form*/
	function colorChoice (color) {

	// Put the DOM address of the elements array in a local variable
	var dom = document.getElementById("myForm");
	
	// Determine which button was pressed
	for (var index = 0; index < dom.colorButton.length; index++) {
	if (dom.colorButton[index].checked) 
	{
		color = dom.colorButton[index].value;
		break;
	}
}

// Produce an alert message about the chosen airplane
switch (color) {
case "1":
alert("Your shirt color is Red.");
break;
case "2":
alert("Your shirt color is Blue.");
break;
case "3":
alert("Your shirt color is Green.");
break;
case "4":
alert("Your shirt color is Yellow.");
break;
case "5":
alert("Your shirt color is Orange.");
break;
default:
alert("Error in JavaScript function planeChoice");
break;
}
}
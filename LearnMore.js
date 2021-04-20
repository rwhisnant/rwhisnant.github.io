// LearnMore.js
// An example of the use of the click event with radio buttons,
// registering the event handler by assignment to the button
// attributes
// The event handler for a radio button collection
    function foodChoice (food) 
{

	// Put the DOM address of the elements array in a local variable
	var dom = document.getElementById("myForm");
	
	// Determine which button was pressed
	for (var index = 0; index < dom.foodButton.length; index++) 
    {
        if (dom.foodButton[index].checked) 
        {
            food = dom.foodButton[index].value;
            break;
        }
    }

// Produce an alert message about the chosen airplane
    switch (food) 
    {
        case "1":
        window.location.href="Recipes.html#Recipes";
        break;
        case "2":
        window.location.href="Recipes.html#Recipes";
        break;
        case "3":
        window.location.href="Recipes.html#Recipes";
        break;
        case "4":
        window.location.href="Recipes.html#Recipes";
        break;
        case "5":
        window.location.href="Recipes.html#Recipes";
        break;
        default:
        alert("Error in JavaScript function planeChoice");
        break;
    }
}
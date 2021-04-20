/*This function checks to see if the user input their name correctly*/
function chkName() {
var myName = document.getElementById("custName");
var pos = myName.value.search(/^[A-Z][a-z]+, ?[A-Z][a-z]+, ?[A-Z]\.?$/);
    /*This if-else statement notifies the user if they entered their information incorrectly with a alert message*/
if (pos != 0) 
{
	alert("The name you entered (" + myName.value + ") is not in the correct form. \n" +
	"The correct form is: " +
	"last-name, first-name, middle-initial \n" +
	"Please go back and fix your name");
	return false;
} 
	else{
	return true;
	}
}
/*This function checks to see if the user input their age (greater than 17) correctly*/
function chkAge() {
var myAge = document.getElementById("custAge");
    /*This if-else statement notifies the user if they entered their information incorrectly with a alert message*/
if (myAge.value <= 17) 
{
	alert("The age you entered (" + myAge.value + ") is not in the correct form. \n" +
	"The correct form is: " +
	"greater than 17 \n" +
	"Please go back and fix your name");
	return false;
} 
	else{
	return true;
	}
}
/*This function checks to see if the user input their size correctly*/
function chkSize() {
var mySize = document.getElementById("custSize");
/*This if-else statement notifies the user if they entered their information incorrectly with a alert message*/
if (mySize.value == S || mySize.value == M || mySize.value == L || mySize.value == XL || mySize.value == 2XL || mySize.value == 3XL) 
{
	alert("The size you entered (" + mySize.value + ") is not in the correct form. \n" +
	"The correct form is: " +
	"Your size choices are: S, M, L, XL, 2XL, or 3XL. \n" +
	"Please go back and fix your name");
	return false;
} 
	else{
	return true;
	}
}
/*This function checks to see if the user input their scripture correctly*/
function chkScripture() {
var myScripture = document.getElementById("custScripture");
var pos = myName.value.search(/^[A-Z][a-z]+ - ?[A-Z][a-z]+.?$/);
    /*This if-else statement notifies the user if they entered their information incorrectly with a alert message*/
if (pos != 0) 
{
	alert("The scripture you entered (" + myScripture.value + ") is not in the correct form. \n" +
	"The correct form is: " +
	"Heal me O Lord -Jeremiah 17:14\n" +
	"Please go back and fix your scripture");
	return false;
} 
	else{
	return true;
	}
}
/*This function checks to see if the user input their card holder correctly*/
function chkcardHolder() {
var mycardHolder = document.getElementById("cardHolder");
var pos = myName.value.search(/^[A-Z][a-z]+ - ?[A-Z][a-z]+.?$/);
    /*This if-else statement notifies the user if they entered their information incorrectly with a alert message*/
if (pos != 0) 
{
	alert("The name you entered (" + mycardHolder.value + ") is not in the correct form. \n" +
	"The correct form is: " +
	"last-name, first-name, middle-initial \n" +
	"Please go back and fix your name");
	return false;
} 
	else{
	return true;
	}
}
/*This function checks to see if the user input their card number correctly*/
function chkcardNumber() {
var mycardNumber = document.getElementById("cardNumber");
    /*This if-else statement notifies the user if they entered their information incorrectly with a alert message*/
if (myAge.value <= 0) 
{
	alert("The card number you entered (" + mycardNumber.value + ") is not in the correct form. \n" +
	"The correct form is: " +
	"greater than 0 \n" +
	"Please go back and fix your name");
	return false;
} 
	else{
	return true;
	}
}
/*This function checks to see if the user input their expiry date correctly*/
function chkexpiryDate() {
var myexpiryDate = document.getElementById("expiryDate");
    /*This if-else statement notifies the user if they entered their information incorrectly with a alert message*/
if (myAge.value <= -1) 
{
	alert("The expiry date you entered (" + myexpiryDate.value + ") is not in the correct form. \n" +
	"The correct form is: " +
	"greater than -1 \n" +
	"Please go back and fix your name");
	return false;
} 
	else{
	return true;
	}
}
/*This function checks to see if the user input their cvc correctly*/
function chkcvc() {
var mycvc = document.getElementById("cvc");
    /*This if-else statement notifies the user if they entered their information incorrectly with a alert message*/
if (myAge.value <= -1) 
{
	alert("The expiry date you entered (" + mycvc.value + ") is not in the correct form. \n" +
	"The correct form is: " +
	"greater than -1 \n" +
	"Please go back and fix your name");
	return false;
} 
	else{
	return true;
	}
}
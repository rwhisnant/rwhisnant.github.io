/*This function alerts the user once the user completes the order form*/
function clicked() {
var myName = document.getElementById("custName");
var pos = myName.value.search(/^[A-Z][a-z]+, ?[A-Z][a-z]+, ?[A-Z]\.?$/);
var myAge = document.getElementById("custAge");
var mySize = document.getElementById("custSize");
var myScripture = document.getElementById("custScripture");
var mycardHolder = document.getElementById("cardHolder");
var mycardNumber = document.getElementById("cardNumber");
var myexpiryDate = document.getElementById("expiryDate");
var mycvc = document.getElementById("cvc");
    /*This function sends the user an alert message once the user completes each blank in the order form*/
if (pos == "" ) 
{
	
      alert( "Your order was successful!\nThank you for ordering a customized shirt from R.A.D Designs inc.!");
return false;
	
	}
    else if(myAge == "")
        {
          alert( "Your order was successful!\nThank you for ordering a customized shirt from R.A.D Designs inc.!");
return false;  
        }
    else if(mySize == "")
        {
          alert( "Your order was successful!\nThank you for ordering a customized shirt from R.A.D Designs inc.!");
return false;  
        }
    else if(myScripture == "")
        {
            alert( "Your order was successful!\nThank you for ordering a customized shirt from R.A.D Designs inc.!");
return false;
        }
    else if(mycardHolder == "")
        {
            alert( "Your order was successful!\nThank you for ordering a customized shirt from R.A.D Designs inc.!");
return false;
        }
    else if(mycardNumber == "")
        {
            alert( "Your order was successful!\nThank you for ordering a customized shirt from R.A.D Designs inc.!");
return false;
        }
    else if(myexpiryDate == "")
        {
            alert( "Your order was successful!\nThank you for ordering a customized shirt from R.A.D Designs inc.!");
return false;
        }
    else if(mycvc == "")
        {
            alert( "Your order was successful!\nThank you for ordering a customized shirt from R.A.D Designs inc.!");
return false;
        }
    else{
        alert("invalid");
        return true;
    }
	
}


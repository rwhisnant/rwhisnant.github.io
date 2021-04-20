/*CookWithMe js */

/*Gallery js */
function opennav() {
    document.getElementById("sidebar").style.width = "175px";
    document.getElementById("menuicon").style.display = "none";
}
function closnav() {
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("menuicon").style.display = "block";
}
/*Recipes js*/
function opennav() {
    document.getElementById("sidebar").style.width = "175px";
    document.getElementById("menuicon").style.display = "none";
}
function closnav() {
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("menuicon").style.display = "block";
}

const button1 = document.getElementById("btn1");
const button2 = document.getElementById("btn2");
const button3 = document.getElementById("btn3");
const button5 = document.getElementById("btn5");
const button6 = document.getElementById("btn6");
const button7 = document.getElementById("btn7");

const recipe1 = document.getElementById("recipe1");
const recipe2 = document.getElementById("recipe2");
const recipe3 = document.getElementById("recipe3");
const recipe5 = document.getElementById("recipe5");
const recipe6 = document.getElementById("recipe6");
const recipe7 = document.getElementById("recipe7");

recipe1.style.display = "none";
button1.addEventListener("click", (event) => {
    if (recipe1.style.display == "none") {
        recipe1.style.display = "block";
    }
    else {
        recipe1.style.display = "none";
    }
})
recipe2.style.display = "none";
button2.addEventListener("click", (event) => {
    if (recipe2.style.display == "none") {
        recipe2.style.display = "block";
    } else {
        recipe2.style.display = "none";
    }
})
recipe3.style.display = "none";
button3.addEventListener("click", (event) => {
    if (recipe3.style.display == "none") {
        recipe3.style.display = "block";
    }
    else {
        recipe3.style.display = "none";
    }
})
recipe5.style.display = "none";
button5.addEventListener("click", (event) => {
    if (recipe5.style.display == "none") {
        recipe5.style.display = "block";
    }
    else {
        recipe5.style.display = "none";
    }
})
recipe6.style.display = "none";
button6.addEventListener("click", (event) => {
    if (recipe6.style.display == "none") {
        recipe6.style.display = "block";
    }
    else {
        recipe6.style.display = "none";
    }
})
recipe7.style.display = "none";
button7.addEventListener("click", (event) => {
    if (recipe7.style.display == "none") {
        recipe7.style.display = "block";
    }
    else {
        recipe7.style.display = "none";
    }
})
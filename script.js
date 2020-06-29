var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.querySelector(".random");

function setPicker() {
    color1.value = "#ff0000"
    color2.value = "#00ff00"
    setGradient();
}

function setGradient() { 
    body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
    + ")";	
    css.textContent = body.style.background + ";";
}

function getRandom() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function setRandom(){
    color1.value = (getRandom());
    color2.value = (getRandom());
    setGradient();
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

window.addEventListener("load", setPicker);

random.addEventListener("click", setRandom);





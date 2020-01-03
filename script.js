var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.querySelector("body");
var btn_copy = document.querySelector("#btn_copy");

function setGradient(){
    body.style.background = 
    "linear-gradient(to right, "
    + color1.value
    + ", "
    + color2.value
    +")"; 
    css.textContent=body.style.background + ";";

}

function copyToClipboard(){
    const false_text_area = document.createElement('textarea');
    false_text_area.value = body.style.background + ";";
    document.body.appendChild(false_text_area);
    false_text_area.select();
    document.execCommand('copy');
    document.body.removeChild(false_text_area);
}

color1.value = "#ff0000";
color2.value = "#ffff00";
body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value +")"; 
css.textContent=body.style.background + ";";
css.style.backgroundColor = "white";
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
btn_copy.addEventListener("click", copyToClipboard);

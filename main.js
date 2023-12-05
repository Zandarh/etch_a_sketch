// Gobal variable
let defaultColor = "#6e1ea4";
let activeMode = "Single Color";
const rainbowArray = [];

// Accessing the html nodes

const colorPicker = document.querySelector("#colorPicker");

//The modes
const clearButton = document.querySelector(".clearButton");
clearButton.addEventListener("click", () => {
    const gridDiv = document.querySelectorAll(".gridDiv");
    gridDiv.forEach((oneDiv) => {
        oneDiv.style.backgroundColor = "#ffffff";
    });
});

const singleMode = document.querySelector(".modeButtons");
singleMode.addEventListener("click", () => {
    activeMode = singleMode.value;
    switchModes(activeMode);
});

const rainbowMode = document.querySelector(".disabled");
rainbowMode.addEventListener("click", () => {
    activeMode = rainbowMode.value;
    switchModes(activeMode);
});

const eraser = document.querySelector(".eraser");
eraser.addEventListener("click", () => {
    activeMode = eraser.value;
    switchModes(activeMode);
});

//swtich between modes
function switchModes(activeMode){
    if(activeMode == "Single Color"){
        rainbowMode.setAttribute("class", "disabled");
        singleMode.setAttribute("class", "modeButtons");
    }
    else if(activeMode == "Random Color"){
        rainbowMode.setAttribute("class", "modeButtons");
        singleMode.setAttribute("class", "disabled");
    }
    else{
        rainbowMode.setAttribute("class", "disabled");
        singleMode.setAttribute("class", "disabled");
    }
}


function gridMaker(size){
    const div = document.querySelector(".grid");

    for (let i = 0; i < size * size; i++){
     const gridDiv = document.createElement("div");
     gridDiv.setAttribute("class", "gridDiv");
     gridDiv.setAttribute("style", "flex-grow: 1");
     gridDiv.addEventListener("mouseover", checkMode);
     gridDiv.addEventListener("mousedown", checkMode);
     div.appendChild(gridDiv);
    }
}
// checks which mode is active
function checkMode(e){
    const theDivElement = e.target;
    if (activeMode == singleMode.value) {
        defaultColor = getColor();
        changeDivColor(theDivElement, defaultColor);
    }
    else if(activeMode == rainbowMode.value)
        rainbowDivColor(theDivElement, rainbowArray);
    else{
        eraseColor(theDivElement);
    }
}

//gets the current input color
function getColor(){
    let currentColor = colorPicker.value;
    return currentColor;
}
// changes the color of the clicked div with the single color mode
function changeDivColor(theDivElement, defaultColor) {
    theDivElement.style.backgroundColor = defaultColor;
}


// changes the color using a random color
function rainbowDivColor(theDivElement, rainbowArray){
    let randOne = Math.floor(Math.random() * 256);
    let randTwo = Math.floor(Math.random() * 256);
    let randThree = Math.floor(Math.random() * 256);

    defaultColor = `rgb(${randOne}, ${randTwo}, ${randThree})`;
    theDivElement.style.backgroundColor = defaultColor;
}

// erases each box
function eraseColor(theDivElement){
    defaultColor = "#ffffff"
    theDivElement.style.backgroundColor = defaultColor;
}


gridMaker(16);
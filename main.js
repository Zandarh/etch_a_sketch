// Gobal variable
let defaultColor = "#6e1ea4";
let activeMode = "Single Color";

// Accessing the html nodes
const colorPicker = document.querySelector("#colorPicker");
const clearButton = document.querySelector(".clearButton");
const singleMode = document.querySelector(".modeButtons");
const rainbowMode = document.querySelector(".disabled");
const eraser = document.querySelector(".eraser");


// Clearing all the grid colors
clearButton.addEventListener("click", () => {
    const gridDiv = document.querySelectorAll(".gridDiv");
    gridDiv.forEach((eachDiv) => {
        eachDiv.style.backgroundColor = "#ffffff";
    });
});


//Accessing the modes click event
// The single Color Mode
singleMode.addEventListener("click", () => {
    activeMode = singleMode.value;
    switchModes(activeMode);
});

// The rainbow mode 
rainbowMode.addEventListener("click", () => {
    activeMode = rainbowMode.value;
    switchModes(activeMode);
});

//The erase mode
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

// Building the grid
function gridMaker(size){
    const div = document.querySelector(".grid");

    for (let i = 0; i < size * size; i++){
     const gridDiv = document.createElement("div");
     gridDiv.setAttribute("class", "gridDiv");
     gridDiv.setAttribute("style", "flex-grow: 1");
     gridDiv.addEventListener("mousedown", checkMode);
     gridDiv.addEventListener("mouseover", checkMode);
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
        rainbowDivColor(theDivElement);
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
function rainbowDivColor(theDivElement){
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
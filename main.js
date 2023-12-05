let size = 16;

const div = document.querySelector(".grid");

for (let i = 0; i < (size * size) + 1; i++){
    const gridDiv = document.createElement("div");
    gridDiv.setAttribute("class", "gridDiv");
    gridDiv.setAttribute("style", "flex-grow: 1");
    div.appendChild(gridDiv);
}
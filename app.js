let board = document.getElementById("board");

for (let i = 0; i < 256; i++) {
    let gridDiv = document.createElement("div");
    gridDiv.innerHTML = "Div " + (i + 1);
    board.appendChild(gridDiv);
}
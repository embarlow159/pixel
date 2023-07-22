let board = document.getElementById("board");

for (let i = 0; i < 256; i++) {
    let gridDiv = document.createElement("div");
    gridDiv.innerHTML = i+1;
    board.appendChild(gridDiv);
    gridDiv.addEventListener("mouseover", over);
    gridDiv.addEventListener("mouseout", out);
}

function over(e) {
    e.target.style.backgroundColor = `black`;
}

function out(e) {
    e.target.style.backgroundColor = `white`;
}
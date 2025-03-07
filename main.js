const container = document.querySelector(".container");
const btn = document.querySelector("button");
const color = document.querySelector("#gridColor");
let colorForGrid = color.value;
color.addEventListener("change", pickColor);

createGrid();

btn.addEventListener("click", createNewGrid);

function pickColor(e) {
  colorForGrid = e.target.value;
}

function createNewGrid() {
  let flag = false;
  let newGridSize = 0;

  while (!flag) {
    newGridSize = prompt("num of squares? (1-100)");

    if (newGridSize > 100 || newGridSize < 1) {
      alert("invalid number, try again");
    } else {
      flag = true;
    }
  }

  createGrid(newGridSize);
}

function createGrid(squares = 16) {
  container.innerHTML = "";

  let numOfSquares = squares * squares;

  for (let i = 1; i <= numOfSquares; i++) {
    const grid = document.createElement("div");
    grid.style.setProperty("min-width", `calc(100% / ${squares})`);

    grid.classList.add("square");
    container.appendChild(grid);
  }

  const grids = document.querySelectorAll(".square");
  grids.forEach((sq) => {
    sq.addEventListener("mouseover", (e) => {
      if (e.target.style.background != ""){
        e.target.style.opacity = `${window.getComputedStyle(e.target).opacity - 0.1}`;
        console.log(e.target.style.opacity)
      }
      e.target.style.background = colorForGrid;
    });
  });
}

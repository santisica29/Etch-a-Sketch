const container = document.querySelector(".container");
const btn = document.querySelector("button");
createGrid();

btn.addEventListener("click", createNewGrid);

function createNewGrid() {
  let flag = false;
  let newGridSize = 0;

  while (flag === false) {
    newGridSize = prompt("num of squares? (1-100)");

    if (newGridSize > 100 || newGridSize < 1) {
      alert("invalid number, try again");
    } else {
      flag = true;
    }
  }

  createGrid(newGridSize);
}
createGrid();

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
    sq.addEventListener("mouseover", (event) => {
      event.target.style.background = "lightblue";
    });
    console.log(1);
  });
}

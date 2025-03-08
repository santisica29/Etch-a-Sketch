const container = document.querySelector(".container");
const btn = document.querySelector("#newGrid");
const color = document.querySelector("#gridColor");
const controlerBtn = document.querySelector("#controlerBtn");
let controlerOption;
let colorForGrid = hexToRGB(color.value);
color.addEventListener("change", pickColor);

controlerBtn.addEventListener("click", () => {
  controlerOption = document.querySelector("#controler").value;
  console.log(controlerOption);
});

createGrid();

btn.addEventListener("click", createNewGrid);

function pickColor(e) {
  colorForGrid = hexToRGB(e.target.value);
}

function hexToRGB(hex) {
  if (hex.startsWith("#")) {
    hex = hex.slice(1);
  }

  const r = parseInt(hex.slice(0, 2), 16);
  const g = parseInt(hex.slice(2, 4), 16);
  const b = parseInt(hex.slice(4, 6), 16);

  return `RGB(${r}, ${g}, ${b})`;
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
      e.target.style.background = colorForGrid;

      switch (controlerOption) {
        case "random":
          e.target.style.background = randomRGB();
          break;
        case "lighter":
          e.target.style.opacity = `${window.getComputedStyle(e.target).opacity - 0.1}`;
          break;
        case "darker":
          // dont know how to get alpha value of rgb to make it darker
          // or another way to do it  
          break;
        default:
          break;
      } 
    });
  });
}
function randomRGB(){
  return `RGB(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
}

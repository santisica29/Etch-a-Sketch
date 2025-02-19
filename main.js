const container = document.querySelector('.container');

createGrid();

function createGrid(squares = 16){
    let num = squares * squares;
    for (let i = 1; i <= num; i++){
        const grid = document.createElement('div');
        grid.textContent = i;
        // grid.style.width = "500px"
        container.appendChild(grid);

    }
}
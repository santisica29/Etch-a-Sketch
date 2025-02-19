const container = document.querySelector('.container');
const containerWidth = container.clientWidth;

createGrid();

function createGrid(squares = 16){
    container.innerHTML = "";

    let numOfSquares = squares * squares;
    let sizeOfSquares = containerWidth / squares;
    
    for (let i = 1; i <= numOfSquares; i++){
        const grid = document.createElement('div');
        grid.style.width = `${sizeOfSquares}px`;
        grid.style.height = `${sizeOfSquares}px`;

        grid.classList.add('square');
        container.appendChild(grid);

    }
}
const container = document.querySelector('#container');

const reset = document.querySelector('#reset')

reset.addEventListener('click', () => {
    let gridSize = prompt("Please enter a grid size:");
    if (gridSize <= 100) {
        gridInit(gridSize);
    }
    else {
        alert("Gridsize cannot exceed 100, defaulting to 16");
        gridInit(16)
    }
})

function setActive(element) {
    element.classList.add("grid-box-active")
    element.classList.remove("grid-box-inactive")
}

function gridInit(gridSize) {
    container.innerHTML = '';
    totalGrids = gridSize * gridSize
    let root = document.documentElement;
    root.style.setProperty("--grid-axis", gridSize)
    root.style.setProperty("--grid-percen", `${gridSize}fr`)
    for (let i = 0; i <= totalGrids; i++) {
        const div = document.createElement('div');
        div.classList.add('grid-box');
        div.classList.add('grid-box-inactive');
        div.classList.remove('grid-box-active')
        div.id = `grid-box${i}`
        div.addEventListener('mouseover', (e) => {
            // console.log(e.target)
            setActive(e.target);
        });
        container.appendChild(div);
    }
}

gridInit(16)




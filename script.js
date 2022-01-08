
//sets dimensions of the play area grid
let dimension = 10;

let run = "false";

//button to test the function
const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
  gridCreation()
});

//run to create the grid
function gridCreation() {
    //creates columns
    for (let i = 0; i < dimension; i++) {
        const column = document.createElement('column'+1);
        column.classList.add('column');

        container.appendChild(column);

        //creates rows within each column
        for (let i = 0; i < dimension; i++) {
            const row = document.createElement('row'+i);
            row.classList.add('row');

            column.appendChild(row)
        }
    }
}

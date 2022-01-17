//sets dimensions of the play area grid
let dimension = 10;
let color = document.querySelector('.color')
let j = 0;

let draw = false;
let run = false;

const cellsArray = [];
const lifeArray = [];

//button to test the function
const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
  gridCreation()
});

//run to create the grid
function gridCreation() {
    j = 0;
    //creates columns
    for (let i = 0; i < dimension; i++) {
        const column = document.createElement('column'+i);
        column.classList.add('column');

        container.appendChild(column);

        //creates rows within each column
        for (let i = 0; i < dimension; i++) {
            const row = document.createElement("z_" + j);
            row.classList.add('row');
            row.classList.add(j);
            lifeArray.push(0);
            cellsArray.push("z_" + j);


            row.addEventListener('click', function(){
                row.style.backgroundColor = 'black'
                var theClass = $(this).attr('class');
                cellNumber = (theClass.split(" ").pop())
                lifeArray[cellNumber]=1;
                console.log(lifeArray[cellNumber])

            })
            column.appendChild(row);
            j++;
        }
    }
}

//cellName = "z_8";
//cellNumber = (cellName.split("_").pop());
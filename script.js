//sets dimensions of grid
let dimension = 5;
//sets the color that a living tile will change to
let color = document.querySelector('.color')

let run = false;


const lifeArray = [];
const placeHolder = [];

//button to test the function
const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
  gridCreation();
});

//button to stop and start the game
const startbtn = document.querySelector('#startbtn');
startbtn.addEventListener('click', () => {
    if (run == false) {
        run = true;
    } else if (run == true) {
        run = false;
    }
    if (run==true) {
        cellUpdate();
    }
})

//run to create the grid
function gridCreation() {
    let j = 0;
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
            row.id=(j);
            lifeArray.push(0);
            placeHolder.push(0);

            //makes tiles clickable
            row.addEventListener('click', function(){
                //changes color of tile
                row.style.backgroundColor = 'black';

                //changes tile state and updates array
                var theClass = $(this).attr('class');
                cellNumber = (theClass.split(" ").pop());
                lifeArray[cellNumber]=1;

            })
            column.appendChild(row);
            j++;
        }
    }
}

//updates cells
function cellUpdate() {
    let k = 0;
    for (let i =0; i < dimension *dimension; i++) {
        if (run == true && k < dimension*dimension) {
            let count = 0;
            if (run==true){
                if (lifeArray[k-1]==1) {
                    count++;
                }
                if (lifeArray[k+1]==1) {
                    count++;
                }
                if (lifeArray[k-dimension]==1) {
                    count++;
                }
                if (lifeArray[k-dimension-1]==1) {
                    count++;
                }
                if (lifeArray[k-dimension+1]==1) {
                    count++;
                }
                if (lifeArray[k+dimension]==1) {
                    count++;
                }
                if (lifeArray[k+dimension-1]==1) {
                    count++;
                }
                if (lifeArray[k+dimension+1]==1) {
                    count++;
                }
            }
            if (lifeArray[k] == 0) {
                if (count == 3) {
                    placeHolder[k] = 1;
                }
            } else if (lifeArray[k] == 1) {
                if (count < 2) {
                    placeHolder[k] = 0;
                } else if (count == 2 || count == 3) {
                    placeHolder[k] = 1;
                } else if (count > 3) {
                    placeHolder[k] = 0;
                }
            }
            k++;
        }
    }
    changeColors();
    for (let n=0; n < dimension*dimension; n++) {
        lifeArray[n] = placeHolder[n];
    }
    if (run==true) {
        setTimeout(() => {
            cellUpdate();
        }, 1000);
    }
}

//changes background color of cells based on game rules
function changeColors() {
    for (let l=0; l < dimension*dimension; l++) {
        if (placeHolder[l] ==0) {
            var col=document.getElementById(l);
            col.style.backgroundColor = 'white';
        } else if (placeHolder[l] ==1) {
            var col=document.getElementById(l);
            col.style.backgroundColor = 'black';
        }
    }
}
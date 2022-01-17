//sets dimensions of the play area grid
let dimension = 10;
let color = document.querySelector('.color')
let j = 0;
let k=0;

let draw = false;
let run = false;

const cellsArray = [];
const lifeArray = [];
const placeHolder = [];

//button to test the function
const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
  gridCreation();
});

//button to test refreshing the cells
const tst = document.querySelector('#testrefresh');
tst.addEventListener('click', () => {
  cellUpdate();
});

//button to stop and start the game
const startbtn = document.querySelector('#startbtn');
startbtn.addEventListener('click', () => {
    k=0
    if (run == false) {
        run = true;
    } else if (run == true) {
        run = false;
    }
})

while (run==true) {
    setTimeout(function(){
        cellUpdate();
    }, 5000);
}

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
            row.id=(j);
            lifeArray.push(0);
            placeHolder.push(0);
            cellsArray.push(j);


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

function cellUpdate() {
    k=0
    for (let i =0; i < dimension *dimension; i++) {
        if (run === true && k < dimension*dimension) {
            let count = 0;
            if (lifeArray[k] == 1){
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
}

function changeColors() {
    for (let l=0; l < dimension*dimension; l++) {
        console.log(placeHolder[l])
        if (placeHolder[l] ==0) {
            console.log(l + " is dead")
            var col=document.getElementById(l);
            col.style.backgroundColor = 'white';
        } else if (placeHolder[l] ==1) {
            console.log(l + " is alive")
            var col=document.getElementById(l);
            col.style.backgroundColor = 'black';
        }
    }
}
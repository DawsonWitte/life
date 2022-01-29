//sets dimensions of grid
let dimension = 10;
//sets the color that a living tile will change to
let color = "black"

let run = false;

const lifeArray = [];
const placeHolder = [];

//button to set grid size
const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
    let userSizeInput = document.getElementById('sizeInput').value;
    dimension = parseInt(userSizeInput)
    gridDeleation();
    gridCreation();
});

//button to reset the grid
const rstbtn = document.querySelector('#rstbtn');
rstbtn.addEventListener('click', () => {
  reset();
});



//button to stop and start the game
const startbtn = document.querySelector('#startbtn');
startbtn.addEventListener('click', () => {
    if (run == false) {
        document.querySelector('#startbtn').value = 'Stop';
        run = true;
    } else if (run == true) {
        document.querySelector('#startbtn').value = 'Start';
        run = false;
    }
    if (run==true) {
        cellUpdate();
    }
})

//run to reset the grid
function reset(){
    for (let i = 0; i < dimension*dimension; i++) {
        lifeArray[i] = 0;
        placeHolder[i] = 0;
        var rstcol=document.getElementById(i);
        rstcol.style.backgroundColor = 'white';
    }
}

function gridDeleation(){
    $('.column').remove();
    $('.row').remove();
}

//run to create the grid
function gridCreation() {
    //dimension = document.getElementById("sizeInput").value; 
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
                color = document.getElementById('colorButton').value;
                row.style.backgroundColor = color;

                //changes tile state and updates array
                var theClass = $(this).attr('class');
                cellNumber = (theClass.split(" ").pop());
                lifeArray[cellNumber]=1;

            })
            column.appendChild(row);
            j++;
        }
    }
    changeColors();
}

//updates cells
function cellUpdate() {
    let k = 0;
    for (let i =0; i < dimension *dimension; i++) {
        if (run == true && k < dimension*dimension) {
            let count = 0;
            if (k%dimension != 0 && (k+1)%dimension != 0){
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
            } else if (k%dimension == 0) {
                if (lifeArray[k+1]==1) {
                    count++;
                }
                if (lifeArray[k-dimension]==1) {
                    count++;
                }
                if (lifeArray[k-dimension+1]==1) {
                    count++;
                }
                if (lifeArray[k+dimension]==1) {
                    count++;
                }
                if (lifeArray[k+dimension+1]==1) {
                    count++;
                }
            } else if ((k+1)%dimension == 0) {
                if (lifeArray[k-1]==1) {
                    count++;
                }
                if (lifeArray[k-dimension]==1) {
                    count++;
                }
                if (lifeArray[k-dimension-1]==1) {
                    count++;
                }
                if (lifeArray[k+dimension]==1) {
                    count++;
                }
                if (lifeArray[k+dimension-1]==1) {
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
    color = document.getElementById('colorButton').value;
    for (let l=0; l < dimension*dimension; l++) {
        if (placeHolder[l] ==0) {
            var col=document.getElementById(l);
            col.style.backgroundColor = 'white';
        } else if (placeHolder[l] ==1) {
            var col=document.getElementById(l);
            col.style.backgroundColor = color;
        }
    }
}

gridCreation();
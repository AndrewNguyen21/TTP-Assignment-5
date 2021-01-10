//initial grid
let amountRow = 1;
let amountCol = 1;

//Adding functionality to starting cell
let startCell = document.getElementsByTagName("td");
let startCellList = [...startCell];

for (let i = 0; i < startCellList.length; i++) {
  gridInteraction(startCellList[i]);
}

//function to add  row
function addRow() {
  //selects the grid
  let mainGrid = document.getElementById("mainGrid");
  //creates new row
  let newRow = document.createElement("tr");

  //fill new row with cells
  for (let i = 0; i < amountCol; i++) {
    let cell = document.createElement("td");

    //adding event handler new rows
    gridInteraction(cell);

    newRow.appendChild(cell);
  }
  mainGrid.appendChild(newRow);
  amountRow++;
}

//function to add column
function addCol() {
  //selects the grid
  let mainGrid = document.getElementById("mainGrid");

  //add a cell to each row, which creates a new column
  let row = document.querySelectorAll("tr");
  row.forEach((element) => {
    //creates new cell
    let cell = document.createElement("td");

    // adding event handler to new cols
    gridInteraction(cell);
    element.appendChild(cell);
  });

  amountCol++;
}

//function to remove row
function removeRow() {
  //selects the grid
  let mainGrid = document.getElementById("mainGrid");

  //remove row
  mainGrid.deleteRow(amountRow - 1);

  //decrement row count
  amountRow--;
}

//function to remove column
function removeCol() {
  //selects the grid
  let mainGrid = document.getElementById("mainGrid");

  //delete a cell from each row, which deletes column
  let row = document.querySelectorAll("tr");
  row.forEach((element) => {
    element.removeChild(element.lastChild);
  });

  amountCol--;
}

let currentColor = document.getElementById("color").value;

//Setting background of grid
function settingColor() {
  this.style.backgroundColor = CurrentColor;
  this.classList.remove("no-color");
}

//Updating color option when user changes it
function setColor(color) {
  CurrentColor = color;
}

function gridInteraction(cell) {
  //change color after click
  cell.addEventListener("click", settingColor);

  //if not color selected add no-color class by default
  cell.classList.add("no-color");
}

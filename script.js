//initial grid
let amountRow = 1;
let amountCol = 2;

function addRow() {
  //selects the grid
  let mainGrid = document.getElementById("mainGrid");
  //creates new row
  let newRow = document.createElement("tr");

  //fill new row with cells
  for (let i = 0; i < amountCol; i++) {
    let cell = document.createElement("td");
    newRow.appendChild(cell);
  }

  mainGrid.appendChild(newRow);
  amountRow++;
}

function addCol() {
  //selects the grid
  let mainGrid = document.getElementById("mainGrid");

  //add a cell to each row, which creates a new column
  let row = document.querySelectorAll("tr");
  row.forEach((element) => {
    //creates new cell
    let cell = document.createElement("td");

    element.appendChild(cell);
  });

  amountCol++;
}

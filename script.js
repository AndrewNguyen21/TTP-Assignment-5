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

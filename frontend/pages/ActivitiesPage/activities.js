// Variables
const tableBodyDOM = document.querySelector(".activities__body");

// Buttons
const addActivityBtn = document.querySelector(".main__action");

// Add activity to the DOM
addActivityBtn.addEventListener("click", (e) => {
  fetch("https://www.boredapi.com/api/activity", {
    method: "GET",
    headers: {
      accept: "application/json",
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let { activity, type, participants } = data;

      let tableRow = document.createElement("tr");
      tableRow.classList.add("activities__row");

      let tableDataCell1 = document.createElement("td");
      let tableDataCell2 = document.createElement("td");
      let tableDataCell3 = document.createElement("td");

      tableDataCell1.classList.add("activities__datacell");
      tableDataCell1.textContent = activity;
      tableDataCell2.classList.add("activities__datacell");
      tableDataCell2.textContent = type;
      tableDataCell3.classList.add("activities__datacell");
      tableDataCell3.textContent = participants;

      tableRow.appendChild(tableDataCell1);
      tableRow.appendChild(tableDataCell2);
      tableRow.appendChild(tableDataCell3);

      tableBodyDOM.appendChild(tableRow);
    })
    .catch((error) => {
      console.error(error);
    });
});

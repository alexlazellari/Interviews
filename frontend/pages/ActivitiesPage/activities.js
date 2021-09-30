// Variables
const tableBodyDOM = document.querySelector(".activities__body");

// Buttons
const addActivityBtn = document.querySelector(".main__action");

// Set up activity table
(async function addThree() {
  for (let i = 0; i <= 2; i++) {
    let response = await fetch("https://www.boredapi.com/api/activity", {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    });
    let data = await response.json();
    addActivity(data);
  }
})();

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
      addActivity(data);
    })
    .catch((error) => {
      console.error(error);
    });
});

// Add an activity to the table
function addActivity(data) {
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
}

//This is a test
// (function suggestion() {
//   let data = {
//     activity: "create a website",
//     type: "education",
//     participants: 3,
//   };
//   console.log(JSON.stringify(data));
//   fetch("https://www.boredapi.com/api/suggestion", {
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//     },
//     method: "POST",
//     body: JSON.stringify(data),
//   })
//     .then((response) => {
//       console.log(response);
//       return response.json();
//     })
//     .then((data) => console.log(data));
// })();

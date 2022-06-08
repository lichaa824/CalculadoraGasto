let people = [];

const nameForm = document.getElementById("name");
const submitButton = document.getElementById("submit-btn");
const amountForm = document.getElementById("amount");

submitButton.addEventListener("click", (event) => {
  event.preventDefault();

  if (
    typeof nameForm.value === "string" &&
    typeof parseInt(amountForm.value) === "number" &&
    nameForm.value != "" &&
    amountForm.value != ""
  ) {
    people.push({ name: nameForm.value, amount: amountForm.value });
    visualizeData();
    visualizeAmountEach();
    nameForm.value = "";
    amountForm.value = "";
  }
});

function visualizeData() {
  const gridElem = document.getElementById("gridData");
  gridElem.textContent = "";
  for (x in people) {
    let newElem = document.createElement("div");
    newElem.className = "col-12 border-bottom";
    newElem.innerText = `${people[x].name} Cantidad: ${people[x].amount}`;
    gridElem.appendChild(newElem);
  }
}

function visualizeAmountEach() {
  let totalAmount = 0;
  for (x in people) {
    totalAmount += parseInt(people[x].amount);
  }
  let amountEach = totalAmount / people.length;
  const total = document.getElementById("total");
  const each = document.getElementById("each");
  each.innerText = `Cada uno debe aportar: ${amountEach}`;
  total.innerText = `Total: ${totalAmount}`;
}

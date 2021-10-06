const validateForm = () => {
  const Form = document.forms["form"];

  const form = {
    error: {
      username: (m) => {
        document.getElementById("e-name").innerText = m;
      },
      password: (m) => {
        document.getElementById("e-psswd").innerText = m;
      },
    },
    username: Form["name"].value,
    password: Form["psswd"].value,
  };
  return validateData(form);
};
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const colorOption = document.getElementById("color");

const colors = ["red", "orange", "yellow", "green", "blue", "purple"];

const randomColor = () => {
  return colors[randomInt(0, 5)];
};

const insertRow = (data) => {
  const table = document.getElementById("table");
  const length = table.rows;
  const row = table.insertRow(length);

  const firstCell = row.insertCell(0);
  const firstElement = document.createElement("p");
  firstElement.innerText = data.firstName;
  firstCell.appendChild(firstElement);

  const lastCell = row.insertCell(1);
  const lastElement = document.createElement("p");
  lastElement.innerText = data.lastName;
  lastCell.appendChild(lastElement);

  const emailCell = row.insertCell(2);
  const emailElement = document.createElement("p");
  emailElement.innerText = data.email;
  emailCell.appendChild(emailElement);
};

if (home) {
  fetch(`https://fakerapi.it/api/v1/persons`)
    .then((res) => res.json())
    .then((e) => {
      fillTable(e.data);
    });
}

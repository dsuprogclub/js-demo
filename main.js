function validateData(form) {
  let valid = true;
  if (form.username.length < 1) {
    valid = false;
    form.error.username("no username");
  } else {
    form.error.username("");
  }

  if (form.password.length < 1) {
    valid = false;
    form.error.password("no password");
  } else {
    form.error.password("");
  }

  return valid;
}

function randomInt(min = 0, max = 100) {
  const num = Math.random() * (1 + max - min) + min;
  return Math.floor(num);
}

function drawRect() {
  if (color.value.length < 1) {
    ctx.fillStyle = colors[randomInt(0, 5)];
  } else {
    ctx.fillStyle = color.value;
  }
  const length = randomInt(20);
  const width = randomInt(20);
  const x = randomInt(0, 500);
  const y = randomInt(0, 500);
  ctx.fillRect(x, y, width, length);
}

function fillTable(data) {
  const sortedData = data.sort(function (a, b) {
    if (a.lastname < b.lastname) {
      return 1;
    } else if (a.lastname > b.lastname) {
      return -1;
    } else {
      return 0;
    }
  });

  sortedData.forEach(function (e) {
    const row = {
      firstName: e.firstname,
      lastName: e.lastname,
      email: e.email,
    };
    insertRow(row);
  });
}

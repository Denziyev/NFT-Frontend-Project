const createInputs = document.querySelectorAll(".inputs div input");
const inputcheck1 = document.querySelector(".inputcheck1");
const inputcheck2 = document.querySelector(".inputcheck2");
const inputcheck3 = document.querySelector(".inputcheck3");
const inputcheck4 = document.querySelector(".inputcheck4");
const inputcheck5 = document.querySelector(".inputcheck5");
const inputsandbutton = document.querySelector(".inputsandbutton");


createInputs[0].addEventListener("keyup", () => {
  if (!createInputs[0].value.trim()) {
    inputcheck1.style.borderColor="red";
  } else {
    inputcheck1.style.borderColor="green";
  }
});

createInputs[1].addEventListener("keyup", () => {
  if (!ValidateEmail(createInputs[1].value.trim())) {
    inputcheck2.style.borderColor="red";
  } else {
    inputcheck2.style.borderColor="green";
  }
});


createInputs[2].addEventListener("keyup", () => {

  if (!ValidatePassword(createInputs[2].value.trim())) {
    inputcheck3.style.borderColor="red";
  } else {
        inputcheck3.style.borderColor="green";
  }
});


createInputs[3].addEventListener("keyup", () => {
  if (createInputs[2].value.trim() != createInputs[3].value.trim()) {
    inputcheck4.style.borderColor="red";
  } else {
    inputcheck4.style.borderColor="green";
  }
});


inputcheck5.addEventListener("click", () => {
  const newwtoast = document.createElement("div");
  const newwp = document.createElement("p");
  newwtoast.style.width = "250px";
  newwtoast.style.height = "60px";
  newwp.style.color = "white";
  newwp.style.fontSize = "16px";
  newwtoast.style.display = "flex";
  newwtoast.style.justifyContent = "center";
  newwtoast.style.alignItems = "center";
  newwtoast.style.position = "fixed";
  document.body.style.position = "relative";
  newwtoast.style.left = "75vw";
  newwtoast.style.bottom = "85vh";

  if ((createInputs[2].value.trim() == createInputs[3].value.trim())&&(ValidatePassword(createInputs[2].value.trim()))&&(ValidateEmail(createInputs[1].value.trim()))&&(!!createInputs[0].value.trim())) {
    newwtoast.style.backgroundColor = "green";
    newwp.textContent = "Success";
  } 
  else {
    newwtoast.style.backgroundColor = "red";
    newwp.textContent = "Error";
  }

  newwtoast.append(newwp);
  inputsandbutton.append(newwtoast);

  setTimeout(() => {
    newwtoast.remove();
  }, 3000);
});

function ValidateEmail(mail) {
  if (/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/.test(mail)) {
    return true;
  }
  return false;
}

function ValidatePassword(password) {
  if (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/.test(password)) {
    return true;
  }
  return false;
}
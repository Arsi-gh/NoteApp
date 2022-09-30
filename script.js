let $ = document;
const colors = $.querySelectorAll(".color-picker");
const noteContainer = $.querySelector("section");
const addBtn = $.querySelector(".add");
const eraseInput = $.querySelector(".erase-input");
const noteInput = $.querySelector(".note-input");

addBtn.addEventListener("click", addBtnNote);
document.body.addEventListener("keydown", addEnterNote);
eraseInput.addEventListener("click", clearInput);
colors.forEach(function (colorBox) {
  colorBox.addEventListener("click", function (event) {
    let bgColorElem = event.target.style.backgroundColor;
    noteInput.style.backgroundColor = bgColorElem;
  });
});

function generateNewNote() {
  let newDiv = $.createElement("div");
  let newP = $.createElement("p");
  newP.innerHTML = noteInput.value;
  newDiv.append(newP);
  newDiv.classList = "note";
  newDiv.style.backgroundColor = noteInput.style.backgroundColor;
  noteContainer.appendChild(newDiv);
  noteInput.value = "";
  noteInput.style.backgroundColor = "#ffff";
  newDiv.addEventListener("click", removeDiv);
  function removeDiv() {
    newDiv.remove();
  }
}

function clearInput() {
  noteInput.value = "";
}

function addEnterNote(event) {
  if (event.keyCode === 13 && noteInput.value !== "") {
    generateNewNote();
  }
}

function addBtnNote() {
  if (noteInput.value !== "") {
    generateNewNote();
  }
}

const createTodo = () => {
  let row = table.insertRow();
  row.id = "row".concat(removeIds);
  let titulo = row.insertCell();
  let descripcion = row.insertCell();
  let remove = row.insertCell();
  let checkbox = row.insertCell();
  let buttonCreation = "<button class='remove' id='";
  remove.innerHTML = buttonCreation.concat(removeIds, "'>remove</button>");
  checkbox.innerHTML = '<input type="checkbox" />';
  descripcion.innerHTML = descInput.value;
  titulo.innerHTML = titleInput.value;
  let button = [];
  button[removeIds] = document.getElementById(removeIds);
  button[removeIds].addEventListener("click", () => {
    let parent = document.getElementById("row".concat(removeIds - 1));
    parent.remove();
  });

  removeIds += 1;
};

const titleInput = document.getElementById("titleInput");
const descInput = document.getElementById("descInput");
const table = document.getElementById("table");
const add = document.getElementById("add");
const remove = document.getElementById("0");
let removeIds = 0;

add.addEventListener("click", () => {
  if (titleInput.value != "" && descInput.value != "") {
    createTodo();
    document.getElementById("advise").classList.add("hidden");
    return;
  }

  document.getElementById("advise").classList.remove("hidden");
});

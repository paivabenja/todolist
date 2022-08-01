const removeTodo = (id) => {
  let btn = document.getElementById("btn".concat(id));
  btn.addEventListener("click", () => {
    document.getElementById("row".concat(id)).remove();
  });
};

const createTodo = () => {
  let row = table.insertRow();
  row.id = "row".concat(removeIds);
  let titulo = row.insertCell();
  let descripcion = row.insertCell();
  let remove = row.insertCell();
  let checkbox = row.insertCell();
  let buttonCreation = "<button class='remove' id='";
  remove.innerHTML = buttonCreation.concat(
    "btn",
    removeIds,
    "'>remove</button>"
  );
  checkbox.innerHTML = '<input type="checkbox" />';
  descripcion.innerHTML = descInput.value;
  titulo.innerHTML = titleInput.value;
  removeTodo(removeIds);

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

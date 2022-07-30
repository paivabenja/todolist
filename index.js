const createTodo = () => {
  let row = table.insertRow();
  let titulo = row.insertCell();
  let descripcion = row.insertCell();
  let remove = row.insertCell();
  let checkbox = row.insertCell();
  remove.innerHTML = concat(
    "<button class='remove' id='",
    removeIds,
    "'>remove</button>"
  );
  checkbox.innerHTML = '<input type="checkbox" />';
  descripcion.innerHTML = descInput.value;
  titulo.innerHTML = titleInput.value;
};

const titleInput = document.getElementById("titleInput");
const descInput = document.getElementById("descInput");
const table = document.getElementById("table");
const add = document.getElementById("add");
const remove = document.getElementsByClassName("remove");
const removeIds = 0;

add.addEventListener("click", () => {
  if (titleInput.value != "" && descInput.value != "") {
    createTodo();
    document.getElementById("advise").classList.add("hidden");
    return;
  }

  document.getElementById("advise").classList.remove("hidden");
});

remove.addEventListener("click", () => {
  return;
});

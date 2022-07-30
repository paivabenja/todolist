const createTodo = () => {
  let row = document.createElement("tr");
  row.appendChild(
    document
      .createElement("td")
      .appendChild(
        document
          .createElement("p")
          .appendChild(document.createTextNode("example"))
      )
  );
  table.appendChild(row);
};

const title = document.getElementById("title");
const titleInput = document.getElementById("tableInput");
const table = document.getElementById("table");
const add = document.getElementById("add");

add.addEventListener("click", () => {
  createTodo();
});

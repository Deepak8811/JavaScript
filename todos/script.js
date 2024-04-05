let todoList = [
  {
    item: 'javaScript',
    dueDate: "31/03/2024"
  },
  {
    item: 'mongoDB',
    dueDate: "31/03/2024"
  }
];

displayItems();

function addItem() {
  let input = document.querySelector('#todo-input');
  let date = document.querySelector('#todo-date');
  let inputElement = input.value;
  let dateElement = date.value;
  if (inputElement !== "" && dateElement !== "") {
    todoList.push({
      item: inputElement,
      dueDate: dateElement
    });
    displayItems();
  }

  input.value = '';
  date.value = '';

}

function displayItems() {
  let containerElement = document.querySelector(".todo-container");
  let newHtml = '';
  for (let i = 0; i < todoList.length; i++) {
    let item = todoList[i].item;
    let duedate = todoList[i].dueDate;
    newHtml += `

          <span>${item}</span>
          <span>${duedate}</span>
          <button class="btn-delete" onclick="removeItem()">Delete</button>
               
  `;
  }
  containerElement.innerHTML = newHtml;
}
function removeItem() {
  var buttonClicked = event.target;
  var taskToRemove = buttonClicked.parentNode.firstChild.textContent;
  var indexToRemove = [].filter.call(todoList, function (task) { return task == taskToRemove })[0];
  todoList.splice(todoList.indexOf(indexToRemove), 1);
  displayItems();
}
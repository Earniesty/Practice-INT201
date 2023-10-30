class Todo {
  constructor(id, description) {
    this.id = id;
    this.description = description;
  }

  getTodo() {
    return { id: this.id, description: this.description };
  }

  setDescription(newDescription) {
    this.description = newDescription;
  }
}

function todos() {
  let todos = [];
  let currentId = 1;

  function addTodo(desc) {
    let todo = new Todo(currentId++, desc)
    return todos.push(todo)
  }

  function findTodo(searchId) {
    return todos.find((todo) => todo.id = searchId )
  }

  function findIndexTodo(searchId) {
    return todos.findIndex((todo) => todo.id === searchId)
  }

  function removeTodo(removeId) {
    const indexRemove = findIndexTodo(removeId);
    if(indexRemove !== -1) {
        todos.splice(indexRemove, 1)
    }
  }
  function getTodo() {
    return todos;
  }

  return {addTodo, findTodo, findIndexTodo, removeTodo, getTodo}
}

const tdm = todos()
console.log(tdm.addTodo("reading"));
console.log(tdm.addTodo("sleeping"));
console.log(tdm.getTodo());

console.log(tdm.findTodo(1));
console.log(tdm.findIndexTodo(2));
console.log(tdm.removeTodo(2));
console.log(tdm.getTodo());
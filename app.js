var list = document.getElementById('list');
var noTodos = document.getElementById('no-todos');

console.log(list.childElementCount);

if (list.childElementCount <= 1) {
    noTodos.style.display = 'inline-block';
}

function addTodo() {
    var input = document.querySelector('input');
    var newTodo = input.value;

    if (newTodo.length > 0) {
        var listItem = document.createElement('li');
        
        listItem.innerHTML = `
        <span>${newTodo}</span>
        <button onclick="deleteTodo(this)">&times;</button>
        `;
        
        list.appendChild(listItem);

        input.value = "";

        noTodos.style.display = "none";
    }
}

function deleteTodo(el) {
    var listItem = el.parentElement;
    list.removeChild(listItem);

    if (list.childElementCount <= 1) {
        noTodos.style.display = 'inline-block';
    }
}

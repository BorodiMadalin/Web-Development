var todos = [];

var input=prompt("What would you like to do?")

while (input !== "quit") {
// handdle input
if(input === "list") {
    console.log("****************")
    todos.forEach(function(todo) {
        alert(todos);
    });
    } else if(input === "new") {
// ask for a new todo
var newTodo = prompt("Enter a new Todo");
// add to todos array
todos.push(newTodo);
console.log("Added Todo");
} else if (input === "delete" ) {
var index = prompt("Enter index of todo to delete");
//delete that todo
//splice()
todos.splice(index,1);
console.log("deleted Todo");
}
// ask again for a new input
input = prompt("What would you like to do?")
}
console.log("Ok, you quit the app!");
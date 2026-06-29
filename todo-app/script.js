document.getElementById("add-todo").addEventListener("click", function() {
    let task = document.getElementById("new-todo").value;
    if(task){
        let li = document.createElement("li");
        li.textContent = task;
        let deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        document.getElementById("todo-list").appendChild(li);
        li.appendChild(deleteButton);
        deleteButton.addEventListener("click", function() {
            li.remove();
        });
        document.getElementById("new-todo").value= "";
    }
});
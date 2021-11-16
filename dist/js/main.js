const dropItems = document.getElementById('drop-items');
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const correctB = document.getElementById("correct-button")

const btn = document.getElementById("correctButton");


todoButton.addEventListener("click", addToDo)
dropItems.addEventListener("click", deleteCheck)
dropItems.addEventListener("click", checkCorrect)

new Sortable(dropItems, {
    animation: 350,
    chosenClass: "sortable-chosen"
})




var todoListItems = [];


if (localStorage.getItem("todoList")) {
    todoListItems = JSON.parse(localStorage.getItem("todoList"));
};



function addToDo(event) {

    event.preventDefault();


  
    var todoItem = {
        title: todoInput.value,
        date: new Date().toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'}), 
        status: ''
    }

    todoListItems.push(todoItem)
    localStorage.setItem("todoList", JSON.stringify(todoListItems));
    


    const todoContainer = document.createElement("div");
    todoContainer.setAttribute("id", "todoContainer"); //
    todoContainer.style.cssText = 'align-items: center;'
    todoContainer.classList.add('d-flex', 'mt-3');
   

    const grabButton = document.createElement("button");
    grabButton.setAttribute("id", "grabButton")
    grabButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="#6C6C6C" class="bi bi-grip-vertical" viewBox="0 0 16 16"> <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/> </svg>'
    grabButton.classList.add("btn", "btn-default", "grab-button", "shadow-none");
    todoContainer.appendChild(grabButton);

    

    const newToDo = document.createElement("li");
    newToDo.setAttribute("id", "newTodo")
    newToDo.style.cssText = 'background-color: #FF9090;'
    newToDo.classList.add("nav-item", "uncompleted-task-item");

    todoContainer.appendChild(newToDo);

    const todoText = document.createElement("paragraph");
    todoText.setAttribute("id", "to-do-item-text")
    if (todoInput.value === "") {
        return null;
    }
    todoText.innerHTML = todoItem.title;
    todoText.classList.add("to-do-item-text", "m-2");
    newToDo.appendChild(todoText);


    // Check icons 
    const checkContainer = document.createElement("div");
    checkContainer.classList.add("checkButtons");
    newToDo.appendChild(checkContainer);

    const taskDate = document.createElement("paragraph")
    taskDate.innerHTML = todoItem.date;
    taskDate.classList.add("date");
    checkContainer.appendChild(taskDate)


    const correctButton = document.createElement("button");
    correctButton.setAttribute("id", "correct-button");
    correctButton.classList.add("correct", "btn", "btn-default", "shadow-none");
    checkContainer.appendChild(correctButton);


    const checkCorrect = document.createElement("img");
    checkCorrect.src = "dist/images/Correct.png";
    checkCorrect.width= "26";
    checkCorrect.height= "26";
    checkCorrect.style.cssText ='pointer-events: none;';
    correctButton.appendChild(checkCorrect);


    const wrongButton = document.createElement("button");
    wrongButton.classList.add("trash-btn", "btn", "btn-default", "shadow-none");
    checkContainer.appendChild(wrongButton);

    const checkWrong = document.createElement("img");
    checkWrong.src = "dist/images/Wrong.png";
    checkWrong.width= "22";
    checkWrong.height= "22";
    checkWrong.style.cssText ='pointer-events: none;';
    wrongButton.appendChild(checkWrong);



    todoInput.value = "";
    dropItems.appendChild(todoContainer);

}





dropItems.innerHTML = todoListItems.map(t => 

    `<div style="align-items: center;" id='todoContainer' class="d-flex mt-3">
            <button class="btn btn-default shadow-none grab-button"> <svg xmlns='http://www.w3.org/2000/svg' width='26' height='26' fill='#6C6C6C' class='bi bi-grip-vertical' viewBox='0 0 16 16'> <path d='M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z'/> </svg>
            </button>
    
            <li class='nav-item uncompleted-task-item'>
                <p class='to-do-item-text m-2'>
                    ${t.title}
                    </p>
                <div class='checkButtons d-flex'>
                <p class="date">${t.date}</p>
                <button class='correct btn btn-default shadow-none'><img style="pointer-events: none" width="26" height="26" src = "dist/images/correct.png"> </button>
                <button class='trash-btn btn btn-default shadow-none'><img style="pointer-events: none" width="22" height="22" src = "dist/images/Wrong.png"> </button>
            </li>
    
        </div>`
        
    ).join('')
    




function deleteCheck(e) {
    const task = e.target;
    // since we had to create additional containers through the design phase, we have to delete the main parent element.
    const taskParent = task.parentElement.parentElement.parentElement


    if(task.classList[0] === "trash-btn") { 
        taskParent.remove();

        // in order to remove the task from the local storage, we will use .splice method and then update our localStorage
        todoListItems.splice(task, 1);
        localStorage.setItem("todoList", JSON.stringify(todoListItems));
        
    }
}



function checkCorrect(e) {
    const task = e.target;
    const checkCorrectIcon = task.parentElement.parentElement;
    
    if(task.classList[0] === "correct"){
        checkCorrectIcon.style.cssText ='background-color: #A0FF90;';
        task.remove();
    }
}




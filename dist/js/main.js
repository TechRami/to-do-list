const dropItems = document.getElementById('drop-items');
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");

const btn = document.getElementById("correctButton");


todoButton.addEventListener("click", addToDo)
dropItems.addEventListener("click", deleteCheck)
dropItems.addEventListener("click", checkCorrect)

new Sortable(dropItems, {
    animation: 350,
    chosenClass: "sortable-chosen"
})


function addToDo(event) {

    event.preventDefault();

    console.log(event)
  

    const todoContainer = document.createElement("div");
    todoContainer.style.cssText = 'align-items: center;'
    todoContainer.classList.add('d-flex', 'mt-3');
   

    const grabButton = document.createElement("button");
    grabButton.innerHTML = ' <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="#6C6C6C" class="bi bi-grip-vertical" viewBox="0 0 16 16"> <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/> </svg>'
    grabButton.classList.add("btn", "btn-default", "grab-button", "shadow-none");
    todoContainer.appendChild(grabButton);

    

    const newToDo = document.createElement("li");
    newToDo.style.cssText = 'background-color: #FF9090;'
    newToDo.classList.add("nav-item", "uncompleted-task-item");

    todoContainer.appendChild(newToDo);

    const todoText = document.createElement("paragraph");
    if (todoInput.value === "") {
        return null;
    }
    todoText.innerHTML = todoInput.value;
    todoText.classList.add("to-do-item-text", "m-2");
    newToDo.appendChild(todoText);


    // Check icons 
    const checkContainer = document.createElement("div");
    checkContainer.classList.add("checkButtons");
    newToDo.appendChild(checkContainer);

    const correctButton = document.createElement("button");
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

function deleteCheck(e) {
    const item = e.target;
    // since we had to create additional containers through the design phase, we have to delete the main parent element.
    const itemParent = item.parentElement.parentElement.parentElement

    if(item.classList[0] === "trash-btn") { 
        itemParent.remove();
    }
}



function checkCorrect(e) {
    const item2 = e.target;
    const cont = item2.parentElement.parentElement;

    if(item2.classList[0] === "correct"){
        cont.style.cssText ='background-color: #A0FF90;';
    }
}
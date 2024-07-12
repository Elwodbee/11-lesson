const todoForm = document.querySelector(".form");
const todoInput = document.querySelector(".input");
const todoList = document.querySelector(".list");
const darkMode = document.querySelector(".btn__darkmode");

todoForm.addEventListener("submit", (evt) => {
    evt.preventDefault();
    
    const newItem = document.createElement("li");
    const userName = document.createElement("span");
    const checkbox = document.createElement("input");
    const editBtn = document.createElement("button");
    const deleteBtn = document.createElement("button");
    
    checkbox.type = "checkbox";
    editBtn.textContent = "Edit";
    deleteBtn.textContent = "Delete";
    
    deleteBtn.className = "delete";
    editBtn.className = "edit";
    
    userName.textContent = todoInput.value;
    
    const wrapper = document.createElement("div");
    wrapper.append(deleteBtn, editBtn)
    
    newItem.className = "item"
    
    newItem.append(checkbox, userName, editBtn, deleteBtn);
    
    todoList.appendChild(newItem);
    deleteBtn.addEventListener("click", () => {
        todoList.removeChild(newItem)
    })
    
    checkbox.addEventListener("change" , () =>{
        if(checkbox.checked){
            userName.style.textDecoration = "line-through"
        }else {
            userName.style.textDecoration = "none"
        }
    })
    
    editBtn.addEventListener("click", () => {
        let change = prompt(`${todoInput} Edit your text`);
        userName.textContent = change;
    })
    todoInput.value = "";})

    darkMode.addEventListener("click" , () =>{
        if(document.body.classList.toggle("dark")){
            darkMode.textContent = "Light ";
        }else{
            darkMode.textContent = "Dark";
        }
    })
import { checkTodo, deleteTodo } from "./script.js";



export const checkAndDeleteElements = ()=>{

    const todosListElement = document.getElementById("todos-list");

    todosListElement.addEventListener("click", (event) => {

    const target = event.target;
    //console.log(target);

    const parentElement = target.parentNode;

    //console.log(parentElement);
    if (parentElement.className !== "todo") return;

    //todo id
    const todoID = Number(parentElement.id);

    //console.log(todoID);

    //target action
    const action = target.dataset.action; //check vagy delete

    action === "check" && checkTodo(todoID);
    action === "delete" && deleteTodo(todoID);

    //console.log('parentElement',parentElement);
    //console.log('todoID', todoID, 'action', action);
    //console.log('--------------------------------')
  });
}
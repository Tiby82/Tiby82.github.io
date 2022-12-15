import { calculateRandomColor } from "./calculator.js";
import { todos } from "./script.js";
import { showNotification } from "./warnings.js";


export const saveTodo = () => {
    const todoInput = document.getElementById("newtodo");
    const todoValue = todoInput.value;
    
    //const todoValue = document.getElementById("newtodo").value; 
    
    //console.log(todoInput); //<input type="text" name="newtodo" id="newtodo" placeholder="e.g. learn JS">
    //console.log(todoValue); //learn JS
    
    const priorityInput = document.getElementById('priority');
    const priority = Number(document.getElementById('priority').value);
    
    const isEmpty = todoValue === "";

  
    if (isEmpty) {
      showNotification('Input is empty!');
    }else {
            const todo = {
                title: todoValue, //get milk
                checked: false,
                priorityValue: priority, //3
                color: calculateRandomColor()
              };
        todos.push(todo);
    
        todoInput.value = "";
        priorityInput.value = "";
    
    //console.log(todos)
      // todoValue= ''; ERROR!!!!!!! A változó konstans, ezért nem kaphat új értéket!
      //document.getElementById("newtodo").value= ''; CORRECT!!!!! A benne levő értéket viszont meg lehet változtatni.
      }
    };
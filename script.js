import { checkAndDeleteElements} from "./actions.js";
import { calculateAsc, calculateDecr, calculateMax, calculateMin, calculateProgress, calculateRandomColor} from "./calculator.js";
import { renderTodos } from "./renderTodos.js";
import { saveTodo } from "./saveTodo.js";
import { setTheme } from "./setThemes.js";
import { showNotification } from "./warnings.js";



export const initTodos =() => {
    submitBtn();
    orderBtns();
    checkAndDeleteElements();
    checkTodo();
    deleteTodo();
    updateTodos();
    setTheme(mode);
};

  //update progress
  const updateProgress = ()=>{
    document.querySelector('#progress').textContent = `${Math.round(calculateProgress(todos) * 100)}%`
  }

  //submit event
  const submitBtn = ()=>{
   document
  .getElementById("todoform")
  .addEventListener("submit", (event)=> {
  event.preventDefault(); //prevent from refresh page

    saveTodo();
    updateTodos();
  });
}

export let todos=[];
 
  //check a todo : index = todoID
 export const checkTodo = (todoID) => {
    todos = todos.map((todo, index) => ({
      ...todo, //old todo properties (key:value)
      checked: index === todoID ? !todo.checked : todo.checked, //override the old checked property
    }));    
    console.log('check',todoID); 
    console.log('--------------');    //true              //false        //false
updateTodos();
  }

   //delete a todo
 export const deleteTodo = (todoID)=>{        
todos = todos.filter((todo, index) => index !== todoID);

console.log('delete',todoID);

/*
const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
// At position 2, remove 2 items: 
fruits.splice(2, 2);
Banana,Orange,Kiwi
*/

//re-render
updateTodos();

  }

//order buttons
const orderBtns = () => {
  document.querySelector('#order-asc').addEventListener('click', () => {
    calculateAsc(todos);
    updateTodos();
  });

  document.querySelector('#order-decr').addEventListener('click', () => {
      calculateDecr(todos);
      updateTodos();
     
  });
}

let minPriority;
let maxPriority;
//max priority
const findFirstPriority = ()=>{
  minPriority = calculateMin(todos);
  document.querySelector('#max-priority').textContent = minPriority;
};

const findMostImportantTodo =()=>{
document.querySelector('#important-todo').textContent = todos.find(t => t.priorityValue === minPriority).title;
};

const findLastPriority = ()=>{
  maxPriority = calculateMax(todos);
  document.querySelector('#min-priority').textContent = maxPriority;
};

const findLastTodo =()=>{
document.querySelector('#less-important-todo').textContent = todos.find(t => t.priorityValue === maxPriority).title;
};

let themeDots = document.getElementsByClassName('theme-dot');

for (let i = 0; themeDots.length > i; i++){
  themeDots[i].addEventListener('click', (e)=>{
      let mode = e.target.dataset.mode;
      setTheme(mode);
  });
};

const updateTodos=()=>{
  renderTodos();
  updateProgress();
  findFirstPriority();
  findMostImportantTodo();
  findLastPriority();
  findLastTodo();
}




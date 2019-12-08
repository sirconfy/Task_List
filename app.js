//UI variables
//const form = document.querySelector('#form-task');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-task');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');
const btn = document.querySelector('.btn');


//load all eventListeners

  btn.addEventListener('click', addTask);
  taskList.addEventListener('click', removeTask);
  clearBtn.addEventListener('click', clearTask);

function addTask(e){
  
  e.preventDefault();

  if(taskInput.value == ""){
    alert('input an item');
  }
//creating the li element
const li = document.createElement('li')
li.className ='collection-item';
li.appendChild(document.createTextNode(taskInput.value));
//adding item link

 const link = document.createElement('a');
 link.className = 'delete-item secondary-content';

 //add icon
 link.innerHTML = '<i class ="fa fa-remove"></i>';
 //appending the link to ul

 li.appendChild(link);


taskList.appendChild(li);


//to remove inputValue
taskInput.value = '';

}


// to remove the task item


function removeTask(e){
  if(e.target.parentElement.classList.contains('delete-item')){
  if(confirm('Do you want to delete?')){
    e.target.parentElement.parentElement.remove();
  }
  }
}

//for clearing of tasks

function clearTask(){
  taskList.innerHTML ='';

}
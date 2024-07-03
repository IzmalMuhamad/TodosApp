const tasks = [];

function addTask(){
  const task = prompt("Enter a new task: ");

  //extra: to check if there is an existing task.
  for(const eachTask of tasks){
    if(task.toLowerCase() == eachTask.toLowerCase()){
      tasks.splice(eachTask,1); //remove the existing task.
      //it will be added back.
    }
  }
  
  tasks.push(task);
  alert('Task added!');
}

function viewTask(){
  let taskList = 'Tasks :\n';
  for(const eachTask of tasks){
    taskList += `- ${eachTask}\n`;
  }

  alert(taskList);
}
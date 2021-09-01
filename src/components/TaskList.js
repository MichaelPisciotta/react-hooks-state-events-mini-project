import React from "react";
import Task from "./Task"

function TaskList({CATEGORIES, TASKS}) {

  const newTaskList = TASKS.map(task =>  (<Task task={task} categories={task.category}/>))

  return (
    <div className="tasks">
      {newTaskList}

     
    </div>
  );
}

export default TaskList;

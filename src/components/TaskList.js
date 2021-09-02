import React from "react";
import Task from "./Task"

function TaskList({tasks}) {

  const newTaskList = tasks.map(task =>  (<Task task={task} categories={task.category}/>))

  return (
    <div className="tasks">
      {newTaskList}

     
    </div>
  );
}

export default TaskList;

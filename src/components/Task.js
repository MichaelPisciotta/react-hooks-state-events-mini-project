import React from "react";

function Task({task}) {


  // function handleDelete(id){
  //   afterDelete = newTaskList.filter(task => task !== id)
  //   setFilter(afterDelete)
  //   }

  return (
    <div className="task">
      <div className="label">{task.category}</div>
      <div className="text">{task.text}</div>
      <button className="delete" >X</button>
    </div>
  );
}

// id={task.text}  onClick={handleDelete(id)} this is for the delete button

export default Task;

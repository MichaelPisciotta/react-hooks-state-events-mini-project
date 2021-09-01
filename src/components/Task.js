import React from "react";

function Task() {
  
  const newTaskList = Tasks.map(Task => <li key={Task}>{Task}</li>)

  return (
    <div className="task">
      <div className="label">CATEGORY HERE</div>
      <div className="text">TEXT HERE</div>
      <button className="delete">X</button>
    </div>
  );
}

export default Task;

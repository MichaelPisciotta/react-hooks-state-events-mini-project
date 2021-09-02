import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {

  const [filter, setFilter] = useState("All")
  
  const [tasks, setTasks] = useState(TASKS)

  const filteredTasks = tasks.filter((task) => filter === "All" ? tasks : task.category === filter )

  function printInfo(event){
    event.preventDefault()
    console.log(event.target.value)
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter filter={filter} setFilter={setFilter} categories={CATEGORIES} />
      <NewTaskForm categories={CATEGORIES} printInfo={printInfo} />
      <TaskList categories={CATEGORIES} tasks={filteredTasks} />
    </div>
  );
}

export default App;

import React, {useState} from "react";

function NewTaskForm({printInfo}) {

const [details, setDetails] = useState("")
const [categoryChoice, setCategoryChoice] = useState("Code")




  return (
    <form className="new-task-form" onSubmit={(event) => printInfo(event)}>
      <label>
        Details
      </label>
        <input type="text" name="text" value={details} onChange={(event) => setDetails(event.target.value)} />  
      <label>
        Category
      </label>
        <select name="category" value={categoryChoice} onChange={(event) =>setCategoryChoice(event.target.value) }>
        <option value="Code">Code</option>
        <option value="Food">Food</option>
        <option value="Money">Money</option>
        <option value="Misc">Misc</option>
        </select>
      <input type="submit" value="Add task" />
    </form> 
  );
}

export default NewTaskForm;

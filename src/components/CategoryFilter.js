import React from "react";
import task from "./Task"


function CategoryFilter({CATEGORIES}) {


  function handleClick(){
    console.log("filter button clicked")
    // return CATEGORIES.filter((category) => category === task.category )
  }

  const buttonsForEachCategory = CATEGORIES.map(category => <button key={category} onClick={handleClick}>{category}</button>)


  return (
    <div className="categories">
      <h5>Category filters</h5>
      {buttonsForEachCategory}
    </div>
  );
}

export default CategoryFilter;

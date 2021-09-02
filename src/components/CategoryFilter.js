import React from "react";
import task from "./Task"


function CategoryFilter({categories, setFilter}) {


  function handleClick(category){
      setFilter(category)
   
  }

  const buttonsForEachCategory = categories.map(category => <button key={category} 
    onClick={() => {handleClick(category)} 
  }>{category}</button>)


  return (
    <div className="categories">
      <h5>Category filters</h5>
      {buttonsForEachCategory}
    </div>
  );
}

export default CategoryFilter;

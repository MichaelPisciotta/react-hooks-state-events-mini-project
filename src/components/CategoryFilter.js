import React from "react";
import { CATEGORIES } from "../data";

function CategoryFilter() {


function handleClick(){
  
}

  const buttonsForEachCategory = CATEGORIES.map(category => <button key={} onClick={handleClick}></button>)

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {buttonsForEachCategory}
    </div>
  );
}

export default CategoryFilter;

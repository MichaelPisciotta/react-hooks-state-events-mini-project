import React from "react";
import { CATEGORIES } from "../data";

function CategoryFilter() {


  function handleClick(){
    return CATEGORIES.filter(category => category !==  )
  }

  const buttonsForEachCategory = CATEGORIES.map(category => <button key={category} onClick={handleClick}></button>)


  return (
    <div className="categories">
      <h5>Category filters</h5>
      {buttonsForEachCategory}
    </div>
  );
}

export default CategoryFilter;

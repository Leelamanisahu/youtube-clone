import React from "react";
import "../App.css";


function ListItems({setCategories}) {
  const categories = [
    "All",
    "Music",
    "React routers",
    "comedy",
    "Reverberation",
    "Movie musicals",
    "India national cricket team",
    "News",
    "Mixes",
    "1990s",
    "Telugu cinema",
    "Live",
    "Dramedy",
    "Dubbing",
    "Indian soap opera",
    "Cricket",
    "Football",
    "Learn Coding",
  ];

  const handleSelectCategiry = (cat)=>{
      if (cat === "All"){
        setCategories("");
      }else{
        setCategories(cat)
      }
  }
  return (
    <div className="flex overflow-x-scroll hide-scroll-bar px-4 ">
    <div className="flex space-x-4 flex-nowrap">
      {categories.map((category) => {
        return (
          <div
            onClick={()=>handleSelectCategiry(category)}
            key={category}
            className="mb-3 flex-none bg-gray-200 hover:bg-gray-300 duration-300 rounded-xl px-3 py-2 font-medium text-gray-700 cursor-pointer"
          >
            {category}
          </div>
        );
      })}
    </div>
  </div>
  
  );
}

export default ListItems;
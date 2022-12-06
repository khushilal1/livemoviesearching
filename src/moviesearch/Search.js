import React, { useState, useContext } from "react";
import { Appcontext } from "./context";

function Search() {
  const { query, setquery } = useContext(Appcontext);
if(query.length<0){
  setquery("jhola")
}



  const chnageval = (event) => {
    setquery(event.target.value);
    event.prventDefault();

  };

  return (
    <>
      <section className="search-section">
        <h1
          style={{ fontSize: "20px", textAlign: "center", marginTop: "20px" }}
        >
          Searh Your favourite Movies
        </h1>
     <form action="#" onSubmit={(e)=>{e.preventDefault()}}>
     <input
        
        style={{ margin: "10px 40%" }}
        type="text "
        placeholder="Search you movie"
        onChange={chnageval}
      />


     </form>
      </section>
    </>
  );
}

export default Search;

import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Appcontext } from "./context";

function SingeMovie() {
  const [newid, setnewid] = useState();
  const { id } = useParams();
  const { movies } = useContext(Appcontext);



  // if(id==movies.imdbID){
  //   return(<>

  //   <p>{movies.Title}</p>

  //   </>)
  // }

  movies.map((current,index) => {
    const { Title, imdbID } = current;
    
    if (id == imdbID) {
      setnewid(current);
    }
  });

  return <>
  <h1>{newid.Title}</h1>
  
  </>;

  // const getmoviebyid = async (url) => {
  //   try {
  //     let fetchedDatabyid = await fetch(url);
  //     console.log(fetchedDatabyid.status);
  //     let jsondata = await fetchedDatabyid.json();
  //     if (jsondata.Response == "True") {
  //       setnewid(jsondata.Search);
  //     } else {
  //       console.log(jsondata.Error);
  //     }
  //   } catch (error) {
  //     {
  //       console.log(error);
  //     }
  //   }
  // };

  // useEffect(() => {
  //   getmoviebyid(`${Api_url}&s=${Title}`);
  // }, []);

  // return (
  //   <>
  //     <div>SingeMovie {Title}</div>

  //     {newid.map((current) => {
  //       const [Year,Poster]=current
  //       return (
  //         <>
  //           <p>{Year}</p><img src={Poster} alt="photo" />

  //         </>
  //       );
  //     })}

  //   </>
  // );
}

export default SingeMovie;

// context <ap/>
// use conext hook.

//creating the context
// context(warehouse)
//provider
//consumer(usecontetx)

import React, { useEffect, useState, useFetch } from "react";

const Appcontext = React.createContext();

//we need to create a provider
const AppProvider = ({ children }) => {
  const [movies, setmovies] = useState([]);
  const [query, setquery] = useState("Titanic");



  const Api_url = `http://www.omdbapi.com/?i=tt3896198&apikey=${process.env.REACT_APP_API_KEY}`;

  const getMovies = async (url) => {
    try {
      console.log(url)
      const res = await fetch(url);
      // console.log(res.status);
      // console.log(res)
      const data = await res.json();

      if (data.Response === "True") {
        setmovies(data.Search);
        // console.log(data);
      } else {
        console.log("Error ocuur on loading..");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // let fetcheddata = fetch(
    //   "http://www.omdbapi.com/?i=tt3896198&apikey=125c900f&s=titanic"
    // );
    // fetcheddata
    //   .then((response) => {
    //     console.log(response.status);
    //     console.log(response.ok);
    //     return response.json();
    //   })
    //   .then((value) => {
    //     console.log(value);
    //   })
    //   .catch((error) => [console.log(error)]);

    ///
    setTimeout(() => {
      getMovies(`${Api_url}&s=${query}`);
    }, 3000);
  }, [query]);

  return (
    <>
      <Appcontext.Provider value={{ movies, query, setquery,Api_url }}>
        {children}
      </Appcontext.Provider>
    </>
  );
};

//making the globalcustoms hook as shortcut
// const useGlobalContext = () => {
//   return useContext(AppProvider);
// };

export { AppProvider, Appcontext}
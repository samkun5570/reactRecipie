import React, { useEffect, useState } from "react";
// import logo from './logo.svg';
import Recepies from "./recepie";
import "./App.css";
import { trackPromise ,usePromiseTracker} from "react-promise-tracker";
import title from "./title.svg";
import Tilt from "react-parallax-tilt";

const App = () => {
  const [search, setSearch] = useState("");
  const [recepies, setRecepie] = useState([]);
  const [query, setQuery] = useState("desert");
  const [noData, setData] = useState("");

  useEffect(() => {
    // console.log(query);
    trackPromise(getRecipie());
  }, [query]);
  const { promiseInProgress } = usePromiseTracker();
  // const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  // const recog = new SpeechRecognition();

  // recog.onStart = function(){
  //   console.log("recog started");
  // }

  // recog.onResult

  // const ex_request = `https://api.edamam.com/search?q=${query}&app_id=${process.env.REACT_APP_ID}&app_key=${process.env.REACT_APP_API_KEY}`;
  // console.log("url",ex_request);

  const getRecipie = async () => {
    setData("");
    try {
      const response = await fetch(
        `https://api.edamam.com/search?q=${query}&app_id=${process.env.REACT_APP_ID}&app_key=${process.env.REACT_APP_API_KEY}`
      );

      const recipieData = await response.json();
      setRecepie(recipieData.hits);
      if (recipieData.hits.length <= 0) {
        setData("Nothing to show");
      } else {
        setData("");
      }
    } catch (error) {
      setData("Error Not able to connect");
    }
    // console.log("hits", recipieData.hits);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="App">
      <Tilt>
        <div className="container">
       
        
          <img src={title} alt="Title"  />{" "}
          <div className="flip">
            <div>
              <div>Eat</div>
            </div>
            <div>
              <div>Eat</div>
            </div>
            <div>
              <div>Repeat</div>
            </div>
          </div>
        </div>
      </Tilt>

      <form className="searchform" onSubmit={getSearch}>
        <input
          className="search"
          type="text"
          value={search}
          onChange={updateSearch}
        ></input>
        <button
          className="searchSubmit"
          type="submit"
          title="click to search for the giver query"
        >
          Search
        </button>
      </form>
      <p>{noData}</p>
     {!promiseInProgress ? 
      <section className="content">
        {recepies.map((recepie) => (
          <Recepies
            key={recepie.recipe.label}
            title={recepie.recipe.label}
            calories={recepie.recipe.calories}
            img={recepie.recipe.image}
            ingredients={recepie.recipe.ingredients}
          />
        ))}
      </section>
      : null }
    </div>
  );
};

export default App;

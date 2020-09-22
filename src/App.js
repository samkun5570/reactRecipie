import React, { useEffect, useState } from "react";
// import logo from './logo.svg';
import Recepies from "./recepie";
import "./App.css";
import { trackPromise } from "react-promise-tracker";

const App = () => {
  const [search, setSearch] = useState("");
  const [recepies, setRecepie] = useState([]);
  const [query, setQuery] = useState("desert");
  const [noData, setData] = useState("");

  useEffect(() => {
    console.log(query);
    trackPromise(getRecipie());
  }, [query]);

  const id = "da4035b1";
  const key = "e220d30109d1dd3fe4481a865697221d	";
  const ex_request = `https://api.edamam.com/search?q=${query}&app_id=${id}&app_key=${key}`;

  const getRecipie = async () => {
    const response = await fetch(ex_request);

    const recipieData = await response.json();
    setRecepie(recipieData.hits);
    if (recipieData.hits.length <= 0) {
      setData("Nothing to show");
    } else {
      setData("");
    }
    console.log("hits", recipieData.hits);
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
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>  */}

      <div className="container">
        Foodinator
        <div className="flip">
          <div>
            <div>God</div>
          </div>
          <div>
            <div>IS </div>
          </div>
          <div>
            <div>Food</div>
          </div>
        </div>
      </div>

      <form className="searchform" onSubmit={getSearch}>
        <input
          className="search"
          type="text"
          value={search}
          onChange={updateSearch}
        ></input>
        <button className="searchSubmit" type="submit">
          Search
        </button>
      </form>
      <p>{noData}</p>
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
    </div>
  );
};

export default App;

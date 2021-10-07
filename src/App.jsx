import React, { useState, useEffect } from "react";
import beers from "./data/beers";
import Nav from "./components/Nav/Nav";
import "./App.scss";
import BeerTile from "./components/BeerTile/BeerTile";







// going to need a search function/update by each string letter
// function for filtering alcohol percentage, classic range and acidic ph<4
// whatever appears has to the display in the images. 

const App = () => {

  const title = "Punk API Beer App";

  const [ searchTerm, setSearchTerm ] = useState("");

  const [ beersArray, setBeerArray ] = useState([]);

 useEffect(() => {

   fetch("https://api.punkapi.com/v2/beers").then(response => {
     return response.json()
   }).then(beerObj => {
     setBeerArray(beerObj)
   })

 }, [])


  return (
    <div className="App">
        <header className="header">{title}</header>
        <Nav />

        <section className="beerTile">
        <BeerTile beers={beersArray}/>  
        </section>
    </div>
  );
}

// ** beers={beers} means beers is the doc and beers is the prop being sent down to BeerTile
export default App;

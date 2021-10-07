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

  const [abv, setABV ] = useState(false);

  const [ classic, setClassic ] = useState(false);

  const [ acidic, setAcidic ] = useState(false);


  
  const handleAcidic = () => {
    if(acidic === true){
      setAcidic(false)
    } else {
      setAcidic(true)
    }
  }
  
  
  const handleAbv = () => {
    if(abv === true){
    setABV(false)
  } else {
    setABV(true)
  }
}

  const handleInput = (event) => {
    const userInput = event.target.value;
    setSearchTerm(userInput)
  }


 
 
 
  useEffect(() => {

  let url = "https://api.punkapi.com/v2/beers"
  
  if (abv === true){
    url = "https://api.punkapi.com/v2/beers?abv_gt=6";
  }

  if (acidic === true){
    url = "https://api.punkapi.com/v2/beers?ibu_lt=60";
  }
   
  fetch(url).then(response => {
     return response.json()
   }).then(beerObj => {
     setBeerArray(beerObj)
    })


 }, [abv])




  return (
    <div className="App">
        <header className="header">{title}</header>
        <Nav 
          inputValue={searchTerm} 
          handleAbv={handleAbv}
          handleAcidic={handleAcidic} 
          handleInput={handleInput}/>
        <p>{"state = " + searchTerm}</p>
        <p>{"abv = " + abv}</p>
        <p>{"acidic = " + acidic}</p>
        <section className="beerTile">
        <BeerTile beers={beersArray}/>  
        </section>
    </div>
  );
}

// ** beers={beers} means beers is the doc and beers is the prop being sent down to BeerTile
export default App;

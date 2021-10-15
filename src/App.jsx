import React, { useState, useEffect } from "react";
import beers from "./data/beers";
import Nav from "./components/Nav/Nav";
import "./App.scss";
import BeerTile from "./components/BeerTile/BeerTile";
import Brewdog from "./assets/images/Brewdog_logo.png";







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


  const handleClassic = () => {
    if(classic === true){
      setClassic(false)
    }else {
      setClassic(true)
    }
  }


  
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


  const filteredPh = beers.filter(beer => {
    return beer.ph <= 4;
  });

  console.log(filteredPh)
 
 
 
  useEffect(() => {

  let url = "https://api.punkapi.com/v2/beers"
  
  if (abv === true){
    url = "https://api.punkapi.com/v2/beers?abv_gt=6";
  }

  if (classic === true){
    url = "https://api.punkapi.com/v2/beers?brewed_before=12-2010"
  }

  if (searchTerm) {
    url = `https://api.punkapi.com/v2/beers?beer_name=${searchTerm}`
  }
   
  fetch(url).then(response => {
     return response.json()
   }).then(beerObj => {
     if(acidic === true) {
       setBeerArray(filteredPh)
       console.log(setBeerArray)
     } else {
       setBeerArray(beerObj)
     };
    
     
    });


 }, [abv, classic, acidic, searchTerm])




  return (
    <div className="App">
        <header className="header">{title}
          <img className="header__image" src={Brewdog} alt="brewdog" />
        </header>
        <Nav 
          inputValue={searchTerm} 
          handleAbv={handleAbv}
          handleAcidic={handleAcidic} 
          handleInput={handleInput}
          handleClassic={handleClassic}/>
          
        {/* <p>{"state = " + searchTerm}</p>
        <p>{"abv = " + abv}</p>
        <p>{"acidic = " + acidic}</p>
        <p>{"classic = " + classic}</p> */}
        <section className="beerTile">
        <BeerTile beers={beersArray}/>  
        </section>
    </div>
  );
}

// ** beers={beers} means beers is the doc and beers is the prop being sent down to BeerTile
export default App;

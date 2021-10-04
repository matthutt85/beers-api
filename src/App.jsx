
import beers from "./data/beers";
import Nav from "./components/Nav/Nav";
import beer from "./assets/images/beer.jpeg";
import "./App.scss";
import BeerTile from "./components/BeerTile/BeerTile";







// going to need a search function/update by each string letter
// function for filtering alcohol percentage, classic range and acidic ph<4
// whatever appears has to the display in the images. 

const App = () => {

  const title = "Punk API Beer App"


  return (
    <div className="App">
        <header className="header">{title}</header>
        <Nav />

        <section className="beerTile">
        <BeerTile beers={beers}/>
        </section>
    </div>
  );
}

export default App;

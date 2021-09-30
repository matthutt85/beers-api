
import beers from "./data/beers";
import Nav from "./components/Nav/Nav";
import beer from "./assets/images/beer.jpeg";
import "./App.scss";







// going to need a search function/update by each string letter
// function for filtering alcohol percentage, classic range and acidic ph<4
// whatever appears has to the display in the images. 

const App = () => {



  return (
    <div className="App">
        <header className="header">
            <img src={beer} className="beer" alt="beer" />
        </header>
        <Nav />
    </div>
  );
}

export default App;

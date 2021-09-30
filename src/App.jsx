
import beers from "./data/beers";
import Nav from "./components/Nav/Nav";







// going to need a search function/update by each string letter
// function for filtering alcohol percentage, classic range and acidic ph<4
// whatever appears has to the display in the images. 

const App = () => {



  return (
    <div className="App">
        <header className="header">
            <img src="src\assets\images\PUNKipa.jpeg" className="beer" alt="beer-Image" />
        </header>
        <Nav />
    </div>
  );
}

export default App;

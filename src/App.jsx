
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

  const beerAlcoholLevels = beers.map ((alcoholLevel) => {
    return alcoholLevel.abv;
})
console.log(beerAlcoholLevels)

const beerTaglines = beers.map((tagline) => {
    return tagline.tagline;
})
console.log(beerTaglines)

const beerDescriptions = beers.map((decription) => {
    return decription.description;
})
console.log(beerDescriptions)

const beerImages = beers.map((image) => {
    return image.image_url;
})
console.log(beerImages)

const beerNames = beers.map((name) => {
    return name.name;
})
console.log(beerNames)


  


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

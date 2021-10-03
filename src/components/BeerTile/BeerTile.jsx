import React from 'react';
import "./BeerTile.scss";
import beers from "../../data/beers.js";


const BeerTile = () => {

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
        <div className="beertile">
            {/* <BeerCard /> */}
        </div>
    )
}

export default BeerTile

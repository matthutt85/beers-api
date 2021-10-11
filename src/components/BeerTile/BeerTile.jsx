import React from 'react';
import "./BeerTile.scss";
import BeerCard from '../BeerCard/BeerCard';


const BeerTile = (props) => {

    const { beers } = props
    
    const beerCardJSX = beers.map((beerObj) => {
        return <BeerCard 
        title={beerObj.name} 
        image={beerObj.image_url}
        description={beerObj.description}
        abv={beerObj.abv}
        ph={beerObj.ph}/>
    });

    return (
        <div className="beertile">
            {beerCardJSX}
        </div>
    )
}

export default BeerTile

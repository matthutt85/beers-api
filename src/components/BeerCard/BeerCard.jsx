import React from 'react'
import beercard from "./BeerCard.scss";



const BeerCard = (props) => {

    const { title, image, description, abv } = props




    return (
        <div className="card">
            <h2 className="card__title"> {title} </h2>
            <img className="card__image" src={image} alt="Beer Image"/>
            <p className="card__description">{description}</p>
            <h3 className="card__abv">ABV {abv}%</h3>
        </div>
    )
}

export default BeerCard

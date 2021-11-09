import React from 'react'
import "./BeerCard.scss";



const BeerCard = (props) => {

    const { title, image, description, abv, ph, date} = props




    return (
        <div className="card">
            <div className="card__inner">
                <div className="card__front">
                    <h2 className="card__title"> {title} </h2>
                    <img className="card__image" src={image} alt="Beer Image"/>
                    <h3 className="card__bv">ABV: {abv}%</h3>
                    <h3 className="card__ph"> PH: {ph}</h3>
                    <h3 className="card__date"> First Brewed: {date}</h3>
                </div>
                <div className="card__back">
                    <p className="card__description">{description}</p>
                </div>
            </div>
        </div>
    )
}
                    

export default BeerCard

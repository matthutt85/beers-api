import React from 'react'



const BeerCard = (props) => {

    const { title, image, description } = props




    return (
        <div className="">
            <p className="">{title} </p>
            <img src={image}/>
        </div>
    )
}

export default BeerCard

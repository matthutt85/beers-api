import React from 'react'
import "./Nav.scss";



const Nav = (props) => {

const { inputValue, handleInput, handleAbv, handleAcidic, handleClassic } = props;



    return (
        <nav className="nav">
            <form className="nav__form">
                <input type="text" value={inputValue} onInput={handleInput} className="nav__form-input" name="search"></input>
            </form>
            <div className="buttons">
                <button className="buttons__abv" onClick={handleAbv}>High ABV > 6.0%</button>
                <button className="buttons__classic" onClick={handleClassic}>Classic Range</button>     
                <button className="buttons__acidic" onClick={handleAcidic}>Acidic</button>
            </div>
        </nav>
    )
}

export default Nav
                            

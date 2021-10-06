import React from 'react'
import "./Nav.scss";



const Nav = (props) => {

const { inputValue, handleInput, handleClick } = props;



    return (
        <nav className="nav">
            <form className="nav__form">
                <input type="text" value={inputValue} onInput={handleInput} className="nav__form-input" name="search"></input>
            </form>
            <div className="checkbox">
                <label for="checkbox1">High ABV (> 6.0%)</label>
                <input type="checkbox" onclick={handleClick} className="nav__form-checkbox1" name="checkbox1"></input>
                <label for="checkbox2">Classic Range</label>
                <input type="checkbox" onclick={handleClick} className="nav__form-checkbox1" name="checkbox2"></input>     
                <label for="checkbox3">Acidic</label>
                <input type="checkbox" onclick={handleClick} className="nav__form-checkbox1" name="checkbox3"></input>               
            </div>
        </nav>
    )
}

export default Nav

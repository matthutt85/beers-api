import React from 'react'
import "./Nav.scss";
import { useState } from 'react';



const Nav = (props) => {

const { inputValue, handleInput, handleAbv, handleAcidic, handleClassic } = props;

const [ buttonColor, setButtonColor ] = useState(false) //state for buttonColor

const toggleColor = () => {      //setting toggleColor to true or false state
    if(buttonColor === true) {
        setButtonColor(false)
    }else{
        setButtonColor(true)
    }
}
    
    const backgroundColorChange = buttonColor?"green":"#009ccc";


    return (
        <nav className="nav">
            <form className="nav__form">
                <input type="text" value={inputValue} onInput={handleInput} className="nav__form-input" name="search"></input>
            </form>
            <div className="buttons">
                <button className="buttons__abv" onClick={() => {handleAbv(); toggleColor();}} style={{backgroundColor: backgroundColorChange}}>High ABV  6.0%</button>
                <button className="buttons__classic" onClick={() => {handleClassic(); toggleColor();}} style={{backgroundColor: backgroundColorChange}} >Classic Range</button>     
                <button className="buttons__acidic" onClick={handleAcidic} >Acidic</button>
            </div>
        </nav>
        // onClick={() => {handleAbv(); toggleColor()}}
    )
}

export default Nav
                            

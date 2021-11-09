import React from 'react'
import "./Nav.scss";
import { useState } from 'react';



const Nav = (props) => {

const { inputValue, handleInput, handleAbv, handleAcidic, handleClassic } = props;

const [ abvButtonColor, setAbvButtonColor ] = useState(false) 
const [ classicButtonColor, setClassicButtonColor ] = useState(false)
const [ acidicButtonColor, setAcidicButtonColor ] = useState(false)

const toggleAbvColor = () => {      
    if(abvButtonColor === true) {
        setAbvButtonColor(false)
    }else{
        setAbvButtonColor(true)
    }
}

const toggleClassicColor = () => {
    if (classicButtonColor === true) {
        setClassicButtonColor(false)
    }else{
        setClassicButtonColor(true)
    }
}

const toggleAcidicColor = () => {
    if (acidicButtonColor === true) {
        setAcidicButtonColor(false)
    } else {
        setAcidicButtonColor(true)
    }
}
    
    const abvColorChange = abvButtonColor?"green":"#009ccc";
    const classicColorChange = classicButtonColor?"green":"#009ccc";
    const acidicColorChange = acidicButtonColor?"green":"#009ccc";


    return (
        <nav className="nav">
            <form className="nav__form">
                <input type="text" value={inputValue} onInput={handleInput} className="nav__form-input" name="search"></input>
            </form>
            <div className="buttons">
                <button className="buttons__abv" onClick={() => {handleAbv(); toggleAbvColor();}} style={{backgroundColor: abvColorChange}}>High ABV > 6.0%</button>
                <button className="buttons__classic" onClick={() => {handleClassic(); toggleClassicColor();}} style={{backgroundColor: classicColorChange}} >Classic Range</button>     
                <button className="buttons__acidic" onClick={() => {handleAcidic(); toggleAcidicColor();}} style={{backgroundColor: acidicColorChange}}>Acidic</button>
            </div>
        </nav>
        // onClick={() => {handleAbv(); toggleColor()}}
    )
}

export default Nav
                            

import React from 'react'
import "./Nav.scss";



const Nav = () => {
    return (
        <nav className="nav">
            <form className="form">
                <input type="text" className="form__input" name="search"></input>
            </form>
        </nav>
    )
}

export default Nav

import React from 'react'
import './Header.scss'

const Header = () => {
    return (
        <header>
            <img className="logo" src="./public/MSG.png" alt="MSG Logo" />
            <div>
                <h1>Melvin Shong Geu</h1>
                <h2>Full Stack Developer</h2>
            </div>
        </header>
    )
}

export default Header
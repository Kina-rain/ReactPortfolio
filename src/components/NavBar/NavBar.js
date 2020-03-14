import React from "react";


function NavBar() {
    return(
        <header>
            <nav className="nav nav-tabs">
                <a className="nav-item nav-link text-white" href="/">Home</a>
                <a className="nav-item nav-link text-white" href="/portfolio">Portfolio</a>
                <a className="nav-item nav-link text-white" href="/resume">Resume</a>
            </nav>
        </header>
    )
}

export default NavBar;
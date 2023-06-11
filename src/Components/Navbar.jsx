import React from "react";
import Class from "./Navbar.module.css"

const Navbar = () => {
    return (
        <>
            <nav className="container">
                <div className={`${Class.logo}`}>
                    <img src="/images/brand_logo.png" alt="logo" />
                </div>
                <ul>
                    <li><a href="#">Menu</a></li>
                    <li><a href="#">Location</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>

                <button>Login</button>
            </nav>
        </>
    )
}

export default Navbar;

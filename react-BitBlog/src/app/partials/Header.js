import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {

    return (
        <header>
            <nav>
                <div className="nav-wrapper">
                    <span>Bit Blog</span>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/authors">Authors</Link></li>
                        <li><Link to="/post/new">Create New Post</Link></li>
                        <li><Link to="/about">About</Link></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}
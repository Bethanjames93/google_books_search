import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navstyle">
            <div>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to ="Home"
                        className={window.location.pathname === "/about" ? "nav-link active" : "nav-link"}
                        >
                            Home 
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Saved" 
                        className={window.location.pathname === "projects" ? "nav-link active" : "nav-link"}
                        >
                            Saved 
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;
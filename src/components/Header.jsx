import {NavLink} from "react-router-dom";
import LogIn from "./LoginForm.jsx";
import LoggedIn from "./LoggedIn.jsx";
import React from "react";

const Header = ({loggedIn, login, user, logout}) => {
    return (
        <ul className="header">
            <li id="link"><NavLink to={"/"}>Home</NavLink></li>
            <li id="link"><NavLink to="/about">About</NavLink></li>
            <li id="link"><NavLink to="/joke">Jokes</NavLink></li>
            <li id="link"><NavLink to="/dadjoke">Dad joke</NavLink></li>
            <li id="link"><NavLink to="/chuckjoke">Chuck joke</NavLink></li>
            {!loggedIn ? (<LogIn login={login} />) :
                (<>
                    <LoggedIn user={user} logout={logout} />
                </>)}
        </ul>)
}

export default Header;
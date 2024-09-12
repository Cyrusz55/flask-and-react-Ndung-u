import React from 'react';
import {Link} from 'react-router-dom'
import {useAuth, logout} from '../auth'

const LoggedInLinks = () => {
    return (
        <>
            <Link className="navbar-brand" to={"/"}>Home</Link>
            <Link className="nav-link active" to={"/create_recipe"}>Create Recipe</Link>

            <a className="nav-link active" href={"#"} onClick={()=>{logout()}}>Log out</a>
        </>
    )
}

const LoggedOutLinks = () => {
    return (
        <>
            <Link className="navbar-brand" to={"/"}>Home</Link>
            <Link className="nav-link active" to={"/signup"}>Sign Up</Link>
            <Link className="nav-link active" to={"/login"}>login</Link>

        </>
    )
}

const NavBar = () => {
    const [logged] = useAuth();

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        {logged?<LoggedInLinks/>:<LoggedOutLinks/>}
                    </div>
                </div>
            </div>
        </nav>
    );


}
export default NavBar
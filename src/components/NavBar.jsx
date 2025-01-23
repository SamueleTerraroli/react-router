import { NavLink } from "react-router-dom"

const NavBar = () => {
    return (
        <nav className="container d-flex justify-content-center p-4">
            <NavLink className="navbar-brand m-4" to="/">Default</NavLink>
            <NavLink className="navbar-brand m-4" to="/chi-siamo">Default</NavLink>
            <NavLink className="navbar-brand m-4" to="/posts">Default</NavLink>
        </nav>
    )
}

export default NavBar
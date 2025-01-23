import { NavLink } from "react-router-dom"

const NavBar = () => {
    return (
        <nav className="container d-flex justify-content-center p-4">
            <NavLink className="navbar-brand m-4 text-light p-2 rounded-3 border" to="/">Home</NavLink>
            <NavLink className="navbar-brand m-4 text-light p-2 rounded-3 border" to="/chi-siamo">Chi siamo</NavLink>
            <NavLink className="navbar-brand m-4 text-light p-2 rounded-3 border" to="/posts">Post</NavLink>
        </nav>
    )
}

export default NavBar
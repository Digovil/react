import {

    NavLink,

} from "react-router-dom";

function NavBar() {
    return ( 
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <NavLink to="/" className="navbar-brand">Hooks</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <NavLink exact="true" to="/home" className={({ isActive }) => isActive? "active nav-link": 'nav-link'} aria-current="page">Home</NavLink>
                            <NavLink exact="true" to="/about" className={({ isActive }) => isActive? "active nav-link": 'nav-link'}>About</NavLink>
                            <NavLink exact="true" to="/login" className={({ isActive }) => isActive? "active nav-link": 'nav-link'}>Login</NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default NavBar;

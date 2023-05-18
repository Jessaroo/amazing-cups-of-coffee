import { Link } from 'react-router-dom';


function Nav(props) {
    return (
        <header className="header">
            <nav className="navbar">
                <div className="nav-container">
                     <Link to="/" className="nav-link">Home</Link>
                     <span className="nav-space"></span>
                    <Link to="/Recipes" className="nav-link">All Recipes</Link>
                </div>
            </nav>
        </header>
    );
}

export default Nav;
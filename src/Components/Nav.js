import { Link } from 'react-router-dom';

function Nav(props) {
    return (
        <nav className="navbar">
            <div className="nav-container">
                <Link to="/" className="nav-link">Home</Link>
                <a href="https://www.thecocktaildb.com/browse.php?s=coffee" className="nav-link">Coffee Index</a>
            </div>
        </nav>
    );
}

export default Nav;
import { Link } from 'react-router-dom';

function Nav(props) {
    return (
        <nav className="navbar">
            <div className="nav-container">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/RecipeChoices" className="nav-link">Recipes Index</Link>
            </div>
        </nav>
    );
}

export default Nav;
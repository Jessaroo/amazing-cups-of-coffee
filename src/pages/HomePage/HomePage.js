import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <div>
            <h2>Enjoy The Amazing Cups of Coffee Recipe Page</h2>
            <p>
                Ready to enjoy a delicious cup of coffee at home? If so, check out these recipes for a nice cup of relaxation on a day off. 
                Click below to get started with some recipes. Enjoy! 
            </p>
            <Link to="/recipes">All Recipes</Link>
        </div>
    );
}

export default HomePage;
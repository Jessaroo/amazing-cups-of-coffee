import React from 'react';
import { Link } from 'react-router-dom';
import CoffeeAnimation from '../../Components/CoffeeAnimation/CoffeeAnimation';

function HomePage() {
    return (
        <div className="home-page-container">
            <div className="home-page-content">
                <div className="text-container">
                    <h2 className="home-page">Enjoy a New Coffee Recipe Today</h2>
                    <p>
                        Ready to enjoy a delicious cup of coffee at home? If so, check out these recipes for a nice cup of relaxation on a day off. 
                        Click below to get started with some recipes. Enjoy! 
                    </p>
                    </div>
                    <div className="coffee-animation-container">
                    <CoffeeAnimation />
                </div>
                
            </div>
                <div>
                <Link to="/recipes" className="home-page-link">All Recipes</Link>
                </div>  
        </div>
      
    );
}

export default HomePage;


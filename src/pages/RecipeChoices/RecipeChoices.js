import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function RecipeChoices(props) {
    const [ coffee, setCoffee ] = useState([]);

    // helper function for performing AJAX
    const fetchCoffee = async () => {
        try {
            // 1) use the fetch function to make an HTTP request to SWAPI
            const response = await fetch('https://www.thecocktaildb.com/browse.php?s=coffee');
            // 2) take the response response object that gets returned from the fetch function parse it's incoming json body
            const coffeeData = await response.json();
            // 3) set the ships state with the returned JSON data
            setCoffee(coffeeData.results);
        } catch (error) {
            
        }
    };

    useEffect(() => {
        fetchCoffee();
    }, []);

    return (
        <div className="recipe-choices">
            {coffee.map(coffee => {
                const {name, url} = coffee;
                const path = url.split('/');
                const id = path[path.length - 2];
                return (
                    <Link to={`/coffee/${id}`} key={id}>
                        <h1>{name}</h1>
                    </Link>
                )
            })}
        </div>
    );
}

export default RecipeChoices;
    







































// import React, { useEffect, useState } from 'react';

// function RecipeChoices() {
//     const [recipes, setRecipes] = useState([]);

//     useEffect(() => {
//         fetch('https://www.thecocktaildb.com/browse.php?s=coffee')
//         .then(response => response.json())
//         .then(data => setRecipes(data))
//         .catch(error => console.log(error));
// }, []);

// return (
//     <div>
//         <h2>Recipe Choices</h2>
//         {recipes.map(recipe => (
//             <div key={recipe.id}>
//                 <h3>{recipe.title}</h3>
//                 <p>{recipe.description}</p>
//             </div>
//         ))}
//         </div>
//     );
// }

// export default RecipeChoices;
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function RecipeChoices(props) {
    const [ recipe, setRecipeDetail ] = useState([]);

    // helper function for performing AJAX
    const fetchRecipeDetail = async () => {
        try {
            // 1) use the fetch function to make an HTTP request to SWAPI
            const response = await fetch('https://www.thecocktaildb.com/browse.php?s=coffee');
            // 2) take the response response object that gets returned from the fetch function parse it's incoming json body
            const recipeData = await response.json();
            // 3) set the ships state with the returned JSON data
            setRecipeDetail(recipeData.results);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchRecipeDetail();
    }, []);

    return (
        <div className="recipe-choices">
            {recipes.map(recipe => {
                const { name, idDrink} = recipeDetail;
                return (
                    <div key={idDrink}>
                        <Link to={`/recipeDetail/${idDrink}`}>
                            <h1>{name}</h1>
                        </Link>
                    </div>
                );
            })}
        </div>
    );
}

export default RecipeChoices;




/* <div className="recipe-choices">
            {recipe.map(recipeDetail => {
                const {name, url} = recipe;
                const path = url.split('/');
                const id = path[path.length - 2];
                return (
                    <Link to={`/recipeDetail/${id}`} key={id}>
                        <h1>{name}</h1>
                    </Link>
                )
            })}
        </div> */
    













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
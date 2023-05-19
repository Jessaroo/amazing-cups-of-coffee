import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


export default function RecipeChoices(props) {
    const [ recipes, setRecipes ] = useState([]);


    useEffect(() => {
            async function fetchRecipes() {
            try {
                const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=coffee');
                const recipeData = await response.json();
                setRecipes(recipeData.drinks);
            } catch (error) {
                console.error(error);
            }
        };
        fetchRecipes();
    }, []);

    return ( 
        <>
        <h1 className="recipeChoice-page-title">Enjoy a new coffee recipe made in the comfort of your home!! Click on an image below to see the recipe.</h1>
        { recipes ? 
            <div className="recipe-choices">
                {recipes.map((recipe) => (
                        <div className="recipe-card" key={recipe.idDrink}>
                            <Link to={`/recipe-detail/${recipe.idDrink}`}>
                            <img 
                                src={recipe.strDrinkThumb} 
                                height="75px" alt="Recipe Thumbnail" 
                            />
                            <h1>{recipe.strDrink}</h1>
                            </Link>
                    </div>
                ))}
            </div>
            :
             <h1>Loading ...</h1>
        }
        </>
    );
};
import { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';


export default function RecipeChoices(props) {
    const [ recipes, setRecipes ] = useState([]);


    useEffect(() => {
        // const fetchRecipes = async () => {
            async function fetchRecipes() {
            try {
                const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=coffee');
                const recipeData = await response.json();
                setRecipes(recipeData.drinks);
                console.log(recipeData);
            } catch (error) {
                console.error(error);
            }
        };
        fetchRecipes();
    }, []);

    const navigateToRecipeDetails = (id) => {
        window.location.href = `/recipe-detail/${id}`;
    };

    return ( 
        <>
        { recipes ? 
            <div className="recipe-choices">
                {recipes.map((recipe) => (
                        <div className="recipe-card" key={recipe.idDrink}>
                                <img 
                                src={recipe.strDrinkThumb} 
                                height="75px" alt="Recipe Thumbnail" 
                                onClick={() => navigateToRecipeDetails(recipe.idDrink)}
                                />
                                <h1>{recipe.strDrink}</h1>
                        </div>
                ))}
            </div>
            :
             <h1>Loading ...</h1>
        }
        </>
    );
};
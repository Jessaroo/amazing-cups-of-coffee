import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


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



    return ( 
        <>
        { recipes ? 
            <div className="recipe-choices">
                {recipes.map((recipe) => (
                        <div>
                            {/* <Link to={`/recipe-detail/${id}`} > */}
                                <img src={recipe.strDrinkThumb} height="75px"></img>
                                <h1>{recipe.strDrink}</h1>
                            {/* </Link> */}
                        </div>
                ))}
            </div>
            :
             <h1>Loading ...</h1>
        }
        </>
    );
};


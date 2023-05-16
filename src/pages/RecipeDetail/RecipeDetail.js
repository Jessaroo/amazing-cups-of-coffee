import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function RecipeDetail(props) {
    // extract the id url param using the useParams hook
    const { id } = useParams();
    // construct a url for fetching recipe details
    const url = 'https://www.thecocktaildb.com/browse.php?s=coffee' + id;
    // initialize recipe state
    const [ recipeData, setRecipeData ] = useState(null);
    // fetch recipe details and use the corresponding data to set state
    const fetchRecipeDetail = async () => {
        try {
            const response = await fetch(url);
            const recipeData = await response.json();
            setRecipeData(recipeData);
        } catch (error) {
            console.error(error);   
        }
    };
    // use useEffect hook to invoke our fetch function once when to component loads
    useEffect(() => {
        fetchRecipeDetail();
    }, []);
    // conditionally render a loaded or loading component depending on whether or not we have starship data
    const loading = () => {
        return <h1>Loading ...</h1>;
    };

    const loaded = () => {
        const { strDrink, recipe } = recipeData.drinks[0];
        return (
           <div>
                <h2>{strDrink}</h2>
                <div>
                    <h3>Coffee Recipes</h3>
                    <ul>
                        {recipe.map((ingredient, index) => (
                        <li key ={index}>{ingredient}</li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h3>Recipe Ingredients</h3>
                    <ul>
                        <li>Appears in {recipe.length} recipe{recipe.length > 1 ? 's': ''}</li>
                    </ul>
                </div>
           </div> 
        );
    };
    
    return <section>{RecipeData ? loaded() : loading()}</section>;
}

export default RecipeDetail;
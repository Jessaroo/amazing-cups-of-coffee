import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function RecipeDetail(props) {
    // extract the id url param using the useParams hook
    const { id } = useParams();
    // construct a url for fetching recipe details
    const url = 'https://www.thecocktaildb.com/browse.php?s=coffee' + id;
    // initialize recipe state
    const [ RecipeDetail, setRecipeDetail ] = useState(null);
    // fetch recipe details and use the corresponding data to set state
    const fetchRecipe = async () => {
        try {
            const response = await fetch(url);
            const recipeData = await response.json();
            setRecipeDetail(recipeData);
        } catch (error) {
            console.error(error);
            
        }
    };
    // use useEffect hook to invoke our fetch function once when to component loads
    useEffect(() => {
        fetchRecipe();
    }, []);
    // conditionally render a loaded or loading component depending on whether or not we have starship data
    const loading = () => {
        return <h1>Loading ...</h1>;
    };
    const loaded = () => {
        return (
           <div>
                <h2>{RecipeDetail.name}</h2>
                <div>
                    <h3>Recipes</h3>
                    <ul>
                        <li>RecipeDetail Class: {RecipeDetail.recipeDetail_class}</li>
                        <li>Capacity: {RecipeDetail.recipeDetail_capacity}</li>
                        <li>Crew (size): {RecipeDetail.crew}</li>
                        <li>Passengers: {RecipeDetail.passengers}</li>
                        <li>Manufacturer: {RecipeDetail.manufacturer}</li>
                        <li>HD Rating: {RecipeDetail.hyperdrive_rating}</li>
                    </ul>
                </div>
                <div>
                    <h3>Coffee Recipes</h3>
                    <ul>
                        <li>Appears in {RecipeDetail.recipe?.length} recipe{RecipeDetail.recipe?.length > 1 ? "s": ""}</li>
                    </ul>
                </div>
           </div> 
        );
    };
    
    return <section>{RecipeDetail ? loaded() : loading()}</section>;
}

export default RecipeDetail;
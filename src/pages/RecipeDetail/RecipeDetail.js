import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function RecipeDetail() {
    const { id } = useParams();
    const [recipeData, setRecipeData] = useState(null);

    useEffect(() => {
        const fetchRecipeDetail = async () => {
            try {
                const response = await fetch(
                    `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
                );
                const data = await response.json();
                setRecipeData(data.drinks[0]);
            } catch (error) {
                console.error(error);
            }
        };

        fetchRecipeDetail();
    }, [id]);

    const loading = () => {
        return <h1>Loading ...</h1>;
    };

    const loaded = () => {
        const { strDrink, strInstructions } = recipeData;
        const handlePrint = () => {
        window.print();
        };

        return (
            <div>
                <h2>{strDrink}</h2>
                <div >
                    <h3>Instructions</h3>
                    <p>{strInstructions}</p>
                    {/* <h1>Coffee Name</h1> */}
                </div>
                <button onClick={handlePrint}>Print</button>
            </div>
        );
    };

    return <section>{recipeData ? loaded() : loading()}</section>;
}

export default RecipeDetail;







// import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';

// function RecipeDetail() {
//     const { id } = useParams();
//     // initialize recipe state
//     const [ recipeData, setRecipeData ] = useState(null);
//     // fetch recipe details and use the corresponding data to set state
//     const fetchRecipeDetail = async () => {
//         try {
//             const response = await fetch(url);
//             const recipeData = await response.json();
//             setRecipeData(recipeData);
//         } catch (error) {
//             console.error(error);   
//         }
//     };
//     // use useEffect hook to invoke our fetch function once when to component loads
//     useEffect(() => {
//         fetchRecipeDetail();
//     }, []);
//     // conditionally render a loaded or loading component depending on whether or not we have starship data
//     const loading = () => {
//         return <h1>Loading ...</h1>;
//     };

//     const loaded = () => {
//         const { strDrink, recipe } = recipeData.drinks[0];
//         return (
//            <div>
//                 <h2>{strDrink}</h2>
//                 <div>
//                     <h3>Coffee Recipes</h3>
//                     <ul>
//                         {recipe.map((ingredient, index) => (
//                         <li key ={index}>{ingredient}</li>
//                         ))}
//                     </ul>
//                 </div>
//                 <div>
//                     <h3>Recipe Ingredients</h3>
//                     <ul>
//                         <li>Appears in {recipe.length} recipe{recipe.length > 1 ? 's': ''}</li>
//                     </ul>
//                 </div>
//            </div> 
//         );
//     };
    
//     return <section>{recipeData ? loaded() : loading()}</section>;
// }

// export default RecipeDetail;
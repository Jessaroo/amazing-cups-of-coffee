import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


function RecipeChoices(props) {
    const [ recipes, setRecipes ] = useState([]);

    // helper function for performing AJAX
    const fetchRecipes = async () => {
        try {
            const response = await fetch('www.thecocktaildb.com/api/json/v1/1/search.php?s=coffee');
            // 2) take the response response object that gets returned from the fetch function parse it's incoming json body
            const recipeData = response.json();
            setRecipes(recipeData.results);
            // console.log(recipeData);
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchRecipes();
    }, []);

const loading = () => {
    return <h1>Loading ...</h1>;
};

const loaded = () => {
    <div className="recipe-choices">
            {recipes.map(recipe => {
                const { strDrink, strDrinkThumb, idDrink} = recipe;
                // const path = url.split('/');
                // const id = path[path.length - 2];
                return (
                        <Link to={`/recipeDetail/${idDrink}`} key={idDrink}>
                            <h1>{strDrink}</h1>
                        </Link>
                )
            })}
        </div>
};

return <section>{recipes ? loaded() : loading()}</section>;
}

export default RecipeChoices;














// import { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';


// function RecipeChoices(props) {
//     const [ recipe, setRecipeDetail ] = useState([]);

//     // helper function for performing AJAX
//     const fetchRecipeDetail = async () => {
//         try {
//             const response = await fetch('https://www.thecocktaildb.com/browse.php?s=coffee');
//             // 2) take the response response object that gets returned from the fetch function parse it's incoming json body
//             const recipeData = await response.json();
//             setRecipeDetail(recipeData.results);
//         } catch (error) {
//             console.error(error);
//         }
//     };

//     useEffect(() => {
//         fetchRecipeDetail();
//     }, []);

//     return (
//         <div className="recipe-choices">
//             {recipes.map(recipe => {
//                 const { name, idDrink} = recipeDetail;
//                 return (
//                     <div key={idDrink}>
//                         <Link to={`/recipeDetail/${idDrink}`}>
//                             <h1>{name}</h1>
//                         </Link>
//                     </div>
//                 );
//             })}
//         </div>
//     );
// }

// export default RecipeChoices;




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
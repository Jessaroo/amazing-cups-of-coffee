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
            <div className="details-page">
            <div className="recipe-detail-container">
                <div>
                    <h2 className="coffee-name">{strDrink}</h2>
                    <div >
                        <h3 className="directions-title">Directions/Recipe</h3>
                        <p className="recipe-directions">{strInstructions}</p>
                    </div>
                    <button onClick={handlePrint} className="printbtn">Print</button>
                </div>
            </div>
            </div>
        );
    };

    return <section>{recipeData ? loaded() : loading()}</section>;
}

export default RecipeDetail;
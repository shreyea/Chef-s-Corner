import React from 'react';
import Recipe from './components/Recipe';
import IngredientsList from './components/Ingre.jsx'; 
import { getRecipeFromMistral } from './ai.js'; 

function IngredientForm({ 
    onLikeRecipe, 
    isRecipeLiked, 
    currentRecipe,
    setCurrentRecipe,
    setCurrentIngredients,
    currentIngredients 
}) {
    const [ingredients, setIngredients] = React.useState(currentIngredients || []);
    const [recipe, setRecipe] = React.useState("");
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(null);
    
    const recipeSection = React.useRef(null);
    const inputRef = React.useRef(null);

    React.useEffect(() => {
        if (recipe && recipeSection.current) {
            setTimeout(() => {
                recipeSection.current.scrollIntoView({ 
                    behavior: "smooth",
                    block: "start" 
                });
            }, 100);
        }
    }, [recipe]);

    function handleSubmit(event) {
        event.preventDefault();
        
        const formData = new FormData(event.target);
        const newIngredient = formData.get("ingredient");
        
        if (!newIngredient || newIngredient.trim() === "") {
            setError("Please enter an ingredient");
            return;
        }

        const trimmedIngredient = newIngredient.trim();

        if (ingredients.some(ing => ing.toLowerCase() === trimmedIngredient.toLowerCase())) {
            setError("This ingredient is already added");
            event.target.reset();
            if (inputRef.current) {
                inputRef.current.focus();
            }
            return;
        }

        setIngredients(prev => [...prev, trimmedIngredient]);
        setError(null);
        
        event.target.reset();
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }

    async function getRecipe() {
        if (ingredients.length < 3) {
            setError("Please add at least 3 ingredients to generate a recipe");
            return;
        }

        setLoading(true);
        setError(null);
        setRecipe("");

        try {
            const recipeMarkdown = await getRecipeFromMistral(ingredients);
            setRecipe(recipeMarkdown);
            setCurrentRecipe(null);
            setCurrentIngredients(ingredients);
        } catch (err) {
            setError(err.message || "Failed to generate recipe. Please try again.");
            console.error("Recipe generation error:", err);
        } finally {
            setLoading(false);
        }
    }

    function handleLikeRecipe() {
        if (recipe && ingredients.length > 0) {
            onLikeRecipe(recipe, ingredients);
        }
    }

    function resetIngredients() {
        setIngredients([]);
        setRecipe("");
        setError(null);
        setLoading(false);
        inputRef.current?.focus();
    }

    function removeIngredient(index) {
        setIngredients(prev => prev.filter((_, i) => i !== index));
        setRecipe("");
    }

    return (
        <main>
            <div className="main-page-hero">
                <h1>Create Your Perfect Recipe</h1>
                <p>Add your ingredients and let AI craft a delicious recipe just for you</p>
            </div>

            <form onSubmit={handleSubmit}>
                <h2>Your Ingredients</h2>
                <p className="form-subtitle">Add at least 3 ingredients to generate a recipe</p>
                
                <div className="form-group">
                    <input 
                        ref={inputRef}
                        type="text" 
                        name="ingredient" 
                        placeholder="Enter an ingredient (e.g., tomatoes, chicken, basil...)"  
                        autoComplete="off"
                        aria-label="Ingredient input"
                        disabled={loading}
                    />
                    <button 
                        type="submit" 
                        disabled={loading}
                        aria-label="Add ingredient"
                    >
                        + Add Ingredient
                    </button>
                </div>
                
                {error && (
                    <div className="error-message" role="alert">
                        {error}
                    </div>
                )}
            </form>

            <section>
                {ingredients.length > 0 && (
                    <IngredientsList 
                        ingredients={ingredients} 
                        getRecipe={getRecipe} 
                        recipeSection={recipeSection}
                        loading={loading}
                        resetIngredients={resetIngredients}
                        removeIngredient={removeIngredient}
                    />
                )}
                
                {loading && (
                    <div className="loading">
                        <div className="spinner" aria-label="Loading"></div>
                        <p>Generating your recipe...</p>
                    </div>
                )}
                
                {recipe && !loading && (
                    <Recipe 
                        recipe={recipe} 
                        onLikeRecipe={handleLikeRecipe}
                        isLiked={isRecipeLiked}
                    />
                )}
            </section>     
        </main>
    );
}

export default IngredientForm;
export { IngredientForm };
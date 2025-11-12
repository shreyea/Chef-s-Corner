function IngredientsList({ 
    ingredients, 
    getRecipe, 
    recipeSection, 
    loading, 
    resetIngredients,
    removeIngredient 
}) {
    const ingredientList = ingredients
        .filter(ingredient => ingredient.trim() !== '')
        .map((ingredient, index) => (
            <li key={index}>
                <span>{ingredient}</span>
                <button 
                    className="remove-btn"
                    onClick={() => removeIngredient(index)}
                    aria-label={`Remove ${ingredient}`}
                    disabled={loading}
                >
                    ✕
                </button>
            </li>
        ));

    const canGenerateRecipe = ingredients.length >= 3;

    return (
        <div className="ingredients-section">
            <h2>
                Ingredients
                <span className="ingredient-count">{ingredients.length}</span>
            </h2>

            {/* Progress Indicator */}
            <div className="ingredient-progress">
                <div className="progress-bar">
                    <div 
                        className="progress-fill" 
                        style={{ width: `${Math.min((ingredients.length / 3) * 100, 100)}%` }}
                    ></div>
                </div>
                <p className="progress-text">
                    {canGenerateRecipe 
                        ? 'Ready to create your recipe' 
                        : `Add ${3 - ingredients.length} more ingredient${(3 - ingredients.length) !== 1 ? 's' : ''}`}
                </p>
            </div>

            <ul>{ingredientList}</ul> 
            
            {canGenerateRecipe && (
                <div ref={recipeSection} className="recipe-prompt-card">
                    <h3>Ready to Generate</h3>
                    <p>
                        You have {ingredients.length} ingredient{ingredients.length !== 1 ? 's' : ''}. 
                        Generate a recipe now!
                    </p>
                    
                    <div className="button-container">
                        <button 
                            className="accent"
                            onClick={getRecipe}
                            disabled={loading}
                            aria-label="Generate recipe"
                        >
                            {loading ? 'Generating...' : 'Generate Recipe'}
                        </button>
                        <button 
                            className="secondary"
                            onClick={resetIngredients}
                            disabled={loading}
                            aria-label="Reset ingredients"
                        >
                            Start Over
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default IngredientsList;
function Ingre(props) {

      const ingredientList=props.ingredients.map((ingredient, index) => {
      return ingredient.trim() === '' ? null  : <li key={index}>{ingredient}</li>  
    })

    return (
        <>
            <h2>Ingredients on hand:</h2>

            <ul>{ingredientList}</ul> 
            {props.ingredients.length > 3 && (
                <div className='box'>
                    <div className='downbox'>
                        <div ref={props.recipeSection} className='recipe-text'>
                            <h3>Ready for a recipe?</h3>
                            <p>Generate a recipe from your ingredient list.</p>
                        </div>
                        <div className='button-container'>
                            <button onClick={props.getRecipe}>Get a recipe</button>
                        </div>
                        <div className='button-container'>
                            <button onClick={props.resetIngredients}>Reset</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
export default Ingre;
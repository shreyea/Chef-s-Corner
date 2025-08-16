import React from 'react';
import Recipe from './components/Recipe';
import Ingre from './components/Ingre.jsx'; 
import { getRecipeFromMistral } from './ai.js'; 
 
function FormData() {

    const [ingredients, setIngredients] = React.useState([]);
    const [loading, setLoading] = React.useState(false);

    function handleSubmit(formData) {
        const newIngredient = formData.get("ingredient").trim();
        setIngredients(prev => [...prev, newIngredient]);
    }

    const [recipe, setRecipe] = React.useState(false);
    const recipeSection = React.useRef(null);

    React.useEffect(() => {
        if (recipe !== "" && recipeSection.current !== null) {
            recipeSection.current.scrollIntoView({ behavior: "smooth" });
        }}, [recipe]);
    


  
    async function getRecipe() {  //gets you the recipe when button clicked
       
        const recipeMarkdown = await  getRecipeFromMistral(ingredients)
        setRecipe(recipeMarkdown);
        setLoading(true);
       
        
    }
  


  return (

    <main>
        <form action={handleSubmit}>
            <input type="text" name="ingredient" placeholder="eg: oregano"  autoComplete='off'/>
            <div className='button-container'><button type="submit">+ Add ingredient</button></div>
        </form>
        <section>
            {ingredients.length > 0 && <Ingre ingredients={ingredients} 
                                        getRecipe={getRecipe} 
                                        recipeSection={recipeSection}
                                        loading={loading}
                                        resetIngredients={() => {setIngredients([])
                                        setRecipe("");
                                        }}/>}
            
                      {recipe  && <Recipe recipe={recipe}/>}
            
             
        </section>     
    </main>
  )
}

export { FormData}
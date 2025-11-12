import React from 'react';
import './App.css';
import './styles/LandingPage.css';
import './styles/LikedRecipes.css';
import { Header } from './components/header.jsx';
import IngredientForm from './formdata.jsx';
import LandingPage from './components/LandingPage.jsx';
import LikedRecipes from './components/LikedRecipes.jsx';

function App() {
    const [currentView, setCurrentView] = React.useState('landing');
    const [likedRecipes, setLikedRecipes] = React.useState([]);
    const [currentRecipe, setCurrentRecipe] = React.useState(null);
    const [currentIngredients, setCurrentIngredients] = React.useState([]);

    // Load liked recipes from localStorage on mount
    React.useEffect(() => {
        const saved = localStorage.getItem('likedRecipes');
        if (saved) {
            try {
                setLikedRecipes(JSON.parse(saved));
            } catch (e) {
                console.error('Failed to load liked recipes:', e);
            }
        }
    }, []);

    // Save liked recipes to localStorage whenever they change
    React.useEffect(() => {
        localStorage.setItem('likedRecipes', JSON.stringify(likedRecipes));
    }, [likedRecipes]);

    const handleGetStarted = () => {
        setCurrentView('app');
    };

    const handleNavigate = (view) => {
        setCurrentView(view);
    };

    const handleLikeRecipe = (recipe, ingredients) => {
        const recipeId = Date.now().toString();
        const newLikedRecipe = {
            id: recipeId,
            content: recipe,
            ingredients: ingredients,
            likedAt: new Date().toISOString()
        };
        
        setLikedRecipes(prev => [newLikedRecipe, ...prev]);
        setCurrentRecipe(recipeId); // Mark as liked
    };

    const handleRemoveLikedRecipe = (recipeId) => {
        setLikedRecipes(prev => prev.filter(recipe => recipe.id !== recipeId));
        if (currentRecipe === recipeId) {
            setCurrentRecipe(null);
        }
    };

    const isCurrentRecipeLiked = () => {
        if (!currentRecipe) return false;
        return likedRecipes.some(recipe => recipe.id === currentRecipe);
    };

    return (
        <>
            <Header 
                currentView={currentView}
                onNavigate={handleNavigate}
                likedCount={likedRecipes.length}
            />
            
            {currentView === 'landing' && (
                <LandingPage onGetStarted={handleGetStarted} />
            )}
            
            {currentView === 'app' && (
                <IngredientForm 
                    onLikeRecipe={handleLikeRecipe}
                    isRecipeLiked={isCurrentRecipeLiked()}
                    currentRecipe={currentRecipe}
                    setCurrentRecipe={setCurrentRecipe}
                    setCurrentIngredients={setCurrentIngredients}
                    currentIngredients={currentIngredients}
                />
            )}
            
            {currentView === 'liked' && (
                <LikedRecipes 
                    likedRecipes={likedRecipes}
                    onRemoveRecipe={handleRemoveLikedRecipe}
                />
            )}
        </>
    );
}

export default App;

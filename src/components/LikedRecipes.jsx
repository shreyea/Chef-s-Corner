import React from 'react';
import '../styles/LikedRecipes.css';
import ReactMarkdown from 'react-markdown';

function LikedRecipes({ likedRecipes, onRemoveRecipe }) {
    if (likedRecipes.length === 0) {
        return (
            <div className="liked-recipes-container">
                <div className="empty-state">
                    <div className="empty-icon">💔</div>
                    <h2>No Liked Recipes Yet</h2>
                    <p>Start creating recipes and like the ones you love!</p>
                </div>
            </div>
        );
    }

    return (
        <div className="liked-recipes-container">
            <div className="liked-header">
                <h1>
                    <span className="icon">❤️</span>
                    Your Liked Recipes
                </h1>
                <p className="liked-count">{likedRecipes.length} recipe{likedRecipes.length !== 1 ? 's' : ''} saved</p>
            </div>

            <div className="liked-recipes-grid">
                {likedRecipes.map((recipe, index) => (
                    <div key={recipe.id} className="liked-recipe-card">
                        <div className="card-header">
                            <div className="card-number">#{index + 1}</div>
                            <button 
                                className="remove-btn"
                                onClick={() => onRemoveRecipe(recipe.id)}
                                title="Remove from liked"
                            >
                                ✕
                            </button>
                        </div>
                        
                        <div className="card-meta">
                            <span className="date">
                                <span className="meta-icon">📅</span>
                                {new Date(recipe.likedAt).toLocaleDateString()}
                            </span>
                            <span className="ingredients-count">
                                <span className="meta-icon">🥗</span>
                                {recipe.ingredients.length} ingredients
                            </span>
                        </div>

                        <div className="card-ingredients">
                            <h4>Ingredients Used:</h4>
                            <div className="ingredients-tags">
                                {recipe.ingredients.map((ing, i) => (
                                    <span key={i} className="ingredient-tag">{ing}</span>
                                ))}
                            </div>
                        </div>

                        <div className="card-recipe">
                            <ReactMarkdown>{recipe.content}</ReactMarkdown>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default LikedRecipes;

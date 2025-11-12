import React from 'react';
import ReactMarkdown from "react-markdown";

export default function Recipe({ recipe, onLikeRecipe, isLiked }) {
    return (
        <section className="recipe" role="region" aria-label="Generated recipe">
            <div className="recipe-header">
                <h2>Your Recipe</h2>
                <button 
                    className={`like-button ${isLiked ? 'liked' : ''}`}
                    onClick={onLikeRecipe}
                    title={isLiked ? "Remove from liked" : "Add to liked"}
                >
                    <span className="heart-icon">{isLiked ? '♥' : '♡'}</span>
                    <span className="like-text">{isLiked ? 'Liked' : 'Like'}</span>
                </button>
            </div>
            <ReactMarkdown>{recipe}</ReactMarkdown>
        </section>
    );
}
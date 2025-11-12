import React from 'react';
import '../styles/LandingPage.css';

function LandingPage({ onGetStarted }) {
    return (
        <div className="landing-page">
            <div className="landing-container">
                {/* Hero Section */}
                <section className="hero-section">
                    <div className="hero-content">
                        <div className="hero-badge">
                            <span className="badge-icon">✨</span>
                            <span>AI-Powered Recipe Generator</span>
                        </div>
                        
                        <h1 className="hero-title">
                            Transform Your Ingredients into 
                            <span className="gradient-text"> Delicious Recipes</span>
                        </h1>
                        
                        <p className="hero-description">
                            Simply enter what you have in your kitchen, and let our AI chef suggest 
                            amazing recipes tailored just for you. No waste, just taste!
                        </p>
                        
                        <div className="hero-cta">
                            <button className="btn-primary" onClick={onGetStarted}>
                                <span>Get Started Free</span>
                                <span className="btn-icon">→</span>
                            </button>
                            <button className="btn-secondary">
                                <span className="play-icon">▶</span>
                                <span>Watch Demo</span>
                            </button>
                        </div>
                        
                        <div className="hero-stats">
                            <div className="stat-item">
                                <div className="stat-number">10K+</div>
                                <div className="stat-label">Recipes Generated</div>
                            </div>
                            <div className="stat-divider"></div>
                            <div className="stat-item">
                                <div className="stat-number">5K+</div>
                                <div className="stat-label">Happy Cooks</div>
                            </div>
                            <div className="stat-divider"></div>
                            <div className="stat-item">
                                <div className="stat-number">98%</div>
                                <div className="stat-label">Success Rate</div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="hero-visual">
                        <div className="visual-card card-1">
                            <div className="card-icon">🍕</div>
                            <div className="card-title">Italian Pasta</div>
                            <div className="card-rating">⭐⭐⭐⭐⭐</div>
                        </div>
                        <div className="visual-card card-2">
                            <div className="card-icon">🍛</div>
                            <div className="card-title">Spicy Curry</div>
                            <div className="card-rating">⭐⭐⭐⭐⭐</div>
                        </div>
                        <div className="visual-card card-3">
                            <div className="card-icon">🥗</div>
                            <div className="card-title">Fresh Salad</div>
                            <div className="card-rating">⭐⭐⭐⭐⭐</div>
                        </div>
                    </div>
                </section>
                
                {/* Features Section */}
                <section className="features-section">
                    <div className="section-header">
                        <span className="section-badge">Why Choose Us</span>
                        <h2 className="section-title">Smart Cooking Made Simple</h2>
                        <p className="section-description">
                            Everything you need to turn everyday ingredients into extraordinary meals
                        </p>
                    </div>
                    
                    <div className="features-grid">
                        <div className="feature-card">
                            <div className="feature-icon">🤖</div>
                            <h3>AI-Powered</h3>
                            <p>Advanced AI analyzes your ingredients and suggests perfect recipe combinations</p>
                        </div>
                        
                        <div className="feature-card">
                            <div className="feature-icon">⚡</div>
                            <h3>Instant Results</h3>
                            <p>Get personalized recipes in seconds, no more endless searching</p>
                        </div>
                        
                        <div className="feature-card">
                            <div className="feature-icon">❤️</div>
                            <h3>Save Favorites</h3>
                            <p>Like and store your favorite recipes for quick access anytime</p>
                        </div>
                        
                        <div className="feature-card">
                            <div className="feature-icon">🌍</div>
                            <h3>Global Cuisine</h3>
                            <p>Discover recipes from different cultures and cooking styles</p>
                        </div>
                        
                        <div className="feature-card">
                            <div className="feature-icon">📱</div>
                            <h3>Mobile Friendly</h3>
                            <p>Cook from any device - desktop, tablet, or smartphone</p>
                        </div>
                        
                        <div className="feature-card">
                            <div className="feature-icon">🔒</div>
                            <h3>100% Free</h3>
                            <p>No subscriptions, no hidden fees - completely free to use</p>
                        </div>
                    </div>
                </section>
                
                {/* How It Works Section */}
                <section className="how-it-works">
                    <div className="section-header">
                        <span className="section-badge">Simple Process</span>
                        <h2 className="section-title">How It Works</h2>
                    </div>
                    
                    <div className="steps-container">
                        <div className="step-item">
                            <div className="step-number">1</div>
                            <div className="step-content">
                                <h3>Add Ingredients</h3>
                                <p>Enter what you have in your kitchen</p>
                            </div>
                        </div>
                        
                        <div className="step-arrow">→</div>
                        
                        <div className="step-item">
                            <div className="step-number">2</div>
                            <div className="step-content">
                                <h3>AI Magic</h3>
                                <p>Our AI creates perfect recipes</p>
                            </div>
                        </div>
                        
                        <div className="step-arrow">→</div>
                        
                        <div className="step-item">
                            <div className="step-number">3</div>
                            <div className="step-content">
                                <h3>Start Cooking</h3>
                                <p>Follow the recipe and enjoy!</p>
                            </div>
                        </div>
                    </div>
                </section>
                
                {/* CTA Section */}
                <section className="cta-section">
                    <div className="cta-content">
                        <h2>Ready to Start Cooking?</h2>
                        <p>Join thousands of home cooks creating amazing meals every day</p>
                        <button className="btn-cta" onClick={onGetStarted}>
                            Start Creating Recipes
                            <span className="btn-icon">→</span>
                        </button>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default LandingPage;

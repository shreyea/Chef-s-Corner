import logo from '../images/chef.png';

function Header({ currentView, onNavigate, likedCount = 0 }) {
    return (
        <header className="modern-header">
            <div className="header-container">
                <div className="header-left">
                    <img 
                        className="header-logo" 
                        src={logo} 
                        alt="Chef's Corner Logo" 
                    />
                    <h1 className="header-title">Chef's Corner</h1>
                </div>
                
                {currentView !== 'landing' && (
                    <nav className="header-nav">
                        <button 
                            className={`nav-item ${currentView === 'app' ? 'active' : ''}`}
                            onClick={() => onNavigate('app')}
                        >
                            <span>Create Recipe</span>
                        </button>
                        
                        <button 
                            className={`nav-item ${currentView === 'liked' ? 'active' : ''}`}
                            onClick={() => onNavigate('liked')}
                        >
                            <span>Liked</span>
                            {likedCount > 0 && (
                                <span className="badge">{likedCount}</span>
                            )}
                        </button>
                    </nav>
                )}
            </div>
        </header>
    );
}

export { Header };
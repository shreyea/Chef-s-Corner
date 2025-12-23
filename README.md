# Chef's Corner 🍳

A modern, production-ready AI-powered recipe generator that creates personalized recipes based on your ingredients. Built with React and Vite, featuring a fully responsive, accessible, and human-centered interface.

🌐 **Live Demo**: [https://shreyea.github.io/Chef-s-Corner/](https://shreyea.github.io/Chef-s-Corner/)

## ✨ Features

- **AI-Powered Recipe Generation**: Transform your ingredients into delicious recipes using advanced AI
- **Smart Recipe Suggestions**: Get realistic, practical recipes based on what you actually have
- **Save Your Favorites**: Like and store recipes for easy access later
- **Fully Mobile Responsive**: Works beautifully on phones, tablets, and desktops
- **Production Ready**: Includes error boundaries, accessibility features, and SEO optimization
- **Modern UI/UX**: Clean, intuitive design with smooth animations and transitions
- **Offline Recipe Storage**: Saves your liked recipes locally using browser storage

## 🚀 Quick Start

### Prerequisites

- **Node.js** 16.x or higher
- **npm** or **yarn**
- **Hugging Face API Token** (free - get one at [huggingface.co/settings/tokens](https://huggingface.co/settings/tokens))

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/shreyea/Chef-s-Corner.git
   cd Chef-s-Corner
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory:
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` and add your Hugging Face API token:
   ```env
   VITE_HF_TOKEN=your_huggingface_api_token_here
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```
   
   The app will open at `http://localhost:5173`

## 📦 Build & Deploy

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder with:
- Minified JavaScript and CSS
- Code splitting and lazy loading
- Removed console.logs and debug code
- Optimized assets and images

### Preview Production Build Locally

```bash
npm run preview
```

### Deploy to GitHub Pages

1. **Update repository settings**
   
   Ensure `vite.config.js` has the correct base path:
   ```javascript
   base: '/Chef-s-Corner/'  // Should match your repo name
   ```

2. **Deploy**
   ```bash
   npm run deploy
   ```
   
   This will build and deploy to GitHub Pages automatically.

3. **Enable GitHub Pages**
   - Go to your repository → Settings → Pages
   - Source: Deploy from a branch
   - Branch: `gh-pages` / `root`
   - Save

Your site will be live at `https://[username].github.io/[repo-name]/`

### Deploy to Other Platforms

#### Vercel
```bash
npm i -g vercel
vercel
```

#### Netlify
```bash
npm run build
# Drag and drop the dist/ folder to netlify.com
```

Or use Netlify CLI:
```bash
npm i -g netlify-cli
netlify deploy --prod --dir=dist
```

## 🔐 Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `VITE_HF_TOKEN` | Yes | Your Hugging Face API token for AI recipe generation |

**Security Notes:**
- Never commit `.env` files to version control
- `.env` is already in `.gitignore`
- Use `.env.example` as a template for other developers

## 🛠 Tech Stack

### Frontend
- **React 19.1.0** - JavaScript library for building user interfaces
- **Vite 7.0.4** - Next-generation frontend build tool with fast HMR

### AI & APIs
- **@huggingface/inference 4.5.3** - Hugging Face API client for AI model integration
- **Mistral-7B Models** - Open-source language models for recipe generation

### UI & Styling
- **react-markdown 8.0.6** - Markdown rendering for formatted recipe display
- **CSS3** - Modern CSS with custom properties (variables) for theming
- **Responsive Design** - Mobile-first approach with comprehensive breakpoints
- **Accessibility**: WCAG compliant with proper ARIA labels and focus states

## 🏗 Project Structure

```
chef/
├── public/                 # Static assets
├── src/
│   ├── components/        # React components
│   │   ├── ErrorBoundary.jsx
│   │   ├── header.jsx
│   │   ├── Ingre.jsx
│   │   ├── LandingPage.jsx
│   │   ├── LikedRecipes.jsx
│   │   └── Recipe.jsx
│   ├── images/           # Image assets
│   ├── styles/           # CSS modules
│   │   ├── App.css
│   │   ├── ErrorBoundary.css
│   │   ├── LandingPage.css
│   │   └── LikedRecipes.css
│   ├── ai.js            # AI integration logic
│   ├── App.jsx          # Main app component
│   ├── formdata.jsx     # Form handling
│   └── main.jsx         # Entry point
├── .env.example         # Environment template
├── .gitignore
├── index.html
├── package.json
├── vite.config.js       # Vite configuration
└── README.md
```

## 🎨 Color Palette

```css
--tomato-red: #E63946      /* Primary CTA and accents */
--mustard-yellow: #F4A261  /* Secondary highlights */
--cream-white: #FFF3E8     /* Background */
--olive-green: #6D8F5B     /* Hero and sections */
--charcoal: #2B2B2B        /* Text */
```

## 📱 Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔒 Security Features

✅ **Environment Variable Protection** - API keys never exposed in client code  
✅ **Error Boundaries** - Graceful error handling prevents app crashes  
✅ **Input Validation** - All user inputs are validated and sanitized  
✅ **No Source Maps in Production** - Code is minified and obfuscated  
✅ **Console Logs Removed** - Debug code stripped from production builds  
✅ **HTTPS Only** - Secure connections for API calls  

## 🚀 Performance Optimizations

- Code splitting with dynamic imports
- Lazy loading of components
- Optimized bundle size with tree shaking
- CSS optimization and minification
- Image optimization
- Font preloading
- Caching strategies

## 🧪 Testing (Coming Soon)

```bash
# Unit tests
npm run test

# E2E tests
npm run test:e2e
```

## 📝 Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run deploy` | Deploy to GitHub Pages |
| `npm run lint` | Run ESLint |

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Hugging Face for AI model infrastructure
- React and Vite teams for excellent developer tools
- Open source community for inspiration and support

## 📧 Contact

For questions or feedback, please open an issue on GitHub.

---

**Made with ❤️ by Chef's Corner Team**
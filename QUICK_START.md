# 🚀 Quick Deployment Guide

## Prerequisites
- Node.js 16+ installed
- Git configured
- GitHub account
- Hugging Face API token ([Get one here](https://huggingface.co/settings/tokens))

## Step-by-Step Deployment

### 1️⃣ Setup Environment (First Time Only)

```bash
# Clone or navigate to project
cd Chef-s-Corner

# Install dependencies
npm install

# Create environment file
cp .env.example .env

# Edit .env and add your token
# VITE_HF_TOKEN=your_token_here
```

### 2️⃣ Test Locally

```bash
# Start development server
npm run dev

# Test the app at http://localhost:5173
# - Add ingredients
# - Generate a recipe
# - Like a recipe
# - Navigate between views
```

### 3️⃣ Build & Preview

```bash
# Create production build
npm run build

# Preview production build locally
npm run preview

# Test at http://localhost:4173
```

### 4️⃣ Deploy to GitHub Pages

```bash
# Deploy (builds automatically)
npm run deploy

# Wait for deployment to complete (30-60 seconds)
```

### 5️⃣ Configure GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under **Source**, select:
   - Branch: `gh-pages`
   - Folder: `/ (root)`
4. Click **Save**
5. Wait 1-2 minutes for deployment

### 6️⃣ Verify Deployment

Visit: `https://shreyea.github.io/Chef-s-Corner/`

Test:
- ✅ Landing page loads
- ✅ Can add ingredients
- ✅ Recipe generation works
- ✅ Can like recipes
- ✅ Liked recipes persist after refresh
- ✅ Mobile responsive

## 🎯 One-Command Deploy

After initial setup:

```bash
npm run deploy
```

That's it! Your changes will be live in 1-2 minutes.

## 🔧 Troubleshooting

### Build Fails
```bash
# Clear and rebuild
rm -rf node_modules dist
npm install
npm run build
```

### API Not Working
- Check `.env` file exists
- Verify `VITE_HF_TOKEN` is set correctly
- Ensure token has no extra spaces
- Token must start with `hf_`

### 404 Error on Refresh
- Ensure `vite.config.js` has correct base path
- Check GitHub Pages is using `gh-pages` branch
- Wait 2-3 minutes after deployment

### Changes Not Appearing
```bash
# Hard refresh browser (Ctrl+Shift+R or Cmd+Shift+R)
# Or clear browser cache
```

## 📱 Alternative Deployment Options

### Vercel (Recommended)
```bash
npm i -g vercel
vercel login
vercel --prod
```
Then add `VITE_HF_TOKEN` in Vercel dashboard

### Netlify
```bash
npm i -g netlify-cli
netlify login
netlify deploy --prod --dir=dist
```
Then add `VITE_HF_TOKEN` in Netlify dashboard

## 🎉 Success!

Your AI recipe generator is now live and serving recipes worldwide!

**Live URL**: https://shreyea.github.io/Chef-s-Corner/

---

Need help? Check [DEPLOYMENT.md](DEPLOYMENT.md) for detailed guide.

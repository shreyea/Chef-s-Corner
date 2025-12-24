# Deploying Chef's Corner to Vercel

## Prerequisites

1. **Vercel Account**: Sign up at [vercel.com](https://vercel.com)
2. **Hugging Face API Token**: Get yours at [huggingface.co/settings/tokens](https://huggingface.co/settings/tokens)

## Quick Deploy

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Push your code to GitHub** (if not already done):
   ```bash
   git add .
   git commit -m "Ready for Vercel deployment"
   git push origin main
   ```

2. **Import to Vercel**:
   - Go to [vercel.com/new](https://vercel.com/new)
   - Click "Import Git Repository"
   - Select your `Chef-s-Corner` repository
   - Click "Import"

3. **Configure Environment Variables**:
   - In the deployment settings, add:
     - **Name**: `VITE_HF_TOKEN`
     - **Value**: Your Hugging Face API token
   - Click "Add"

4. **Deploy**:
   - Click "Deploy"
   - Wait for the build to complete (2-3 minutes)
   - Your app will be live at `https://your-project-name.vercel.app`

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Set Environment Variable** (create `.env` file):
   ```bash
   # Create .env file
   cp .env.example .env
   
   # Edit .env and add your Hugging Face token
   # VITE_HF_TOKEN=your_actual_token_here
   ```

4. **Deploy**:
   ```bash
   # First deployment
   vercel
   
   # Production deployment
   vercel --prod
   ```

5. **Add Environment Variables** (if not using .env):
   ```bash
   vercel env add VITE_HF_TOKEN
   ```
   Then paste your Hugging Face token when prompted.

## Post-Deployment

### Update Environment Variables

1. Go to your project on [vercel.com](https://vercel.com)
2. Navigate to **Settings** → **Environment Variables**
3. Add/Edit `VITE_HF_TOKEN`
4. Redeploy for changes to take effect

### Custom Domain (Optional)

1. Go to **Settings** → **Domains**
2. Add your custom domain
3. Configure DNS records as instructed

### Continuous Deployment

Vercel automatically deploys:
- **Production**: Every push to `main` branch
- **Preview**: Every push to other branches or pull requests

## Troubleshooting

### Build Fails

- Check that `VITE_HF_TOKEN` is set in Vercel environment variables
- Verify `package.json` and `package-lock.json` are committed
- Check build logs in Vercel dashboard

### API Token Issues

- Ensure your Hugging Face token is valid
- Token must have read access to inference API
- Regenerate token if expired

### 404 Errors on Refresh

- This is already handled by `vercel.json` rewrites
- All routes redirect to `index.html` for SPA routing

## Performance Optimization

The project is already optimized:
- ✅ Code splitting (vendor, markdown, ai chunks)
- ✅ Tree shaking enabled
- ✅ Console logs removed in production
- ✅ Minification with terser
- ✅ Asset caching headers
- ✅ No source maps in production

## Monitoring

- **Analytics**: Enable in Vercel dashboard → Analytics
- **Logs**: View real-time logs in dashboard → Deployments → [Your deployment] → Logs
- **Performance**: Check Web Vitals in Analytics tab

## Security

- ✅ Environment variables are encrypted
- ✅ API tokens never exposed in client code
- ✅ `.env` files are gitignored
- ✅ Production builds are minified and obfuscated

## Support

For issues, check:
- [Vercel Documentation](https://vercel.com/docs)
- [Project Repository Issues](https://github.com/shreyea/Chef-s-Corner/issues)

---

**Your app is ready for deployment! 🚀**

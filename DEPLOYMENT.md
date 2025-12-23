# Production Deployment Checklist ✅

## Pre-Deployment

### Environment Setup
- [ ] Create `.env` file with `VITE_HF_TOKEN`
- [ ] Verify `.env` is in `.gitignore`
- [ ] Test with production API key
- [ ] Ensure `.env.example` is up to date

### Code Quality
- [ ] Run `npm run lint` - no errors
- [ ] Remove all debug code and console.logs
- [ ] Test error boundaries work correctly
- [ ] Verify all components have proper prop types
- [ ] Check for unused imports and dependencies

### Testing
- [ ] Test all user flows (add ingredient, generate recipe, like recipe)
- [ ] Test on multiple browsers (Chrome, Firefox, Safari, Edge)
- [ ] Test on mobile devices (iOS, Android)
- [ ] Test with slow/no internet connection
- [ ] Test error scenarios (invalid API key, rate limits)
- [ ] Test accessibility with keyboard navigation
- [ ] Test with screen reader

### Performance
- [ ] Run production build: `npm run build`
- [ ] Check bundle size is acceptable (<500KB)
- [ ] Verify images are optimized
- [ ] Test loading speed with Chrome DevTools
- [ ] Check Lighthouse score (aim for 90+)

### SEO & Meta Tags
- [ ] Verify all meta tags in `index.html`
- [ ] Test Open Graph tags with Facebook debugger
- [ ] Test Twitter Card with Twitter validator
- [ ] Ensure canonical URL is correct
- [ ] Add structured data if needed

### Security
- [ ] Confirm no API keys in client code
- [ ] Verify HTTPS for all external resources
- [ ] Check CORS policy is configured
- [ ] Ensure no sensitive data in localStorage
- [ ] Review error messages don't leak internal info

## Deployment Steps

### GitHub Pages

1. **Prepare Repository**
   ```bash
   git add .
   git commit -m "Production ready deployment"
   git push origin main
   ```

2. **Deploy**
   ```bash
   npm run deploy
   ```

3. **Configure GitHub Pages**
   - Go to repository Settings → Pages
   - Source: Deploy from branch `gh-pages`
   - Custom domain (optional)

4. **Verify Deployment**
   - Visit: `https://[username].github.io/[repo-name]/`
   - Test all features work
   - Check API calls succeed

### Alternative Platforms

#### Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel --prod

# Add environment variables in Vercel dashboard
# Settings → Environment Variables
# Add: VITE_HF_TOKEN
```

#### Netlify
```bash
# Install Netlify CLI
npm i -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy --prod --dir=dist

# Add environment variables in Netlify dashboard
# Site settings → Build & deploy → Environment
# Add: VITE_HF_TOKEN
```

## Post-Deployment

### Verification
- [ ] Visit live site and test all features
- [ ] Test recipe generation with real API
- [ ] Verify liked recipes persist after refresh
- [ ] Check mobile responsiveness
- [ ] Test social media sharing
- [ ] Verify analytics tracking (if implemented)

### Monitoring
- [ ] Set up error tracking (Sentry, LogRocket, etc.)
- [ ] Monitor API usage and rate limits
- [ ] Track performance metrics
- [ ] Monitor user feedback

### Documentation
- [ ] Update README with live demo link
- [ ] Document any deployment-specific notes
- [ ] Create changelog for version tracking
- [ ] Update API documentation if needed

## Common Issues & Solutions

### Build Fails
```bash
# Clear cache and rebuild
rm -rf node_modules dist
npm install
npm run build
```

### Environment Variables Not Working
- Ensure variables start with `VITE_`
- Restart dev server after changing `.env`
- Check `.env` is in project root
- Verify no trailing spaces in values

### 404 on GitHub Pages Refresh
- Add `404.html` that redirects to `index.html`
- Or use hash router instead of browser router

### API Rate Limits
- Implement request throttling
- Add retry logic with exponential backoff
- Display user-friendly error messages
- Consider caching responses

### Slow Loading
- Check bundle size with `npm run build -- --stats`
- Implement code splitting
- Lazy load non-critical components
- Optimize images and assets

## Production Environment Variables

Required for deployment:

```env
# Hugging Face API Token
VITE_HF_TOKEN=hf_xxxxxxxxxxxxxxxxxxxxxxxxxxxxx

# Optional: Analytics
VITE_GA_ID=G-XXXXXXXXXX  # Google Analytics
VITE_SENTRY_DSN=https://xxx@xxx.ingest.sentry.io/xxx
```

## Performance Benchmarks

Target metrics:
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3.5s
- **Lighthouse Performance**: > 90
- **Lighthouse Accessibility**: > 95
- **Lighthouse Best Practices**: > 90
- **Lighthouse SEO**: > 95

## Rollback Plan

If deployment fails:

1. **Revert to previous version**
   ```bash
   git revert HEAD
   git push origin main
   npm run deploy
   ```

2. **Or rollback to specific commit**
   ```bash
   git reset --hard <commit-hash>
   git push origin main --force
   npm run deploy
   ```

3. **GitHub Pages**: Use previous deployment in Actions tab

## Support & Maintenance

### Regular Updates
- Update dependencies monthly: `npm update`
- Check for security vulnerabilities: `npm audit`
- Monitor API changes from Hugging Face
- Keep Node.js and npm updated

### User Feedback
- Monitor GitHub issues
- Track error reports
- Collect user suggestions
- Prioritize bug fixes

---

**Last Updated**: December 23, 2025
**Deployment Status**: ✅ Production Ready

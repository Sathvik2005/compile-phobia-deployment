# Compile Phobia - GitHub Analytics & Repository Insights

A full-stack application that provides comprehensive GitHub repository analytics, contributor insights, and code metrics.

## Tech Stack

### Frontend
- **React 18** - UI framework
- **Vite** - Build tool
- **Framer Motion** - Animations
- **Recharts** - Data visualization
- **Axios** - HTTP client

### Backend
- **Node.js/Express** - Server framework
- **GitHub API** - Data source
- **CORS** - Cross-origin support
- **Dotenv** - Environment configuration

## Project Structure

```
compile-phobia/
├── backend/              # Express.js backend
│   ├── server.js        # Main server file
│   ├── githubAnalytics.js
│   ├── package.json
│   └── .env.example
├── devsync-frontend/    # React + Vite frontend
│   ├── src/
│   ├── package.json
│   ├── vite.config.js
│   └── .env.example
├── vercel.json          # Vercel deployment config
├── package.json         # Root package.json
└── README.md
```

## Setup & Installation

### Prerequisites
- Node.js 18+ 
- npm 9+
- GitHub Personal Access Token (optional but recommended)

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/Sathvik2005/compile-phobia.git
   cd compile-phobia
   ```

2. **Install dependencies**
   ```bash
   npm run install-all
   ```

3. **Configure environment variables**
   ```bash
   # Backend
   cp backend/.env.example backend/.env
   # Add your GITHUB_TOKEN to backend/.env
   
   # Frontend
   cp devsync-frontend/.env.example devsync-frontend/.env.local
   ```

4. **Run in development mode**
   ```bash
   npm run dev
   ```
   - Frontend: http://localhost:5173
   - Backend: http://localhost:5000

## Available Endpoints

### Repository Analytics
- `GET /api/repo/:owner/:repo` - Repository information
- `GET /api/contributors/:owner/:repo` - List contributors
- `GET /api/commits/:owner/:repo` - Commit history
- `GET /api/dashboard/:owner/:repo` - Full dashboard data

### Analysis Endpoints
- `GET /api/contributors-analysis/:owner/:repo` - Contributor analysis
- `GET /api/leaderboard/:owner/:repo` - Top contributors
- `GET /api/commit-frequency/:owner/:repo` - Commit frequency
- `GET /api/repo-health/:owner/:repo` - Repository health metrics
- `GET /api/risk-analysis/:owner/:repo` - Risk assessment

### Utility Endpoints
- `GET /api/health` - Health check
- `GET /api/rate-limit` - GitHub API rate limit info
- `GET /api/resolve` - Resolve GitHub user/repo input

## Deployment to Vercel

### Prerequisites
1. GitHub account with a personal access token
2. Vercel account (free tier works)
3. This repository connected to Vercel

### Deployment Steps

1. **Add Environment Variable to Vercel**
   - Go to Vercel Dashboard → Select your project
   - Settings → Environment Variables
   - Add variable: `GITHUB_TOKEN` = your_github_token
   - Redeploy

2. **Create GitHub Token**
   - Visit: https://github.com/settings/tokens
   - Click "Generate new token (classic)"
   - Select scopes: `repo`, `public_repo`
   - Copy the token and add to Vercel

3. **Deploy**
   - Push changes to main branch
   - Vercel automatically deploys
   - Visit your Vercel deployment URL

## Environment Variables

### Backend (.env)
```
PORT=5000
NODE_ENV=production
GITHUB_TOKEN=your_token_here
CORS_ORIGIN=*
```

### Frontend (.env.local)
```
VITE_API_URL=http://localhost:5000
```

## Features

✅ Repository metrics and statistics
✅ Contributor analysis and leaderboards
✅ Commit history and frequency analysis
✅ Code quality metrics
✅ Risk analysis
✅ Repository health scoring
✅ Issue tracking
✅ Pull request analytics
✅ Responsive UI with data visualizations

## Building for Production

```bash
# Build frontend
cd devsync-frontend
npm run build

# Backend is ready as-is (runs with node server.js)
cd ../backend
npm start
```

## Troubleshooting

### GitHub Rate Limit Exceeded
- Add `GITHUB_TOKEN` to your environment
- Authenticated requests have higher limits (5000/hour vs 60/hour)

### CORS Errors
- Ensure backend is configured with correct CORS_ORIGIN
- In production, Vercel handles this automatically

### Build Issues
- Clear `node_modules`: `rm -rf node_modules devsync-frontend/node_modules backend/node_modules`
- Reinstall: `npm run install-all`
- Check Node.js version: `node -v` (should be 18+)

## License

MIT

## Author

[@Sathvik2005](https://github.com/Sathvik2005)

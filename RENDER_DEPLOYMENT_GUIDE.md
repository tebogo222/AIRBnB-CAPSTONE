# 🚀 Deploy Backend to Render

Your project already has a `render.yaml` file configured! Follow these steps to deploy.

---

## 📋 Prerequisites

1. ✅ Code pushed to GitHub
2. ✅ GitHub account
3. ✅ Render account (free at https://render.com)
4. ✅ MongoDB Atlas connection string (from `.env`)
5. ✅ JWT_SECRET (from `.env`)

---

## 🎯 Step 1: Push to GitHub

Make sure your code is on GitHub with the `render.yaml` file:

```bash
git add .
git commit -m "Add render deployment config"
git push origin main
```

Verify your GitHub repo has:
- `render.yaml` at root
- `backend/` folder with `server.js` and `package.json`

---

## 🎯 Step 2: Connect Render to GitHub

1. Go to https://render.com
2. Sign up or log in
3. Click **"New +"** in top right
4. Select **"Web Service"**
5. Click **"Build and deploy from a Git repository"**
6. Click **"Connect account"** next to GitHub
7. Authorize Render to access your GitHub
8. Select your **AIRBnB-CAPSTONE** repository
9. Click **"Connect"**

---

## 🎯 Step 3: Configure the Service

After connecting your repo, you'll see a form. Fill it out:

### Basic Settings:
- **Name**: `airbnb-backend` (or any name)
- **Environment**: `Node`
- **Region**: Choose closest to you (e.g., `Oregon`, `Frankfurt`)
- **Branch**: `main`
- **Build Command**: `npm install` (should auto-populate)
- **Start Command**: `npm start` (should auto-populate)

### Root Directory:
- **Root Directory**: `backend` (this is important!)

### Plan:
- **Plan**: Free (or upgrade later)

---

## 🎯 Step 4: Add Environment Variables

This is **CRITICAL** - your app needs these to work!

1. Scroll down to **"Environment Variables"** section
2. Add these variables:

| Key | Value |
|-----|-------|
| `NODE_ENV` | `production` |
| `MONGODB_URI` | Your MongoDB Atlas connection string |
| `JWT_SECRET` | Your JWT secret |

### Where to find these:

**MONGODB_URI**: 
- Go to MongoDB Atlas dashboard
- Click "Connect" on your cluster
- Copy the connection string
- Replace `<username>` and `<password>` with your credentials
- Example: `mongodb+srv://user:password@cluster.mongodb.net/airbnb_db?retryWrites=true&w=majority`

**JWT_SECRET**:
- Use the value from your root `.env` file
- Or create a strong random string: `openssl rand -base64 32`

---

## 🎯 Step 5: Deploy

1. Click **"Create Web Service"** button
2. Render will start building automatically
3. Watch the logs in real-time
4. It should take 2-5 minutes

### Logs to watch for:
```
✅ Build started...
✅ npm install completed
✅ Server running on port 10000
✅ MongoDB connected
```

---

## ✅ Success!

Once deployed, you'll see:
- ✅ Status: **"Live"** (green)
- ✅ Your backend URL: `https://airbnb-backend-xxxxx.onrender.com`

---

## 🔗 Connect Your Frontend

Once your backend is deployed, update your frontend to use it:

### Edit `src/config.js`:

```javascript
const API_BASE_URL = 
  process.env.REACT_APP_API_URL || 
  'https://airbnb-backend-xxxxx.onrender.com';  // Your Render URL

export function getApiUrl(endpoint) {
  return `${API_BASE_URL}/${endpoint}`;
}
```

Or set environment variable in your frontend's `.env`:

```
REACT_APP_API_URL=https://airbnb-backend-xxxxx.onrender.com
```

---

## 🧪 Test Your Deployment

### Test the backend is running:

```bash
curl https://airbnb-backend-xxxxx.onrender.com/api/listings
```

Should return your listings JSON.

### Test login endpoint:

```bash
curl -X POST https://airbnb-backend-xxxxx.onrender.com/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"david.thompson@host.com","password":"password123","role":"host"}'
```

Should return a JWT token.

---

## ⚠️ Common Issues

### Issue: "Build failed"
- **Check**: `render.yaml` root directory is set to `backend`
- **Check**: `backend/package.json` exists
- **Check**: No syntax errors in code

### Issue: "Service crashed"
- **Check**: MONGODB_URI is correct and accessible
- **Check**: JWT_SECRET is set
- **Check**: NODE_ENV is set to `production`
- **Check**: Backend port is using `process.env.PORT || 10000`

### Issue: "Connection refused"
- **Check**: MongoDB Atlas connection string is correct
- **Check**: Your IP is whitelisted in MongoDB Atlas
  - Go to MongoDB Atlas → Network Access
  - Add `0.0.0.0/0` to allow all IPs (development only)

### Issue: "CORS errors when calling from frontend"
- **Check**: Your backend CORS includes your frontend URL
- **Update**: In `backend/server.js`, add your frontend URL to `allowedOrigins`

```javascript
const allowedOrigins = [
  'http://localhost:3000',
  'https://your-frontend-url.netlify.app',  // Add this
  'https://zaio-capstone-project.netlify.app'
];
```

Then redeploy to Render.

---

## 📊 Monitoring

After deployment, you can:

1. **View Logs**: Click "Logs" tab in Render dashboard
2. **Check Status**: Green "Live" status means it's running
3. **View Metrics**: Click "Metrics" tab to see CPU, memory, requests

---

## 🔄 Redeploying (Updates)

When you make changes and push to GitHub:

1. Go to Render dashboard
2. Your service will auto-detect the new push
3. Click "Deploy latest commit" (or auto-deploys if enabled)
4. Wait for build to complete

You can also enable **"Auto-Deploy"** in service settings to deploy on every push.

---

## 💰 Cost

- **Free plan**: 
  - Free tier with limitations
  - Service spins down after 15 mins of inactivity
  - Good for development/demo
  
- **Paid plan**: 
  - Always running
  - Better performance
  - Starts at $7/month

---

## 📝 Your Current Config

Your `render.yaml` is already set up:

```yaml
services:
  - type: web
    name: airbnb-backend
    env: node
    plan: free
    root: backend                    # ✅ Correct
    buildCommand: npm install        # ✅ Correct
    startCommand: npm start          # ✅ Correct
    envVars:
      - key: NODE_ENV
        value: production            # ✅ Correct
```

Just add `MONGODB_URI` and `JWT_SECRET` in the Render dashboard!

---

## ✨ Quick Checklist

- [ ] Code pushed to GitHub
- [ ] Render account created
- [ ] GitHub connected to Render
- [ ] Service created (name: `airbnb-backend`)
- [ ] Root directory set to `backend`
- [ ] `NODE_ENV` = `production`
- [ ] `MONGODB_URI` set
- [ ] `JWT_SECRET` set
- [ ] Deploy clicked
- [ ] Status shows "Live" ✅
- [ ] Backend URL copied
- [ ] Frontend updated with backend URL

---

## 🎉 Success!

Your backend is now live! You can:
- ✅ Make API calls from anywhere
- ✅ Test with Postman
- ✅ Connect your frontend
- ✅ Share the URL with others

**Backend URL**: `https://airbnb-backend-xxxxx.onrender.com`

---

## 📚 Next Steps

1. Deploy frontend to Netlify
2. Add more listings/users to MongoDB
3. Test end-to-end functionality
4. Monitor logs and metrics
5. Handle any CORS issues
6. Consider paid plan if you get traffic

Good luck! 🚀

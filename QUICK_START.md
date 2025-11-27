# 🚀 Quick Start - 5 Minute Setup

## Prerequisites
- Node.js installed
- MongoDB (cloud or local)
- Code editor (VS Code)

## Step 1: Environment Variables (2 minutes)

**Create `/AIRBnB-CAPSTONE/.env`:**
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/airbnb_db
JWT_SECRET=your_super_secret_key_minimum_32_characters_long_random_string
NODE_ENV=development
REACT_APP_API_URL=http://localhost:5000
```

**Create `/AIRBnB-CAPSTONE/backend/.env`:**
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/airbnb_db
JWT_SECRET=your_super_secret_key_minimum_32_characters_long_random_string
NODE_ENV=development
PORT=5000
```

## Step 2: Install & Start (3 minutes)

```bash
# In root directory
npm install

# Backend terminal
npm run start:backend

# Frontend terminal (new terminal)
npm start
```

✅ **App is now running at http://localhost:3000**

---

## That's It! 🎉

### Next: Add Sample Data

Visit MongoDB Atlas or use their UI to insert a sample listing with:
- `address.city`: "New York"
- `address.country`: "USA"  
- `propertyDetails.maxGuests`: 4
- `availability.isAvailable`: true
- `pricing.basePrice`: 150

### Test the App

1. Go to http://localhost:3000
2. Use navbar search to find listings
3. Click listing to see details

---

## Troubleshooting (2 min fixes)

**Port already in use?**
```bash
# Windows
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# Mac/Linux  
lsof -i :5000
kill -9 <PID>
```

**MongoDB connection failed?**
- Check `.env` has correct URI
- Verify IP is whitelisted in Atlas
- Check MongoDB is running (local)

**No listings showing?**
- Add sample data via MongoDB UI
- Check backend logs for errors
- Verify database has listings

---

## Key Files Modified

- ✅ `src/components/Navbar.js` - Working search with dates/guests
- ✅ `src/pages/Locations.js` - Enhanced filtering
- ✅ `backend/server.js` - Better API filtering
- ✅ Fixed all 7 ESLint warnings

---

## Complete Docs

- `SETUP_GUIDE.md` - Full setup with details
- `TESTING_GUIDE.md` - Testing & debugging
- `FIXES_SUMMARY.md` - All changes made

---

**Your app is ready! Start the servers and test it out.** 🚀

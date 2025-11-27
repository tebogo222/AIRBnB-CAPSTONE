# Testing & Troubleshooting Guide

## Quick Start Checklist

Before reporting issues, verify:
- [ ] MongoDB is running and connected
- [ ] `.env` file exists with all required variables
- [ ] Backend server is running on port 5000
- [ ] Frontend is running on port 3000
- [ ] No port conflicts

## Testing the Application

### 1. Backend API Testing

#### Test MongoDB Connection
```bash
cd backend
node -e "
const mongoose = require('mongoose');
require('dotenv').config();
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('✓ Connected to MongoDB'))
  .catch(err => console.log('✗ Connection failed:', err.message));
"
```

#### Test API Endpoints with cURL

**Get all listings:**
```bash
curl http://localhost:5000/api/listings
```

**Get listings by city:**
```bash
curl "http://localhost:5000/api/listings?city=New%20York&country=USA"
```

**Get listings by guest count:**
```bash
curl "http://localhost:5000/api/listings?guests=4"
```

**Get cities:**
```bash
curl http://localhost:5000/api/cities
```

### 2. Frontend Testing

#### Test Navigation
1. Start frontend: `npm start`
2. Page loads at `http://localhost:3000`
3. Verify navbar displays with logo
4. Click on different nav items

#### Test Search Functionality
1. Open homepage
2. Select a location from dropdown
3. Select check-in date
4. Select check-out date  
5. Set number of guests (use +/- buttons)
6. Click search button
7. Should navigate to `/locations` page with filters

#### Test Listings Display
1. Go to `/locations` page
2. Should display "No stays found" if no data
3. If MongoDB has listings, should display them with:
   - Image
   - Title/Room type
   - Guest capacity and bedrooms
   - Price per night
   - Ratings and reviews

#### Test Listing Details
1. Click on any listing card
2. Should navigate to `/locations/:id`
3. Should display full listing details

### 3. Authentication Testing

#### Register a Guest Account
1. Click "Sign Up"
2. Select "Guest" role
3. Fill form with:
   - First Name
   - Last Name
   - Email
   - Password
4. Click register
5. Should redirect to homepage

#### Register a Host Account
1. Click "Become a host"
2. Select "Host" role
3. Fill form with required fields
4. Click register
5. Should show success message

#### Login
1. Click account icon or login link
2. Enter email and password
3. Click login
4. Should store token and show user menu

## Common Issues & Solutions

### Issue 1: "Cannot GET /api/listings"
**Symptoms**: 404 error when accessing API

**Solutions**:
```bash
# Check if backend is running
curl http://localhost:5000/api/cities

# If not running, start backend
npm run start:backend

# Check backend logs for errors
# You should see "Express listening on port 5000"
```

### Issue 2: "MongoDB connection failed"
**Symptoms**: MongoDB connection timeout or auth error

**Solutions**:

Check MongoDB URI format:
```env
# MongoDB Atlas
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/database?retryWrites=true&w=majority

# Local MongoDB
MONGODB_URI=mongodb://localhost:27017/airbnb_db
```

Verify MongoDB is running:
```bash
# Windows
mongod

# Mac
brew services start mongodb-community

# Linux
sudo systemctl start mongod

# Check if running
mongosh # or mongo for older versions
```

Check credentials:
- Verify username/password are correct in Atlas
- Ensure IP is whitelisted (add 0.0.0.0/0 for development)
- Check for special characters in password (may need URL encoding)

### Issue 3: CORS Errors in Console
**Symptoms**: Browser console shows "Access to XMLHttpRequest has been blocked by CORS policy"

**Solutions**:
1. Verify backend is running
2. Check that `REACT_APP_API_URL` in frontend config points to correct backend
3. Backend CORS settings are already configured, but verify in `backend/server.js`:

```javascript
// Should have this in server.js
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  // ... rest of CORS config
});
```

### Issue 4: "JWT_SECRET is not set"
**Symptoms**: Backend crashes with error message

**Solutions**:
1. Create `.env` file in root directory
2. Add: `JWT_SECRET=your_very_long_secret_key_here`
3. Create `.env` in backend directory with same JWT_SECRET
4. Restart backend

### Issue 5: Port 3000 or 5000 Already in Use
**Symptoms**: "Address already in use" error

**Solutions**:
```bash
# Find process using port 5000 (Windows)
netstat -ano | findstr :5000

# Kill process
taskkill /PID <PID> /F

# Or change port in React
PORT=3001 npm start

# Or change port in backend
# Edit backend/server.js PORT variable
```

### Issue 6: Blank Listings Page
**Symptoms**: Navigate to locations, see "No stays found"

**Solutions**:
1. Add sample listings to MongoDB
2. Run seed script from SETUP_GUIDE.md
3. Or manually insert via MongoDB Atlas UI
4. Verify listings exist:
```bash
curl http://localhost:5000/api/listings
# Should return JSON with listings array
```

### Issue 7: Images Not Loading
**Symptoms**: Listing cards show placeholder image

**Solutions**:
1. Check image URLs in database - should be valid HTTP/HTTPS
2. Use this curl to test:
```bash
curl -i -X GET "https://via.placeholder.com/400x300"
```
3. Verify internet connection (external images need connectivity)
4. Add fallback image handling (already implemented in code)

### Issue 8: "Cannot find module" Errors
**Symptoms**: Backend crash with module not found

**Solutions**:
```bash
# Reinstall dependencies
cd backend
rm -rf node_modules
npm install
npm start
```

### Issue 9: User Registration/Login Not Working
**Symptoms**: Form submission does nothing or shows error

**Solutions**:
1. Check backend logs for error details
2. Verify MongoDB is running
3. Check network tab in browser DevTools:
   - Look for failed POST requests
   - Check response status and body
4. Ensure form fields match API expectations
5. Try API directly:
```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"firstName":"John","lastName":"Doe","email":"test@example.com","password":"password123"}'
```

## Performance Testing

### Check Response Times
```bash
# Time the API request
curl -w "Total: %{time_total}s\n" -o /dev/null http://localhost:5000/api/listings

# Should respond in < 500ms for empty database
# < 1s with sample data
```

### Test with Many Listings
```javascript
// Run in MongoDB shell to insert 100 test listings
for(let i = 0; i < 100; i++) {
  db.listings.insertOne({
    title: `Test Listing ${i}`,
    address: {
      city: "New York",
      country: "USA"
    },
    propertyDetails: {
      maxGuests: 4
    },
    availability: {
      isAvailable: true
    }
  });
}
```

Then test pagination:
```bash
curl "http://localhost:5000/api/listings?page=1&limit=20"
curl "http://localhost:5000/api/listings?page=2&limit=20"
```

## Browser DevTools Debugging

### Console Tab
Look for JavaScript errors:
- Red X icons = errors
- Orange warnings = warnings
- Check error messages and stack traces

### Network Tab
Inspect API requests:
1. Click on request
2. Check "Response" tab for API response
3. Check "Headers" tab for request details
4. Status should be 200-299 for success

### Storage Tab
Check localStorage for auth tokens:
1. Open DevTools → Application/Storage
2. Look for `authToken` or similar
3. Verify it's not empty after login

## Log Files & Debugging

### Backend Logs
Terminal shows:
- Express server starting
- MongoDB connection status
- API request logs
- Error messages with stack traces

### Enable Debug Mode
```env
# In .env file
DEBUG=* npm run start:backend
```

### Frontend Logs
Browser console shows:
- React warnings/errors
- Network request logs
- Custom console.logs from code

## Testing Checklist

Run through these tests to verify everything works:

### Basic Functionality
- [ ] Frontend loads without errors
- [ ] Navbar displays correctly
- [ ] Navigation between pages works
- [ ] Footer displays

### Search Functionality  
- [ ] Location dropdown shows cities
- [ ] Date pickers work
- [ ] Guest counter works (+/- buttons)
- [ ] Search button navigates to results

### Listings
- [ ] Listings page shows results (if data exists)
- [ ] Clicking listing shows details
- [ ] Pagination works (if multiple pages)
- [ ] Back button works

### Authentication
- [ ] Can register as guest
- [ ] Can register as host
- [ ] Can login with credentials
- [ ] Login shows user menu
- [ ] Can logout

### Host Features
- [ ] Host can create listing
- [ ] Host can view their listings
- [ ] Host can edit listing
- [ ] Host can view reservations

### Guest Features
- [ ] Guest can view listings
- [ ] Guest can book property
- [ ] Guest can view reservations
- [ ] Guest can cancel booking

## Support Resources

### Documentation
- `SETUP_GUIDE.md` - Initial setup
- `README.md` - Project overview
- API comments in `backend/server.js`

### Debug Commands
```bash
# Check Node.js version
node --version

# Check npm packages
npm list

# Clear npm cache
npm cache clean --force

# Check open ports
netstat -ano | findstr LISTENING  # Windows
lsof -i :5000  # Mac/Linux
```

### Get Help
1. Check error message carefully
2. Search this guide for similar issue
3. Check backend/frontend logs
4. Try the provided test commands
5. Review SETUP_GUIDE.md again

---

**Last Updated**: November 2024
**Status**: Complete Testing Guide

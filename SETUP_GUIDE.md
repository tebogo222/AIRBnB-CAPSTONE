# Airbnb Capstone - Setup Guide

## Overview
This is a full-stack Airbnb clone built with React, Express.js, and MongoDB. The app includes user authentication, listing management, and booking functionality.

## Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or cloud instance via MongoDB Atlas)
- npm or yarn

## Project Structure
```
AIRBnB-CAPSTONE/
├── frontend/                 # React frontend
│   ├── src/
│   ├── public/
│   └── package.json
├── backend/                  # Express server
│   ├── server.js
│   ├── db/
│   │   ├── connection.js
│   │   └── models/
│   └── package.json
└── package.json             # Root package.json
```

## Step 1: Environment Setup

### 1.1 Create `.env` file in the root directory
```bash
cd AIRBnB-CAPSTONE
```

Create a `.env` file with the following variables:

```env
# MongoDB Connection
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/airbnb_db?retryWrites=true&w=majority

# JWT Authentication
JWT_SECRET=your_very_secure_jwt_secret_key_here_min_32_chars

# Node Environment
NODE_ENV=development

# Frontend API URL (for React app)
REACT_APP_API_URL=http://localhost:5000
```

### 1.2 Create `.env` file in backend directory
```bash
cd backend
```

Create a `.env` file with:
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/airbnb_db?retryWrites=true&w=majority
JWT_SECRET=your_very_secure_jwt_secret_key_here_min_32_chars
NODE_ENV=development
PORT=5000
```

## Step 2: MongoDB Setup

### Option A: Using MongoDB Atlas (Cloud)
1. Go to https://www.mongodb.com/cloud/atlas
2. Create a free account
3. Create a new cluster
4. Create a database user with username and password
5. Get the connection string
6. Replace `username:password` with your credentials
7. Add your IP to the network access list

### Option B: Using Local MongoDB
1. Install MongoDB Community Edition
2. Start MongoDB service:
   - **Windows**: `mongod` in cmd
   - **Mac**: `brew services start mongodb-community`
   - **Linux**: `sudo systemctl start mongod`

3. Use connection string: `mongodb://localhost:27017/airbnb_db`

## Step 3: Install Dependencies

```bash
# Install root dependencies
npm install

# Install backend dependencies
cd backend
npm install
cd ..
```

## Step 4: Database Initialization (Optional)

If you want to seed sample data, create a script in `backend/scripts/seedData.js`:

```javascript
const mongoose = require('mongoose');
const Listing = require('../db/models/Listing');
require('dotenv').config();

const sampleListings = [
  {
    title: "Beautiful Apartment in Manhattan",
    description: "Spacious 2-bedroom apartment with stunning views",
    hostId: new mongoose.Types.ObjectId(),
    hostEmail: "host@example.com",
    address: {
      street: "123 Main St",
      city: "New York",
      state: "NY",
      zipCode: "10001",
      country: "USA",
      latitude: 40.7128,
      longitude: -74.0060
    },
    propertyDetails: {
      bedNum: 2,
      bathNum: 1,
      sqFt: 900,
      maxGuests: 4,
      propertyType: "Apartment",
      roomType: "Entire place"
    },
    amenities: ["WiFi", "Kitchen", "AC", "Washer", "Dryer"],
    images: ["https://via.placeholder.com/400x300"],
    pricing: {
      basePrice: 150,
      currency: "USD",
      cleaningFee: 25,
      serviceFee: 15,
      securityDeposit: 100,
      extraGuestFee: 20
    },
    availability: {
      isAvailable: true,
      minimumStay: 1,
      maximumStay: 30,
      checkInTime: "16:00",
      checkOutTime: "11:00"
    },
    ratings: {
      averageRating: 4.8,
      totalReviews: 25,
      accuracy: 4.9,
      cleanliness: 4.8,
      communication: 4.9,
      location: 4.7,
      value: 4.6
    },
    houseRules: ["No smoking", "No parties", "Quiet hours after 10pm"],
    cancellationPolicy: "Flexible - free cancellation up to 1 day before",
    dateCreated: new Date().toISOString(),
    lastUpdated: new Date().toISOString()
  }
];

async function seedDatabase() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');
    
    await Listing.insertMany(sampleListings);
    console.log('Sample data inserted successfully');
    
    process.exit(0);
  } catch (error) {
    console.error('Seeding error:', error);
    process.exit(1);
  }
}

seedDatabase();
```

Run with: `cd backend && node scripts/seedData.js`

## Step 5: Running the Application

### Development Mode (Both Frontend and Backend)

**Terminal 1 - Backend Server:**
```bash
npm run start:backend
# Server runs on http://localhost:5000
```

**Terminal 2 - Frontend (React):**
```bash
npm start
# Frontend runs on http://localhost:3000
```

### Production Build

```bash
# Build frontend
npm run build

# Start backend
npm run start:backend
```

## Step 6: Testing the App

### 1. Test User Registration
- Go to `http://localhost:3000`
- Click "Sign Up" 
- Create a guest account or host account
- Fill in required information

### 2. Test Search/Filter
- Click "Places to stay" or use the search bar
- Select a location (you may need to add listings first)
- Set check-in/check-out dates
- Set number of guests
- Click search button

### 3. Test Listings (Host Features)
- Login as a host
- Go to dashboard
- Create a new listing
- View your listings
- Manage reservations

## Troubleshooting

### Issue: "Cannot GET /api/listings"
**Solution**: Make sure backend is running on port 5000 and the API URL in `src/config.js` is correct.

### Issue: "MongoDB connection failed"
**Solution**: 
- Check your MongoDB URI in `.env`
- Ensure MongoDB is running
- Verify your IP is whitelisted in MongoDB Atlas

### Issue: CORS errors
**Solution**: The backend already has CORS configured, but if issues persist, check `backend/server.js` CORS settings.

### Issue: "JWT_SECRET not set"
**Solution**: Ensure you've added `JWT_SECRET` to your `.env` file in both root and backend directories.

## API Endpoints

### Listings
- `GET /api/listings` - Get all listings with filters
- `GET /api/listings/:id` - Get single listing
- `POST /api/listings` (auth) - Create listing
- `PUT /api/listings/:id` (auth) - Update listing
- `DELETE /api/listings/:id` (auth) - Delete listing
- `GET /api/cities` - Get all unique cities

### Authentication
- `POST /api/auth/register` - Register user
- `POST /api/auth/login` - Login user
- `POST /api/auth/logout` - Logout user

### Bookings
- `GET /api/reservations/guest` (auth) - Get guest bookings
- `GET /api/reservations/host` (auth) - Get host bookings
- `POST /api/reservations` (auth) - Create booking
- `PUT /api/reservations/:id` (auth) - Update booking
- `DELETE /api/reservations/:id` (auth) - Cancel booking

## Key Features Implemented

✅ User authentication (Guest & Host)
✅ Listing search with filters (location, guests, dates)
✅ Responsive navbar with search bar
✅ Date picker for check-in/check-out
✅ Guest counter
✅ Host dashboard for managing listings
✅ Booking system for guests
✅ Pagination for listings
✅ Protected routes

## Recent Improvements

✅ Fixed ESLint warnings (unused variables)
✅ Fixed anchor tag accessibility issues
✅ Implemented functional navbar search
✅ Added guest selection with +/- buttons
✅ Added date input fields for check-in/check-out
✅ Enhanced backend filtering (guests, dates, location)
✅ Improved API pagination

## Next Steps (Optional Enhancements)

- Add image upload for listings
- Implement advanced date availability checking
- Add payment processing (Stripe)
- Add reviews and ratings system
- Implement real-time notifications
- Add advanced search with multiple filters
- Implement favorites/wishlist feature
- Add map view for listings
- Implement admin dashboard

## Deployment

### Deploy to Railway
1. Create account at railway.app
2. Connect your GitHub repository
3. Set environment variables in Railway dashboard
4. Deploy

### Deploy to Netlify (Frontend)
```bash
npm run build
# Upload build/ folder to Netlify
```

## Support

For issues or questions:
1. Check the Troubleshooting section
2. Review the API endpoints documentation
3. Check browser console for errors
4. Check backend logs in terminal

---

**Last Updated**: November 2024
**Status**: Fully Functional for Project Use

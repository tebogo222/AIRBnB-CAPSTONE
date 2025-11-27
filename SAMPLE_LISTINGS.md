# 🏠 Sample Listings for MongoDB Atlas

## How to Add These Listings to Your Database

### Option 1: Using MongoDB Atlas UI (Easiest)

1. Go to https://www.mongodb.com/cloud/atlas
2. Click on your cluster
3. Click "Collections" or "Browse Collections"
4. Select your `listings` collection
5. Click "Insert Document" button
6. Copy and paste **ONE** listing from below
7. Click "Insert" button
8. Repeat for each listing

### Option 2: Import via MongoDB Compass (If installed)

1. Open MongoDB Compass
2. Connect to your cluster
3. Select `airbnb_db` database
4. Select `listings` collection
5. Click "Import Data"
6. Paste the JSON array below
7. Click Import

### Option 3: Using MongoDB Shell

```javascript
// Run this in MongoDB shell after connecting
db.listings.insertMany([
// PASTE ALL LISTINGS HERE
])
```

---

## 📋 Sample Listings (Copy & Paste)

### Listing 1: Modern Mountain Retreat
```json
{
  "title": "Modern Mountain Retreat with Lake View",
  "description": "Beautiful modern home nestled in the mountains with stunning lake views. Perfect for a peaceful getaway with family or friends.",
  "hostId": "507f1f77bcf86cd799439011",
  "hostEmail": "host1@airbnb.com",
  "address": {
    "street": "123 Mountain Peak Road",
    "city": "Denver",
    "state": "CO",
    "zipCode": "80202",
    "country": "USA",
    "latitude": 39.7392,
    "longitude": -104.9903
  },
  "propertyDetails": {
    "bedNum": 4,
    "bathNum": 3,
    "sqFt": 3500,
    "maxGuests": 8,
    "bedrooms": [
      { "type": "Master", "beds": 1, "bedType": "King" },
      { "type": "Guest", "beds": 2, "bedType": "Queen" },
      { "type": "Guest", "beds": 2, "bedType": "Twin" }
    ],
    "propertyType": "House",
    "roomType": "Entire place"
  },
  "amenities": ["WiFi", "Kitchen", "Washer", "Dryer", "Air Conditioning", "Heating", "Lake View", "Garden"],
  "images": ["/houses/lake-7223904_1280.jpg"],
  "pricing": {
    "basePrice": 250,
    "currency": "USD",
    "cleaningFee": 50,
    "serviceFee": 30,
    "securityDeposit": 500,
    "extraGuestFee": 25
  },
  "availability": {
    "isAvailable": true,
    "minimumStay": 2,
    "maximumStay": 60,
    "checkInTime": "15:00",
    "checkOutTime": "11:00"
  },
  "ratings": {
    "averageRating": 4.8,
    "totalReviews": 42,
    "accuracy": 4.9,
    "cleanliness": 4.9,
    "communication": 4.8,
    "location": 4.7,
    "value": 4.6
  },
  "houseRules": ["No smoking", "No parties", "Quiet hours after 22:00"],
  "cancellationPolicy": "Flexible - free cancellation up to 7 days before",
  "dateCreated": "2024-11-01T00:00:00Z",
  "lastUpdated": "2024-11-19T00:00:00Z"
}
```

### Listing 2: Cozy Urban Apartment
```json
{
  "title": "Charming Urban Apartment in Heart of City",
  "description": "Stylish 2-bedroom apartment in the heart of downtown. Walk to restaurants, shops, and entertainment. Perfect for business travelers and couples.",
  "hostId": "507f1f77bcf86cd799439012",
  "hostEmail": "host2@airbnb.com",
  "address": {
    "street": "456 Downtown Avenue",
    "city": "New York",
    "state": "NY",
    "zipCode": "10001",
    "country": "USA",
    "latitude": 40.7128,
    "longitude": -74.0060
  },
  "propertyDetails": {
    "bedNum": 2,
    "bathNum": 1,
    "sqFt": 900,
    "maxGuests": 4,
    "bedrooms": [
      { "type": "Master", "beds": 1, "bedType": "Queen" },
      { "type": "Guest", "beds": 1, "bedType": "Twin" }
    ],
    "propertyType": "Apartment",
    "roomType": "Entire place"
  },
  "amenities": ["WiFi", "Kitchen", "TV", "Washer", "Air Conditioning", "Heating"],
  "images": ["/houses/frames-for-your-heart-2d4lAQAlbDA-unsplash.jpg"],
  "pricing": {
    "basePrice": 180,
    "currency": "USD",
    "cleaningFee": 30,
    "serviceFee": 20,
    "securityDeposit": 300,
    "extraGuestFee": 20
  },
  "availability": {
    "isAvailable": true,
    "minimumStay": 1,
    "maximumStay": 30,
    "checkInTime": "16:00",
    "checkOutTime": "11:00"
  },
  "ratings": {
    "averageRating": 4.7,
    "totalReviews": 58,
    "accuracy": 4.8,
    "cleanliness": 4.7,
    "communication": 4.9,
    "location": 4.8,
    "value": 4.5
  },
  "houseRules": ["No smoking", "No loud music", "Check-in after 3pm"],
  "cancellationPolicy": "Moderate - free cancellation up to 3 days before",
  "dateCreated": "2024-10-15T00:00:00Z",
  "lastUpdated": "2024-11-19T00:00:00Z"
}
```

### Listing 3: Spacious Family Home
```json
{
  "title": "Large Family Home with Garden",
  "description": "Spacious 5-bedroom home perfect for families or large groups. Features a beautiful garden, games room, and plenty of space for everyone.",
  "hostId": "507f1f77bcf86cd799439013",
  "hostEmail": "host3@airbnb.com",
  "address": {
    "street": "789 Suburban Lane",
    "city": "Los Angeles",
    "state": "CA",
    "zipCode": "90001",
    "country": "USA",
    "latitude": 34.0522,
    "longitude": -118.2437
  },
  "propertyDetails": {
    "bedNum": 5,
    "bathNum": 3,
    "sqFt": 4200,
    "maxGuests": 10,
    "bedrooms": [
      { "type": "Master", "beds": 1, "bedType": "King" },
      { "type": "Guest", "beds": 2, "bedType": "Queen" },
      { "type": "Guest", "beds": 2, "bedType": "Twin" },
      { "type": "Guest", "beds": 1, "bedType": "Full" }
    ],
    "propertyType": "House",
    "roomType": "Entire place"
  },
  "amenities": ["WiFi", "Kitchen", "Washer", "Dryer", "Pool", "Garden", "Patio", "BBQ Grill", "Game Room"],
  "images": ["/houses/large-home-389271_1280.jpg"],
  "pricing": {
    "basePrice": 350,
    "currency": "USD",
    "cleaningFee": 75,
    "serviceFee": 40,
    "securityDeposit": 800,
    "extraGuestFee": 30
  },
  "availability": {
    "isAvailable": true,
    "minimumStay": 3,
    "maximumStay": 90,
    "checkInTime": "14:00",
    "checkOutTime": "12:00"
  },
  "ratings": {
    "averageRating": 4.9,
    "totalReviews": 73,
    "accuracy": 5.0,
    "cleanliness": 4.9,
    "communication": 4.9,
    "location": 4.8,
    "value": 4.9
  },
  "houseRules": ["No smoking", "No parties", "Quiet hours after 21:00", "Respect neighbors"],
  "cancellationPolicy": "Strict - free cancellation up to 14 days before",
  "dateCreated": "2024-09-20T00:00:00Z",
  "lastUpdated": "2024-11-19T00:00:00Z"
}
```

### Listing 4: Luxury Penthouse
```json
{
  "title": "Luxury Penthouse with City Views",
  "description": "Stunning penthouse apartment with panoramic city views. High-end furnishings, modern amenities, and exclusive rooftop access.",
  "hostId": "507f1f77bcf86cd799439014",
  "hostEmail": "host4@airbnb.com",
  "address": {
    "street": "321 Downtown Towers",
    "city": "Chicago",
    "state": "IL",
    "zipCode": "60601",
    "country": "USA",
    "latitude": 41.8781,
    "longitude": -87.6298
  },
  "propertyDetails": {
    "bedNum": 3,
    "bathNum": 2,
    "sqFt": 2200,
    "maxGuests": 6,
    "bedrooms": [
      { "type": "Master", "beds": 1, "bedType": "King" },
      { "type": "Guest", "beds": 1, "bedType": "Queen" },
      { "type": "Guest", "beds": 1, "bedType": "Twin" }
    ],
    "propertyType": "Apartment",
    "roomType": "Entire place"
  },
  "amenities": ["WiFi", "Premium Kitchen", "Washer", "Dryer", "Smart Home", "Hot Tub", "Rooftop Access", "City View", "Concierge"],
  "images": ["/houses/frames-for-your-heart-mR1CIDduGLc-unsplash.jpg"],
  "pricing": {
    "basePrice": 450,
    "currency": "USD",
    "cleaningFee": 100,
    "serviceFee": 50,
    "securityDeposit": 1000,
    "extraGuestFee": 40
  },
  "availability": {
    "isAvailable": true,
    "minimumStay": 2,
    "maximumStay": 30,
    "checkInTime": "16:00",
    "checkOutTime": "11:00"
  },
  "ratings": {
    "averageRating": 5.0,
    "totalReviews": 45,
    "accuracy": 5.0,
    "cleanliness": 5.0,
    "communication": 5.0,
    "location": 5.0,
    "value": 4.9
  },
  "houseRules": ["No smoking", "Respect luxury furnishings", "Quiet at all times"],
  "cancellationPolicy": "Flexible - free cancellation up to 5 days before",
  "dateCreated": "2024-11-05T00:00:00Z",
  "lastUpdated": "2024-11-19T00:00:00Z"
}
```

### Listing 5: Beachfront Cottage
```json
{
  "title": "Charming Beachfront Cottage",
  "description": "Lovely beachfront cottage with direct beach access. Perfect for a romantic getaway or beach vacation. Close to restaurants and shops.",
  "hostId": "507f1f77bcf86cd799439015",
  "hostEmail": "host5@airbnb.com",
  "address": {
    "street": "555 Ocean Drive",
    "city": "Miami",
    "state": "FL",
    "zipCode": "33101",
    "country": "USA",
    "latitude": 25.7617,
    "longitude": -80.1918
  },
  "propertyDetails": {
    "bedNum": 2,
    "bathNum": 2,
    "sqFt": 1200,
    "maxGuests": 5,
    "bedrooms": [
      { "type": "Master", "beds": 1, "bedType": "King" },
      { "type": "Guest", "beds": 2, "bedType": "Queen" }
    ],
    "propertyType": "Cottage",
    "roomType": "Entire place"
  },
  "amenities": ["WiFi", "Kitchen", "Beach Access", "Patio", "Washer", "Dryer", "Air Conditioning", "Ocean View"],
  "images": ["/houses/johnson-U6Q6zVDgmSs-unsplash.jpg"],
  "pricing": {
    "basePrice": 220,
    "currency": "USD",
    "cleaningFee": 40,
    "serviceFee": 25,
    "securityDeposit": 400,
    "extraGuestFee": 20
  },
  "availability": {
    "isAvailable": true,
    "minimumStay": 1,
    "maximumStay": 60,
    "checkInTime": "15:00",
    "checkOutTime": "11:00"
  },
  "ratings": {
    "averageRating": 4.8,
    "totalReviews": 62,
    "accuracy": 4.9,
    "cleanliness": 4.8,
    "communication": 4.7,
    "location": 4.9,
    "value": 4.7
  },
  "houseRules": ["No smoking", "Respect neighbors", "No pets without permission"],
  "cancellationPolicy": "Moderate - free cancellation up to 5 days before",
  "dateCreated": "2024-10-01T00:00:00Z",
  "lastUpdated": "2024-11-19T00:00:00Z"
}
```

### Listing 6: Modern Downtown Loft
```json
{
  "title": "Modern Downtown Loft with Exposed Brick",
  "description": "Industrial-style loft in the trendy downtown area. Features exposed brick, high ceilings, and modern design. Great location for exploring the city.",
  "hostId": "507f1f77bcf86cd799439016",
  "hostEmail": "host6@airbnb.com",
  "address": {
    "street": "234 Arts District Way",
    "city": "Austin",
    "state": "TX",
    "zipCode": "78701",
    "country": "USA",
    "latitude": 30.2672,
    "longitude": -97.7431
  },
  "propertyDetails": {
    "bedNum": 2,
    "bathNum": 1,
    "sqFt": 1400,
    "maxGuests": 4,
    "bedrooms": [
      { "type": "Master", "beds": 1, "bedType": "King" },
      { "type": "Guest", "beds": 1, "bedType": "Queen" }
    ],
    "propertyType": "Loft",
    "roomType": "Entire place"
  },
  "amenities": ["WiFi", "Modern Kitchen", "Washer", "Dryer", "High Ceilings", "Natural Light", "Outdoor Space"],
  "images": ["/houses/todd-kent-178j8tJrNlc-unsplash.jpg"],
  "pricing": {
    "basePrice": 200,
    "currency": "USD",
    "cleaningFee": 35,
    "serviceFee": 22,
    "securityDeposit": 350,
    "extraGuestFee": 18
  },
  "availability": {
    "isAvailable": true,
    "minimumStay": 1,
    "maximumStay": 45,
    "checkInTime": "15:00",
    "checkOutTime": "11:00"
  },
  "ratings": {
    "averageRating": 4.7,
    "totalReviews": 51,
    "accuracy": 4.8,
    "cleanliness": 4.6,
    "communication": 4.8,
    "location": 4.9,
    "value": 4.6
  },
  "houseRules": ["No smoking indoors", "Respect neighbors", "No parties after 22:00"],
  "cancellationPolicy": "Flexible - free cancellation up to 7 days before",
  "dateCreated": "2024-09-15T00:00:00Z",
  "lastUpdated": "2024-11-19T00:00:00Z"
}
```

### Listing 7: Peaceful Suburban House
```json
{
  "title": "Peaceful Suburban Home with Backyard",
  "description": "Comfortable suburban home perfect for families. Spacious backyard, quiet neighborhood, close to schools and parks.",
  "hostId": "507f1f77bcf86cd799439017",
  "hostEmail": "host7@airbnb.com",
  "address": {
    "street": "987 Maple Street",
    "city": "Seattle",
    "state": "WA",
    "zipCode": "98101",
    "country": "USA",
    "latitude": 47.6062,
    "longitude": -122.3321
  },
  "propertyDetails": {
    "bedNum": 3,
    "bathNum": 2,
    "sqFt": 1800,
    "maxGuests": 6,
    "bedrooms": [
      { "type": "Master", "beds": 1, "bedType": "King" },
      { "type": "Guest", "beds": 1, "bedType": "Queen" },
      { "type": "Guest", "beds": 1, "bedType": "Twin" }
    ],
    "propertyType": "House",
    "roomType": "Entire place"
  },
  "amenities": ["WiFi", "Kitchen", "Washer", "Dryer", "Backyard", "Patio", "Parking"],
  "images": ["/houses/home-2486092_1280.jpg"],
  "pricing": {
    "basePrice": 180,
    "currency": "USD",
    "cleaningFee": 35,
    "serviceFee": 20,
    "securityDeposit": 350,
    "extraGuestFee": 20
  },
  "availability": {
    "isAvailable": true,
    "minimumStay": 2,
    "maximumStay": 60,
    "checkInTime": "15:00",
    "checkOutTime": "11:00"
  },
  "ratings": {
    "averageRating": 4.6,
    "totalReviews": 38,
    "accuracy": 4.7,
    "cleanliness": 4.6,
    "communication": 4.6,
    "location": 4.5,
    "value": 4.7
  },
  "houseRules": ["No smoking", "Keep noise level low", "Respect pets"],
  "cancellationPolicy": "Moderate - free cancellation up to 5 days before",
  "dateCreated": "2024-08-30T00:00:00Z",
  "lastUpdated": "2024-11-19T00:00:00Z"
}
```

### Listing 8: Cozy Studio with Character
```json
{
  "title": "Cozy Studio with Old-World Charm",
  "description": "Intimate studio apartment with vintage character. Charming neighborhood, close to cafes, boutiques, and local attractions.",
  "hostId": "507f1f77bcf86cd799439018",
  "hostEmail": "host8@airbnb.com",
  "address": {
    "street": "111 Historic Avenue",
    "city": "Boston",
    "state": "MA",
    "zipCode": "02101",
    "country": "USA",
    "latitude": 42.3601,
    "longitude": -71.0589
  },
  "propertyDetails": {
    "bedNum": 1,
    "bathNum": 1,
    "sqFt": 600,
    "maxGuests": 2,
    "bedrooms": [
      { "type": "Studio", "beds": 1, "bedType": "Queen" }
    ],
    "propertyType": "Studio",
    "roomType": "Entire place"
  },
  "amenities": ["WiFi", "Kitchenette", "TV", "Air Conditioning", "Heating"],
  "images": ["/houses/vu-anh-TiVPTYCG_3E-unsplash.jpg"],
  "pricing": {
    "basePrice": 120,
    "currency": "USD",
    "cleaningFee": 20,
    "serviceFee": 15,
    "securityDeposit": 200,
    "extraGuestFee": 15
  },
  "availability": {
    "isAvailable": true,
    "minimumStay": 1,
    "maximumStay": 30,
    "checkInTime": "16:00",
    "checkOutTime": "11:00"
  },
  "ratings": {
    "averageRating": 4.5,
    "totalReviews": 29,
    "accuracy": 4.6,
    "cleanliness": 4.5,
    "communication": 4.7,
    "location": 4.6,
    "value": 4.4
  },
  "houseRules": ["No smoking", "No guests after 23:00", "Quiet time"],
  "cancellationPolicy": "Flexible - free cancellation up to 7 days before",
  "dateCreated": "2024-10-10T00:00:00Z",
  "lastUpdated": "2024-11-19T00:00:00Z"
}
```

### Listing 9: Elegant Victorian Mansion
```json
{
  "title": "Elegant Victorian Mansion with Historic Charm",
  "description": "Stunning Victorian home with original architectural details, grand staircase, and elegant furnishings. Perfect for special occasions and events.",
  "hostId": "507f1f77bcf86cd799439019",
  "hostEmail": "host9@airbnb.com",
  "address": {
    "street": "555 Historic Plaza",
    "city": "San Francisco",
    "state": "CA",
    "zipCode": "94102",
    "country": "USA",
    "latitude": 37.7749,
    "longitude": -122.4194
  },
  "propertyDetails": {
    "bedNum": 6,
    "bathNum": 4,
    "sqFt": 5000,
    "maxGuests": 12,
    "bedrooms": [
      { "type": "Master", "beds": 1, "bedType": "King" },
      { "type": "Guest", "beds": 2, "bedType": "Queen" },
      { "type": "Guest", "beds": 2, "bedType": "Twin" },
      { "type": "Guest", "beds": 1, "bedType": "King" }
    ],
    "propertyType": "House",
    "roomType": "Entire place"
  },
  "amenities": ["WiFi", "Gourmet Kitchen", "Washer", "Dryer", "Garden", "Library", "Entertainment Room", "Parking"],
  "images": ["/houses/webaliser-_TPTXZd9mOo-unsplash.jpg"],
  "pricing": {
    "basePrice": 500,
    "currency": "USD",
    "cleaningFee": 150,
    "serviceFee": 60,
    "securityDeposit": 1500,
    "extraGuestFee": 50
  },
  "availability": {
    "isAvailable": true,
    "minimumStay": 3,
    "maximumStay": 120,
    "checkInTime": "14:00",
    "checkOutTime": "12:00"
  },
  "ratings": {
    "averageRating": 4.9,
    "totalReviews": 55,
    "accuracy": 5.0,
    "cleanliness": 4.9,
    "communication": 4.9,
    "location": 4.8,
    "value": 4.8
  },
  "houseRules": ["No smoking", "Respectful use of historic property", "Events by arrangement only"],
  "cancellationPolicy": "Strict - free cancellation up to 30 days before",
  "dateCreated": "2024-08-01T00:00:00Z",
  "lastUpdated": "2024-11-19T00:00:00Z"
}
```

---

## 📋 Quick Setup Instructions

### In MongoDB Atlas:

1. **Go to Collections**
2. **Select your `listings` collection** 
3. **Click "Insert Document"**
4. **Copy ONE listing from above** (starting with `{` and ending with `}`)
5. **Paste it in the JSON editor**
6. **Click "Insert"**
7. **Repeat for all 9 listings**

### Or Use MongoDB Shell:

```javascript
use airbnb_db

db.listings.insertMany([
  { /* Listing 1 */ },
  { /* Listing 2 */ },
  // ... etc
])
```

---

## ✅ After Adding Listings

1. Go to your app at `http://localhost:3000`
2. Click "Places to stay"
3. Select a location from the dropdown (Denver, New York, Los Angeles, Chicago, Miami, Austin, Seattle, Boston, or San Francisco)
4. Click search
5. See your listings! 🎉

---

## 🎯 What Each Listing Includes

- ✅ Property details (beds, baths, sqft, guests)
- ✅ Address in different cities
- ✅ Images from your `/public/houses` folder
- ✅ Pricing (base, cleaning, service fees)
- ✅ Amenities list
- ✅ Availability settings
- ✅ Ratings and reviews
- ✅ House rules
- ✅ Cancellation policy

---

## 💡 Tips

- Each listing uses a different city so you can test filtering
- Guests range from 2 to 12 so you can test guest filtering
- Prices range from $120 to $500 per night
- All are marked as available
- All images reference your `/houses/` files

**Just copy-paste the listings into MongoDB Atlas and your app will work!** 🚀

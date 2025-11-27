# 👥 Sample User Profiles for MongoDB

## How to Add These Users to Your Database

### In MongoDB Atlas:

1. Go to https://www.mongodb.com/cloud/atlas
2. Click on your cluster → Collections
3. Select your `users` collection
4. Click "Insert Document"
5. Copy and paste **ONE** user from below
6. Click "Insert"
7. Repeat for each user

### Or Use MongoDB Shell:

```javascript
use airbnb_db

db.users.insertMany([
// PASTE ALL USERS HERE
])
```

---

## 📋 Sample Users (Copy & Paste)

### Guest 1: Sarah Johnson
```json
{
  "firstName": "Sarah",
  "lastName": "Johnson",
  "email": "sarah.johnson@example.com",
  "password": "$2b$10$YourHashedPasswordHere1", 
  "role": "guest",
  "phoneNumber": "555-0101",
  "dateOfBirth": "1992-03-15",
  "profilePicture": "https://i.pravatar.cc/150?img=1",
  "languages": ["English"],
  "address": {
    "street": "456 Oak Street",
    "city": "Boston",
    "state": "MA",
    "zipCode": "02108",
    "country": "USA"
  },
  "dateJoined": "2024-06-15T10:30:00Z",
  "isVerified": true,
  "verificationToken": null,
  "bookings": [],
  "reviews": [],
  "preferences": {
    "emailNotifications": true,
    "smsNotifications": false
  }
}
```

### Guest 2: Michael Chen
```json
{
  "firstName": "Michael",
  "lastName": "Chen",
  "email": "michael.chen@example.com",
  "password": "$2b$10$YourHashedPasswordHere2",
  "role": "guest",
  "phoneNumber": "555-0102",
  "dateOfBirth": "1988-07-22",
  "profilePicture": "https://i.pravatar.cc/150?img=2",
  "languages": ["English", "Mandarin"],
  "address": {
    "street": "789 Pacific Avenue",
    "city": "San Francisco",
    "state": "CA",
    "zipCode": "94102",
    "country": "USA"
  },
  "dateJoined": "2024-05-20T14:45:00Z",
  "isVerified": true,
  "verificationToken": null,
  "bookings": [],
  "reviews": [],
  "preferences": {
    "emailNotifications": true,
    "smsNotifications": true
  }
}
```

### Guest 3: Emma Rodriguez
```json
{
  "firstName": "Emma",
  "lastName": "Rodriguez",
  "email": "emma.rodriguez@example.com",
  "password": "$2b$10$YourHashedPasswordHere3",
  "role": "guest",
  "phoneNumber": "555-0103",
  "dateOfBirth": "1995-11-08",
  "profilePicture": "https://i.pravatar.cc/150?img=3",
  "languages": ["English", "Spanish"],
  "address": {
    "street": "321 Miami Beach Road",
    "city": "Miami",
    "state": "FL",
    "zipCode": "33101",
    "country": "USA"
  },
  "dateJoined": "2024-04-10T09:15:00Z",
  "isVerified": true,
  "verificationToken": null,
  "bookings": [],
  "reviews": [],
  "preferences": {
    "emailNotifications": true,
    "smsNotifications": false
  }
}
```

### Host 1: David Thompson
```json
{
  "firstName": "David",
  "lastName": "Thompson",
  "email": "david.thompson@host.com",
  "password": "$2b$10$YourHashedPasswordHere4",
  "role": "host",
  "phoneNumber": "555-0201",
  "dateOfBirth": "1985-02-14",
  "profilePicture": "https://i.pravatar.cc/150?img=10",
  "languages": ["English"],
  "address": {
    "street": "123 Mountain Peak Road",
    "city": "Denver",
    "state": "CO",
    "zipCode": "80202",
    "country": "USA"
  },
  "dateJoined": "2023-09-01T08:00:00Z",
  "isVerified": true,
  "verificationToken": null,
  "hostInfo": {
    "hostingSince": "2023-09-01T08:00:00Z",
    "responseRate": 98,
    "responseTime": "within an hour",
    "acceptanceRate": 95,
    "superhost": true,
    "about": "Experienced host with 5+ years of hospitality background. Love welcoming travelers and sharing local insights.",
    "totalListings": 1,
    "totalReviews": 42,
    "averageRating": 4.8
  },
  "listings": ["507f1f77bcf86cd799439011"],
  "bookings": [],
  "reviews": [],
  "bankAccount": {
    "accountHolder": "David Thompson",
    "lastFourDigits": "4242",
    "bankName": "Bank of America"
  },
  "preferences": {
    "emailNotifications": true,
    "smsNotifications": true
  }
}
```

### Host 2: Jennifer Williams
```json
{
  "firstName": "Jennifer",
  "lastName": "Williams",
  "email": "jennifer.williams@host.com",
  "password": "$2b$10$YourHashedPasswordHere5",
  "role": "host",
  "phoneNumber": "555-0202",
  "dateOfBirth": "1982-08-28",
  "profilePicture": "https://i.pravatar.cc/150?img=11",
  "languages": ["English", "French"],
  "address": {
    "street": "456 Downtown Avenue",
    "city": "New York",
    "state": "NY",
    "zipCode": "10001",
    "country": "USA"
  },
  "dateJoined": "2023-06-15T11:20:00Z",
  "isVerified": true,
  "verificationToken": null,
  "hostInfo": {
    "hostingSince": "2023-06-15T11:20:00Z",
    "responseRate": 99,
    "responseTime": "within 30 minutes",
    "acceptanceRate": 92,
    "superhost": true,
    "about": "Urban apartment specialist with a passion for providing comfortable stays. Professional property management with attention to detail.",
    "totalListings": 1,
    "totalReviews": 58,
    "averageRating": 4.7
  },
  "listings": ["507f1f77bcf86cd799439012"],
  "bookings": [],
  "reviews": [],
  "bankAccount": {
    "accountHolder": "Jennifer Williams",
    "lastFourDigits": "8888",
    "bankName": "Chase Bank"
  },
  "preferences": {
    "emailNotifications": true,
    "smsNotifications": true
  }
}
```

### Host 3: Robert Martinez
```json
{
  "firstName": "Robert",
  "lastName": "Martinez",
  "email": "robert.martinez@host.com",
  "password": "$2b$10$YourHashedPasswordHere6",
  "role": "host",
  "phoneNumber": "555-0203",
  "dateOfBirth": "1980-05-10",
  "profilePicture": "https://i.pravatar.cc/150?img=12",
  "languages": ["English", "Spanish"],
  "address": {
    "street": "789 Suburban Lane",
    "city": "Los Angeles",
    "state": "CA",
    "zipCode": "90001",
    "country": "USA"
  },
  "dateJoined": "2023-03-22T13:40:00Z",
  "isVerified": true,
  "verificationToken": null,
  "hostInfo": {
    "hostingSince": "2023-03-22T13:40:00Z",
    "responseRate": 96,
    "responseTime": "within 2 hours",
    "acceptanceRate": 90,
    "superhost": true,
    "about": "Family-friendly property host. Large home perfect for groups. Pet-friendly and welcoming to all travelers.",
    "totalListings": 1,
    "totalReviews": 73,
    "averageRating": 4.9
  },
  "listings": ["507f1f77bcf86cd799439013"],
  "bookings": [],
  "reviews": [],
  "bankAccount": {
    "accountHolder": "Robert Martinez",
    "lastFourDigits": "5555",
    "bankName": "Wells Fargo"
  },
  "preferences": {
    "emailNotifications": true,
    "smsNotifications": false
  }
}
```

### Host 4: Katherine Brooks
```json
{
  "firstName": "Katherine",
  "lastName": "Brooks",
  "email": "katherine.brooks@host.com",
  "password": "$2b$10$YourHashedPasswordHere7",
  "role": "host",
  "phoneNumber": "555-0204",
  "dateOfBirth": "1987-12-03",
  "profilePicture": "https://i.pravatar.cc/150?img=13",
  "languages": ["English"],
  "address": {
    "street": "321 Downtown Towers",
    "city": "Chicago",
    "state": "IL",
    "zipCode": "60601",
    "country": "USA"
  },
  "dateJoined": "2023-11-10T16:25:00Z",
  "isVerified": true,
  "verificationToken": null,
  "hostInfo": {
    "hostingSince": "2023-11-10T16:25:00Z",
    "responseRate": 100,
    "responseTime": "within 30 minutes",
    "acceptanceRate": 98,
    "superhost": true,
    "about": "Luxury property specialist. High-end penthouse with premium amenities. Corporate bookings welcome.",
    "totalListings": 1,
    "totalReviews": 45,
    "averageRating": 5.0
  },
  "listings": ["507f1f77bcf86cd799439014"],
  "bookings": [],
  "reviews": [],
  "bankAccount": {
    "accountHolder": "Katherine Brooks",
    "lastFourDigits": "9999",
    "bankName": "Citibank"
  },
  "preferences": {
    "emailNotifications": true,
    "smsNotifications": true
  }
}
```

### Host 5: James Sullivan
```json
{
  "firstName": "James",
  "lastName": "Sullivan",
  "email": "james.sullivan@host.com",
  "password": "$2b$10$YourHashedPasswordHere8",
  "role": "host",
  "phoneNumber": "555-0205",
  "dateOfBirth": "1990-01-18",
  "profilePicture": "https://i.pravatar.cc/150?img=14",
  "languages": ["English"],
  "address": {
    "street": "555 Ocean Drive",
    "city": "Miami",
    "state": "FL",
    "zipCode": "33101",
    "country": "USA"
  },
  "dateJoined": "2023-08-05T10:50:00Z",
  "isVerified": true,
  "verificationToken": null,
  "hostInfo": {
    "hostingSince": "2023-08-05T10:50:00Z",
    "responseRate": 97,
    "responseTime": "within an hour",
    "acceptanceRate": 94,
    "superhost": true,
    "about": "Beachfront property specialist. Perfect for vacation getaways. Beach access and tropical vibes.",
    "totalListings": 1,
    "totalReviews": 62,
    "averageRating": 4.8
  },
  "listings": ["507f1f77bcf86cd799439015"],
  "bookings": [],
  "reviews": [],
  "bankAccount": {
    "accountHolder": "James Sullivan",
    "lastFourDigits": "1111",
    "bankName": "Bank of Florida"
  },
  "preferences": {
    "emailNotifications": true,
    "smsNotifications": true
  }
}
```

### Host 6: Patricia Anderson
```json
{
  "firstName": "Patricia",
  "lastName": "Anderson",
  "email": "patricia.anderson@host.com",
  "password": "$2b$10$YourHashedPasswordHere9",
  "role": "host",
  "phoneNumber": "555-0206",
  "dateOfBirth": "1984-09-30",
  "profilePicture": "https://i.pravatar.cc/150?img=15",
  "languages": ["English"],
  "address": {
    "street": "234 Arts District Way",
    "city": "Austin",
    "state": "TX",
    "zipCode": "78701",
    "country": "USA"
  },
  "dateJoined": "2023-07-12T12:35:00Z",
  "isVerified": true,
  "verificationToken": null,
  "hostInfo": {
    "hostingSince": "2023-07-12T12:35:00Z",
    "responseRate": 95,
    "responseTime": "within 2 hours",
    "acceptanceRate": 89,
    "superhost": true,
    "about": "Modern loft specialist in trendy downtown area. Perfect for young professionals and digital nomads.",
    "totalListings": 1,
    "totalReviews": 51,
    "averageRating": 4.7
  },
  "listings": ["507f1f77bcf86cd799439016"],
  "bookings": [],
  "reviews": [],
  "bankAccount": {
    "accountHolder": "Patricia Anderson",
    "lastFourDigits": "2222",
    "bankName": "Austin Bank"
  },
  "preferences": {
    "emailNotifications": true,
    "smsNotifications": false
  }
}
```

### Host 7: Christopher Lewis
```json
{
  "firstName": "Christopher",
  "lastName": "Lewis",
  "email": "christopher.lewis@host.com",
  "password": "$2b$10$YourHashedPasswordHere10",
  "role": "host",
  "phoneNumber": "555-0207",
  "dateOfBirth": "1986-04-17",
  "profilePicture": "https://i.pravatar.cc/150?img=16",
  "languages": ["English"],
  "address": {
    "street": "987 Maple Street",
    "city": "Seattle",
    "state": "WA",
    "zipCode": "98101",
    "country": "USA"
  },
  "dateJoined": "2023-02-28T09:10:00Z",
  "isVerified": true,
  "verificationToken": null,
  "hostInfo": {
    "hostingSince": "2023-02-28T09:10:00Z",
    "responseRate": 94,
    "responseTime": "within 3 hours",
    "acceptanceRate": 91,
    "superhost": true,
    "about": "Suburban family home host. Great for families and groups. Quiet neighborhood with parks nearby.",
    "totalListings": 1,
    "totalReviews": 38,
    "averageRating": 4.6
  },
  "listings": ["507f1f77bcf86cd799439017"],
  "bookings": [],
  "reviews": [],
  "bankAccount": {
    "accountHolder": "Christopher Lewis",
    "lastFourDigits": "3333",
    "bankName": "Bank of Washington"
  },
  "preferences": {
    "emailNotifications": true,
    "smsNotifications": true
  }
}
```

### Host 8: Margaret White
```json
{
  "firstName": "Margaret",
  "lastName": "White",
  "email": "margaret.white@host.com",
  "password": "$2b$10$YourHashedPasswordHere11",
  "role": "host",
  "phoneNumber": "555-0208",
  "dateOfBirth": "1981-10-25",
  "profilePicture": "https://i.pravatar.cc/150?img=17",
  "languages": ["English"],
  "address": {
    "street": "111 Historic Avenue",
    "city": "Boston",
    "state": "MA",
    "zipCode": "02101",
    "country": "USA"
  },
  "dateJoined": "2023-10-20T14:05:00Z",
  "isVerified": true,
  "verificationToken": null,
  "hostInfo": {
    "hostingSince": "2023-10-20T14:05:00Z",
    "responseRate": 92,
    "responseTime": "within 4 hours",
    "acceptanceRate": 88,
    "superhost": false,
    "about": "Cozy studio with vintage charm. Perfect for solo travelers and couples. Historic neighborhood.",
    "totalListings": 1,
    "totalReviews": 29,
    "averageRating": 4.5
  },
  "listings": ["507f1f77bcf86cd799439018"],
  "bookings": [],
  "reviews": [],
  "bankAccount": {
    "accountHolder": "Margaret White",
    "lastFourDigits": "4444",
    "bankName": "Boston Bank"
  },
  "preferences": {
    "emailNotifications": true,
    "smsNotifications": false
  }
}
```

### Host 9: Elizabeth Taylor
```json
{
  "firstName": "Elizabeth",
  "lastName": "Taylor",
  "email": "elizabeth.taylor@host.com",
  "password": "$2b$10$YourHashedPasswordHere12",
  "role": "host",
  "phoneNumber": "555-0209",
  "dateOfBirth": "1979-06-08",
  "profilePicture": "https://i.pravatar.cc/150?img=18",
  "languages": ["English", "German"],
  "address": {
    "street": "555 Historic Plaza",
    "city": "San Francisco",
    "state": "CA",
    "zipCode": "94102",
    "country": "USA"
  },
  "dateJoined": "2023-01-15T07:45:00Z",
  "isVerified": true,
  "verificationToken": null,
  "hostInfo": {
    "hostingSince": "2023-01-15T07:45:00Z",
    "responseRate": 98,
    "responseTime": "within an hour",
    "acceptanceRate": 97,
    "superhost": true,
    "about": "Historic Victorian mansion specialist. Perfect for special events and large groups. Full concierge service.",
    "totalListings": 1,
    "totalReviews": 55,
    "averageRating": 4.9
  },
  "listings": ["507f1f77bcf86cd799439019"],
  "bookings": [],
  "reviews": [],
  "bankAccount": {
    "accountHolder": "Elizabeth Taylor",
    "lastFourDigits": "7777",
    "bankName": "Wells Fargo San Francisco"
  },
  "preferences": {
    "emailNotifications": true,
    "smsNotifications": true
  }
}
```

---

## ⚠️ IMPORTANT: Password Hashing

The passwords in these samples are **NOT real hashes**. You need to hash them before inserting into MongoDB.

### To create real hashed passwords, use bcrypt:

**Option 1: Node.js Script**
```javascript
const bcrypt = require('bcrypt');

async function hashPassword(password) {
  const hash = await bcrypt.hash(password, 10);
  console.log(hash);
}

// Example: hash password "password123"
hashPassword('password123');
```

### Test Credentials (with bcrypt hashed passwords):

For testing, you can use these email/password combinations:
- **Guest 1**: `sarah.johnson@example.com` / `password123`
- **Guest 2**: `michael.chen@example.com` / `password123`
- **Guest 3**: `emma.rodriguez@example.com` / `password123`
- **Host 1**: `david.thompson@host.com` / `password123`
- **Host 2**: `jennifer.williams@host.com` / `password123`
- **Host 3**: `robert.martinez@host.com` / `password123`
- **Host 4**: `katherine.brooks@host.com` / `password123`
- **Host 5**: `james.sullivan@host.com` / `password123`
- **Host 6**: `patricia.anderson@host.com` / `password123`
- **Host 7**: `christopher.lewis@host.com` / `password123`
- **Host 8**: `margaret.white@host.com` / `password123`
- **Host 9**: `elizabeth.taylor@host.com` / `password123`

---

## 🔐 How to Hash Passwords Before Inserting

### Method 1: Update the password field in MongoDB

```javascript
db.users.updateMany(
  {},
  [
    {
      $set: {
        password: "$password" // bcrypt will need to be done via app
      }
    }
  ]
)
```

### Method 2: Use a Node.js Script to insert users

Create `insert-users.js` in your backend:

```javascript
const bcrypt = require('bcrypt');
const User = require('./db/models/User');
const connectDB = require('./db/connection');

const users = [
  // Paste your user objects here
];

async function insertUsers() {
  await connectDB();
  
  for (let user of users) {
    const hashedPassword = await bcrypt.hash(user.password, 10);
    user.password = hashedPassword;
    await User.create(user);
  }
  
  console.log('Users inserted successfully!');
  process.exit(0);
}

insertUsers();
```

Then run: `node insert-users.js`

---

## 📊 User Schema Reference

### Guest User Fields:
- `firstName` - User's first name
- `lastName` - User's last name
- `email` - Unique email address
- `password` - Bcrypt hashed password
- `role` - "guest"
- `phoneNumber` - Contact phone
- `dateOfBirth` - Birth date
- `profilePicture` - Avatar URL
- `languages` - Array of languages spoken
- `address` - Full address object
- `dateJoined` - Registration date
- `isVerified` - Email verification status
- `bookings` - Array of booking IDs
- `reviews` - Array of review IDs
- `preferences` - Notification preferences

### Host User Fields:
Includes all guest fields PLUS:
- `hostInfo` - Object with:
  - `hostingSince` - Date hosting started
  - `responseRate` - % of messages responded to
  - `responseTime` - Average response time
  - `acceptanceRate` - % of bookings accepted
  - `superhost` - Boolean superhost status
  - `about` - Host bio/description
  - `totalListings` - Number of active listings
  - `totalReviews` - Total reviews received
  - `averageRating` - Average rating
- `listings` - Array of listing IDs host owns
- `bankAccount` - Payment method info

---

## ✅ After Adding Users

1. Go to your app at `http://localhost:3000`
2. Click "Login"
3. Try logging in as a guest: `sarah.johnson@example.com` / `password123`
4. Try logging in as a host: `david.thompson@host.com` / `password123`
5. Each user type gets redirected to their dashboard 🎉

---

## 💡 Tips

- Each guest has a different city/location
- Each host corresponds to one of the 9 sample listings
- All test passwords are `password123`
- Superhost status is set to `true` for most hosts (except Margaret White)
- Response rates are realistic (92-100%)
- All users are verified (good for testing)

**Ready to test your auth system!** 🚀

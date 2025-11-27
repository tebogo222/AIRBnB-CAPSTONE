# 🏠 Airbnb Capstone Project

A full-stack Airbnb clone built with React, Node.js, and MongoDB. This project demonstrates a complete vacation rental platform with user authentication, property listings, booking management, and responsive design.

## ✨ Features

### 🏡 Property Management
- Browse properties by location and filters
- Detailed property listings with images and amenities
- Host dashboard for property management
- Create, edit, and delete property listings

### 👥 User System
- Guest and Host user roles
- User registration and authentication
- Profile management
- Booking history

### 📅 Booking System
- Real-time availability checking
- Secure booking process
- Reservation management
- Booking history for guests and hosts

### 🎨 User Experience
- Responsive design for all devices
- Modern Material-UI components
- Intuitive navigation
- Search and filtering capabilities

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern React with hooks
- **Material-UI** - Component library
- **Redux Toolkit** - State management
- **React Router** - Navigation
- **React Icons** - Icon library

### Backend
- **Node.js** - Server runtime
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **bcrypt** - Password hashing
- **JWT** - Authentication

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or cloud)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd airbnb-capstone
   ```

2. **Install dependencies**
   ```bash
   # Install frontend dependencies
   npm install
   
   # Install backend dependencies
   cd backend
   npm install
   cd ..
   ```

3. **Environment Setup**
   ```bash
   # Copy environment template
   cp env-template.txt .env
   
   # Edit .env with your configuration
   # Set MongoDB URI, JWT secret, etc.
   ```

4. **Database Setup**
   ```bash
   # Create database indexes
   cd backend
   node scripts/createIndexes.js
   cd ..
   ```

5. **Start Development Servers**
   ```bash
   # Start backend server (port 5002)
   cd backend
   npm start
   
   # In another terminal, start frontend (port 3000)
   npm start
   ```

6. **Access the Application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5002

## 📁 Project Structure

```
airbnb-capstone/
├── src/                    # React frontend
│   ├── components/         # Reusable components
│   ├── pages/             # Page components
│   ├── redux/             # State management
│   └── config.js          # Configuration
├── backend/               # Node.js backend
│   ├── db/               # Database models & connection
│   ├── scripts/          # Database scripts
│   └── server.js         # Express server
├── public/               # Static assets
└── docs/                 # Documentation
```

## 🔧 Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run deploy-test` - Run deployment readiness tests

## 🌐 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/logout` - User logout

### Listings
- `GET /api/listings` - Get all listings
- `GET /api/listings/:id` - Get specific listing
- `POST /api/listings` - Create listing (host only)
- `PUT /api/listings/:id` - Update listing (host only)
- `DELETE /api/listings/:id` - Delete listing (host only)

### Bookings
- `POST /api/bookings` - Create booking
- `GET /api/bookings` - Get user bookings
- `PUT /api/bookings/:id` - Update booking

## 🔒 Security Features

- JWT-based authentication
- Password hashing with bcrypt
- CORS protection
- Input validation
- Role-based access control

## 📱 Responsive Design

The application is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile phones

## 🚀 Deployment

This project is ready for deployment to platforms like:
- Heroku
- Vercel (frontend)
- Railway
- DigitalOcean

See `deployment-checklist.md` for detailed deployment instructions.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is for educational purposes as part of a capstone project.

## 👨‍💻 Author

Built as a capstone project to demonstrate full-stack development skills.

---

**Note:** This is a demonstration project and should not be used for production without additional security measures and testing.

import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./Navbar.css";
import LanguageIcon from "@mui/icons-material/Language";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";
import { useAuth } from '../AuthContext';
import { fetchCities } from '../redux/locationsSlice';



const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, role, logout } = useAuth();
  const [locationDropdownOpen, setLocationDropdownOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [guests, setGuests] = useState(0);
  const locationRef = useRef(null);
  
  // Get locations from Redux store
  const { locations, loading: loadingLocations } = useSelector(state => state.locations);

  useEffect(() => {
    // Fetch locations on component mount
    dispatch(fetchCities());
    
    //periodic refresh every 30 seconds to keep locations updated
    const interval = setInterval(() => {
      dispatch(fetchCities());
    }, 30000);
    
    return () => clearInterval(interval);
  }, [dispatch]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (locationRef.current && !locationRef.current.contains(event.target)) {
        setLocationDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSearchClick = () => {
    const queryParams = new URLSearchParams();
    
    if (selectedLocation && selectedLocation !== 'All locations') {
      const [city, country] = selectedLocation.split(', ');
      if (city && country) {
        queryParams.append('city', city);
        queryParams.append('country', country);
      }
    }
    
    if (checkInDate) queryParams.append('checkIn', checkInDate);
    if (checkOutDate) queryParams.append('checkOut', checkOutDate);
    if (guests > 0) queryParams.append('guests', guests);
    
    navigate(`/locations?${queryParams.toString()}`);
  };

  const handleBecomeHost = () => {
    navigate('/host-signup');
  };

  const handleLogout = async () => {
    await logout();
    navigate('/');
  };

  const handleDashboardClick = () => {
    if (role === 'host') {
      navigate('/admin');
    } else if (role === 'guest') {
      navigate('/guest');
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <div className="navbar__logo" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
          <img src="/logos/pngegg.png" alt="Airbnb Logo" />
        </div>
        <div className="navbar__links">
          <span>Places to stay</span>
          <span>Experiences</span>
          <span>Online Experiences</span>
        </div>
        <div className="navbar__right">
          {!user && <span className="navbar__host" onClick={handleBecomeHost}>Become a host</span>}
          {user && (
            <span 
              className="navbar__host" 
              onClick={handleDashboardClick}
              style={{ cursor: 'pointer', marginRight: '10px' }}
            >
              Back to Dashboard
            </span>
          )}
          <LanguageIcon className="navbar__icon" />
          <div className="navbar__menu-user">
            {user ? (
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span 
                  style={{ 
                    color: '#fff', 
                    fontSize: 14, 
                    cursor: 'pointer',
                    textDecoration: 'underline',
                    fontWeight: 500
                  }}
                  onClick={handleDashboardClick}
                  title={`Go to ${role === 'host' ? 'Host' : 'Guest'} Dashboard`}
                >
                  {user.firstName}
                </span>
                <button onClick={handleLogout} style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer', fontSize: 14 }}>Logout</button>
              </div>
            ) : (
              <AccountCircleIcon 
                className="navbar__icon" 
                onClick={() => navigate('/login')}
                style={{ cursor: 'pointer' }}
              />
            )}
          </div>
        </div>
      </div>
      <div className="navbar__searchbar">
        <div className="searchbar__section" ref={locationRef}>
          <div className="searchbar__label">Locations</div>
          <div
            className="searchbar__placeholder searchbar__location-placeholder"
            onClick={() => setLocationDropdownOpen((open) => !open)}
            tabIndex={0}
            style={{ cursor: "pointer" }}
          >
            {selectedLocation || "Select a Location"}
          </div>
          {locationDropdownOpen && (
            <ul className="searchbar__dropdown">
              {loadingLocations ? (
                <li className="searchbar__dropdown-item">Loading...</li>
              ) : (
                locations.map((loc, index) => (
                  <li
                    key={`${loc}-${index}`}
                    className="searchbar__dropdown-item"
                    onClick={() => {
                      setSelectedLocation(loc);
                      setLocationDropdownOpen(false);
                    }}
                  >
                    {loc}
                  </li>
                ))
              )}
            </ul>
          )}
        </div>
        <div className="searchbar__divider" />
        <div className="searchbar__section">
          <div className="searchbar__label">Check in date</div>
          <input 
            type="date" 
            className="searchbar__placeholder"
            value={checkInDate}
            onChange={(e) => setCheckInDate(e.target.value)}
            style={{ cursor: 'pointer', padding: '8px 4px' }}
          />
        </div>
        <div className="searchbar__divider" />
        <div className="searchbar__section">
          <div className="searchbar__label">Checkout date</div>
          <input 
            type="date" 
            className="searchbar__placeholder"
            value={checkOutDate}
            onChange={(e) => setCheckOutDate(e.target.value)}
            style={{ cursor: 'pointer', padding: '8px 4px' }}
          />
        </div>
        <div className="searchbar__divider" />
        <div className="searchbar__section">
          <div className="searchbar__label">Guests</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <button 
              onClick={() => setGuests(Math.max(0, guests - 1))}
              style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '18px', padding: '4px 6px' }}
            >
              −
            </button>
            <span style={{ minWidth: '20px', textAlign: 'center' }}>{guests} {guests === 1 ? 'guest' : 'guests'}</span>
            <button 
              onClick={() => setGuests(guests + 1)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '18px', padding: '4px 6px' }}
            >
              +
            </button>
          </div>
        </div>
        <button className="searchbar__button" onClick={handleSearchClick}>
          <SearchIcon />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

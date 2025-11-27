import React, { useState } from 'react';

const amenityIcons = {
  Wifi: '📶',
  Kitchen: '🍳',
  Refrigerator: '🧊',
  Dryer: '🌀',
  "Free washer - in building": '🧺',
  "Central air conditioning": '❄️',
  "Garden View": '🌳',
  "Pets allowed": '🐾',
  "Security cameras": '📷',
  Bicycles: '🚲',
  // Add more mappings as needed
};

const ListingOffers = ({ amenities = [] }) => {
  const [showAll, setShowAll] = useState(false);
  const shownAmenities = showAll ? amenities : amenities.slice(0, 10);
  return (
    <div style={{ margin: '32px 0' }}>
      <h2>What this place offers</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 12, marginBottom: 16 }}>
        {shownAmenities.map((amenity, idx) => (
          <div key={idx} style={{ display: 'flex', alignItems: 'center', fontSize: 16, color: '#444' }}>
            <span style={{ fontSize: 22, marginRight: 10 }}>{amenityIcons[amenity] || '•'}</span>
            {amenity}
          </div>
        ))}
      </div>
      {amenities.length > 10 && !showAll && (
        <button onClick={() => setShowAll(true)} style={{ padding: '8px 16px', borderRadius: 6, border: '1px solid #888', background: '#fff', cursor: 'pointer', fontSize: 15 }}>
          View all {amenities.length} amenities
        </button>
      )}
    </div>
  );
};

export default ListingOffers; 
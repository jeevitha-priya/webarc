import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { designDetails } from './designDetails';

const ServicePage = () => {
  const { index } = useParams();  // Fetch the service index from the URL params
  const { state } = useLocation();  // Get the state passed from Profile.js
  const design = state?.detail || designDetails[index]; // Fallback to using the designDetails array if state is unavailable

  if (!design) return <h2>Service not found</h2>;

  return (
    <div style={styles.serviceDetailContainer}>
      <h2>{design.title}</h2>
      
      {/* Display the icon of the service */}
      <img src={design.icon} alt={design.title} style={styles.serviceIcon} />
      
      {/* Description of the service */}
      <p style={styles.serviceDescription}>{design.description}</p>
      
      {/* Location of the service */}
      <div style={styles.locationContainer}>
        <h3>Location:</h3>
        <p style={styles.location}>{design.location}</p>
      </div>

      {/* Image Gallery with Locations, Excerpt, and Pricing */}
      <div style={styles.imageGallery}>
        {design.images.map((image, index) => (
          <div key={index} style={styles.imageItem}>
            <img
              src={image}
              alt={`${design.title} image ${index + 1}`}
              style={styles.galleryImage}
            />
            <p style={styles.imageLocation}>{design.location}</p>

            {/* Excerpt and Pricing for each image */}
            <div style={styles.detailsContainer}>
              <p><strong>Expert:</strong> {design.expert}</p>
              <p><strong>Pricing:</strong> {design.pricingRate}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  serviceDetailContainer: {
    padding: '20px',
    textAlign: 'center',
    maxWidth: '900px',
    margin: 'auto',
    backgroundColor: '#fff',
    borderRadius: '12px',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
  },
  serviceIcon: {
    width: '120px',
    height: 'auto',
    borderRadius: '8px',
    marginBottom: '20px',
  },
  serviceDescription: {
    fontSize: '1.2rem',
    marginBottom: '30px',
    color: '#444',
    lineHeight: '1.6',
  },
  locationContainer: {
    marginBottom: '30px',
  },
  location: {
    fontSize: '1.1rem',
    color: '#666',
  },
  imageGallery: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '15px',
    justifyContent: 'center',
  },
  imageItem: {
    textAlign: 'center',
    width: '30%',
    position: 'relative',
  },
  galleryImage: {
    width: '100%',
    height: '250px',
    objectFit: 'cover',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease', // Transition effect for zoom and shadow
  },
  imageLocation: {
    marginTop: '10px',
    fontSize: '1rem',
    color: '#555',
  },
  detailsContainer: {
    marginTop: '10px',
  },
};

// Hover effect for image zoom
styles.galleryImage = {
  ...styles.galleryImage,
  ':hover': {
    transform: 'scale(1.1)', // Scale the image slightly on hover
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)', // Add a stronger shadow on hover
  }
};

export default ServicePage;

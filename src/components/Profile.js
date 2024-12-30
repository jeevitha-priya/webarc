import React from 'react';
import { Link } from 'react-router-dom';
import work1 from '../assets/images/work1.png'; // Importing work1 image
import work2 from '../assets/images/work2.png'; // Importing work2 image
import work3 from '../assets/images/work3.png'; // Importing work3 image
import { designDetails } from './designDetails';

const Profile = () => {
  return (
    <div>
      {/* Full-page background */}
      <div style={styles.pageBackground}></div>

      {/* Container for Profile Content */}
      <div style={styles.profileContainer}>
        <h1 style={styles.title}>Our Architectural Designs</h1>
        <div style={styles.profileContent}>
          {/* Introduction Section */}
          <div style={styles.textContainer}>
            <p>
              At our company, we bring visionary architecture to life by blending creativity, functionality, and sustainability. Our designs are inspired by the harmony between human needs and the environment, creating spaces that are not only visually stunning but also practical and enduring.
            </p>
            <p>
              We specialize in diverse architectural styles, tailoring each project to reflect the unique character of its purpose and surroundings. From modern minimalism to timeless classics, our team collaborates closely with clients to ensure every design tells a story, respects the context, and exceeds expectations.
            </p>
            <p>
              Explore our portfolio and discover how we can shape your vision into architectural excellence.
            </p>
          </div>

          {/* Our Services Section */}
          <div style={styles.servicesSection}>
            <h2 style={styles.sectionTitle}>Our Services</h2>
            <div style={styles.servicesList}>
              {designDetails.map((design, index) => (
                <Link
                  to={{
                    pathname: `/service/${index}`,
                    state: {
                      title: design.title,
                      images: design.images,
                      location: `Location for ${design.title}`,
                    }, // Pass images and location as state
                  }}
                  key={index}
                  style={{ textDecoration: 'none' }}
                >
                  <div style={styles.serviceItem}>
                    <img src={design.icon} alt={design.title} style={styles.serviceIcon} />
                    <h3 style={styles.serviceTitle}>{design.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Work Showcase Section */}
          <div style={styles.workShowcase}>
            <h2 style={styles.sectionTitle}>Our Work</h2>
            <div style={styles.workImages}>
              <img src={work1} alt="Work 1" style={styles.workImage} />
              <img src={work2} alt="Work 2" style={styles.workImage} />
              <img src={work3} alt="Work 3" style={styles.workImage} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Styles for the Profile page
const styles = {
  pageBackground: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `linear-gradient(
                    rgba(0, 0, 0, 0.7), 
                    rgba(0, 0, 0, 0.7)
                  ), 
                  url('https://images.unsplash.com/photo-1568605114967-8130f3a36994') no-repeat center center`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    zIndex: -1,
  },
  profileContainer: {
    padding: '40px',
    fontFamily: 'Arial, sans-serif',
    maxWidth: '1200px',
    margin: 'auto',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    position: 'relative',
    zIndex: 1,
    minHeight: '100vh',
  },
  title: {
    textAlign: 'center',
    fontSize: '36px',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  profileContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  textContainer: {
    padding: '20px 0',
    fontSize: '1.3rem',
    lineHeight: '1.6',
  },
  servicesSection: {
    marginTop: '40px',
  },
  sectionTitle: {
    fontSize: '28px',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  servicesList: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
    justifyContent: 'center',
  },
  serviceItem: {
    width: '300px',
    padding: '15px',
    backgroundColor: '#f4f4f4',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    transition: 'transform 0.2s ease-in-out',
  },
  serviceIcon: {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
    marginBottom: '10px',
  },
  serviceTitle: {
    fontSize: '18px',
    fontWeight: '600',
  },
  workShowcase: {
    marginTop: '50px',
  },
  workImages: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '20px',
    marginTop: '20px',
  },
  workImage: {
    width: '30%',
    height: '250px',
    objectFit: 'cover',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
};

export default Profile;

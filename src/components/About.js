import React from 'react';

const About = () => {
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
      backgroundAttachment: 'fixed',
      zIndex: -1,
    },
    aboutContainer: {
      padding: '40px',
      fontFamily: 'Arial, sans-serif',
      maxWidth: '1200px',
      margin: 'auto',
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      borderRadius: '12px',
      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
      position: 'relative',
      zIndex: 1,
      minHeight: '100vh',
      textAlign: 'center',
    },
    title: {
      fontSize: '3rem',
      fontWeight: 'bold',
      color: '#444',
      marginBottom: '20px',
    },
    subtitle: {
      fontSize: '1.5rem',
      color: '#666',
      marginBottom: '40px',
    },
    aboutContent: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      marginTop: '20px',
    },
    textContainer: {
      flex: 1,
      minWidth: '50%',
      textAlign: 'left',
      color: '#333',
      fontSize:'1.5rem',
      padding: '10px',
    },
    imageContainer: {
      flex: 1,
      minWidth: '45%',
      textAlign: 'center',
    },
    image: {
      maxWidth: '100%',
      height: 'auto',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    },
    highlightSection: {
      marginTop: '40px',
      padding: '20px',
      backgroundColor: '#f9f9f9',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    highlightTitle: {
      fontSize: '2rem',
      color: '#222',
      marginBottom: '20px',
    },
    highlightItems: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
    },
    highlightItem: {
      flex: '1 1 calc(33% - 20px)',
      margin: '10px',
      padding: '15px',
      backgroundColor: '#fff',
      borderRadius: '8px',
      textAlign: 'center',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
    highlightItemTitle: {
      fontSize: '1.5rem',
      color: '#444',
      marginBottom: '10px',
    },
    highlightItemDescription: {
      fontSize: '1.6rem',
      color: '#666',
    },
  };

  return (
    <div>
      {/* Full-page background */}
      <div style={styles.pageBackground}></div>

      {/* Main About Section */}
      <div style={styles.aboutContainer}>
        <h1 style={styles.title}>About Us</h1>
        <p style={styles.subtitle}>
          Designing spaces that inspire, innovate, and elevate the human experience.
        </p>

        <div style={styles.aboutContent}>
          <div style={styles.textContainer}>
            <p>
              With over 30 years of experience in architecture, our team has delivered exceptional 
              projects in residential, commercial, and public spaces. We are committed to pushing the 
              boundaries of design, blending aesthetics with functionality to craft spaces that tell a story.
            </p>
            <p>
              We pride ourselves on our collaborative approach. From initial concepts to the final build, 
              we partner with our clients to transform their visions into reality, ensuring every detail 
              aligns with their goals.
            </p>
          </div>
          <div style={styles.imageContainer}>
            <img
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4"
              alt="Our Team at Work"
              style={styles.image}
            />
          </div>
        </div>

        {/* Highlight Section */}
        <div style={styles.highlightSection}>
          <h2 style={styles.highlightTitle}>Why Choose Us?</h2>
          <div style={styles.highlightItems}>
            <div style={styles.highlightItem}>
              <h3 style={styles.highlightItemTitle}>Innovative Designs</h3>
              <p style={styles.highlightItemDescription}>
                Our creative team ensures every project is one-of-a-kind, blending modern trends with timeless designs.
              </p>
            </div>
            <div style={styles.highlightItem}>
              <h3 style={styles.highlightItemTitle}>Sustainability</h3>
              <p style={styles.highlightItemDescription}>
                Committed to eco-friendly practices, we prioritize sustainable materials and energy-efficient designs.
              </p>
            </div>
            <div style={styles.highlightItem}>
              <h3 style={styles.highlightItemTitle}>Client-Centered Approach</h3>
              <p style={styles.highlightItemDescription}>
                We listen closely to your needs, ensuring your vision guides every step of the process.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

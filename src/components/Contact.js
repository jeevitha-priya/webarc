import React from 'react';

const Contact = () => {
  const styles = {
    pageBackground: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: `linear-gradient(
                      rgba(0, 0, 0, 0.6), 
                      rgba(0, 0, 0, 0.6)
                    ), 
                    url('https://images.unsplash.com/photo-1568605114967-8130f3a36994') no-repeat center center`,
      backgroundSize: 'cover',
      backgroundAttachment: 'fixed',
      zIndex: -1,
    },
    container: {
      padding: '40px',
      fontFamily: 'Arial, sans-serif',
      maxWidth: '1000px',
      margin: 'auto',
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      borderRadius: '12px',
      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
      position: 'relative',
      zIndex: 1,
      textAlign: 'center',
      minHeight: '100vh',
    },
    header: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      marginBottom: '20px',
      color: '#444',
    },
    subheader: {
      fontSize: '1.2rem',
      color: '#555',
      marginBottom: '40px',
    },
    section: {
      marginBottom: '30px',
    },
    socialMedia: {
      display: 'flex',
      justifyContent: 'center',
      gap: '20px',
    },
    icon: {
      width: '50px',
      height: '50px',
      borderRadius: '50%',
      transition: 'transform 0.2s ease',
    },
    iconHover: {
      transform: 'scale(1.1)',
    },
    governmentApprovals: {
      listStyleType: 'none',
      padding: '0',
      color: '#333',
      marginTop: '20px',
    },
    governmentApprovalItem: {
      fontSize: '1rem',
      marginBottom: '10px',
    },
    link: {
      color: '#0066cc',
      textDecoration: 'none',
    },
  };

  return (
    <div>
      {/* Background applied to the entire page */}
      <div style={styles.pageBackground}></div>

      <div style={styles.container}>
        <h1 style={styles.header}>Contact Us</h1>
        <p style={styles.subheader}>
          Have questions? Reach out to us, and we'll help bring your vision to life.
        </p>

        {/* Contact Information Section */}
        <div style={styles.section}>
          <h2>Our Contact Information</h2>
          <p>
            Visit us at{' '}
            <a
              href="https://Architecturefirm/"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.link}
            >
              www.architecturefirm.com
            </a>
          </p>
          <p>Address: 3b,no:32, 1st Main Rd, Gandhi Nagar, Adyar, Tamil Nadu, Chennai 600020</p>
          <p><strong>"YOU CHOOSE, WE DO IT"</strong></p>
        </div>

        {/* Social Media Section */}
        <div style={styles.section}>
          <h2>Connect with Us</h2>
          <div style={styles.socialMedia}>
            <a href="https://www.instagram.com/architecturefirm" target="_blank" rel="noopener noreferrer">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                alt="Instagram"
                style={styles.icon}
              />
            </a>
            <a href="https://twitter.com/architecturefirm" target="_blank" rel="noopener noreferrer">
              <img
                src="https://static.vecteezy.com/system/resources/previews/046/853/007/non_2x/twitter-x-black-and-white-logo-transparent-background-free-png.png"
                alt="Twitter"
                style={styles.icon}
              />
            </a>
            <a href="https://www.facebook.com/architecturefirm" target="_blank" rel="noopener noreferrer">
              <img
                src="https://images.vexels.com/content/137253/preview/facebook-icon-logo-205182.png"
                alt="Facebook"
                style={styles.icon}
              />
            </a>
          </div>
        </div>

        {/* Government Approvals Section */}
        <div style={styles.section}>
          <h2>Government Approvals</h2>
          <ul style={styles.governmentApprovals}>
            <li style={styles.governmentApprovalItem}>✔ Registered with the Council of Architecture (COA)</li>
            <li style={styles.governmentApprovalItem}>✔ Compliant with the Architects Act of 1972</li>
            <li style={styles.governmentApprovalItem}>✔ GST Registration No: 1234ABC5678XYZ</li>
            <li style={styles.governmentApprovalItem}>✔ Building Plan Approval Certified</li>
            <li style={styles.governmentApprovalItem}>✔ Fire Safety No Objection Certificate (NOC) Obtained</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;

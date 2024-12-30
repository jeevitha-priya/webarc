import React, { useState, useEffect } from "react";
import "./project.css"; // Ensure the CSS file exists and is correctly styled

const Project = () => {
  const [reviews, setReviews] = useState([]);
  const [visibleReviews, setVisibleReviews] = useState(3); // Start with 3 visible reviews

  // Simulated reviews data
  useEffect(() => {
    const reviewsData = [
      { name: "John Doe", text: "Absolutely stunning work! My home feels like a masterpiece now.", rating: 5 },
      { name: "Jane Smith", text: "Top-notch service! The attention to detail was incredible.", rating: 4 },
      { name: "Samuel Green", text: "A seamless experience from start to finish. Highly recommended!", rating: 5 },
      { name: "Emily Brown", text: "Exceptional craftsmanship and design!", rating: 5 },
      { name: "Michael Lee", text: "Creative, efficient, and professional service.", rating: 4 },
      { name: "Sophia Wilson", text: "They truly brought my vision to life!", rating: 5 },
      { name: "David Miller", text: "Exceeded all expectations. Highly recommended!", rating: 5 },
      { name: "Olivia Taylor", text: "Fast, reliable, and creative designs!", rating: 4 },
      { name: "William Davis", text: "A masterpiece created with skill and care.", rating: 5 },
      { name: "Emma Garcia", text: "Friendly and professional. Loved the results!", rating: 5 },
    ];
    setReviews(reviewsData);
  }, []);

  const completedProjects = 120; // Static data for completed projects
  const projectCompletionTime = "5 years"; // Static time for completion

  // Static project images
  const projectImages = [
    "https://studyarchitecture.com/wp-content/uploads/A1-922x1030.jpg",
    "https://i2.au.reastatic.net/800x600/27d40e11f8cad219e0dad1ce092a47ced0e4878c3abe25733b0b36e767186faf/image.jpg",
    "https://d1bv4heaa2n05k.cloudfront.net/user-images/1466667485033/shutterstock-308447903_main_1466667490751.jpeg",
  ];

  const styles = {
    pageBackground: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: `linear-gradient(
                      rgba(0, 0, 0, 0.6),
                      rgba(0, 0, 0, 0.8)
                    ),
                    url('https://images.unsplash.com/photo-1568605114967-8130f3a36994') no-repeat center center`,
      backgroundSize: "cover",
      backgroundAttachment: "fixed",
      zIndex: -1,
    },
    container: {
      padding: "40px",
      fontFamily: "'Poppins', sans-serif",
      maxWidth: "1200px",
      margin: "auto",
      backgroundColor: "rgba(255, 255, 255, 0.95)",
      borderRadius: "12px",
      boxShadow: "0 8px 12px rgba(0, 0, 0, 0.2)",
      position: "relative",
      zIndex: 1,
      minHeight: "100vh",
    },
    highlightText: {
      fontSize: "48px",
      fontWeight: "bold",
      color: "#34495e",
      textAlign: "center",
      marginBottom: "10px",
    },
    subText: {
      fontSize: "18px",
      color: "#555",
      textAlign: "center",
      marginBottom: "30px",
    },
    button: {
      display: "block",
      margin: "20px auto",
      padding: "10px 20px",
      fontSize: "18px",
      color: "#fff",
      backgroundColor: "#3498db",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
      transition: "background-color 0.3s",
    },
    buttonHover: {
      backgroundColor: "#2980b9",
    },
    projectImagesContainer: {
      display: "flex",
      justifyContent: "center",
      gap: "20px",
      flexWrap: "wrap",
      marginTop: "30px",
    },
    projectImage: {
      width: "300px",
      height: "200px",
      objectFit: "cover",
      borderRadius: "12px",
      boxShadow: "0 6px 10px rgba(0, 0, 0, 0.2)",
      border: "4px solid #3498db",
    },
    reviewCard: {
      padding: "15px",
      marginBottom: "15px",
      border: "1px solid #ddd",
      borderRadius: "8px",
      backgroundColor: "#fff",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      textAlign: "left",
    },
    reviewHeader: {
      color: "#34495e",
      fontWeight: "bold",
    },
    rating: {
      color: "gold",
      fontSize: "18px",
    },
  };

  const loadMoreReviews = () => {
    setVisibleReviews((prev) => prev + 10);
  };

  return (
    <div>
      {/* Background Overlay */}
      <div style={styles.pageBackground}></div>

      {/* Main Content Container */}
      <div style={styles.container}>
        <header>
          <h1 style={styles.highlightText}>{completedProjects}+ Projects Completed</h1>
          <p style={styles.subText}>Completed in {projectCompletionTime} with unmatched excellence and creativity.</p>
        </header>

        {/* Display Project Images */}
        <div style={styles.projectImagesContainer}>
          {projectImages.map((imageUrl, index) => (
            <img key={index} src={imageUrl} alt={`Project ${index + 1}`} style={styles.projectImage} />
          ))}
        </div>

        {/* Customer Reviews Section */}
        <div>
          <h2 style={styles.highlightText}>Customer Reviews</h2>
          {reviews.slice(0, visibleReviews).map((review, index) => (
            <div key={index} style={styles.reviewCard}>
              <h3 style={styles.reviewHeader}>{review.name}</h3>
              <p>{review.text}</p>
              <div style={styles.rating}>
                <span>{`⭐`.repeat(review.rating)}</span>
              </div>
            </div>
          ))}

          {/* Load More Button */}
          {visibleReviews < reviews.length && (
            <button style={styles.button} onClick={loadMoreReviews}>
              View More Reviews
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Project;

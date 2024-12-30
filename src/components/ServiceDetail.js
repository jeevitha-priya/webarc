import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"; // Import useNavigate
import { designDetails } from "./designDetails"; // Importing the design details

const ServiceDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // Initialize useNavigate
  const service = designDetails[id];
  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBackground(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <div className="service-page">
      {/* Full-page background */}
      <div className="background-container"></div>

      {/* Close Button */}
      <div className="close-button" onClick={() => navigate(-1)}>
        &times;
      </div>

      <div className={`fade-background ${showBackground ? "visible" : ""}`}>
        <h1 className="service-title">{service.title}</h1>
        <p className="service-description">{service.details}</p>

        {/* Location Info Section */}
        <div className="location-info">
          <h2 className="location-title">Location</h2>
          <p className="location-description highlighted-location">{service.location}</p>
        </div>

        {/* Pricing Info Section */}
        <div className="pricing-info">
          <h2 className="pricing-title">Pricing</h2>
          <p className="pricing-description">{service.pricingRate}</p>
        </div>

        {/* Expert Info Section */}
        <div className="expert-info">
          <h2 className="expert-title">Expert</h2>
          <p className="expert-description">{service.expert}</p>
        </div>

        {/* Image Gallery */}
        <div className="image-gallery">
          {service.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${service.title} ${index + 1}`}
              className="gallery-image"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// Dynamic Styles
const addDynamicStyles = () => {
  const css = `
    /* Full-page background container with gradient overlay */
    .background-container {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(
                      rgba(0, 0, 0, 0.7), 
                      rgba(0, 0, 0, 0.7)
                    ), 
                    url('https://images.unsplash.com/photo-1568605114967-8130f3a36994') no-repeat center center;
      background-size: cover;
      background-attachment: fixed;
      z-index: -1;
      height: 100vh;
    }

    /* Close button styling */
    .close-button {
      position: absolute;
      top: 20px;
      right: 20px;
      font-size: 28px;
      color: #fff;
      background: rgba(0, 0, 0, 0.5);
      border: 1px solid #fff;
      border-radius: 50%;
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: background 0.3s ease, transform 0.2s ease;
      z-index: 10;
    }

    .close-button:hover {
      background: rgba(255, 255, 255, 0.7);
      color: #333;
      transform: scale(1.1);
    }

    /* Fade-in effect for content */
    .fade-background {
      opacity: 0;
      transition: opacity 1.5s ease-in-out;
      background-color: rgba(255, 255, 255, 0.85);
      border-radius: 12px;
      padding: 40px;
      max-width: 900px;
      text-align: center;
      margin: auto;
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
      position: relative;
      z-index: 1;
    }

    .fade-background.visible {
      opacity: 1;
    }

    .service-page {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      position: relative;
    }

    /* Title styling */
    .service-title {
      font-size: 48px;
      font-weight: bold;
      margin-bottom: 20px;
      color: #333333;
    }

    /* Description styling */
    .service-description {
      font-size: 20px;
      margin-bottom: 30px;
      line-height: 1.8;
      color: #555555;
    }

    /* Location Info Styling */
    .location-info {
      margin-top: 30px;
      font-size: 1.2rem;
      color: #444;
    }

    .location-title {
      font-weight: bold;
      color: #2c3e50;
      font-size: 1.5rem;
    }

    .highlighted-location {
      font-size: 1.4rem;
      color: #2980b9;
      font-weight: bold;
      margin-top: 10px;
      transition: color 0.3s;
    }

    .highlighted-location:hover {
      color: #16a085;
    }

    /* Pricing Info Styling */
    .pricing-info {
      margin-top: 30px;
      font-size: 1.2rem;
      color: #444;
    }

    .pricing-title {
      font-weight: bold;
      color: #2c3e50;
    }

    .pricing-description {
      font-size: 1.2rem;
      color: #555;
    }

    /* Image gallery styling */
    .image-gallery {
      display: flex;
      flex-wrap: wrap;
      gap: 15px;
      justify-content: center;
      margin-top: 30px;
    }

    .gallery-image {
      width: 30%;
      height: 300px;
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      object-fit: cover;
    }
  `;

  const styleSheet = document.createElement("style");
  styleSheet.type = "text/css";
  styleSheet.innerText = css;
  document.head.appendChild(styleSheet);
};

addDynamicStyles();

export default ServiceDetail;

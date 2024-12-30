import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header'; // Header component
import Footer from './components/Footer'; // Footer component
import Home from './components/Home'; // Home page component
import Profile from './components/Profile'; // Profile page
import About from './components/About'; // About page
import Contact from './components/Contact'; // Contact page
import Project from './components/Projects'; // Project details page
import ServiceDetail from './components/ServiceDetail'; // Ensure correct component name and import

const App = () => {
  return (
    <Router>
      <Header />
      <div className="main-content">
        <Routes>
          {/* Define all the routes */}
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/service/:id" element={<ServiceDetail />} /> {/* Dynamic route for service details */}
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;

import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './App.css';
import logo from './assets/img/logo.png';
import mission from './assets/img/mission-image.png';
import vision from './assets/img/vision-image.png';
import value from './assets/img/value-image.png';

const App = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, offset: 100 });
  }, []);

  return (
    <div className="app">
      <Header />
      <HeroSection />
      <section id="mission" className="section">
        <h2>Mission</h2>
        <div className="section-content">
          <img src={mission} alt="Mission" className="section-image" />
          <p>To revolutionize lung cancer care by integrating innovative Remote Patient Monitoring (RPM) technologies that empower patients, enhance provider efficiency, and improve healthcare outcomes while ensuring equitable access to quality care for all.</p>
        </div>
      </section>
      <section id="vision" className="section">
        <h2>Vision</h2>
        <div className="section-content">
          <img src={vision} alt="Vision" className="section-image" />
          <p>To lead the transformation of oncology care through proactive, technology-driven solutions that provide real-time insights, reduce healthcare disparities, and set a global benchmark for compassionate, patient-centered care while ensuring that these services remain affordable and accessible nationwide.</p>
        </div>
      </section>
      <section id="mission" className="section">
  <h2>Values</h2>
  <div className="section-content">
    <img src={value} alt="values" className="section-image" />
    <ul>
      <li>Innovation in Care: Utilizing advanced wearable devices and mobile apps to offer cutting-edge monitoring solutions.</li>
      <li>Proactive Health Management: Ensuring early detection and intervention to improve outcomes and reduce complications.</li>
      <li>Accessibility for All: Bridging healthcare disparities to reach rural and underserved populations.</li>
      <li>Affordability: Committed to delivering high-quality care solutions that are cost-effective for patients and healthcare systems.</li>
      <li>Safety and Compliance: Adhering to the highest standards of data security and regulatory compliance to protect patient information.</li>
      <li>Compassionate Support: Delivering empathetic, patient-focused care that prioritizes comfort and dignity.</li>
    </ul>
  </div>
</section>
    </div>
  );
};

function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo-img" />
        </div>
        <ul className="nav-links">
          <li><a href="#hero" className="nav-link">Home</a></li>
          <li><a href="#mission" className="nav-link">Mission</a></li>
          <li><a href="#vision" className="nav-link">Vision</a></li>
        </ul>
      </nav>
    </header>
  );
}

function HeroSection() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content" data-aos="fade-up">
        <h2 className="hero-title">Welcome to <span>Lung Connect Care Service</span></h2>
        <p className="hero-subtitle">Lung Connect Care Service transforms lung cancer management through Remote Patient Monitoring (RPM) using wearable devices and a symptom-tracking app. Our mission is to enhance patient outcomes with early detection, timely interventions, and reduced hospitalizations. The project is aiming for 60% daily monitoring compliance, a 20% reduction in preventable hospitalizations, and a 10% improvement in quality of life within a year. With advanced technologies and patient-focused solutions, we are redefining oncology care to be proactive and effective.</p>
        <button className="cta-button">Know More</button>
        <h2 className='contact-title'>Contact</h2>
        <p className="contact-text">Email us at lungconnectcareservice@gmail.com or call (800) 478-0114
          or visit us at www.lungconnectcareservice.com
        </p>
      </div>
    </section>
  );
}

export default App;

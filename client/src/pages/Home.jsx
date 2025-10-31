import React, { useEffect } from "react";
import "../styles/Home.css";
import heroVideo from "../assets/14620973_3840_2160_24fps.mp4";
import feature1 from "../assets/feature1.jpg.png";
import feature2 from "../assets/feature2.jpg.png";
import feature3 from "../assets/feature3.jpg.png";

const Home = () => {
  useEffect(() => {
    const sections = document.querySelectorAll(".animate-on-scroll");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.2 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <div className="home">
      {/* HERO SECTION */}
      <section className="hero">
        <video className="hero-video" autoPlay muted loop playsInline>
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="hero-overlay">
          <h1 className="heading-primary">
            Reconnect With Nature, One Native Plant at a Time
          </h1>
          <p className="hero-text">
            Personalized AI guidance to help you plant native species, restore
            biodiversity, and heal the planet starting right where you are.
          </p>
          <button className="cta-button">Join the Movement</button>
        </div>
      </section>

      {/* STATS SECTION — moved up */}
      <section className="stats-section animate-on-scroll">
        <h2 className="heading-section">Why It Matters</h2>
        <div className="stats-grid">
          <div className="stat-item">
            <h3 className="stat-number">80%</h3>
            <p>of deforestation is caused by agricultural expansion.</p>
          </div>
          <div className="stat-item">
            <h3 className="stat-number">1M+</h3>
            <p>species are at risk of extinction due to habitat loss.</p>
          </div>
          <div className="stat-item">
            <h3 className="stat-number">45%</h3>
            <p>of the world’s natural ecosystems are severely degraded.</p>
          </div>
          <div className="stat-item">
            <h3 className="stat-number">10×</h3>
            <p>
              increase in biodiversity when homeowners plant native species.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="features-section animate-on-scroll">
        <div className="feature-block">
          <div className="feature-text">
            <h2>Tailored Guidance</h2>
            <p>
              AI-driven native plant recommendations based on your location,
              available space, and experience level.
            </p>
          </div>
          <div className="feature-image">
            <img src={feature1} alt="Tailored guidance" />
          </div>
        </div>

        <div className="feature-block alt">
          <div className="feature-image">
            <img src={feature2} alt="Community gardens" />
          </div>
          <div className="feature-text">
            <h2>Community & Movement</h2>
            <p>
              Connect with local gardeners, share your progress, and join a
              growing movement to rewild our world.
            </p>
          </div>
        </div>

        <div className="feature-block">
          <div className="feature-text">
            <h2>Restore Biodiversity</h2>
            <p>
              Track your environmental impact and help combat the effects of
              monoculture by planting native species.
            </p>
          </div>
          <div className="feature-image">
            <img src={feature3} alt="Biodiversity" />
          </div>
        </div>
      </section>

      {/* MISSION, VISION, VALUES */}
      {/* MISSION, VISION, VALUES */}
      <section className="mvv-section animate-on-scroll">
        <div className="mvv-container">
          <div className="mvv-card">
            <h3 className="heading-sub">Vision</h3>
            <p>
              A future where every space urban or rural thrives with native
              plants, pollinators, and harmony between people and nature.
            </p>
          </div>
          <div className="mvv-card">
            <h3 className="heading-sub">Mission</h3>
            <p>
              Empower individuals and communities to combat deforestation and
              monoculture through sustainable, biodiversity focused gardening.
            </p>
          </div>
          <div className="mvv-card">
            <h3 className="heading-sub">Values</h3>
            <p>
              Sustainability, innovation, and inclusivity believing that even
              small gardens can make a big difference.
            </p>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="cta-section animate-on-scroll">
        <h2 className="heading-section">Be Part of the Change</h2>
        <p className="cta-text">
          Whether you have a balcony or a backyard, your plants can make an
          impact. Join Nativ and restore biodiversity one seed at a time.
        </p>
        <button className="cta-button">Get Started</button>
      </section>
    </div>
  );
};

export default Home;

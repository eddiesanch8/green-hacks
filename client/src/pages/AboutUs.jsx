import React from "react";
import "../styles/AboutUs.css";

// Correct way: import your images directly
import helenaImage from "../assets/helena.jpg";
import eddieImage from "../assets/eddie.jpg";
import kevinImage from "../assets/kevin.jpg";
import eduardoImage from "../assets/eduardo.jpg";

//  Carousel images
import carousel1 from "../assets/garden7.png";
import carousel2 from "../assets/garden2.jpg";
import carousel3 from "../assets/garden3.jpg";
import carousel4 from "../assets/garden4.jpg";

export default function AboutUs() {
  const team = [
    {
      name: "Helena Lian",
      role: "Creative Director",
      bio: "Leads all creative initiatives, branding, and user experience across Nativs. Ensures the organization’s visual identity and content resonate with its mission of promoting biodiversity and sustainable agriculture. Oversees educational materials, outreach campaigns, and engagement strategies.",
      image: helenaImage,
      linkedIn: "https://www.linkedin.com/in/helena-lian/",
    },
    {
      name: "Eddie Millsaps Jr",
      role: "Front End Engineer",
      bio: "Develops long-term organizational strategies to expand Nativs’ impact on local communities and environmental sustainability. Guides partnerships with schools, local farms, and environmental organizations. Monitors organizational goals, metrics, and mission alignment.",
      image: eddieImage,
      linkedIn: "https://www.linkedin.com/in/eddiemillsapsjr/",
    },
    {
      name: "Kevin Anderson",
      role: "AI Engineer",
      bio: "Manages all data-driven initiatives and AI applications. Designs algorithms for sustainable planting suggestions and biodiversity tracking. Provides insights from environmental and user data to guide the organization’s decisions.",
      image: kevinImage,
      linkedIn: "https://www.linkedin.com/in/kevin-anderson-06a09929b/",
    },
    {
      name: "Eduardo Sanchez",
      role: "Software Developer",
      bio: "Leads the development of all digital tools and platforms for Nativs. Oversees website, app, AI integration, and digital infrastructure. Ensures the organization’s technology is scalable, secure, and efficient.",
      image: eduardoImage,
      linkedIn: "https://www.linkedin.com/in/eduardo-san/",
    },
  ];

  //  define carousel images array properly
  const carouselImages = [carousel1, carousel2, carousel3, carousel4];

  return (
    <main className="aboutus">
      {/* Intro Section */}
      <section className="aboutus__intro">
        <h1>About Us</h1>
        <p>
          We’re a passionate team driven by creativity, sustainability, and
          technology, dedicated to designing digital experiences that connect
          people and inspire positive change. Through Nativ, we empower
          individuals to restore biodiversity by offering personalized,
          AI-guided recommendations on native plants suited to their
          environment. Our mission is to make sustainable gardening accessible
          to everyone helping homeowners and city dwellers alike become active
          stewards of their ecosystems. Together, we’re building a movement to
          combat deforestation and monoculture, one native plant at a time.
        </p>
      </section>

      {/* Team Section */}
      <section className="aboutus__team">
        {team.map((member, index) => (
          <div key={index} className="aboutus__card">
            <a href={member.linkedIn}>
              <img src={member.image} alt={member.name} />
            </a>
            <h2>{member.name}</h2>
            <h3>{member.role}</h3>
            <p>{member.bio}</p>
          </div>
        ))}
      </section>

      {/* Carousel Section */}
      <section className="aboutus__carousel">
        <div className="carousel__track">
          {carouselImages.concat(carouselImages).map((img, index) => (
            <img src={img} alt="carousel" key={index} />
          ))}
        </div>
      </section>
    </main>
  );
}

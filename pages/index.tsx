import dynamic from 'next/dynamic';
const Navigation = dynamic(() => import('../components/Navigation'));
const MatrixRain = dynamic(() => import('../components/MatrixRain'));
const Greetings = dynamic(() => import('../containers/Greetings'));
const Skills = dynamic(() => import('../containers/Skills'));
const Proficiency = dynamic(() => import('../containers/Proficiency'));
const Education = dynamic(() => import('../containers/Education'));
const Experience = dynamic(() => import('../containers/Experience'));
const VolunteerExperience = dynamic(() => import("../containers/VolunteerExperience"));
const Projects = dynamic(() => import('../containers/Projects'));
const Feedbacks = dynamic(() => import('../containers/Feedbacks'));
const GithubProfileCard = dynamic(
  () => import('../components/GithubProfileCard')
);
import { openSource, showContactUs } from '../portfolio';
import SEO from '../components/SEO';
import Contact from '../components/ContactUs';
import { GithubUserType } from '../types';
import { useEffect, useState } from 'react';

export default function Home({
  githubProfileData,
}: {
  githubProfileData: any;
}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for better UX
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 25%, #16213e 50%, #0f3460 75%, #533483 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 9999
        }}
      >
        <div className="text-center">
          <div 
            className="spinner-border text-primary mb-3" 
            role="status"
            style={{
              width: '3rem',
              height: '3rem',
              borderWidth: '3px'
            }}
          >
            <span className="sr-only">Loading...</span>
          </div>
          <h4 className="text-white">Loading Portfolio...</h4>
        </div>
      </div>
    );
  }

  return (
    <div className="portfolio-container">
      <SEO />
      <MatrixRain />
      <Navigation />
      
      {/* Hero Section */}
      <section id="about" className="section-modern">
        <Greetings />
      </section>
      
      {/* Skills Section */}
      <section id="skills" className="section-modern">
        <Skills />
        <div style={{ marginTop: '60px' }}>
          <Proficiency />
        </div>
      </section>
      
      {/* Experience & Education Section */}
      <section id="experience" className="section-modern">
        <Education />
        <div style={{ marginTop: '80px' }}>
          <Experience />
        </div>
        {/* Only show VolunteerExperience if it has content */}
        <div style={{ marginTop: '60px' }}>
          <VolunteerExperience />
        </div>
      </section>
      
      {/* Projects Section */}
      <section id="projects" className="section-modern">
        <Projects />
      </section>
      
      {/* Achievements Section */}
      <section id="achievements" className="section-modern">
        <Feedbacks />
      </section>
      
      {/* GitHub Profile Section */}
      <section id="github" className="section-modern">
        <GithubProfileCard {...githubProfileData} />
      </section>
      
      {/* Contact Section */}
      {showContactUs && (
        <section id="contact" className="section-modern">
          <Contact />
        </section>
      )}
      
      {/* Back to Top Button */}
      <BackToTopButton />
    </div>
  );
}

// Back to Top Button Component
const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      className={`back-to-top ${isVisible ? 'visible' : ''}`}
      onClick={scrollToTop}
      style={{
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        background: 'linear-gradient(135deg, #00c6ff, #0072ff)',
        border: 'none',
        color: 'white',
        fontSize: '20px',
        cursor: 'pointer',
        zIndex: 1000,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        boxShadow: '0 8px 25px rgba(0, 198, 255, 0.3)'
      }}
    >
      <i className="fa fa-arrow-up" />
    </button>
  );
};

export async function getStaticProps() {
  const githubProfileData: GithubUserType = await fetch(
    `https://api.github.com/users/${openSource.githubUserName}`
  ).then((res) => res.json());

  return {
    props: { githubProfileData },
    revalidate: 3600, // Revalidate every hour
  };
}

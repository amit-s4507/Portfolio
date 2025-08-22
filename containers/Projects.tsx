import React from 'react';
import { projects } from '../portfolio';
import { Container, Row, Col } from 'reactstrap';
import ProjectsCard from '../components/ProjectsCard';
import Fade from 'react-reveal/Fade';

const Projects = () => {
  return (
    projects && (
      <section 
        className="section section-lg mb-150" 
        style={{
          background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 25%, #16213e 50%, #0f3460 75%, #533483 100%)',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Background Pattern */}
        <div 
          className="bg-pattern"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
            opacity: 0.3
          }}
        />
        
        <Container className="position-relative">
          <div className="projects-header text-center mb-5">
            <Fade bottom duration={1000} distance="40px">
              <div className="d-flex justify-content-center align-items-center mb-4">
                <div 
                  className="icon icon-lg icon-shape bg-white shadow rounded-circle d-flex align-items-center justify-content-center me-3"
                  style={{
                    width: '80px',
                    height: '80px',
                    background: 'rgba(255, 255, 255, 0.95)',
                    backdropFilter: 'blur(10px)',
                    border: '2px solid rgba(255, 255, 255, 0.2)'
                  }}
                >
                  <i 
                    className="ni ni-laptop text-info" 
                    style={{ fontSize: '2rem' }}
                  />
                </div>
                <h1 
                  className="display-3 text-white mb-0"
                  style={{
                    fontWeight: '700',
                    textShadow: '0 4px 8px rgba(0,0,0,0.3)',
                    letterSpacing: '-0.02em'
                  }}
                >
                  Featured Projects
                </h1>
              </div>
              <p 
                className="lead text-white"
                style={{
                  fontSize: '1.25rem',
                  opacity: '0.9',
                  maxWidth: '700px',
                  margin: '0 auto',
                  lineHeight: '1.6'
                }}
              >
                Explore my latest work showcasing full-stack development, AI integration, and modern web technologies
              </p>
            </Fade>
          </div>
          
          <Row className="row-grid align-items-center justify-content-center">
            {projects.map((data, i) => (
              <Col lg="4" md="6" className="mb-4" key={i}>
                <Fade bottom duration={1000} distance="40px" delay={i * 200}>
                  <ProjectsCard {...data} />
                </Fade>
              </Col>
            ))}
          </Row>
        </Container>
        
        <div className="separator separator-bottom separator-skew zindex-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon 
              className="fill-white" 
              points="2560 0 2560 100 0 100"
              style={{ filter: 'drop-shadow(0 -4px 8px rgba(0,0,0,0.1))' }}
            />
          </svg>
        </div>

        <style jsx>{`
          .projects-header {
            padding: 2rem 0;
          }
          
          .bg-pattern {
            animation: float 20s ease-in-out infinite;
          }
          
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
          
          @media (max-width: 768px) {
            .projects-header h1 {
              font-size: 2.5rem;
            }
            
            .projects-header .lead {
              font-size: 1.1rem;
            }
            
            .icon-shape {
              width: 60px !important;
              height: 60px !important;
            }
            
            .icon-shape i {
              font-size: 1.5rem !important;
            }
          }
        `}</style>
      </section>
    )
  );
};

export default Projects;

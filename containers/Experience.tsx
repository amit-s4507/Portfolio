import React from 'react';
import { experience } from '../portfolio';
import { Container, Row, Col } from 'reactstrap';
import ExperienceCard from '../components/ExperienceCard';
import Fade from 'react-reveal/Fade';

const Experience = () => {
  return (
    experience && (
      <section className="section section-lg" style={{ background: '#f8f9fa' }}>
        <Container>
          <div className="experience-header text-center mb-5">
            <Fade bottom duration={1000} distance="40px">
              <div className="d-flex justify-content-center align-items-center mb-4">
                <div 
                  className="icon icon-lg icon-shape bg-white shadow rounded-circle d-flex align-items-center justify-content-center me-3"
                  style={{
                    width: '80px',
                    height: '80px',
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    border: 'none'
                  }}
                >
                  <i 
                    className="ni ni-briefcase-24 text-white" 
                    style={{ fontSize: '2rem' }}
                  />
                </div>
                <h1 
                  className="display-3 text-dark mb-0"
                  style={{
                    fontWeight: '700',
                    letterSpacing: '-0.02em'
                  }}
                >
                  Professional Experience
                </h1>
              </div>
              <p 
                className="lead text-muted"
                style={{
                  fontSize: '1.25rem',
                  maxWidth: '700px',
                  margin: '0 auto',
                  lineHeight: '1.6'
                }}
              >
                My journey in software development, from internships to technical leadership roles
              </p>
            </Fade>
          </div>
          
          <Row className="row-grid align-items-start justify-content-center">
            {experience.map((data, i) => (
              <Col lg="6" className="mb-4" key={i}>
                <Fade bottom duration={1000} distance="40px" delay={i * 200}>
                  <ExperienceCard {...data} />
                </Fade>
              </Col>
            ))}
          </Row>
        </Container>

        <style jsx>{`
          .experience-header {
            padding: 2rem 0;
          }
          
          @media (max-width: 768px) {
            .experience-header h1 {
              font-size: 2.5rem;
            }
            
            .experience-header .lead {
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

export default Experience;

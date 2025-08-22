import React from 'react';
import { Card, Col, Row, Container } from 'reactstrap';
import { GithubUserType } from '../types';
import SocialLinks from './SocialLinks';
import Fade from 'react-reveal/Fade';

const GithubProfileCard = ({ avatar_url, bio, location }: GithubUserType) => {
  return (
    <Card 
      className="section-lg rounded-0 border-none github-profile-card" 
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
          background: 'url("data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Cpath d="M20 20c0 11.046-8.954 20-20 20s-20-8.954-20-20 8.954-20 20-20 20 8.954 20 20z"/%3E%3C/g%3E%3C/svg%3E")',
          opacity: 0.3
        }}
      />
      
      <Container className="position-relative">
        <div className="p-4">
          <Row className="align-items-center">
            <Col className="order-lg-2 text-center" lg="4">
              <Fade right duration={1000} distance="40px">
                <div className="profile-image-wrapper mb-4">
                  <img
                    src="/profile-photo.jpg"
                    style={{ 
                      width: '220px',
                      height: '220px',
                      objectFit: 'cover'
                    }}
                    alt="Amit Santosh Sahu"
                    className="rounded-circle img-fluid shadow-lg mb-4 profile-image"
                  />
                  <div className="profile-image-glow" />
                </div>
              </Fade>
            </Col>
            <Col lg="8" className="order-lg-1">
              <Fade left duration={1000} distance="40px">
                <div className="profile-content">
                  <h2 
                    className="text-white mb-4"
                    style={{
                      fontWeight: '700',
                      fontSize: '2.5rem',
                      textShadow: '0 4px 8px rgba(0,0,0,0.3)',
                      letterSpacing: '-0.02em'
                    }}
                  >
                    Let's Connect & Collaborate! 🚀
                  </h2>
                  <p 
                    className="lead text-white mb-4"
                    style={{
                      fontSize: '1.3rem',
                      opacity: '0.95',
                      lineHeight: '1.6',
                      textShadow: '0 2px 4px rgba(0,0,0,0.2)'
                    }}
                  >
                    Have an exciting project idea? Want to discuss technology trends? 
                    Or just want to say hello? I'm always open to meaningful conversations 
                    and exciting opportunities!
                  </p>
                  <p 
                    className="text-white mb-4"
                    style={{
                      fontSize: '1.1rem',
                      opacity: '0.9',
                      fontWeight: '500',
                      background: 'rgba(255, 255, 255, 0.1)',
                      padding: '12px 20px',
                      borderRadius: '12px',
                      display: 'inline-block',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.2)'
                    }}
                  >
                    💻 Full Stack Developer | 🤖 AI Integration Specialist | 
                    🏆 Competitive Programmer
                  </p>
                  
                  <div className='d-flex align-items-center justify-content-start flex-wrap gap-3 mb-4'>
                    <div 
                      className="location-badge d-flex align-items-center"
                      style={{
                        background: 'rgba(255, 255, 255, 0.15)',
                        padding: '12px 20px',
                        borderRadius: '25px',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        color: 'white',
                        fontWeight: '500'
                      }}
                    >
                      <i 
                        className="ni ni-pin-3 text-info me-2" 
                        style={{ fontSize: '1.2rem' }}
                      />
                      Nagpur, India
                    </div>
                    
                    <div className="social-links-wrapper">
                      <SocialLinks />
                    </div>
                  </div>
                </div>
              </Fade>
            </Col>
          </Row>
        </div>
      </Container>

      <style jsx>{`
        .github-profile-card {
          border-radius: 24px;
          margin: 2rem 0;
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25);
        }
        
        .profile-image-wrapper {
          position: relative;
          display: inline-block;
        }
        
        .profile-image {
          border: 4px solid rgba(255, 255, 255, 0.3);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          z-index: 2;
        }
        
        .profile-image:hover {
          transform: scale(1.05) rotate(2deg);
          border-color: rgba(255, 255, 255, 0.6);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }
        
        .profile-image-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 250px;
          height: 250px;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.2) 0%, transparent 70%);
          border-radius: 50%;
          z-index: 1;
          animation: pulse 3s ease-in-out infinite;
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 0.3; transform: translate(-50%, -50%) scale(1); }
          50% { opacity: 0.6; transform: translate(-50%, -50%) scale(1.1); }
        }
        
        .bg-pattern {
          animation: float 25s ease-in-out infinite;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(180deg); }
        }
        
        .location-badge {
          transition: all 0.3s ease;
        }
        
        .location-badge:hover {
          background: rgba(255, 255, 255, 0.25) !important;
          transform: translateY(-2px);
        }
        
        .social-links-wrapper {
          flex: 1;
        }
        
        @media (max-width: 768px) {
          .github-profile-card {
            margin: 1rem 0;
            border-radius: 16px;
          }
          
          .profile-content h2 {
            font-size: 2rem;
            text-align: center;
          }
          
          .profile-content .lead {
            font-size: 1.1rem;
            text-align: center;
          }
          
          .profile-image {
            width: 180px !important;
            height: 180px !important;
          }
          
          .profile-image-glow {
            width: 200px;
            height: 200px;
          }
          
          .location-badge {
            width: 100%;
            justify-content: center;
            margin-bottom: 1rem;
          }
          
          .social-links-wrapper {
            width: 100%;
            display: flex;
            justify-content: center;
          }
        }
      `}</style>
    </Card>
  );
};

export default GithubProfileCard;

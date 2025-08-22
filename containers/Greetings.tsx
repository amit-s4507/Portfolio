import React, { useEffect } from 'react';
import { greetings } from '../portfolio';
import { Button, Container, Row, Col } from 'reactstrap';
import GreetingLottie from '../components/DisplayLottie';
import SocialLinks from '../components/SocialLinks';

const Greetings = () => {
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement!.scrollTop = 0;
  });

  return (
    <main>
      <div className="position-relative">
        <section 
          className="section section-lg section-shaped pb-150" 
          style={{
            background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 25%, #16213e 50%, #0f3460 75%, #533483 100%)',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Animated Background Elements */}
          <div className="shape shape-style-1 bg-gradient-info">
            <span style={{ animation: 'float 6s ease-in-out infinite' }} />
            <span style={{ animation: 'float 8s ease-in-out infinite reverse' }} />
            <span style={{ animation: 'float 7s ease-in-out infinite' }} />
            <span style={{ animation: 'float 9s ease-in-out infinite reverse' }} />
            <span style={{ animation: 'float 5s ease-in-out infinite' }} />
            <span style={{ animation: 'float 10s ease-in-out infinite reverse' }} />
            <span style={{ animation: 'float 6.5s ease-in-out infinite' }} />
            <span style={{ animation: 'float 7.5s ease-in-out infinite reverse' }} />
            <span style={{ animation: 'float 8.5s ease-in-out infinite' }} />
          </div>
          
          {/* Floating Particles */}
          <div className="floating-particles">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="particle"
                style={{
                  position: 'absolute',
                  width: '4px',
                  height: '4px',
                  background: 'rgba(255, 255, 255, 0.6)',
                  borderRadius: '50%',
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animation: `float ${5 + Math.random() * 5}s ease-in-out infinite`,
                  animationDelay: `${Math.random() * 5}s`
                }}
              />
            ))}
          </div>

          <Container className="py-lg-md d-flex pt-100">
            <div className="col px-0">
              <Row className="align-items-center">
                <Col lg="6" className="order-2 order-lg-1">
                  <div className="hero-content" style={{ animation: 'slideInLeft 1s ease-out' }}>
                    <h1 
                      className="display-3 text-white mb-4"
                      style={{
                        fontWeight: '800',
                        letterSpacing: '-0.02em',
                        lineHeight: '1.1',
                        textShadow: '0 4px 8px rgba(0,0,0,0.3)'
                      }}
                    >
                      {greetings.title}
                    </h1>
                    <p 
                      className="lead text-white mb-5"
                      style={{
                        fontSize: '1.25rem',
                        lineHeight: '1.6',
                        opacity: '0.95',
                        textShadow: '0 2px 4px rgba(0,0,0,0.2)'
                      }}
                    >
                      {greetings.description}
                    </p>
                    
                    <div className="mb-5">
                      <SocialLinks />
                    </div>
                    
                    {greetings.resumeLink && (
                      <div className="btn-wrapper my-4 d-flex flex-wrap gap-3">
                        <Button
                          className="btn-white btn-icon mb-3 mb-sm-0"
                          color="default"
                          href={greetings.resumeLink}
                          target="_blank"
                          style={{
                            borderRadius: '12px',
                            padding: '14px 28px',
                            fontWeight: '600',
                            fontSize: '1rem',
                            boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
                            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                          }}
                        >
                          <span className="btn-inner--icon mr-2">
                            <i className="fa fa-file-pdf-o" style={{ fontSize: '1.1rem' }} />
                          </span>
                          <span className="btn-inner--text">
                            Download Resume
                          </span>
                        </Button>

                        <Button
                          className="btn-outline-white btn-icon mb-3 mb-sm-0"
                          color="default"
                          href="https://github.com/amit-s4507"
                          target="_blank"
                          style={{
                            borderRadius: '12px',
                            padding: '14px 28px',
                            fontWeight: '600',
                            fontSize: '1rem',
                            border: '2px solid rgba(255,255,255,0.8)',
                            background: 'transparent',
                            color: 'white',
                            boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
                            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                          }}
                        >
                          <span className="btn-inner--icon mr-2">
                            <i className="fa fa-github" style={{ fontSize: '1.1rem' }} />
                          </span>
                          <span className="btn-inner--text">
                            View GitHub
                          </span>
                        </Button>
                      </div>
                    )}
                  </div>
                </Col>
                <Col lg="6" className="order-1 order-lg-2">
                  <div className="hero-animation" style={{ animation: 'slideInRight 1s ease-out 0.3s both' }}>
                    <GreetingLottie animationPath="/lottie/coding.json" />
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
          
          {/* Enhanced SVG Separator */}
          <div className="separator separator-bottom separator-skew">
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
        </section>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        .hero-content h1 {
          background: linear-gradient(135deg, #00ffff 0%, #0099ff 50%, #ff00ff 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-shadow: 0 0 30px rgba(0, 255, 255, 0.5);
        }
        
        .btn-outline-white:hover {
          background: rgba(0, 255, 255, 0.1);
          transform: translateY(-3px);
          box-shadow: 0 12px 35px rgba(0, 255, 255, 0.3);
          border-color: #00ffff;
        }
        
        .btn-white:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 35px rgba(0,0,0,0.2);
        }
        
        .floating-particles {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }
        
        .particle {
          opacity: 0.6;
        }
        
        .hero-animation {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        @media (max-width: 768px) {
          .hero-content h1 {
            font-size: 2.5rem;
          }
          
          .hero-content .lead {
            font-size: 1.1rem;
          }
          
          .btn-wrapper {
            flex-direction: column;
          }
          
          .btn {
            width: 100%;
            margin-bottom: 1rem;
          }
        }
      `}</style>
    </main>
  );
};

export default Greetings;

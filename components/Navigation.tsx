import React, { useState, useEffect } from 'react';
import { greetings, socialLinks } from '../portfolio';
import Headroom from 'headroom.js';
import {
  UncontrolledCollapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
} from 'reactstrap';

const Navigation = () => {
  const [collapseClasses, setCollapseClasses] = useState('');
  const [scrollProgress, setScrollProgress] = useState(0);
  
  const onExiting = () => setCollapseClasses('collapsing-out');
  const onExited = () => setCollapseClasses('');

  useEffect(() => {
    let headroom = new Headroom(document.getElementById('navbar-main')!);
    headroom.init();

    // Scroll progress indicator
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const smoothScrollTo = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Scroll Progress Indicator */}
      <div className="scroll-indicator">
        <div 
          className="scroll-progress" 
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
      
      <header className="header-global">
        <Navbar
          className="navbar-main navbar-transparent navbar-light headroom"
          expand="lg"
          id="navbar-main"
          style={{
            background: 'rgba(0, 0, 0, 0.9)',
            backdropFilter: 'blur(20px)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            transition: 'all 0.3s ease'
          }}
        >
          <Container>
            <NavbarBrand href="/" className="mr-lg-5">
              <h2 
                className="text-white gradient-text-primary" 
                id="nav-title" 
                style={{
                  fontSize: '1.8rem',
                  fontWeight: '800',
                  margin: 0,
                  background: 'linear-gradient(135deg, #00c6ff 0%, #0072ff 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                {greetings.name}
              </h2>
            </NavbarBrand>
            
            <button
              className="navbar-toggler"
              aria-label="navbar_toggle"
              id="navbar_global"
              style={{
                border: 'none',
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '8px',
                padding: '8px'
              }}
            >
              <span className="navbar-toggler-icon" />
            </button>
            
            <UncontrolledCollapse
              toggler="#navbar_global"
              navbar
              className={collapseClasses}
              onExiting={onExiting}
              onExited={onExited}
            >
              <div className="navbar-collapse-header">
                <Row>
                  <Col className="collapse-brand" xs="6">
                    <h3 className="text-black gradient-text-primary" id="nav-title">
                      {greetings.name}
                    </h3>
                  </Col>
                  <Col className="collapse-close" xs="6">
                    <button className="navbar-toggler" id="navbar_global">
                      <span />
                      <span />
                    </button>
                  </Col>
                </Row>
              </div>
              
              <Nav className="align-items-lg-center ml-lg-auto" navbar>
                {/* Navigation Links */}
                <NavItem className="d-none d-lg-block">
                  <NavLink
                    className="nav-link-modern"
                    href="#about"
                    onClick={(e) => {
                      e.preventDefault();
                      smoothScrollTo('about');
                    }}
                    style={{
                      color: '#fff',
                      fontWeight: '500',
                      padding: '8px 16px',
                      borderRadius: '8px',
                      transition: 'all 0.3s ease',
                      position: 'relative'
                    }}
                  >
                    About
                  </NavLink>
                </NavItem>
                
                <NavItem className="d-none d-lg-block">
                  <NavLink
                    className="nav-link-modern"
                    href="#skills"
                    onClick={(e) => {
                      e.preventDefault();
                      smoothScrollTo('skills');
                    }}
                    style={{
                      color: '#fff',
                      fontWeight: '500',
                      padding: '8px 16px',
                      borderRadius: '8px',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    Skills
                  </NavLink>
                </NavItem>
                
                <NavItem className="d-none d-lg-block">
                  <NavLink
                    className="nav-link-modern"
                    href="#projects"
                    onClick={(e) => {
                      e.preventDefault();
                      smoothScrollTo('projects');
                    }}
                    style={{
                      color: '#fff',
                      fontWeight: '500',
                      padding: '8px 16px',
                      borderRadius: '8px',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    Projects
                  </NavLink>
                </NavItem>
                
                <NavItem className="d-none d-lg-block">
                  <NavLink
                    className="nav-link-modern"
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      smoothScrollTo('contact');
                    }}
                    style={{
                      color: '#fff',
                      fontWeight: '500',
                      padding: '8px 16px',
                      borderRadius: '8px',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    Contact
                  </NavLink>
                </NavItem>
                
                {/* Social Links */}
                {socialLinks.email && (
                  <NavItem>
                    <NavLink
                      rel="noopener"
                      aria-label="Email"
                      className="nav-link-icon modern-social-link"
                      href={`mailto:${socialLinks.email}`}
                      target="_blank"
                      style={{
                        color: '#ffffff',
                        padding: '10px',
                        borderRadius: '50%',
                        background: 'rgba(255, 255, 255, 0.1)',
                        margin: '0 5px',
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '40px',
                        height: '40px'
                      }}
                    >
                      <i className="fa fa-envelope" style={{ fontSize: '16px' }}></i>
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        Email
                      </span>
                    </NavLink>
                  </NavItem>
                )}
                
                {socialLinks.github && (
                  <NavItem>
                    <NavLink
                      rel="noopener"
                      aria-label="Github"
                      className="nav-link-icon modern-social-link"
                      href={socialLinks.github}
                      target="_blank"
                      style={{
                        color: '#ffffff',
                        padding: '10px',
                        borderRadius: '50%',
                        background: 'rgba(255, 255, 255, 0.1)',
                        margin: '0 5px',
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '40px',
                        height: '40px'
                      }}
                    >
                      <i className="fa fa-github" style={{ fontSize: '16px' }} />
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        Github
                      </span>
                    </NavLink>
                  </NavItem>
                )}
                
                {socialLinks.linkedin && (
                  <NavItem>
                    <NavLink
                      rel="noopener"
                      aria-label="Linkedin"
                      className="nav-link-icon modern-social-link"
                      href={socialLinks.linkedin}
                      target="_blank"
                      style={{
                        color: '#ffffff',
                        padding: '10px',
                        borderRadius: '50%',
                        background: 'rgba(255, 255, 255, 0.1)',
                        margin: '0 5px',
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '40px',
                        height: '40px'
                      }}
                    >
                      <i className="fa fa-linkedin" style={{ fontSize: '16px' }}/>
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        Linkedin
                      </span>
                    </NavLink>
                  </NavItem>
                )}
              </Nav>
            </UncontrolledCollapse>
          </Container>
        </Navbar>
      </header>
      
      <style jsx>{`
        .nav-link-modern:hover {
          background: rgba(0, 198, 255, 0.1) !important;
          color: #00c6ff !important;
          transform: translateY(-2px);
        }
        
        .modern-social-link:hover {
          background: rgba(0, 198, 255, 0.2) !important;
          transform: translateY(-3px) scale(1.1);
          box-shadow: 0 8px 25px rgba(0, 198, 255, 0.3);
        }
        
        .navbar-main {
          border-radius: 0 0 20px 20px;
        }
        
        @media (max-width: 768px) {
          .navbar-collapse {
            background: rgba(0, 0, 0, 0.95);
            backdrop-filter: blur(20px);
            border-radius: 16px;
            margin-top: 1rem;
            padding: 1rem;
          }
        }
      `}</style>
    </>
  );
};

export default Navigation;

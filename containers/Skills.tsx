import { Icon } from '@iconify/react';
import React, { Fragment } from 'react';
import Fade from 'react-reveal/Fade';
import { Col, Container, Row, UncontrolledTooltip } from 'reactstrap';
import DisplayLottie from '../components/DisplayLottie';
import { skillsSection } from '../portfolio';

const Skills = () => {
  // Helper function to generate safe IDs for tooltips
  const generateSafeId = (skillName: string) => {
    return skillName.replace(/[^a-zA-Z0-9]/g, '');
  };

  return (
    skillsSection && (
      <Container className="text-center my-5 section section-lg">
        <div className="skills-header mb-5">
          <Fade bottom duration={1000} distance="40px">
            <h1 
              className="h1 mb-3"
              style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontWeight: '700',
                fontSize: '3rem'
              }}
            >
              {skillsSection.title}
            </h1>
            <p 
              className="lead"
              style={{
                fontSize: '1.25rem',
                color: '#6c757d',
                maxWidth: '800px',
                margin: '0 auto',
                lineHeight: '1.6'
              }}
            >
              {skillsSection.subTitle}
            </p>
          </Fade>
        </div>

        {skillsSection.data.map((section, index) => {
          return (
            <Row className="my-5 align-items-center" key={index}>
              <Col lg="6" className="order-2 order-lg-1">
                <Fade left duration={1000} distance="40px">
                  <div className="skills-animation-wrapper">
                    <DisplayLottie animationPath={section.lottieAnimationFile} />
                  </div>
                </Fade>
              </Col>
              <Col lg="6" className="order-1 order-lg-2">
                <Fade right duration={1000} distance="40px">
                  <div className="skills-content">
                    <h3 
                      className="h3 mb-4"
                      style={{
                        fontWeight: '600',
                        color: '#2d3748',
                        fontSize: '2rem'
                      }}
                    >
                      {section.title}
                    </h3>
                    
                    <div className="skills-grid mb-4">
                      {section.softwareSkills.map((skill, i) => {
                        const safeId = generateSafeId(skill.skillName);
                        return (
                          <Fragment key={i}>
                            <div
                              className="skill-icon-wrapper"
                              id={safeId}
                              style={{
                                display: 'inline-block',
                                margin: '8px',
                                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                cursor: 'pointer'
                              }}
                            >
                              <div
                                className="icon icon-lg icon-shape shadow-sm rounded-circle"
                                style={{
                                  width: '80px',
                                  height: '80px',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
                                  border: '2px solid transparent',
                                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                                }}
                              >
                                <Icon
                                  icon={skill.fontAwesomeClassName}
                                  data-inline="false"
                                  style={{
                                    fontSize: '2rem',
                                    color: '#667eea'
                                  }}
                                />
                              </div>
                              <UncontrolledTooltip
                                delay={0}
                                placement="top"
                                target={safeId}
                              >
                                {skill.skillName}
                              </UncontrolledTooltip>
                            </div>
                          </Fragment>
                        );
                      })}
                    </div>
                    
                    <div className="skills-description">
                      {section.skills.map((skill, i) => {
                        return (
                          <p 
                            key={i}
                            style={{
                              textAlign: 'left',
                              marginBottom: '1rem',
                              fontSize: '1.1rem',
                              color: '#4a5568',
                              lineHeight: '1.6',
                              padding: '12px 16px',
                              background: 'rgba(102, 126, 234, 0.05)',
                              borderRadius: '8px',
                              borderLeft: '4px solid #667eea'
                            }}
                          >
                            {skill}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </Fade>
              </Col>
            </Row>
          );
        })}

        <style jsx>{`
          .skills-header {
            margin-bottom: 4rem;
          }
          
          .skills-animation-wrapper {
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 300px;
          }
          
          .skills-content {
            padding: 2rem;
          }
          
          .skills-grid {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 1rem;
          }
          
          .skill-icon-wrapper:hover .icon-shape {
            transform: translateY(-8px) scale(1.05);
            box-shadow: 0 20px 40px rgba(102, 126, 234, 0.2);
            border-color: #667eea;
          }
          
          .skill-icon-wrapper:hover .icon-shape i {
            transform: scale(1.1);
          }
          
          .skills-description p {
            transition: all 0.3s ease;
          }
          
          .skills-description p:hover {
            background: rgba(102, 126, 234, 0.1);
            transform: translateX(8px);
          }
          
          @media (max-width: 768px) {
            .skills-header h1 {
              font-size: 2.5rem;
            }
            
            .skills-content {
              padding: 1rem;
              text-align: center;
            }
            
            .skills-description p {
              text-align: center;
            }
            
            .skills-grid {
              justify-content: center;
            }
          }
        `}</style>
      </Container>
    )
  );
};

export default Skills;

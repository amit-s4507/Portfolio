import React from "react";
import { Volunteerexperience } from "../portfolio";
import { Container, Row, Col } from "reactstrap";
import Fade from 'react-reveal/Fade';
import VolunteerExperienceCard from "../components/VolunteerExperienceCard";

const VolunteerExperience = () => {
	return Volunteerexperience && (
		<section className="section section-lg" style={{ background: 'white' }}>
			<Container>
				<div className="volunteer-header text-center mb-5">
					<Fade bottom duration={1000} distance="40px">
						<div className="d-flex justify-content-center align-items-center mb-4">
							<div 
								className="icon icon-lg icon-shape bg-white shadow rounded-circle d-flex align-items-center justify-content-center me-3"
								style={{
									width: '80px',
									height: '80px',
									background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
									border: 'none'
								}}
							>
								<i 
									className="ni ni-satisfied text-white" 
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
								Volunteer Experience
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
							Giving back to the community through technical leadership and mentorship
						</p>
					</Fade>
				</div>
				
				<Row className="row-grid align-items-start justify-content-center">
					{Volunteerexperience.map((data, i) => (
						<Col lg="6" className="mb-4" key={i}>
							<Fade bottom duration={1000} distance="40px" delay={i * 200}>
								<VolunteerExperienceCard {...data} />
							</Fade>
						</Col>
					))}
				</Row>
			</Container>

			<style jsx>{`
				.volunteer-header {
					padding: 2rem 0;
				}
				
				@media (max-width: 768px) {
					.volunteer-header h1 {
						font-size: 2.5rem;
					}
					
					.volunteer-header .lead {
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
	);
};

export default VolunteerExperience;
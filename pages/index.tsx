import dynamic from 'next/dynamic';
const Navigation = dynamic(() => import('../components/Navigation'));
const MatrixRain = dynamic(() => import('../components/MatrixRain'));
const Greetings = dynamic(() => import('../containers/Greetings'));
const Skills = dynamic(() => import('../containers/Skills'));
const Proficiency = dynamic(() => import('../containers/Proficiency'));
const Education = dynamic(() => import('../containers/Education'));
const Experience = dynamic(() => import('../containers/Experience'));
const VolunteerExperience = dynamic(
  () => import('../containers/VolunteerExperience')
);
const Projects = dynamic(() => import('../containers/Projects'));
const Feedbacks = dynamic(() => import('../containers/Feedbacks'));
const GithubProfileCard = dynamic(
  () => import('../components/GithubProfileCard')
);
import { openSource, showContactUs } from '../portfolio';
import SEO from '../components/SEO';
import Contact from '../components/ContactUs';
import { GithubUserType } from '../types';

export default function Home({
  githubProfileData,
}: {
  githubProfileData: any;
}) {
  return (
    <div>
      <SEO />
      <MatrixRain />
      <Navigation />
      <Greetings />
      <Skills />
      <Proficiency />
      <Education />
      <Experience />
      <VolunteerExperience />
      <Projects />
      <Feedbacks />
      <GithubProfileCard {...githubProfileData} />
      {showContactUs ? <Contact /> : null}
    </div>
  );
}

// Home.prototype = {
//   githubProfileData: PropTypes.object.isRequired,
// };

export async function getStaticProps() {
  const githubProfileData: GithubUserType = await fetch(
    `https://api.github.com/users/${openSource.githubUserName}`
  ).then((res) => res.json());

  return {
    props: { githubProfileData },
  };
}

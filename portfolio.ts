import emoji from 'react-easy-emoji';
import {
	EducationType,
	ExperienceType,
	VolunteerExperienceType,
	FeedbackType,
	ProjectType,
	SkillsSectionType,
	SkillBarsType,
	SEODataType,
	SocialLinksType,
	GreetingsType,
} from './types/sections';

// ============================
// Personal Information Section
// ============================
export const greetings = {
	name: "Amit Santosh Sahu",
	title: "Hey all, I'm Amit Santosh Sahu",
	description:
		"I'm a passionate Full-Stack Developer specializing in AI integration and scalable cloud solutions. Built and deployed 3+ production-ready applications with 99.9% uptime, solved 500+ algorithmic problems (LeetCode rating: 1676), and developed performant web solutions using React, TypeScript, and cloud-native architectures.",
	resumeLink:
		"https://drive.google.com/file/d/1IDQ4ziHZGN6I49k667J5oCRcoT0A61Cz/view?usp=sharing",
};

export const openSource = {
	githubUserName: "amit-s4507",
};

export const contact = {};

export const socialLinks = {
	url: "https://ai-resume-analyzer-nine-khaki.vercel.app",
	linkedin: "https://linkedin.com/in/amit-sahu-24a03s1707",
	github: "https://github.com/amit-s4507",
	// instagram: "YOUR_INSTAGRAM_URL",
	email: "amitsahu174507@gmail.com",
};

// ============================
// Skills Section
// ============================
export const skillsSection: SkillsSectionType = {
	title: 'Skills',
	subTitle: 'I AM A PASSIONATE FULL-STACK DEVELOPER WITH EXPERTISE IN AI INTEGRATION AND CLOUD SOLUTIONS',
	data: [
		{
			title: 'Full Stack Development',
			lottieAnimationFile: '/lottie/skills/fullstack.json',
			skills: [
				emoji('⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js and Next.js 13+'),
				emoji('⚡ Building RESTful APIs in Node.js, Express.js, and FastAPI'),
				emoji('⚡ Experience of working on cloud platforms such as Vercel, Railway, and Docker'),
				emoji('⚡ Hosting and maintaining websites with PostgreSQL and MongoDB databases'),
				emoji('⚡ Experience of building AI-powered applications with LangChain and OpenAI APIs'),
			],
			softwareSkills: [
				{
					skillName: 'HTML-5',
					fontAwesomeClassName: 'vscode-icons:file-type-html',
				},
				{
					skillName: 'CSS-3',
					fontAwesomeClassName: 'vscode-icons:file-type-css',
				},
				{
					skillName: 'Tailwind CSS',
					fontAwesomeClassName: 'logos:tailwindcss',
				},
				{
					skillName: 'JavaScript',
					fontAwesomeClassName: 'logos:javascript',
				},
				{
					skillName: 'TypeScript',
					fontAwesomeClassName: 'logos:typescript',
				},
				{
					skillName: 'Reactjs',
					fontAwesomeClassName: 'vscode-icons:file-type-reactjs',
				},
				{
					skillName: 'Next.js',
					fontAwesomeClassName: 'logos:nextjs',
				},
				{
					skillName: 'Nodejs',
					fontAwesomeClassName: 'logos:nodejs',
				},
				{
					skillName: 'FastAPI',
					fontAwesomeClassName: 'logos:fastapi',
				},
				{
					skillName: 'PostgreSQL',
					fontAwesomeClassName: 'logos:postgresql',
				},
				{
					skillName: 'MongoDB',
					fontAwesomeClassName: 'logos:mongodb',
				},
				{
					skillName: 'Docker',
					fontAwesomeClassName: 'logos:docker',
				},
			],
		},
		{
			title: 'Programming Languages & AI/ML',
			lottieAnimationFile: '/lottie/skills/cloudinfra.json',
			skills: [
				emoji('⚡ Proficient in Java, JavaScript, C++, TypeScript, Python, and SQL'),
				emoji('⚡ Strong foundation in Data Structures and Algorithms (500+ LeetCode problems solved)'),
				emoji('⚡ Experience with AI/ML tools including LangChain, OpenAI APIs, Scikit-learn, and Pandas'),
			],
			softwareSkills: [
				{
					skillName: 'Java',
					fontAwesomeClassName: 'logos:java',
				},
				{
					skillName: 'JavaScript',
					fontAwesomeClassName: 'logos:javascript',
				},
				{
					skillName: 'C plus plus',
					fontAwesomeClassName: 'logos:c-plusplus',
				},
				{
					skillName: 'TypeScript',
					fontAwesomeClassName: 'logos:typescript',
				},
				{
					skillName: 'Python',
					fontAwesomeClassName: 'devicon:python',
				},
				{
					skillName: 'SQL',
					fontAwesomeClassName: 'ant-design:console-sql-outlined',
				},
				{
					skillName: 'LangChain',
					fontAwesomeClassName: 'logos:python',
				},
				{
					skillName: 'OpenAI APIs',
					fontAwesomeClassName: 'logos:openai',
				},
			],
		},
	],
};

export const SkillBars: SkillBarsType[] = [
	{
		Stack: "Frontend/Design",
		progressPercentage: "90",
	},
	{
		Stack: "Backend",
		progressPercentage: "85",
	},
	{
		Stack: "Programming",
		progressPercentage: "95",
	},
	{
		Stack: "AI/ML",
		progressPercentage: "80",
	},
];

// ============================
// Education Section
// ============================
export const educationInfo: EducationType[] = [
	{
		schoolName: "Shri Ramdeobaba College of Engineering, Nagpur",
		subHeader: "Bachelor of Technology in Computer Science – Data Science",
		duration: "2022 – 2026",
		desc: "",
		grade: "CGPA: 9.22",
		descBullets: [
			"Specializing in AI integration and scalable cloud solutions",
		],
	},
	{
		schoolName: "G.B.M. Junior College, Hinganghat",
		subHeader: "Higher Secondary Certificate – Science, Maharashtra Board",
		duration: "2022",
		desc: "",
		grade: "90.33%",
		descBullets: [
			"Strong foundation in Science and Mathematics",
			"Prepared for Computer Science specialization",
		],
	},
];

// ============================
// Experience Section
// ============================
export const experience: ExperienceType[] = [
	{
		role: "Software Development Intern",
		company: "Codelintech",
		date: "March 2025 – May 2025",
		desc: "Developed full-stack applications using Node.js and TypeScript with automated CI/CD pipelines via GitHub Actions. Implemented E2E testing using Playwright and Vitest, improving deployment reliability by 40%. Managed production deployments on Linux VMs with DNS configuration and security protocols. Collaborated with cross-functional teams to deliver scalable software solutions within deadlines.",
		companyLogo: '/img/icons/common/codelintech.jpg',
	},
];

// ============================
// Volunteer Experience Section
// ============================
export const Volunteerexperience: VolunteerExperienceType[] = [
];

// ============================
// Projects Section
// ============================
export const projects: ProjectType[] = [
	{
		name: "AI Resume Analyzer – AI-Powered Resume Analysis Platform",
		desc: "A modern, AI-powered resume analysis platform that provides comprehensive feedback on resumes using advanced Applicant Tracking System (ATS) optimization and AI-driven insights. Built with React 19.1.0, TypeScript, Tailwind CSS, and Puter.js. Features include comprehensive resume scoring, ATS optimization, real-time feedback, and secure file handling with zero data retention.",
		github: "https://github.com/amit-s4507/Ai-Resume-Analyzer",
		link: "https://ai-resume-analyzer-nine-khaki.vercel.app",
	},
	{
		name: "Student Levelling – Gamified Learning Platform",
		desc: "A comprehensive gamified learning platform built with Next.js 13+, Prisma, and PostgreSQL. Features include secure authentication, interactive leaderboards, progress tracking, and real-time collaboration. Optimized with database connection pooling and serverless deployments for high availability and scalability.",
		github: "https://github.com/amit-s4507/Student-Levelling",
		link: "https://student-levelling.vercel.app",
	},
	{
		name: "AI Assistant – Multi-Modal Chat Platform",
		desc: "An advanced AI assistant platform built with LangChain, FastAPI, and React. Features 4 specialized chat modes with persistent conversation history, contextual memory, and tool-based reasoning. Integrated with OpenAI APIs for intelligent responses and conversation management.",
		github: "https://github.com/amit-s4507/Ai--Assistant",
		link: "https://ai-assistant-pi-self.vercel.app/",
	},
];

// ============================
// Achievements Section
// ============================
export const feedbacks: FeedbackType[] = [
	{
		name: "LeetCode Expert – 500+ Problems Solved",
		feedback: "Solved 500+ LeetCode problems with a rating of 1676. Earned 100 Days Badge for consistency and strong problem-solving skills.",
	},
	{
		name: "CodeChef Competitive Programmer",
		feedback: "Attained 2-star CodeChef rating (1478) with 300+ competitive programming problems solved.",
	},
	{
		name: "Production Deployment Expert",
		feedback: "Successfully deployed 3+ production-ready full-stack applications with zero downtime and 99.9% uptime.",
	},
	{
		name: "Zscaler Zero Trust Associate (ZTCA)",
		feedback: "Certified in Cybersecurity and zero trust architecture, demonstrating expertise in modern security practices.",
	},
	{
		name: "NVIDIA Deep Learning Fundamentals",
		feedback: "Completed NVIDIA DLI training in neural networks and GPU computing, showcasing AI/ML expertise.",
	},
];

// ============================
// Contact Section
// ============================
export const showContactUs: boolean = true;

// ============================
// SEO Data
// ============================
export const seoData: SEODataType = {
	title: "Amit Santosh Sahu",
	description: "A passionate Full-Stack Developer specializing in AI integration and scalable cloud solutions with expertise in React, TypeScript, and AI/ML.",
	author: "Amit Santosh Sahu",
	image: "/profile-photo.jpg",
	url: "https://ai-resume-analyzer-nine-khaki.vercel.app",
	keywords: [
		"Amit Sahu",
		"Amit Santosh Sahu",
		"Full-Stack Developer",
		"AI Developer",
		"React Developer",
		"TypeScript Developer",
		"Portfolio",
		"Amit Sahu Portfolio",
		"AI Integration Developer",
		"Cloud Solutions Developer",
		"Resume Analyzer",
		"Student Levelling",
		"AI Assistant",
	],
}

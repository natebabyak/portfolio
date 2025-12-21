import {
	BetterAuthLogo,
	DockerLogo,
	FastAPILogo,
	HuggingFaceLogo,
	NextjsLogo,
	PostgreSQLLogo,
	PythonLogo,
	ReactLogo,
	ShadcnuiLogo,
	SvelteLogo,
	TailwindCSSLogo,
	TypeScriptLogo,
	ViteLogo
} from '@selemondev/svgl-svelte';
import type { Component } from 'svelte';

export interface Technology {
	icon?: Component;
	name: string;
}

export interface Project {
	title: string;
	demoUrl?: string;
	githubSlug: string;
	description: string;
	technologies: Technology[];
}

export interface Experience {
	startDate: string;
	endDate: string;
	role: string;
	organization: string;
	summary: string;
}

export interface Education {
	startDate: string;
	endDate: string;
	institution: string;
	degree: string;
}

export const projects: Project[] = [
	{
		title: 'Job Application Tracker',
		githubSlug: 'job-application-tracker',
		description: 'A web app to manage and visualize your job applications in a single dashboard.',
		technologies: [
			{
				icon: NextjsLogo,
				name: 'Next.js'
			},
			{
				icon: FastAPILogo,
				name: 'FastAPI'
			},
			{
				icon: PythonLogo,
				name: 'Python'
			},
			{
				icon: PostgreSQLLogo,
				name: 'PostgreSQL'
			},
			{
				icon: DockerLogo,
				name: 'Docker'
			},
			{
				name: 'AWS'
			}
		]
	},
	{
		title: 'Skyrocket',
		demoUrl: 'https://strong-douhua-4d2cb0.netlify.app',
		githubSlug: 'skyrocket',
		description:
			'A web app that analyzes a virtual stock market in real time, recommending buys, sells, and optimal currency exchanges.',
		technologies: [
			{
				icon: SvelteLogo,
				name: 'Svelte'
			},
			{
				icon: TypeScriptLogo,
				name: 'TypeScript'
			},
			{
				icon: ViteLogo,
				name: 'Vite'
			},
			{
				icon: TailwindCSSLogo,
				name: 'Tailwind CSS'
			}
		]
	},
	{
		title: 'markte',
		demoUrl: 'https://markte.vercel.app',
		githubSlug: 'markte',
		description: 'A Markdown editor with live preview for instantly seeing formatted content.',
		technologies: [
			{
				icon: SvelteLogo,
				name: 'Svelte'
			},
			{
				icon: TypeScriptLogo,
				name: 'TypeScript'
			},
			{
				icon: ViteLogo,
				name: 'Vite'
			},
			{
				icon: TailwindCSSLogo,
				name: 'Tailwind CSS'
			}
		]
	},
	{
		title: 'LaTeXdex',
		githubSlug: 'latexdex',
		description: 'A searchable database of community-contributed LaTeX snippets and templates.',
		technologies: [
			{
				icon: NextjsLogo,
				name: 'Next.js'
			},
			{
				icon: BetterAuthLogo,
				name: 'BetterAuth'
			},
			{
				name: 'Drizzle ORM'
			},
			{
				icon: PostgreSQLLogo,
				name: 'PostgreSQL'
			}
		]
	},
	{
		title: 'sketch-guesser',
		demoUrl: 'https://sketch-guesser.vercel.app',
		githubSlug: 'sketch-guesser',
		description:
			'An in-browser game where users draw sketches and the app predicts what they are using AI.',
		technologies: [
			{
				icon: HuggingFaceLogo,
				name: 'Hugging Face'
			},
			{
				icon: NextjsLogo,
				name: 'Next.js'
			},
			{
				icon: ReactLogo,
				name: 'React'
			},
			{
				icon: TypeScriptLogo,
				name: 'TypeScript'
			},
			{
				icon: ShadcnuiLogo,
				name: 'shadcn/ui'
			}
		]
	},
	{
		title: 'ChatSLM',
		demoUrl: 'https://smollm2-chatbot.vercel.app',
		githubSlug: 'smollm2-chatbot',
		description:
			'An in-browser chatbot application that lets users interact with an AI model in real time.',
		technologies: [
			{
				icon: HuggingFaceLogo,
				name: 'Hugging Face'
			},
			{
				icon: NextjsLogo,
				name: 'Next.js'
			},
			{
				icon: ReactLogo,
				name: 'React'
			},
			{
				icon: TypeScriptLogo,
				name: 'TypeScript'
			},
			{
				icon: ShadcnuiLogo,
				name: 'shadcn/ui'
			}
		]
	}
];

export const experiences: Experience[] = [
	{
		startDate: 'January 2026',
		endDate: 'Present',
		role: 'Junior Data Analyst / Developer',
		organization: 'Employment and Social Development Canada',
		summary:
			'Prepare and analyze datasets to support labour market tools, while contributing to software development using Java, Python, JavaScript, and relational databases.'
	},
	{
		startDate: 'July 2025',
		endDate: 'August 2025',
		role: 'Associate Technician',
		organization: 'EssilorLuxottica',
		summary:
			'Processed high-volume production orders and automated data tracking to improve turnaround time and workflow efficiency.'
	},
	{
		startDate: 'July 2024',
		endDate: 'August 2024',
		role: 'Statistical Assistant',
		organization: 'Statistics Canada',
		summary:
			'Digitized, cleaned, and validated large-scale survey data to ensure high quality and processing accuracy.'
	},
	{
		startDate: 'May 2024',
		endDate: 'July 2024',
		role: 'Processing Operator',
		organization: 'Statistics Canada',
		summary:
			'Processed and validated large-scale census data with accuracy while improving workflow efficiency through process tracking.'
	}
];

export const educations: Education[] = [
	{
		startDate: 'September 2023',
		endDate: 'Present',
		institution: 'Carleton University',
		degree: 'Bachelor of Engineering in Software Engineering'
	}
];

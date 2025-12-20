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
		description: 'Track and optimize your job search from a single, powerful dashboard',
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
		description: 'A real-time stock market analyzer for Hypixel SkyBlock',
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
		description: 'A free and open-source live-preview Markdown editor built with Svelte',
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
		description: 'A searchable database of community-contributed LaTeX snippets and templates',
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
		description: 'In-browser sketch-guessing game made with Transformers.js',
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
		description: 'A fully in-browser chatbot application',
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
			'Contribute to data-driven labour market tools by preparing and analyzing datasets and supporting software development using Java, Python, JavaScript, and relational databases.'
	},
	{
		startDate: 'July 2025',
		endDate: 'August 2025',
		role: 'Associate Technician',
		organization: 'EssilorLuxottica',
		summary:
			'Processed high-volume production orders while automating tracking and analyzing operational data to improve turnaround time and document workflows.'
	},
	{
		startDate: 'July 2024',
		endDate: 'August 2024',
		role: 'Statistical Assistant',
		organization: 'Statistics Canada',
		summary:
			'Digitized and validated large-scale survey data, cleaning and standardizing datasets to ensure high data quality and processing accuracy.'
	},
	{
		startDate: 'May 2024',
		endDate: 'July 2024',
		role: 'Processing Operator',
		organization: 'Statistics Canada',
		summary:
			'Processed and validated large-scale census data with high accuracy while improving workflow efficiency through tracking and process improvements.'
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

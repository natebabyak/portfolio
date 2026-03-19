import {
	AmazonWebServicesLogo,
	BetterAuthLogo,
	DockerLogo,
	DrizzleORMLogo,
	FastAPILogo,
	NextjsLogo,
	PostgreSQLLogo,
	ReactLogo,
	SupabaseLogo,
	SvelteLogo,
	TypeScriptLogo,
	ViteLogo
} from '@selemondev/svgl-svelte';
import type { Component } from 'svelte';

export interface Technology {
	icon?: Component;
	name: string;
}

export interface Project {
	name: string;
	description: string;
	url: string;
	technologies: Technology[];
}

export interface Experience {
	name: string;
	position: string;
	startDate: string;
	endDate: string;
	summary?: string;
}

export interface Education {
	institution: string;
	startDate: string;
	endDate: string;
	degree: string;
}

export const projects: Project[] = [
	{
		name: 'cuGuessr',
		description:
			'A mobile-first geography guessing game set on the Carleton University campus, featuring a daily challenge and the ability to upload custom photos, inspired by GeoGuessr.',
		url: 'https://cuguessr.com',
		technologies: [
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
				icon: SupabaseLogo,
				name: 'Supabase'
			},
			{
				icon: PostgreSQLLogo,
				name: 'PostgreSQL'
			}
		]
	},
	{
		name: 'SkyFlip',
		description:
			'A real-time stock market analysis tool that provides actionable insights, including buy/sell recommendations and optimal currency exchange strategies.',
		url: 'https://skyflip.netlify.app',
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
			}
		]
	},
	{
		name: 'Job Application Tracker',
		description:
			'A centralized dashboard to track, manage, and visualize job applications, streamlining the job search process.',
		url: 'https://github.com/natebabyak/job-application-tracker',
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
				icon: PostgreSQLLogo,
				name: 'PostgreSQL'
			},
			{
				icon: DockerLogo,
				name: 'Docker'
			},
			{
				icon: AmazonWebServicesLogo,
				name: 'AWS'
			}
		]
	},
	{
		name: 'LaTeXdex',
		description:
			'A collaborative platform offering a searchable database of LaTeX snippets and templates for academic and professional use.',
		url: 'https://github.com/natebabyak/latexdex',
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
				icon: DrizzleORMLogo,
				name: 'Drizzle ORM'
			},
			{
				icon: PostgreSQLLogo,
				name: 'PostgreSQL'
			}
		]
	}
];

export const experiences: Experience[] = [
	{
		name: 'Employment and Social Development Canada',
		position: 'Junior Data Analyst / Developer',
		startDate: 'January 2026',
		endDate: 'Present',
		summary:
			'Developed an internal data lake platform for regional analysts, streamlining access to datasets and saving significant time through Python GUI automation for ETL pipelines and a Svelte-based frontend.'
	},
	{
		name: 'EssilorLuxottica',
		position: 'Associate Technician',
		startDate: 'July 2025',
		endDate: 'August 2025'
	},
	{
		name: 'Statistics Canada',
		position: 'Statistical Assistant',
		startDate: 'July 2024',
		endDate: 'August 2024'
	},
	{
		name: 'Statistics Canada',
		position: 'Processing Operator',
		startDate: 'May 2024',
		endDate: 'July 2024'
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

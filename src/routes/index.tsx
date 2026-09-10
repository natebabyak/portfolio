import {
	SiBetterauth,
	SiCloudflare,
	SiGithub,
	SiNeon,
	SiNextdotjs,
	SiPostgresql,
	SiReact,
	SiShadcnui,
	SiTailwindcss,
	SiTypescript,
	SiVercel,
} from "@icons-pack/react-simple-icons";
import {
	ArrowUpRightIcon,
	CopyIcon,
	MoonIcon,
	SunIcon,
} from "@phosphor-icons/react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Fragment } from "react";
import { useTheme } from "#/components/theme-provider";
import { Button, buttonVariants } from "#/components/ui/button";
import { ButtonGroup } from "#/components/ui/button-group";
import {
	Card,
	CardAction,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "#/components/ui/card";
import { Separator } from "#/components/ui/separator";

export const Route = createFileRoute("/")({ component: Home });

const TECHNOLOGIES = {
	betterauth: SiBetterauth,
	cloudflare: SiCloudflare,
	neon: SiNeon,
	nextjs: SiNextdotjs,
	postgresql: SiPostgresql,
	react: SiReact,
	shadcn: SiShadcnui,
	tailwind: SiTailwindcss,
	typescript: SiTypescript,
	vercel: SiVercel,
};

const PROJECTS = [
	{
		title: "cuGuessr",
		description: "a daily location guessing game",
		cta: (
			<a
				href="https://www.cuguessr.com"
				rel="noopener noreferrer"
				target="_blank"
				className={buttonVariants({
					variant: "outline",
					size: "xs",
				})}
			>
				cuguessr.com
				<ArrowUpRightIcon />
			</a>
		),
		highlights: ["1,000+ peak daily players", "280+ user-submitted photos"],
		technologies: [
			["nextjs", "react", "typescript"],
			["betterauth", "shadcn", "tailwind"],
			["cloudflare", "neon", "postgresql", "vercel"],
		],
	},
] satisfies {
	title: string;
	description: string;
	cta: React.ReactNode;
	highlights: string[];
	technologies: (keyof typeof TECHNOLOGIES)[][];
}[];

function Home() {
	const { theme, setTheme } = useTheme();

	return (
		<div>
			<header className="flex items-center gap-2 p-4 max-w-md mx-auto w-full">
				<Link to="/">natebabyak.com</Link>
				<a
					href="https://github.com/natebabyak"
					rel="noopener noreferrer"
					target="_blank"
					title="GitHub"
					className={buttonVariants({
						variant: "outline",
						size: "icon",
						className: "ml-auto",
					})}
				>
					<SiGithub className="size-4" />
					<span className="sr-only">GitHub</span>
				</a>
				<Button
					onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
					variant="outline"
					size="icon"
				>
					<SunIcon className="absolute dark:scale-0 scale-100 transition-all" />
					<MoonIcon className="absolute dark:scale-100 scale-0 transition-all" />
					<span className="sr-only">Toggle theme</span>
				</Button>
			</header>
			<main className="space-y-8 p-8 max-w-md mx-auto w-full">
				<section className="space-y-2">
					<h1 className="text-xl">nate babyak</h1>
					<p className="text-muted-foreground"> software engineer</p>
					<p className="text-balance">
						passionate about developer tooling, cloud infrastructure, and
						beautifully simple user experiences
					</p>
				</section>
				<section className="space-y-2">
					<h2>projects</h2>
					<ul className="space-y-4">
						{PROJECTS.map((project) => (
							<li key={project.title}>
								<Card>
									<CardHeader>
										<CardTitle>{project.title}</CardTitle>
										<CardDescription>{project.description}</CardDescription>
										<CardAction>{project.cta}</CardAction>
									</CardHeader>
									<CardContent>
										<ul>
											{project.highlights.map((highlight) => (
												<li key={highlight}>&bull; {highlight}</li>
											))}
										</ul>
									</CardContent>
									<CardFooter>
										<div className="flex items-center gap-2 *:size-4">
											{project.technologies.map((group, groupIndex) => (
												<Fragment key={group.join("-")}>
													{groupIndex > 0 && (
														<Separator orientation="vertical" />
													)}
													{group.map((technology) => {
														const Icon = TECHNOLOGIES[technology];
														return <Icon key={technology} />;
													})}
												</Fragment>
											))}
										</div>
									</CardFooter>
								</Card>
							</li>
						))}
					</ul>
				</section>
				<section className="space-y-2">
					<h2>contact</h2>
					<ButtonGroup>
						<a href="mailto:nate@babyak.ca" className={buttonVariants()}>
							nate@babyak.ca
						</a>
						<Button
							onClick={() => navigator.clipboard.writeText("nate@babyak.ca")}
							size="icon"
						>
							<CopyIcon />
						</Button>
					</ButtonGroup>
					<ButtonGroup></ButtonGroup>
				</section>
			</main>
			<footer className="p-4">
				<p>&copy; 2026 nate babyak</p>
			</footer>
		</div>
	);
}

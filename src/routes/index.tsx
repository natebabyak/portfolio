import {
	SiBetterauth,
	SiCloudflare,
	SiDocker,
	SiGithub,
	SiNeon,
	SiNextdotjs,
	SiPostgresql,
	SiReact,
	SiShadcnui,
	SiSvelte,
	SiTailwindcss,
	SiTypescript,
	SiVercel,
	SiX,
} from "@icons-pack/react-simple-icons";
import {
	ArrowUpRightIcon,
	CheckIcon,
	CopyIcon,
	MoonIcon,
	SunIcon,
} from "@phosphor-icons/react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { Fragment, useState } from "react";
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
	docker: SiDocker,
	neon: SiNeon,
	nextjs: SiNextdotjs,
	postgresql: SiPostgresql,
	react: SiReact,
	shadcn: SiShadcnui,
	svelte: SiSvelte,
	tailwind: SiTailwindcss,
	typescript: SiTypescript,
	vercel: SiVercel,
};

const PROJECTS = [
	{
		title: "cuGuessr",
		description: "a daily location guessing game set on the Carleton campus",
		cta: (
			<a
				href="https://www.cuguessr.com"
				rel="noopener noreferrer"
				target="_blank"
				className={buttonVariants({
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
	{
		title: "ContainerMC",
		description: "host minecraft servers locally or in the cloud in seconds",
		cta: (
			<a
				href="https://github.com/natebabyak/containermc"
				rel="noopener noreferrer"
				target="_blank"
				className={buttonVariants({
					size: "xs",
					variant: "outline",
				})}
			>
				GitHub
				<ArrowUpRightIcon />
			</a>
		),
		highlights: [],
		technologies: [
			["svelte", "typescript"],
			["shadcn", "tailwind"],
			["docker", "postgresql"],
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

	const [copied, setCopied] = useState(false);

	return (
		<div className="min-h-screen flex flex-col">
			<header className="sticky bg-background top-0 p-4 w-full">
				<div className="flex items-center gap-2 max-w-md mx-auto w-full">
					<Link to="/">natebabyak.com</Link>
					<a
						href="https://github.com/natebabyak"
						rel="noopener noreferrer"
						target="_blank"
						title="GitHub"
						className={buttonVariants({
							variant: "ghost",
							size: "icon",
							className: "ml-auto",
						})}
					>
						<SiGithub className="size-4" />
						<span className="sr-only">GitHub</span>
					</a>
					<a
						href="https://x.com/natebabyak"
						rel="noopener noreferrer"
						target="_blank"
						title="X"
						className={buttonVariants({
							variant: "ghost",
							size: "icon",
						})}
					>
						<SiX className="size-4" />
						<span className="sr-only">X</span>
					</a>
					<Separator orientation="vertical" className="h-4 my-auto" />
					<Button
						onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
						variant="ghost"
						size="icon"
						title="Toggle theme"
					>
						<AnimatePresence initial={false} mode="wait">
							{theme === "dark" ? (
								<motion.div
									key="sun"
									initial={{ opacity: 0, scale: 0.9 }}
									animate={{ opacity: 1, scale: 1 }}
									exit={{ opacity: 0, scale: 0.9 }}
									transition={{ duration: 0.15 }}
								>
									<SunIcon />
								</motion.div>
							) : (
								<motion.div
									key="moon"
									initial={{ opacity: 0, scale: 0.9 }}
									animate={{ opacity: 1, scale: 1 }}
									exit={{ opacity: 0, scale: 0.9 }}
									transition={{ duration: 0.15 }}
								>
									<MoonIcon />
								</motion.div>
							)}
						</AnimatePresence>
					</Button>
				</div>
			</header>
			<main className="flex-1 [&>section]:space-y-4 [&_h2]:text-lg [&_h2]:font-medium [&_h2]:mb-4 [&_h1]:text-xl [&_h1]:font-semibold space-y-8 p-8 max-w-md mx-auto w-full">
				<section>
					<h1>nate babyak</h1>
					<p className="text-muted-foreground text-sm">software engineer</p>
					<p className="text-balance">
						i build software that does exactly what you expect it to do
					</p>
				</section>
				<section>
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
									{project.highlights.length > 0 && (
										<CardContent>
											<ul>
												{project.highlights.map((highlight) => (
													<li key={highlight}>&bull; {highlight}</li>
												))}
											</ul>
										</CardContent>
									)}
									<CardFooter className="*:size-4 gap-2">
										{project.technologies.map((group, groupIndex) => (
											<Fragment key={group.join("-")}>
												{groupIndex > 0 && <Separator orientation="vertical" />}
												{group.map((technology) => {
													const Icon = TECHNOLOGIES[technology];
													return <Icon key={technology} />;
												})}
											</Fragment>
										))}
									</CardFooter>
								</Card>
							</li>
						))}
					</ul>
				</section>
				<section>
					<h2>contact</h2>
					<ButtonGroup>
						<a
							href="mailto:nate.babyak@outlook.com"
							className={buttonVariants()}
						>
							nate.babyak@outlook.com
						</a>
						<Button
							onClick={() => {
								try {
									navigator.clipboard.writeText("nate.babyak@outlook.com");
								} finally {
									setCopied(true);
									setTimeout(() => {
										setCopied(false);
									}, 2000);
								}
							}}
							size="icon"
							title="Copy email"
						>
							<AnimatePresence initial={false} mode="wait">
								{copied ? (
									<motion.div
										key="check"
										initial={{ opacity: 0, scale: 0.9 }}
										animate={{ opacity: 1, scale: 1 }}
										exit={{ opacity: 0, scale: 0.9 }}
										transition={{ duration: 0.15 }}
									>
										<CheckIcon />
									</motion.div>
								) : (
									<motion.div
										key="copy"
										initial={{ opacity: 0, scale: 0.9 }}
										animate={{ opacity: 1, scale: 1 }}
										exit={{ opacity: 0, scale: 0.9 }}
										transition={{ duration: 0.15 }}
									>
										<CopyIcon />
									</motion.div>
								)}
							</AnimatePresence>
						</Button>
					</ButtonGroup>
				</section>
			</main>
			<footer className="p-8">
				<p className="text-center text-muted-foreground text-xs">
					&copy; 2026 Nate Babyak
				</p>
			</footer>
		</div>
	);
}

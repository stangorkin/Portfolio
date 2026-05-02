export interface Project {
	name: string;
	description: string;
	longDescription: string;
	tech: string[];
	role: string;
	github: string;
	live?: string;
	timeline: string;
	highlights: string[];
	aiUsage?: string;
}

export const projects: Project[] = [
	{
		name: 'LingoBridge',
		description: 'Style translator web app powered by Cloudflare Workers AI.',
		longDescription:
			'A fun translator that rewrites text into different tones like Gen Z slang, Corporate lingo, ELI5, a comedic Demonic Goat, a Caveman, or allowing the user to create their own style. Built with SvelteKit and a Workers AI backend endpoint, with bidirectional translation and copy-ready output.',
		tech: ['SvelteKit', 'TypeScript', 'Cloudflare Workers AI', 'Wrangler'],
		role: 'Solo creator',
		github: 'https://github.com/stangorkin/LingoBridge',
		live: 'https://lingobridges.com',
		timeline: 'Apr 2026',
		highlights: [
			'Implemented a typed API endpoint with request validation and structured error handling',
			'Added four prompt-driven translation styles with reverse translation support',
			'Built responsive UI with loading state, copy-to-clipboard, and keyboard shortcut support',
			'Configured Cloudflare-ready deployment with adapter-cloudflare and AI binding'
		],
		aiUsage:
			'Used AI tooling to accelerate iteration and prompt design, while personally implementing architecture, validation, and UI behavior.'
	},
	{
		name: 'autowiki',
		description: 'AI-powered wiki page generator using GPT and Azure DevOps.',
		longDescription:
			'A command-line tool that uses GPT to automatically generate and update wiki pages. Integrates with Azure DevOps via GraphQL, uses Azure Key Vault for secrets management, and supports switching between local and hosted environments via configuration.',
		tech: ['JavaScript', 'OpenAI GPT API', 'GraphQL', 'Azure Key Vault'],
		role: 'Solo creator',
		github: 'https://github.com/stangorkin/autowiki',
		timeline: 'Aug 2023 – Feb 2024',
		highlights: [
			'Built end-to-end: GPT integration, wiki CRUD operations, key vault auth',
			'Handled GPT response parsing edge cases (malformed JSON, extra tokens)',
			'Added environment-based config for local vs. hosted deployment',
			'Iteratively improved through 4 pull requests with meaningful code review'
		]
	},
	{
		name: 'Coven',
		description: 'Multi-agent AI orchestration framework in C#/.NET.',
		longDescription:
			'A multi-agent orchestration framework that makes the arcane routine. Contributed multiple LLM provider integrations including Claude, Gemini, and local model support via LLamaSharp, along with proposals for new capabilities.',
		tech: ['C#', '.NET', 'OpenAI', 'Claude', 'Gemini', 'LLamaSharp'],
		role: 'Contributor — 16 commits',
		github: 'https://github.com/goldenwitch/coven',
		timeline: '2025 – Present',
		highlights: [
			'Built Claude leaf integration with full test coverage',
			'Added Gemini LLM provider support',
			'Implemented local OpenAI leaf using LLamaSharp for on-device inference',
			'Authored ImageGen substrate proposal',
			'Addressed multiple rounds of PR review feedback, improving code quality'
		],
		aiUsage:
			'Used AI agents for scaffolding and code generation, then personally reviewed, tested, and refined all contributions through PR review cycles.'
	},
	{
		name: 'Bachus',
		description: 'VS Code extension and web app for dependency visualization built with Svelte.',
		longDescription:
			'A VS Code extension and web application for visualizing and managing project dependencies as an interactive graph. Built with TypeScript and Svelte, featuring inline editing, multi-provider LLM support, and CI/CD automation.',
		tech: ['TypeScript', 'Svelte', 'VS Code Extension API', 'CI/CD'],
		role: 'Contributor — 11 commits',
		github: 'https://github.com/goldenwitch/bacchus',
		timeline: '2025 – Present',
		highlights: [
			'Added multi-provider LLM support (OpenAI, Gemini)',
			'Built inline editing UI for task properties in sidebar',
			'Implemented add node and dependency buttons',
			'Set up CI/CD: VSIX versioning with prerelease publishing to GitHub',
			'Fixed E2E tests and UI components'
		],
		aiUsage:
			'Used AI agents for implementation assistance, with personal ownership of architecture decisions, testing, and CI/CD pipeline design.'
	},
	{
		name: 'Advent of Code 2024',
		description: 'Solutions to Advent of Code 2024 challenges in C#.',
		longDescription:
			'My solutions to Advent of Code 2024 programming challenges, written in C#. Focused on problem-solving and algorithmic thinking.',
		tech: ['C#'],
		role: 'Solo',
		github: 'https://github.com/stangorkin/adventOfCode2024',
		timeline: 'Dec 2024',
		highlights: [
			'Practiced algorithmic problem-solving with daily challenges',
			'Implemented solutions in C# with focus on clean, readable code'
		]
	}
];

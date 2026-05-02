<script lang="ts">
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import GitHubIcon from '$lib/components/icons/GitHubIcon.svelte';
	import LinkedInIcon from '$lib/components/icons/LinkedInIcon.svelte';
	import EmailIcon from '$lib/components/icons/EmailIcon.svelte';
	import { projects } from '$lib/projects';
	import { onMount } from 'svelte';

	const BIO = `I've been writing code since 2020, building projects across AI tooling,a multi-agent orchestration frmeworks,
	 and VS Code extensions. I work with AI assistants as part of my development process and take full ownership of every line that ships,
	 designing architecture, writing tests, and iterating through code review.`;

	const STYLES = [
		{ id: 'genz', name: 'Gen Z', emoji: '💀' },
		{ id: 'corporate', name: 'Corporate', emoji: '📊' },
		{ id: 'eli5', name: 'ELI5', emoji: '🧒' },
		{ id: 'demonicgoat', name: 'Demonic Goat', emoji: '🐐' },
		{ id: 'caveman', name: 'Caveman', emoji: '🪨' }
	];

	let translatedBio = $state('');
	let translating = $state(true);
	let activeStyle = $state(STYLES[0]);

	async function translateBio(style: typeof STYLES[0]) {
		translating = true;
		translatedBio = '';
		activeStyle = style;
		try {
			const res = await fetch('https://lingobridges.com/api/translate', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ text: BIO, styleId: style.id, direction: 'to', modelPreference: 'balanced' })
			});
			const data = await res.json();
			translatedBio = data.translation ?? BIO;
		} catch {
			translatedBio = BIO;
		}
		translating = false;
	}

	onMount(() => {
		const random = STYLES[Math.floor(Math.random() * STYLES.length)];
		translateBio(random);
	});
</script>

<svelte:head>
	<title>Stan Gorkin — Developer Portfolio</title>
	<meta name="description" content="Portfolio of Stan Gorkin, a developer building real software since 2020." />
</svelte:head>

<section id="about" class="hero">
	<h1>Hi, I'm <span class="accent">Stan Gorkin</span></h1>
	<p class="subtitle">Developer building real software since 2020.</p>
	<p class="bio">{BIO}</p>

	<div class="bio-translator">
		<div class="bio-translator-header">
			<span class="bio-translator-label">
				{#if translating}
					<span class="bio-spinner"></span> Translating via <a href="https://lingobridges.com" target="_blank" rel="noopener noreferrer">LingoBridge</a>...
				{:else}
					{activeStyle.emoji} {activeStyle.name} translation via <a href="https://lingobridges.com" target="_blank" rel="noopener noreferrer">LingoBridge</a>
				{/if}
			</span>
			<div class="bio-style-btns">
				{#each STYLES as style}
					<button
						class="bio-style-btn"
						class:active={activeStyle.id === style.id}
						onclick={() => translateBio(style)}
						disabled={translating}
						title={style.name}
					>{style.emoji}</button>
				{/each}
			</div>
		</div>
		<p class="bio-translated" class:loading={translating}>
			{#if translating}
				<span class="bio-placeholder">...</span>
			{:else}
				{translatedBio}
			{/if}
		</p>
	</div>
	<div class="hero-links">
		<a class="btn-primary" href="https://github.com/stangorkin" target="_blank" rel="noopener noreferrer">GitHub</a>
		<a class="btn-secondary" href="#projects">View Projects ↓</a>
	</div>
</section>

<section id="skills" class="skills">
	<h2>Skills & Tools</h2>
	<div class="skill-groups">
		<div class="skill-group">
			<h3>Languages</h3>
			<div class="skill-tags">
				<span class="tag">C#</span>
				<span class="tag">TypeScript</span>
				<span class="tag">JavaScript</span>
			</div>
		</div>
		<div class="skill-group">
			<h3>Frameworks & Platforms</h3>
			<div class="skill-tags">
				<span class="tag">.NET</span>
				<span class="tag">SvelteKit</span>
				<span class="tag">Node.js</span>
				<span class="tag">VS Code Extension API</span>
			</div>
		</div>
		<div class="skill-group">
			<h3>AI & APIs</h3>
			<div class="skill-tags">
				<span class="tag">OpenAI</span>
				<span class="tag">Claude</span>
				<span class="tag">Gemini</span>
				<span class="tag">LLamaSharp</span>
				<span class="tag">GraphQL</span>
			</div>
		</div>
		<div class="skill-group">
			<h3>Tools & Workflow</h3>
			<div class="skill-tags">
				<span class="tag">Git</span>
				<span class="tag">GitHub Actions</span>
				<span class="tag">Azure Key Vault</span>
				<span class="tag">CI/CD</span>
				<span class="tag">AI-Assisted Development</span>
			</div>
		</div>
	</div>
</section>

<section id="projects" class="projects">
	<h2>Projects</h2>
	<div class="project-grid">
		{#each projects as project}
			<ProjectCard {project} />
		{/each}
	</div>
</section>

<section id="contact" class="contact">
	<h2>Get in Touch</h2>
	<p>I'm looking for my first developer role. If you'd like to connect, reach out below.</p>
	<div class="contact-links">
		<a href="https://github.com/stangorkin" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
			<GitHubIcon size={28} />
			<span>GitHub</span>
		</a>
		<a href="https://www.linkedin.com/in/stanislav-gorkin-834343141/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
			<LinkedInIcon size={28} />
			<span>LinkedIn</span>
		</a>
		<a href="mailto:stangorkin@gmail.com" aria-label="Email">
			<EmailIcon size={28} />
			<span>stangorkin@gmail.com</span>
		</a>
		<a href="tel:+14252053085" aria-label="Phone">
			<span>📞</span>
			<span>+1 425 205 3085</span>
		</a>
	</div>
</section>

<style>
	.hero {
		padding: 6rem 0 4rem;
	}

	h1 {
		font-size: 2.5rem;
		font-weight: 700;
		color: var(--color-heading);
		margin-bottom: 0.5rem;
	}

	.accent {
		color: var(--color-accent);
	}

	.subtitle {
		font-size: 1.15rem;
		color: var(--color-muted);
		margin-bottom: 1.5rem;
	}

	.bio {
		max-width: 640px;
		line-height: 1.7;
		margin-bottom: 1rem;
		color: var(--color-muted);
		font-size: 0.9rem;
	}

	.bio-translator {
		max-width: 640px;
		background: var(--color-surface);
		border: 1px solid var(--color-border);
		border-radius: 10px;
		padding: 1rem 1.25rem;
		margin-bottom: 1.75rem;
	}

	.bio-translator-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 0.6rem;
		gap: 0.75rem;
		flex-wrap: wrap;
	}

	.bio-translator-label {
		font-size: 1rem;
		color: var(--color-muted);
		display: flex;
		align-items: center;
		gap: 0.35rem;
	}

	.bio-translator-label a {
		color: var(--color-accent);
		text-decoration: none;
	}

	.bio-translator-label a:hover {
		text-decoration: underline;
	}

	.bio-style-btns {
		display: flex;
		gap: 0.25rem;
	}

	.bio-style-btn {
		background: none;
		border: 1px solid var(--color-border);
		border-radius: 6px;
		padding: 0.3rem 0.6rem;
		font-size: 1.3rem;
		cursor: pointer;
		transition: border-color 0.15s, background 0.15s;
		line-height: 1;
	}

	.bio-style-btn:hover:not(:disabled) {
		border-color: var(--color-accent);
		background: rgba(56, 189, 248, 0.08);
	}

	.bio-style-btn.active {
		border-color: var(--color-accent);
		background: rgba(56, 189, 248, 0.12);
	}

	.bio-style-btn:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}

	.bio-translated {
		line-height: 1.7;
		font-size: 0.95rem;
		color: var(--color-text);
		margin: 0;
		min-height: 3rem;
	}

	.bio-translated.loading {
		opacity: 0.4;
	}

	.bio-placeholder {
		letter-spacing: 0.2em;
	}

	.bio-spinner {
		display: inline-block;
		width: 10px;
		height: 10px;
		border: 2px solid var(--color-border);
		border-top-color: var(--color-accent);
		border-radius: 50%;
		animation: spin 0.7s linear infinite;
	}

	@keyframes spin {
		to { transform: rotate(360deg); }
	}

	.hero-links {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 0.75rem 1rem;
	}

	.hero-links a {
		text-decoration: none;
		font-size: 0.9rem;
		transition: background 0.2s, color 0.2s, border-color 0.2s;
	}

	.hero-links .btn-primary {
		padding: 0.6rem 1.2rem;
		border-radius: 6px;
		font-weight: 500;
		background: var(--color-accent);
		color: var(--color-bg);
	}

	.hero-links .btn-primary:hover {
		background: #7dd3fc;
	}

	.hero-links .btn-secondary {
		padding: 0.6rem 1.2rem;
		border-radius: 6px;
		font-weight: 500;
		border: 1px solid var(--color-border);
		color: var(--color-text);
	}

	.hero-links .btn-secondary:hover {
		border-color: var(--color-accent);
		color: var(--color-accent);
	}

	.skills {
		padding: 4rem 0;
		border-bottom: 1px solid var(--color-border);
	}

	.skills h2 {
		font-size: 1.75rem;
		color: var(--color-heading);
		margin-bottom: 1.5rem;
	}

	.skill-groups {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 1.5rem;
	}

	.skill-group h3 {
		font-size: 0.9rem;
		color: var(--color-muted);
		text-transform: uppercase;
		letter-spacing: 0.05em;
		margin-bottom: 0.75rem;
	}

	.skill-tags {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}

	.skill-tags .tag {
		background: var(--color-tag-bg);
		color: var(--color-tag-text);
		padding: 0.3rem 0.7rem;
		border-radius: 4px;
		font-size: 0.85rem;
		font-weight: 500;
	}

	.projects {
		padding: 4rem 0;
	}

	.projects h2 {
		font-size: 1.75rem;
		color: var(--color-heading);
		margin-bottom: 2rem;
	}

	.project-grid {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}

	.contact {
		padding: 4rem 0 6rem;
	}

	.contact h2 {
		font-size: 1.75rem;
		color: var(--color-heading);
		margin-bottom: 0.75rem;
	}

	.contact > p {
		margin-bottom: 1.5rem;
	}

	.contact-links {
		display: flex;
		gap: 2rem;
		flex-wrap: wrap;
	}

	.contact-links a {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		color: var(--color-muted);
		text-decoration: none;
		font-size: 0.95rem;
		transition: color 0.2s;
	}

	.contact-links a:hover {
		color: var(--color-accent);
	}

	@media (max-width: 600px) {
		h1 {
			font-size: 1.75rem;
		}

		.hero {
			padding: 3rem 0 2rem;
		}

		.skill-groups {
			grid-template-columns: 1fr;
		}
	}
</style>

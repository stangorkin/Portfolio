<script lang="ts">
	let { children } = $props();
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div class="site">
	<nav>
		<div class="nav-inner">
			<a href="/" class="nav-brand">Stan Gorkin</a>
			<div class="nav-contact">
				<a href="mailto:stangorkin@gmail.com">stangorkin@gmail.com</a>
				<a href="tel:+14252053085">+1 425 205 3085</a>
			</div>
			<div class="nav-links">
				<a href="#about">About</a>
				<a href="#skills">Skills</a>
				<a href="#projects">Projects</a>
				<a href="#contact">Contact</a>
				<a href="/resume">Resume</a>
				<a
					href="/Stan_Gorkin_Dev_Resume.docx"
					download
					class="nav-docx"
					title="Download resume as Word document"
					aria-label="Download resume as Word document"
				>
					<svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
						<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
						<polyline points="14 2 14 8 20 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
						<line x1="12" y1="12" x2="12" y2="18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
						<polyline points="9 15 12 18 15 15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
					</svg>
				</a>
			</div>
		</div>
	</nav>

	<main>
		{@render children()}
	</main>

	<footer>
		<p>&copy; {new Date().getFullYear()} Stan Gorkin</p>
	</footer>
</div>

<style>
	:global(*) {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	:global(:root) {
		--color-bg: #0f172a;
		--color-surface: #1e293b;
		--color-border: #334155;
		--color-text: #e2e8f0;
		--color-heading: #f8fafc;
		--color-muted: #94a3b8;
		--color-accent: #38bdf8;
		--color-tag-bg: #1e3a5f;
		--color-tag-text: #7dd3fc;
		--color-ai-bg: rgba(56, 189, 248, 0.08);
	}

	:global(body) {
		font-family: 'Inter', system-ui, -apple-system, sans-serif;
		background: var(--color-bg);
		color: var(--color-text);
		line-height: 1.6;
	}

	:global(html) {
		scroll-behavior: smooth;
	}

	.site {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
	}

	nav {
		position: sticky;
		top: 0;
		background: rgba(15, 23, 42, 0.9);
		backdrop-filter: blur(8px);
		border-bottom: 1px solid var(--color-border);
		z-index: 100;
	}

	.nav-inner {
		max-width: 900px;
		margin: 0 auto;
		padding: 0.75rem 1.5rem;
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 0.4rem 1.25rem;
	}

	.nav-brand {
		font-weight: 700;
		font-size: 1.1rem;
		color: var(--color-heading);
		text-decoration: none;
	}

	.nav-contact {
		display: flex;
		gap: 1rem;
		align-items: center;
	}

	.nav-contact a {
		color: var(--color-muted);
		text-decoration: none;
		font-size: 0.8rem;
		transition: color 0.2s;
	}

	.nav-contact a:hover {
		color: var(--color-accent);
	}

	.nav-links {
		margin-left: auto;
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem 1.5rem;
	}

	.nav-links a {
		color: var(--color-muted);
		text-decoration: none;
		font-size: 0.9rem;
		font-weight: 500;
		transition: color 0.2s;
	}

	.nav-links a:hover {
		color: var(--color-accent);
	}

	.nav-links .nav-docx {
		display: flex;
		align-items: center;
		padding: 0.15rem 0.3rem;
		border: 1px solid var(--color-border);
		border-radius: 4px;
		line-height: 1;
		transition: color 0.2s, border-color 0.2s;
	}

	.nav-links .nav-docx:hover {
		border-color: var(--color-accent);
	}

	@media (max-width: 600px) {
		.nav-contact {
			order: 3;
			flex-basis: 100%;
			padding-bottom: 0.25rem;
		}

		.nav-links {
			gap: 0.5rem 1rem;
			font-size: 0.8rem;
		}
	}

	main {
		flex: 1;
		max-width: 900px;
		margin: 0 auto;
		padding: 0 1.5rem;
		width: 100%;
	}

	footer {
		border-top: 1px solid var(--color-border);
		text-align: center;
		padding: 2rem 1.5rem;
		color: var(--color-muted);
		font-size: 0.85rem;
	}
</style>

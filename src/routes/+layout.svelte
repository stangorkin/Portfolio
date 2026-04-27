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
			<div class="nav-links">
				<a href="#about">About</a>
				<a href="#skills">Skills</a>
				<a href="#projects">Projects</a>
				<a href="#contact">Contact</a>
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
		padding: 1rem 1.5rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.nav-brand {
		font-weight: 700;
		font-size: 1.1rem;
		color: var(--color-heading);
		text-decoration: none;
	}

	.nav-links {
		display: flex;
		gap: 1.5rem;
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

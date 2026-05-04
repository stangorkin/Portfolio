<svelte:head>
	<title>Stan Gorkin — Resume</title>
	<meta name="description" content="Resume of Stan Gorkin, software developer." />
</svelte:head>

<div class="resume-page">
	<div class="resume">

		<!-- HEADER -->
		<header class="r-header">
			<h1>Stan Gorkin</h1>
			<div class="r-contact">
				<a href="mailto:stangorkin@gmail.com">stangorkin@gmail.com</a>
				<span>·</span>
				<a href="tel:+14252053085">+1 425 205 3085</a>
				<span>·</span>
				<a href="https://github.com/stangorkin" target="_blank" rel="noopener noreferrer">github.com/stangorkin</a>
				<span>·</span>
				<a href="https://www.linkedin.com/in/stanislav-gorkin-834343141/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
			</div>
			<div class="r-actions no-print">
				<a class="btn-download" href="/Stan_Gorkin_Dev_Resume.docx" download>⬇ Download .docx</a>
			</div>
		</header>

		<!-- SUMMARY -->
		<section>
			<h2 class="r-section-title">Summary</h2>
			<p>
				Software developer with 5 years of coding experience, building projects across AI tooling,
				multi-agent orchestration frameworks, and VS Code extensions. Background in analytical science
				brings strong attention to detail and systematic problem-solving to software engineering.
				Leverages AI-assisted development while taking full ownership of every line that ships —
				designing architecture, writing tests, and iterating through code review.
			</p>
		</section>

		<!-- SKILLS -->
		<section>
			<h2 class="r-section-title">Technical Skills</h2>
			<dl class="r-skills">
				<div class="r-skill-row">
					<dt>Languages</dt>
					<dd>C#, TypeScript, JavaScript</dd>
				</div>
				<div class="r-skill-row">
					<dt>Frameworks &amp; Platforms</dt>
					<dd>.NET, SvelteKit, Node.js, VS Code Extension API</dd>
				</div>
				<div class="r-skill-row">
					<dt>AI &amp; APIs</dt>
					<dd>OpenAI, Claude, Gemini, LLamaSharp, GraphQL, Cloudflare Workers AI</dd>
				</div>
				<div class="r-skill-row">
					<dt>Tools &amp; Workflow</dt>
					<dd>Git, GitHub Actions, Azure Key Vault, CI/CD, PowerBI</dd>
				</div>
			</dl>
		</section>

		<!-- PROJECTS -->
		<section>
			<h2 class="r-section-title">Projects</h2>

			<div class="r-entry">
				<div class="r-entry-header">
					<span class="r-entry-title">LingoBridge</span>
					<span class="r-entry-sub">Solo creator · SvelteKit, TypeScript, Cloudflare Workers AI</span>
					<span class="r-entry-date">Apr 2026</span>
				</div>
				<div class="r-entry-urls">
					<a href="https://github.com/stangorkin/LingoBridge" target="_blank" rel="noopener noreferrer">github.com/stangorkin/LingoBridge</a>
					·
					<a href="https://lingobridges.com" target="_blank" rel="noopener noreferrer">lingobridges.com</a>
				</div>
				<ul>
					<li>Built a full-stack style translator web app with 5 AI-driven translation modes, custom user styles, and a three-tier model system</li>
					<li>Implemented typed API endpoint on Cloudflare Workers AI with request validation, structured error handling, and CORS support</li>
					<li>Built responsive UI with loading state, copy-to-clipboard, translation history sidebar, and keyboard shortcuts</li>
					<li>Configured Cloudflare Pages + Workers deployment with adapter-cloudflare and CI/CD via GitHub</li>
				</ul>
			</div>

			<div class="r-entry">
				<div class="r-entry-header">
					<span class="r-entry-title">autowiki</span>
					<span class="r-entry-sub">Solo creator · JavaScript, OpenAI GPT API, GraphQL, Azure Key Vault</span>
					<span class="r-entry-date">Aug 2023 – Feb 2024</span>
				</div>
				<div class="r-entry-urls">
					<a href="https://github.com/stangorkin/autowiki" target="_blank" rel="noopener noreferrer">github.com/stangorkin/autowiki</a>
				</div>
				<ul>
					<li>Built a CLI tool that uses GPT to automatically generate and update Azure DevOps wiki pages via GraphQL</li>
					<li>Integrated Azure Key Vault for secrets management with environment-based config for local vs. hosted deployment</li>
					<li>Handled GPT response parsing edge cases (malformed JSON, extra tokens); iteratively improved through 4 PR cycles</li>
				</ul>
			</div>

			<div class="r-entry">
				<div class="r-entry-header">
					<span class="r-entry-title">Coven</span>
					<span class="r-entry-sub">Contributor — 16 commits · C#, .NET, OpenAI, Claude, Gemini, LLamaSharp</span>
					<span class="r-entry-date">2025 – Present</span>
				</div>
				<div class="r-entry-urls">
					<a href="https://github.com/goldenwitch/coven" target="_blank" rel="noopener noreferrer">github.com/goldenwitch/coven</a>
				</div>
				<ul>
					<li>Multi-agent AI orchestration framework — contributed LLM provider integrations for Claude and Gemini</li>
					<li>Implemented local OpenAI leaf using LLamaSharp for on-device inference</li>
					<li>Built Claude leaf integration with full test coverage; addressed multiple rounds of PR review feedback</li>
				</ul>
			</div>

			<div class="r-entry">
				<div class="r-entry-header">
					<span class="r-entry-title">Bacchus</span>
					<span class="r-entry-sub">Contributor — 11 commits · TypeScript, Svelte, VS Code Extension API</span>
					<span class="r-entry-date">2025 – Present</span>
				</div>
				<div class="r-entry-urls">
					<a href="https://github.com/goldenwitch/bacchus" target="_blank" rel="noopener noreferrer">github.com/goldenwitch/bacchus</a>
				</div>
				<ul>
					<li>VS Code extension for interactive dependency graph visualization — added multi-provider LLM support (OpenAI, Gemini)</li>
					<li>Built inline task editing UI; set up CI/CD with VSIX versioning and prerelease publishing to GitHub</li>
				</ul>
			</div>
		</section>

		<!-- EXPERIENCE -->
		<section>
			<h2 class="r-section-title">Professional Experience</h2>

			<div class="r-entry">
				<div class="r-entry-header">
					<span class="r-entry-title">Foodmetrics Laboratories</span>
					<span class="r-entry-sub">Seattle, WA</span>
					<span class="r-entry-date">07/2020 – Present</span>
				</div>
				<div class="r-entry-role">Food Analysis Specialist</div>
				<ul>
					<li>Conducted microbiological analysis of food and bioswab samples, including pathogen screening and confirmation</li>
					<li>Performed chemical analysis and shelf-life studies on food products</li>
					<li>Used PowerBI to compare laboratory performance against previous quarters; performed root cause and SWOT analysis</li>
					<li>Maintained traceability logs, inventory, and purchase orders; verified laboratory equipment and growth media</li>
				</ul>
			</div>

			<div class="r-entry">
				<div class="r-entry-header">
					<span class="r-entry-title">Foodmetrics Laboratories</span>
					<span class="r-entry-sub">Seattle, WA</span>
					<span class="r-entry-date">11/2013 – 07/2020</span>
				</div>
				<div class="r-entry-role">Lab Technician</div>
				<ul>
					<li>Collected environmental samples at multiple food processing plants</li>
					<li>Performed sample and media preparation, plating, data trending and analysis</li>
					<li>Conducted allergen and histamine tests using ELISA protocol</li>
				</ul>
			</div>

			<div class="r-entry">
				<div class="r-entry-header">
					<span class="r-entry-title">Western United Fish Co.</span>
					<span class="r-entry-sub">Redmond, WA</span>
					<span class="r-entry-date">06/2016 – 08/2016</span>
				</div>
				<div class="r-entry-role">Quality Control Technician Intern</div>
				<ul>
					<li>Enforced employee adherence to SOP and GMP; assisted in employee training</li>
					<li>Created record-keeping forms; consolidated legacy HACCP documents into updated comprehensive documents</li>
				</ul>
			</div>
		</section>

		<!-- EDUCATION -->
		<section>
			<h2 class="r-section-title">Education &amp; Certifications</h2>
			<div class="r-entry">
				<div class="r-entry-header">
					<span class="r-entry-title">Bachelor of Science, Food Science</span>
					<span class="r-entry-sub">Washington State University, Pullman WA</span>
					<span class="r-entry-date">2019</span>
				</div>
			</div>
			<ul class="r-certs">
				<li>FSPCA Preventive Controls for Human Food — Certified</li>
				<li>Biomedix Rapid Testing Systems for Food and Environmental Microorganisms</li>
			</ul>
		</section>

	</div>
</div>

<style>
	.resume-page {
		min-height: 100vh;
	}

	.resume {
		max-width: 800px;
		margin: 0 auto;
		padding: 2.5rem 2rem 4rem;
		font-size: 0.95rem;
		line-height: 1.5;
	}

	/* HEADER */
	.r-header {
		text-align: center;
		margin-bottom: 1.5rem;
		border-bottom: 2px solid var(--color-accent);
		padding-bottom: 1rem;
	}

	.r-header h1 {
		font-size: 2rem;
		font-weight: 700;
		color: var(--color-heading);
		margin: 0 0 0.4rem;
	}

	.r-contact {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 0.25rem 0.5rem;
		font-size: 0.85rem;
		color: var(--color-muted);
	}

	.r-contact a {
		color: var(--color-accent);
		text-decoration: none;
	}

	.r-contact a:hover { text-decoration: underline; }

	.r-actions {
		margin-top: 0.75rem;
	}

	.btn-download {
		display: inline-block;
		padding: 0.4rem 1rem;
		background: var(--color-accent);
		color: var(--color-bg) !important;
		border-radius: 5px;
		font-size: 0.85rem;
		font-weight: 500;
		text-decoration: none !important;
		transition: background 0.2s;
	}

	.btn-download:hover { background: #7dd3fc; }

	/* SECTION HEADINGS */
	.r-section-title {
		font-size: 0.85rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.06em;
		color: var(--color-accent);
		border-bottom: 1.5px solid var(--color-border);
		padding-bottom: 0.2rem;
		margin: 1.5rem 0 0.75rem;
	}

	/* SKILLS */
	.r-skills { margin: 0; }

	.r-skill-row {
		display: flex;
		gap: 0.5rem;
		margin-bottom: 0.25rem;
	}

	.r-skill-row dt {
		font-weight: 600;
		min-width: 180px;
		color: var(--color-text);
	}

	.r-skill-row dd { margin: 0; color: var(--color-muted); }

	/* ENTRIES */
	.r-entry { margin-bottom: 1rem; }

	.r-entry-header {
		display: flex;
		flex-wrap: wrap;
		align-items: baseline;
		gap: 0.4rem;
		margin-bottom: 0.1rem;
	}

	.r-entry-title {
		font-weight: 700;
		font-size: 1rem;
		color: var(--color-heading);
	}

	.r-entry-sub {
		color: var(--color-muted);
		font-size: 0.88rem;
		flex: 1;
	}

	.r-entry-date {
		font-style: italic;
		color: var(--color-muted);
		font-size: 0.88rem;
		white-space: nowrap;
		margin-left: auto;
	}

	.r-entry-role {
		font-style: italic;
		color: var(--color-text);
		font-size: 0.9rem;
		margin-bottom: 0.25rem;
	}

	.r-entry-urls {
		font-size: 0.82rem;
		color: var(--color-muted);
		margin-bottom: 0.25rem;
	}

	.r-entry-urls a {
		color: var(--color-accent);
		text-decoration: none;
	}

	.r-entry-urls a:hover { text-decoration: underline; }

	ul {
		margin: 0.2rem 0 0 1.25rem;
		padding: 0;
	}

	li {
		margin-bottom: 0.2rem;
		font-size: 0.9rem;
		color: var(--color-muted);
	}

	.r-certs {
		margin-left: 1.25rem;
	}

	section > p {
		margin: 0;
		color: var(--color-muted);
	}

	/* Print — force white on paper */
	@media print {
		.no-print { display: none; }
		:global(nav), :global(footer) { display: none !important; }
		.resume { padding: 0; }
		.resume, li, .r-entry-sub, .r-entry-date, .r-entry-role, .r-entry-urls,
		.r-skill-row dd, section > p {
			color: #111 !important;
		}
		.r-header h1, .r-entry-title { color: #000 !important; }
		.r-section-title { color: #1f4980 !important; border-bottom-color: #1f4980 !important; }
		.r-contact a, .r-entry-urls a { color: #1f4980 !important; }
	}
</style>

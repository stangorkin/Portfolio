<script lang="ts">
	import type { Project } from '$lib/projects';

	let { project }: { project: Project } = $props();
</script>

<article class="project-card">
	<div class="project-header">
		<h3>{project.name}</h3>
		<span class="timeline">{project.timeline}</span>
	</div>
	<p class="role">{project.role}</p>
	<p class="description">{project.longDescription}</p>

	<div class="tech-tags">
		{#each project.tech as tech}
			<span class="tag">{tech}</span>
		{/each}
	</div>

	<ul class="highlights">
		{#each project.highlights as highlight}
			<li>{highlight}</li>
		{/each}
	</ul>

	{#if project.aiUsage}
		<div class="ai-usage">
			<strong>AI Usage:</strong>
			{project.aiUsage}
		</div>
	{/if}

	<div class="card-links">
		<a href={project.github} target="_blank" rel="noopener noreferrer" class="github-link">
			View on GitHub →
		</a>
		{#if project.live}
			<a href={project.live} target="_blank" rel="noopener noreferrer" class="live-link">
				Live site →
			</a>
		{/if}
	</div>
</article>

<style>
	.project-card {
		background: var(--color-surface);
		border: 1px solid var(--color-border);
		border-radius: 8px;
		padding: 1.5rem;
		transition: border-color 0.2s;
	}

	.project-card:hover {
		border-color: var(--color-accent);
	}

	.project-header {
		display: flex;
		justify-content: space-between;
		align-items: baseline;
		flex-wrap: wrap;
		gap: 0.5rem;
	}

	h3 {
		margin: 0;
		font-size: 1.25rem;
		color: var(--color-heading);
	}

	.timeline {
		font-size: 0.85rem;
		color: var(--color-muted);
	}

	.role {
		font-size: 0.9rem;
		color: var(--color-accent);
		margin: 0.25rem 0 0.75rem;
	}

	.description {
		line-height: 1.6;
		margin-bottom: 1rem;
	}

	.tech-tags {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		margin-bottom: 1rem;
	}

	.tag {
		background: var(--color-tag-bg);
		color: var(--color-tag-text);
		padding: 0.2rem 0.6rem;
		border-radius: 4px;
		font-size: 0.8rem;
		font-weight: 500;
	}

	.highlights {
		margin: 0 0 1rem;
		padding-left: 1.2rem;
		line-height: 1.7;
	}

	.highlights li {
		margin-bottom: 0.25rem;
	}

	.ai-usage {
		background: var(--color-ai-bg);
		border-left: 3px solid var(--color-accent);
		padding: 0.75rem 1rem;
		border-radius: 0 4px 4px 0;
		font-size: 0.9rem;
		line-height: 1.5;
		margin-bottom: 1rem;
	}

	.card-links {
		display: flex;
		gap: 1rem;
		align-items: center;
	}

	.github-link,
	.live-link {
		display: inline-block;
		text-decoration: none;
		font-weight: 500;
		font-size: 0.9rem;
	}

	.github-link {
		color: var(--color-accent);
	}

	.live-link {
		color: var(--color-success);
	}

	.github-link:hover,
	.live-link:hover {
		text-decoration: underline;
	}
</style>

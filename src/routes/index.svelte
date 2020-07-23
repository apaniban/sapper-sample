<script context="module">
	export function preload({ params }) {
		return this.fetch('index.json')
      .then(r => r.json())
      .then(shops => ({ shops }));
	}
</script>

<script>
	export let shops;
</script>

<style>
	ul {
		margin: 0 0 1em 0;
		line-height: 1.5;
	}
</style>

<svelte:head>
	<title>List of shops</title>
</svelte:head>

<h1>All shops</h1>

<ul>
	{#each shops as shop}
		<li><a rel='prefetch' href='{shop.id}'>{shop.name}</a></li>
	{/each}
</ul>

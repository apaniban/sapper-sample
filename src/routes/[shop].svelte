<script context="module">
	export function preload({ params, query }) {
    return this.fetch(`${params.shop}.json`)
      .then(r => r.json())
      .then(shop => ({ shop }))
  };
</script>

<script>
	export let shop;
</script>

<style>
  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

	h2 {
		text-align: center;
		margin: 0 auto;
	}

  p {
    text-align: center;
  }

	@media (min-width: 480px) {
		h2 {
			font-size: 2em;
		}
	}
</style>

<svelte:head>
	<title>{shop.name} Check in</title>
</svelte:head>

<h2>Welcome to Woolworths {shop.name}</h2>

<section>
  <p>
    To keep everyone safe and to notify if you have been in contact with a positive COVID-19 case while
    shopping enter in your details below
  </p>

  <input placeholder="firstName" />
  <input placeholder="lastName" />
  <input placeholder="phone" />

  <p>Your details will not be used for any other purposes</p>

  <button type="submit">Submit</button>
</section>

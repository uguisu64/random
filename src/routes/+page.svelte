<script>
    import { generators } from '$lib/random/generators.js'
    import Visible from './Visible.svelte'

    const count = 10000

    let generatorId = $state(0)
    let seed = $state(0)
</script>

<h1>Entropy Machine</h1>
<p>Random Generator Visualization</p>

<select bind:value={generatorId}>
    {#each generators as generator, i}
        <option value={i}>{generator.name}</option>
    {/each}
</select>

{#if generators[generatorId].seedable}
    <input type="text" bind:value={seed} placeholder="Enter seed" />
{/if}

{#if generators[generatorId].seedable && seed}
    <Visible samples={generators[generatorId].generate(seed, count)} />
{/if}

{#if !generators[generatorId].seedable}
    <Visible samples={generators[generatorId].generate(count)} />
{/if}

<style>
    :global(body) {
  margin: 0;
  background: #0d1117;
  color: #e6edf3;

  font-family:
    Inter,
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    sans-serif;
}

select,
input {
    min-width: 160px;

    padding: 8px 10px;

    background: #0d1117;
    color: #e6edf3;

    border: 1px solid #30363d;
    border-radius: 6px;

    font-size: 1rem;
}
</style>
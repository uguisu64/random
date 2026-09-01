<script>
    import Histogram from './Histogram.svelte'
    import Scatter2d from './Scatter2d.svelte'
    import Scatter3d from './Scatter3d.svelte'
    import BitMap from './BitMap.svelte'

    let { samples } = $props()
    let selectedVisualization = $state('histogram')
    let visibleTable = $state({
        histogram: { component: Histogram },
        scatter2d: { component: Scatter2d },
        scatter3d: { component: Scatter3d },
        bitmap: { component: BitMap }
    })
</script>

{#if samples.length > 0}
    <select bind:value={selectedVisualization}>
        {#each Object.keys(visibleTable) as key}
            <option value={key}>{key}</option>
        {/each}
    </select>
    
    {@const SelectedComponent = visibleTable[selectedVisualization]?.component}
    <main class="visualization">
        {#if SelectedComponent}
            <SelectedComponent {samples} />
        {:else}
            <p>Selected visualization not found.</p>
        {/if}
    </main>
{:else}
    <p>No samples to display.</p>
{/if}

<style>
    select{
        min-width: 160px;

        padding: 8px 10px;

        background: #0d1117;
        color: #e6edf3;

        border: 1px solid #30363d;
        border-radius: 6px;

        font-size: 1rem;
    }

    .visualization {
        margin-top: 16px;

        min-height: 560px;

        display: flex;
        align-items: center;
        justify-content: center;

        background: #161b22;

        border: 1px solid #30363d;
        border-radius: 8px;

        overflow: hidden;
    }
</style>
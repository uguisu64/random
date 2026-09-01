<script>
    import { plotlyAction } from '$lib/plotly-action.js'
    
    let { samples } = $props();
</script>

<div use:plotlyAction={{ data: [{ x: samples.slice(0, -2), y: samples.slice(1, -1), z: samples.slice(2), type: 'scatter3d', mode: 'markers' }] }}></div>
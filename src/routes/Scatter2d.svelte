<script>
    import { plotlyAction } from '$lib/plotly-action.js'
    
    let { samples } = $props()
</script>

<div use:plotlyAction={{ data: [{ x: samples.slice(0, -1), y: samples.slice(1), type: 'scatter', mode: 'markers' }] }}></div>
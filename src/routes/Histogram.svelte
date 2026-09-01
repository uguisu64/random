<script>
    import { plotlyAction } from '$lib/plotly-action.js'
    
    let { samples } = $props();
</script>

<div use:plotlyAction={{ data: [{ x: samples, type: 'histogram' }] }}></div>
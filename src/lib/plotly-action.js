export function plotlyAction(node, config) {
    let Plotly

    import('plotly.js-dist-min').then((module) => {
        Plotly = module.default
        Plotly.newPlot(node, config)
    })

    return {
        update(newConfig) {
            if (Plotly) {
                Plotly.react(node, newConfig)
            }
        },
        destroy() {
            if (Plotly) {
                Plotly.purge(node)
            }
        }
    }
}
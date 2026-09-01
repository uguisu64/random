<script>
    let { samples } = $props()

    let canvasNode

    const width = 256
    const height = 256
    const requiredSamples = width * height / 32
    const requiredBits = width * height

    function sampleToUint32(value) {
        return Math.floor(value * 2 ** 32) >>> 0;
    }

    $effect(() => {
        if (!canvasNode || samples.length === 0) return;

        const ctx = canvasNode.getContext('2d');
        const image = ctx.createImageData(256, 256);

        let pixelIndex = 0;

        for (
            let sampleIndex = 0;
            sampleIndex < Math.min(samples.length, requiredSamples);
            sampleIndex++
        ) {
            const value = sampleToUint32(samples[sampleIndex]);

            for (let bitIndex = 31; bitIndex >= 0; bitIndex--) {
                if (pixelIndex >= requiredBits) break;

                const bit = (value >>> bitIndex) & 1;

                const offset = pixelIndex * 4;

                const color = bit ? 255 : 0;

                image.data[offset] = color;       // R
                image.data[offset + 1] = color;   // G
                image.data[offset + 2] = color;   // B
                image.data[offset + 3] = 255;     // A

                pixelIndex++;
            }
        }

        ctx.putImageData(image, 0, 0);
    })
</script>

<canvas bind:this={canvasNode} width="256" height="256"></canvas>

<style>
    canvas {
        max-width: min(90%, 600px);
        height: auto;

        image-rendering: pixelated;

        border: 1px solid #30363d;
        }
</style>
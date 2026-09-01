export function generateMiddleSquareRandom(seed, count) {
    let x = seed
    const result = []

    for (let i = 0; i < count; i++) {
        const squared = String(x * x).padStart(8, '0')

        x = Number(squared.slice(2, 6))

        result.push(x / 10000)
    }

    return result
}
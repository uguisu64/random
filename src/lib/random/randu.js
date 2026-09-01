export function generateRanduRandom(seed, count) {
    const m = 2n ** 31n
    let x = BigInt(seed)
    
    const result = []

    for (let i = 0; i < count; i++) {
        x = (65539n * x) % m
        result.push(Number(x) / 2 ** 31)
    }

    return result
}
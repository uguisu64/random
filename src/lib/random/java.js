function javaRandom(seed) {
    const multiplier = 0x5DEECE66Dn
    const addend = 0xBn
    const mask = (1n << 48n) - 1n

    let state = (BigInt(seed) ^ multiplier) & mask

    function next(bits) {
        state = (state * multiplier + addend) & mask
        return Number(state >> (48n - BigInt(bits)))
    }

    function nextDouble() {
        const a = next(26)
        const b = next(27)

        return (a * 2 ** 27 + b) / 2 ** 53
    }

    return {
        nextDouble
    }
}

export function generateJavaRandom(seed, count) {
    const rng = javaRandom(seed)
    return Array.from({ length: count }, () => rng.nextDouble())
}
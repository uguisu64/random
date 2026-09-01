export function generateMathRandom(count) {
    return Array.from({ length: count }, () => Math.random())
}
export function generateCryptoRandom(count) {
    const array = new Uint32Array(count)
    crypto.getRandomValues(array)
    return Array.from(array, (num) => num / 0xffffffff)
}
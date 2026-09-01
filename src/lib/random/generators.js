import { generateMathRandom } from './math.js'
import { generateCryptoRandom } from './crypto.js'
import { generateMiddleSquareRandom } from './middleSquare.js'
import { generateRanduRandom } from './randu.js'
import { generateJavaRandom } from './java.js'

export const generators = [
    {
        id: 'math',
        name: 'JavaScript Math.random()',
        seedable: false,
        generate: generateMathRandom,
    },
    {
        id: 'crypto',
        name: 'Web Crypto',
        seedable: false,
        generate: generateCryptoRandom,
    },
    {
        id: 'middleSquare',
        name: 'Middle Square Method',
        seedable: true,
        generate: generateMiddleSquareRandom,
    },
    {
        id: 'randu',
        name: 'RANDU',
        seedable: true,
        generate: generateRanduRandom,
    },
    {
        id: 'java',
        name: 'Java Random',
        seedable: true,
        generate: generateJavaRandom,
    }
]
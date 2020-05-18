import { Calculator } from './src/Calculator.js'
import { Fibonacci } from './src/Fibonacci.js'
import { Multiplier } from './src/Multiplier.js'
import { ArrayMultiply } from './src/ArrayMultiply.js'
import { RenderResults } from './src/RenderResults.js'

window.onload = () => {
    const Program = () => {
        Calculator()
        Fibonacci()
        Multiplier()
        ArrayMultiply()

        RenderResults(
            [
                {
                    name : "bolo",
                    content : "sexo"
                },
                {
                    name : "bolinho",
                    content : "cocaina"
                },
                {
                    name : "bolão",
                    content : "e"
                },
                {
                    name : "bolonha",
                    content : "assassinato"
                }
            ]
        );
    }

    Program()
}
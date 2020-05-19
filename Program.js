import { Calculator } from './src/Calculator.js'
import { Fibonacci } from './src/Fibonacci.js'
import { Multiplier } from './src/Multiplier.js'
import { ArrayMultiply } from './src/ArrayMultiply.js'

window.onload = () => {
    const Program = () => {
        PrintResults(Calculator())
        PrintResults(Fibonacci())
        Multiplier()
        ArrayMultiply()

    }

    const PrintResults = Arr => {
        var str = ""
        Arr.map((item, i) => {
            str = str + `\n Item: ${i + 1} Resultado: ${item}`
        })
    
        console.log(str)
    }

    Program()
}
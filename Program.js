import { Calculator } from './src/Calculator.js'
import { Fibonacci } from './src/Fibonacci.js'
import { Multiplier } from './src/Multiplier.js'
import { ArrayMultiply } from './src/ArrayMultiply.js'

window.onload = () => {
    const Program = () => {
        PrintResultsFromArray("1","Item",Calculator())
        PrintResultsFromArray("2","Item",Fibonacci())
        PrintResults(Multiplier())
        ArrayMultiply()

    }

    const PrintResultsFromArray = (Index,Item,Arr) => {
        var str = ""
        Arr.map((item, i) => {
            str = str + `\n ${Item}: ${i + 1} Resultado: ${item}`
        })
        Exercise(Index)
        console.log(str,"\n")
    }

    const PrintResults = (Index,Item,Val) => {
        var str = `\n ${Item}: ${1} Resultado: ${Val}`
        Exercise(Index)
        console.log(str)
    }

    const Exercise = Index => {
        console.log(`Exercício ${Index}:`)

    }

    Program()
}
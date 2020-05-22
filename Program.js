import { Calculator } from './src/Calculator.js'
import { Fibonacci } from './src/Fibonacci.js'
import { Multiplier } from './src/Multiplier.js'
import { ArraySoum } from './src/ArraySoum.js'
import { GetPairs } from './src/GetPairs.js'

window.onload = () => {
    const Program = () => {
        PrintResultsFromArray("1","Item",Calculator())
        PrintResultsFromArray("2","Item",Fibonacci())
        PrintResultsFromArray("3", "Posição", Multiplier())
        PrintResultsFromArray("4", "Posição",GetPairs())
        PrintResults("5", "Item", ArraySoum())

    }

    Program()
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
    var str = `\nResultado: ${Val}`
    Exercise(Index)
    console.log(str)
}

const Exercise = Index => {
    console.log(`Exercício ${Index}:`)

}
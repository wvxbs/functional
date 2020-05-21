var SequenceArr = []

export const Fibonacci = () => {
    const Ops = [5, 10, 20, 50]

    return OperationArray(Ops)

}

const OperationArray = Ops => { 
    var First = 1, Second = 0,Temp
    var resultsArray = []

    Ops.map(item => {
        SequenceArr = []
        Sequence(First,Second,Temp,item)
        resultsArray.push(`${SequenceArr[item -1]} Posição: ${item}`)
    })

    return resultsArray

}

const Sequence = (First,Second,Temp,i) => {
    if (i > 0){
        Temp = First
        First = First + Second
        Second = Temp
        SequenceArr.push(Second)
        i--

        Sequence(First ,Second,Temp,i)
    }
    
}
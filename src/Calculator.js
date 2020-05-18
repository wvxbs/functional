export const Calculator = () => {
    console.log("foiii")

    var op = 
    [
        {
            first: 3854,
            second : 6523
        },
        {
            first: 2856,
            second : 438
        },
        {
            first: 39564,
            second : 2756
        },
        {
            first: 1209127,
            second : 539
        }
    ]

    return Calculate(op);   

}

const Calculate = op =>{

    op.map((op, i) => {
        OperationArray(op.first, op.second)
    })
}

const OperationArray = (i) =>{
    const Ops = []

    Ops.push(Soum())
    Ops.push(Subtract())
    Ops.push(Multiply())
    Ops.push(Divide())

    return Ops[i]
}

const Soum = () =>{
    var Result = 0

    return Result
}

const Subtract = () =>{
    var Result = 0

    return Result
}

const Multiply = () =>{
    var Result = 0

    return Result
}

const Divide = () =>{
    var Result = 0

    return Result
}

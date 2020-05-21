export const Calculator = () => {
    const Ops = [
        {
            first : 3854,
            second : 6523,
        },
        {
            first : 2856,
            second : 438,
        },
        {
            first : 39564,
            second : 2756,
        },
        {
            first : 1209127,
            second : 593,
        },      
    ]

    return OperationArray(Ops)
}

const OperationArray = Ops =>{
    var Results =[]

    Results.push(Soum(Ops[0].first, Ops[0].second))
    Results.push(Subtract(Ops[1].first, Ops[1].second)  )
    Results.push(Multiply(Ops[2].first, Ops[2].second))
    Results.push(Divide(Ops[3].first, Ops[3].second))

    return Results
}

const Soum = (first, second) =>{
    var Result = first + second

    return Result
}

const Subtract = (first, second) =>{
    var Result = first - second

    return Result
}

const Multiply = (first, second) =>{
    var Result =  first * second

    return Result
}

const Divide = (first, second) =>{
    var Result = first / second

    return Result
}

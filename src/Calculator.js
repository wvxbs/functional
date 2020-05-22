export const Calculator = () => {
    const Ops = [
        {
            First : 3854,
            Second : 6523
        },
        {
            First : 2856,
            Second : 438
        },
        {
            First : 39564,
            Second : 2756
        },
        {
            First : 1209127,
            Second : 593
        }
    ]

    return OperationArray(Ops)
}

const OperationArray = Ops =>{
    var Results =[]

    Results.push(Soum(Ops[0].First, Ops[0].Second))
    Results.push(Subtract(Ops[1].First, Ops[1].Second))
    Results.push(Multiply(Ops[2].First, Ops[2].Second))
    Results.push(Divide(Ops[3].First, Ops[3].Second))

    return Results
}


const Soum = (First, Second) =>{
    var Result = First + Second

    return Result
}

const Subtract = (First, Second) =>{
    var Result = First - Second

    return Result
}

const Multiply = (First, Second) =>{
    var Result =  First * Second

    return Result
}

const Divide = (First, Second) =>{
    var Result = First / Second

    return Result
}

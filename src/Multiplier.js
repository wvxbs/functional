var MultiplyArray = []

export const Multiplier = () => {
    return OperationArray([181, 82, 192, 104, 65, 75, 57, 156, 92, 69, 147, 142, 184, 134, 155])

} 

export const Multiplier2 = arr => {
    return OperationArray(arr)

} 

const OperationArray = Ops => { 
    Multiply(Ops, 0)
    return MultiplyArray

}

const Multiply = (item, i) => {
    if (i < 15){
        var temp = item[i] * item[i]
        MultiplyArray.push(temp)
        i++

        Multiply(item, i)
    }
    
}
var ImparArray = []

export const GetPairs = () => {
    return OperationArray([181, 82, 192, 104, 65, 75, 57, 156, 92, 69, 147, 142, 184, 134, 155])

} 

const OperationArray = Ops => { 
    Multiply(Ops, 0)
    return ImparArray

}

const Multiply = (item, i) => {
    if (i < 15){
        if(item[i] % 2 == 1){
            ImparArray.push(item[i])
        }
        i++

        Multiply(item, i)
    }
    
}
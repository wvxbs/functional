var Soum

export const ArraySoum = () => {
    return OperationArray([181, 82, 192, 104, 65, 75, 57, 156, 92, 69, 147, 142, 184, 134, 155])

} 

export const ArraySoum2 = () => {
    return FirstOrderSoumArr([181, 82, 192, 104, 65, 75, 57, 156, 92, 69, 147, 142, 184, 134, 155])

}

const FirstOrderSoumArr = Ops => {
    var Temp = 0

    Ops.map(item => {
        Temp = Temp + item
    })

    return Temp
}

const OperationArray = Ops => { 
    SoumArr(Ops, 0,0)
    return Soum

}

const SoumArr = (Item, Temp,i) => {
    if (i < Item.lenght){
        Temp = Temp + Item[i]
        i++

        SoumArr(Item,Temp,i)
    } else

    Soum = Temp
    
}
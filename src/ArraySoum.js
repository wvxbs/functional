var Soum

export const ArraySoum = () => {
    return OperationArray([181, 82, 192, 104, 65, 75, 57, 156, 92, 69, 147, 142, 184, 134, 155])

} 

export const ArraySoum2 = arr => {
    return OperationArray(arr)

}

const OperationArray = Ops => { 
    SoumArr(Ops, 0,0)
    return Soum

}

const SoumArr = (Item, Temp,i) => {
    if (i < 15){
        Temp = Temp + Item[i]
        i++

        SoumArr(Item,Temp,i)
    } else

    Soum = Temp
    
}
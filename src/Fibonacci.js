var SequenceArr = []
var i = 0

export const Fibonacci = () => {
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

const OperationArray = Ops => { 
    var num = 20
    var a = 1, b = 0, temp

    Sequence(a,b,temp,num)

    return SequenceArr

}

const Sequence = (a,b,temp,num) => {
    if (num >= 0){
      temp = a
      a = a + b
      b = temp
      SequenceArr.push(b)
      num--

      Sequence(a,b,temp,num)
    }
    
}
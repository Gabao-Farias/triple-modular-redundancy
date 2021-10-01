const average = (numberArr: number[]) : { closestMinimum: number, closestMaximum: number, average: number } => {
    var average = numberArr.length > 0 ? numberArr.reduce((curr, total) => curr + total) / numberArr.length : 0
    var closestMinimum: number = 0
    var closestMaximum: number = 0
    numberArr.forEach(output => {
        if (closestMinimum == null || (output > closestMinimum && output <= average))
            closestMinimum = output
        
        if (output >= average && closestMaximum == null)
            closestMaximum = output
    })
    return { closestMaximum: closestMinimum, closestMinimum: closestMinimum, average: average }
}

export default average;

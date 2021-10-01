export const average = (numberArr: number[]) : { closestMinimum: number, closestMaximum: number, average: number } => {
    var average = numberArr.length > 0 ? numberArr.reduce((curr, total) => curr + total) / numberArr.length : 0
    var closestMinimum: number = 0
    var closestMaximum: number = 0

    var alreadySelectedClosestMaximum: boolean = false
    numberArr.forEach(output => {
        if (output >= closestMinimum && output <= average)
            closestMinimum = output
        
        if (output >= average  && !alreadySelectedClosestMaximum){
            alreadySelectedClosestMaximum = true
            closestMaximum = output
        }
    })

    return { closestMaximum: closestMaximum, closestMinimum: closestMinimum, average: average };
}

export const averageVoting = (numberArr: number[]) => {
    var r = average(numberArr);
    return Math.abs(r.closestMinimum - r.average) < Math.abs(r.closestMaximum - r.average) ? r.closestMinimum : r.closestMaximum
};

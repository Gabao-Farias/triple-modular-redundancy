import { average } from ".";

const averageQuantityVoting = (numberArr: number[]) => {
  var averageVotingResult = average(numberArr);
  var closestMaximumCount = 0
  var closestMinimumCount = 0
  numberArr.forEach(item => {
      if (averageVotingResult.closestMaximum === item)
          closestMaximumCount++
      else if(averageVotingResult.closestMinimum === item)
          closestMinimumCount++
  })
  return closestMinimumCount >= closestMaximumCount ? averageVotingResult.closestMinimum : averageVotingResult.closestMaximum;
};

export default averageQuantityVoting;

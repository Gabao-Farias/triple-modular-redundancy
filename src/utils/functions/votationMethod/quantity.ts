const quantityVoting = (numberArr: number[]) : number => 
  numberArr.sort((a,b) => numberArr.filter(v => v===a).length - numberArr.filter(v => v===b).length).pop() || 0;

export default quantityVoting;
